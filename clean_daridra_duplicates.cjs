const fs = require('fs');

const doshasPath = 'kundali-engine/data/rules/doshas.json';
let doshas = JSON.parse(fs.readFileSync(doshasPath, 'utf8'));

// Filter out old daridra dosha
doshas = doshas.filter(d => d.id !== 'daridra_dosha');

fs.writeFileSync(doshasPath, JSON.stringify(doshas, null, 2));
console.log('Cleaned up old static Daridra Dosha from doshas.json');
