const fs = require('fs');

// Clean rajyogas.json
const rajyogasPath = 'kundali-engine/data/rules/rajyogas.json';
let rajyogas = JSON.parse(fs.readFileSync(rajyogasPath, 'utf8'));
rajyogas = rajyogas.filter(y => y.id !== 'budhaditya_yoga');
fs.writeFileSync(rajyogasPath, JSON.stringify(rajyogas, null, 2));

// Clean maha_kavach.json
const kavachPath = 'kundali-engine/data/rules/maha_kavach.json';
let kavach = JSON.parse(fs.readFileSync(kavachPath, 'utf8'));
kavach = kavach.filter(y => y.id !== 'ubhayachari_yoga');
fs.writeFileSync(kavachPath, JSON.stringify(kavach, null, 2));

console.log('Cleaned up old static Solar Yogas from rajyogas.json and maha_kavach.json');
