const fs = require('fs');

function patchFile(filepath, searchStr, replacementStr) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(searchStr, replacementStr);
    fs.writeFileSync(filepath, content);
}

patchFile('kundali-engine/app.js', "await fetch('/api/calculate'", "await fetch('http://localhost:3000/api/calculate'");
patchFile('kundali-engine/search.js', "await fetch('/api/search'", "await fetch('http://localhost:3000/api/search'");
