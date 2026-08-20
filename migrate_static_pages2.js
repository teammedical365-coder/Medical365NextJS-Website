const fs = require('fs');
const path = require('path');

const staticPages = ['about', 'pricing', 'contact', 'book-demo'];

for (const page of staticPages) {
    const htmlFile = path.join('..', `${page}.html`);
    if (fs.existsSync(htmlFile)) {
        const content = fs.readFileSync(htmlFile, 'utf-8');
        
        // Extract main content between header and footer
        const mainMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/);
        
        if (mainMatch) {
            let mainContent = mainMatch[1];
            
            // Create dir
            const dir = path.join('src', 'app', page);
            fs.mkdirSync(dir, { recursive: true });
            
            // Write main.html
            fs.writeFileSync(path.join(dir, 'main.html'), mainContent);
            
            // Write page.tsx
            const funcName = page.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase()) + 'Page';
            const tsxContent = `
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function ${funcName}() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app/${page}/main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
`;
            fs.writeFileSync(path.join(dir, 'page.tsx'), tsxContent);
            console.log(`Migrated ${page}.html`);
        } else {
            console.log(`Could not find main section in ${page}.html`);
        }
    } else {
        console.log(`${page}.html does not exist`);
    }
}
