const fs = require('fs');
let pageTsx = fs.readFileSync('medical365-next/src/app/[slug]/page.tsx', 'utf-8');

// Replace HTML comments with JSX comments
pageTsx = pageTsx.replace(/<!--([\s\S]*?)-->/g, '{/**/}');

fs.writeFileSync('medical365-next/src/app/[slug]/page.tsx', pageTsx);
