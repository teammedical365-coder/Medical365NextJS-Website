const fs = require('fs');
const path = require('path');

const staticPages = ['about', 'pricing', 'contact', 'book-demo'];

for (const page of staticPages) {
    const htmlFile = path.join('..', ${page}.html);
    if (fs.existsSync(htmlFile)) {
        const content = fs.readFileSync(htmlFile, 'utf-8');
        
        // Extract main content
        const mainMatch = content.match(/<\/header>([\s\S]*?)<footer[^>]*id="mega-footer"/);
        
        if (mainMatch) {
            let mainContent = mainMatch[1];
            
            // Create dir
            const dir = path.join('src', 'app', page);
            fs.mkdirSync(dir, { recursive: true });
            
            // Write main.html
            fs.writeFileSync(path.join(dir, 'main.html'), mainContent);
            
            // Write page.tsx
            const tsxContent = 
import React from 'react';
import fs from 'fs';
import path from 'path';

export default function Page() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'src/app//main.html'), 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
;
            fs.writeFileSync(path.join(dir, 'page.tsx'), tsxContent);
            console.log(Migrated .html);
        }
    }
}
