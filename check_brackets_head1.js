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
            if (stack.length > 0) {
                stack.pop();
            }
        }
    }
}

if (stack.length > 0) {
    console.log(`Unclosed brackets in HEAD~1 opened at lines: ${stack.join(', ')}`);
} else {
    console.log('HEAD~1 is balanced!');
}
