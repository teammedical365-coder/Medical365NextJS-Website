const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');
const lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('/* "?"? solutions accordion "?"? */')) {
        console.log(`Start at line ${i}`);
    }
    if (lines[i].includes('/* Audit Hotfixes')) {
        console.log(`End at line ${i}`);
    }
}
