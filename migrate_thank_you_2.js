const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('../thank-you.html', 'utf-8');

const mainMatch = content.match(/<div class="bg-glow">([\s\S]*?)<\/main>/i);
if (mainMatch) {
    let mainContent = '<div class="bg-glow">' + mainMatch[1] + '</main>';
    
    const dir = path.join('src/app', 'thank-you');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(path.join(dir, 'main.html'), mainContent);
    
    const tsx = `import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Thank You | Medical365',
};

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), 'src/app/thank-you/main.html'), 'utf-8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), tsx);
    console.log('Migrated thank-you.html');
}
