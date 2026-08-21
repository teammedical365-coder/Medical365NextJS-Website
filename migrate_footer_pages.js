const fs = require('fs');
const path = require('path');

const pages = [
    { file: 'about.html', slug: 'about' },
    { file: 'contact.html', slug: 'contact' },
    { file: 'privacy-policy.html', slug: 'privacy-policy' },
    { file: 'terms-of-service.html', slug: 'terms-of-service' },
    { file: 'book-demo.html', slug: 'book-demo' }
];

let globalCss = fs.readFileSync('src/app/globals.css', 'utf-8');

for (const page of pages) {
    const sourcePath = path.join('..', page.file);
    if (!fs.existsSync(sourcePath)) {
        console.log(`Skipping ${page.file} - not found`);
        continue;
    }
    
    let content = fs.readFileSync(sourcePath, 'utf-8');
    
    // Extract CSS
    const styleMatches = content.match(/<style>([\s\S]*?)<\/style>/g);
    if (styleMatches) {
        for (const sm of styleMatches) {
            const rawCss = sm.replace(/<\/?style>/g, '');
            // Only append if it looks unique and not just the standard mega-menu css
            if (rawCss.includes('.about-hero') || rawCss.includes('.contact-') || rawCss.includes('.legal-') || rawCss.includes('.demo-')) {
                globalCss += `\n/* Extracted from ${page.file} */\n` + rawCss;
            } else if (!rawCss.includes('.mega-menu')) {
                globalCss += `\n/* Extracted from ${page.file} */\n` + rawCss;
            }
        }
    }
    
    // Extract Body
    const bodyMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
    if (bodyMatch) {
        let mainContent = bodyMatch[1];
        
        // Fix relative links
        mainContent = mainContent.replace(/href="((?!http|#|\/)[^"]+)\.html"/g, 'href="/$1"');
        mainContent = mainContent.replace(/href="((?!http|#|\/)[^"]+)"/g, (match, p1) => {
            return `href="/${p1}"`;
        });
        mainContent = mainContent.replace(/https:\/\/www\.medical365\.in\//g, '/');
        
        // Fix image paths
        mainContent = mainContent.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
            if (p1.startsWith('http') || p1.startsWith('/')) return match;
            return `src="/${p1}"`;
        });
        
        // Create directory and files
        const dir = path.join('src/app', page.slug);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(path.join(dir, 'main.html'), mainContent);
        
        const tsx = `import fs from 'fs';
import path from 'path';

export const metadata = {
  title: '${page.slug.replace('-', ' ')} | Medical365',
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/${page.slug}/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
        fs.writeFileSync(path.join(dir, 'page.tsx'), tsx);
        console.log(`Migrated ${page.file} -> /${page.slug}`);
    } else {
        console.log(`Could not find header/footer boundaries in ${page.file}`);
    }
}

fs.writeFileSync('src/app/globals.css', globalCss);
console.log('Appended styles to globals.css');
