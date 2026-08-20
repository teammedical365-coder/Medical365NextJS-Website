const fs = require('fs');

if (fs.existsSync('../blogs.html')) {
    let content = fs.readFileSync('../blogs.html', 'utf-8');
    let mainContent = '';
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
    
    if (mainMatch) {
        mainContent = mainMatch[1];
    } else if (headerFooterMatch) {
        mainContent = headerFooterMatch[1];
    }
    
    if (mainContent) {
        mainContent = mainContent.replace(/href="((?!http)[^"]+)\.html"/g, 'href="/$1"');
        mainContent = mainContent.replace(/https:\/\/www\.medical365\.in\//g, '/');
        mainContent = mainContent.replace(/src="([^"]+\.(jpg|png|svg|webp))"/g, (match, p1) => {
            if (p1.startsWith('http') || p1.startsWith('/')) return match;
            return `src="/${p1}"`;
        });
        
        fs.writeFileSync(`src/app/blogs/main.html`, mainContent);
        
        const tsx = `import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Insights & Blogs | Medical365',
  description: 'Read the latest insights and blogs from Medical365.',
};

export default function BlogsPage() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
        fs.writeFileSync(`src/app/blogs/page.tsx`, tsx);
        console.log('Migrated blogs.html to src/app/blogs/page.tsx');
    }
}
