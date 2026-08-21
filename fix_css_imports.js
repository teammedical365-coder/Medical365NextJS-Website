const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');

// Find all @import rules
const importRegex = /@import url\('[^']+'\);/g;
let imports = [];
let match;
while ((match = importRegex.exec(css)) !== null) {
    imports.push(match[0]);
}

// Remove all @import rules from their current locations
css = css.replace(importRegex, '');

// Prepend all @import rules to the top of the file
if (imports.length > 0) {
    // Unique imports
    imports = [...new Set(imports)];
    css = imports.join('\n') + '\n\n' + css;
}

fs.writeFileSync('src/app/globals.css', css);
console.log('Fixed @import rules in globals.css');
