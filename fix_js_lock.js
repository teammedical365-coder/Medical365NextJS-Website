const fs = require('fs');
let script = fs.readFileSync('public/global-scripts.js', 'utf-8');
script = script.replace('if (window.__globalScriptsInitialized) return;', '// removed initialization lock for next.js');
fs.writeFileSync('public/global-scripts.js', script);
console.log('Removed lock');
