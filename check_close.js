const fs = require('fs');
const { execSync } = require('child_process');
const css = execSync('git show HEAD~1:src/app/globals.css').toString();
const lines = css.split('\n');

let stack = [];
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') {
            stack.push(i + 1);
        } else if (lines[i][j] === '}') {
            const popped = stack.pop();
            if (popped === 1069) {
                console.log(`Line 1069 closes at line ${i + 1}`);
            }
        }
    }
}
