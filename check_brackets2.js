const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf-8');
const lines = css.split('\n');

let stack = [];
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') {
            stack.push(i + 1);
        } else if (lines[i][j] === '}') {
            if (stack.length > 0) {
                stack.pop();
            }
        }
    }
}

if (stack.length > 0) {
    console.log(`Unclosed brackets opened at lines: ${stack.join(', ')}`);
} else {
    console.log('Balanced!');
}
