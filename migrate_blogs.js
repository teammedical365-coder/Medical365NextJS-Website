const fs = require('fs');
const path = require('path');

const blogsDir = path.join('..', 'blogs');
if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.html'));
    
    for (const file of files) {
        const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
        
        // Use a broader regex to catch main content (header to footer)
        // Some blogs might use <main> or <article>
        let mainContent = '';
        const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        const headerFooterMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/i);
        
        if (mainMatch) {
            mainContent = mainMatch[1];
        } else if (headerFooterMatch) {
            mainContent = headerFooterMatch[1];
        } else {
            console.log(`Could not extract content from ${file}`);
            continue;
        }
        
        const slug = file.replace('.html', '');
        const dir = path.join('src', 'app', 'blogs', slug);
        fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(path.join(dir, 'main.html'), mainContent);
        
        const funcName = slug.replace(/[-_]./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase()) + 'BlogPage';
        const tsxContent = `
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function ${funcName.replace(/[^a-zA-Z0-9]/g, '')}() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/blogs/${slug}/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
`;
        fs.writeFileSync(path.join(dir, 'page.tsx'), tsxContent);
        console.log(`Migrated blog ${file}`);
    }
}
