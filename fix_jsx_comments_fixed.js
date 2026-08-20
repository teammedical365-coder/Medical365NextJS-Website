const fs = require('fs');
let pageTsx = fs.readFileSync('src/app/[slug]/page.tsx', 'utf-8');
pageTsx = pageTsx.replace(/<!--([\s\S]*?)-->/g, '{/**/}');
fs.writeFileSync('src/app/[slug]/page.tsx', pageTsx);
