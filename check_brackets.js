const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf-8');
let openCount = 0;
let lastOpenLine = -1;
const lines = css.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') {
            openCount++;
            lastOpenLine = i + 1;
        } else if (line[j] === '}') {
            openCount--;
            if (openCount < 0) {
                console.log(`Unbalanced closing bracket at line ${i + 1}`);
                process.exit(1);
            }
        }
    }
}

if (openCount > 0) {
    console.log(`Unclosed block. Open count: ${openCount}. Last open bracket at line ${lastOpenLine}`);
} else {
    console.log('Brackets are balanced.');
}
