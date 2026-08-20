const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace('@tailwind base;', '/* @tailwind base; disabled to prevent preflight reset */');
fs.writeFileSync('src/app/globals.css', css);
console.log('Disabled Tailwind base reset');
