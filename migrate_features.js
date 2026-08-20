const fs = require('fs');

const header = fs.readFileSync('src/components/HeaderRaw.html', 'utf-8');
const links = [...header.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
const uniqueLinks = [...new Set(links)].filter(l => l !== '/' && !l.startsWith('http') && !l.startsWith('#') && l !== 'about' && l !== 'pricing' && l !== 'contact' && l !== 'book-demo' && l !== 'blogs');

// Handle trailing /book-demo.html
const cleanLinks = uniqueLinks.map(l => l.replace(/^\//, '').replace(/\.html$/, ''));

for (const page of cleanLinks) {
    if (fs.existsSync(`../${page}.html`)) {
        const content = fs.readFileSync(`../${page}.html`, 'utf-8');
        
        let mainContent = '';
        const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
        
        if (mainMatch) {
            mainContent = mainMatch[1];
        } else if (headerFooterMatch) {
            mainContent = headerFooterMatch[1];
        } else {
            // fallback, extract body minus scripts
            const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
            if (bodyMatch) {
                mainContent = bodyMatch[1]
                    .replace(/<header[\s\S]*?<\/header>/i, '')
                    .replace(/<footer[\s\S]*?<\/footer>/i, '')
                    .replace(/<script[\s\S]*?<\/script>/gi, '');
            }
        }
        
        if (mainContent) {
            // Strip .html links inside the content
            mainContent = mainContent.replace(/href="((?!http)[^"]+)\.html"/g, 'href="/$1"');
            mainContent = mainContent.replace(/https:\/\/www\.medical365\.in\//g, '/');
            mainContent = mainContent.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
                if (p1.startsWith('http') || p1.startsWith('/')) return match;
                return `src="/${p1}"`;
            });
            
            // Create directory and files
            fs.mkdirSync(`src/app/${page}`, { recursive: true });
            fs.writeFileSync(`src/app/${page}/main.html`, mainContent);
            
            // Extract Meta Data for SEO
            let metaTitle = 'Medical365';
            let metaDesc = '';
            const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
            const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/i);
            if (titleMatch) metaTitle = titleMatch[1];
            if (descMatch) metaDesc = descMatch[1];
            
            const tsx = `import fs from 'fs';
import path from 'path';

export const metadata = {
  title: \`${metaTitle.replace(/`/g, "\\`")}\`,
  description: \`${metaDesc.replace(/`/g, "\\`")}\`,
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/${page}/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
            fs.writeFileSync(`src/app/${page}/page.tsx`, tsx);
        }
    }
}
console.log(`Migrated ${cleanLinks.length} static feature pages.`);

// Copy global-scripts.js
if (fs.existsSync('../global-scripts.js')) {
    fs.copyFileSync('../global-scripts.js', 'public/global-scripts.js');
}

// Modify layout.tsx to include Script
let layoutTsx = fs.readFileSync('src/app/layout.tsx', 'utf-8');
if (!layoutTsx.includes('next/script')) {
    layoutTsx = layoutTsx.replace("import './globals.css';", "import './globals.css';\nimport Script from 'next/script';");
    layoutTsx = layoutTsx.replace('</body>', '  <Script src="/global-scripts.js" strategy="lazyOnload" />\n      </body>');
    fs.writeFileSync('src/app/layout.tsx', layoutTsx);
}
console.log('Added global-scripts.js to layout.');

