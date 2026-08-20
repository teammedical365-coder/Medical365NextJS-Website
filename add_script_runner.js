const fs = require('fs');
let layout = fs.readFileSync('src/app/layout.tsx', 'utf-8');
if (!layout.includes('ScriptRunner')) {
    layout = layout.replace("import Script from 'next/script';", "import Script from 'next/script';\nimport ScriptRunner from '../components/ScriptRunner';");
    layout = layout.replace('</body>', '  <ScriptRunner />\n      </body>');
    fs.writeFileSync('src/app/layout.tsx', layout);
    console.log('Added ScriptRunner');
}
