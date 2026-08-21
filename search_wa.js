const fs = require('fs');
const path = require('path');

function searchFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        if (content.includes('11:34')) {
            console.log(`FOUND IN: ${filePath}`);
        }
    } catch (e) {
        // ignore
    }
}

function walk(dir) {
    if (dir.includes('.next') || dir.includes('node_modules') || dir.includes('.git')) return;
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                walk(fullPath);
            } else {
                searchFile(fullPath);
            }
        }
    } catch(e) {}
}

walk('..');
console.log('Search finished');
