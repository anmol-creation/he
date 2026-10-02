const fs = require('fs');

function patchFile(filepath, searchRegex, replacementStr) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(searchRegex, replacementStr);
    fs.writeFileSync(filepath, content);
}

patchFile('kundali-engine/app.js', /await fetch\('\/api\/calculate'/g, "await fetch('http://localhost:3000/api/calculate'");
patchFile('kundali-engine/search.js', /await fetch\('\/api\/search'/g, "await fetch('http://localhost:3000/api/search'");
