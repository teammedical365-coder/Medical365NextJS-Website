const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace('.header-container { overflow: hidden !important; }', '.header-container { overflow: visible !important; }');
fs.writeFileSync('src/app/globals.css', css);
console.log('Fixed header container overflow');
