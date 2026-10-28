const fs = require('fs');
const filepath = 'kundali-engine/data/rules/rajyogas.json';
let rajyogas = JSON.parse(fs.readFileSync(filepath, 'utf8'));

// Filter out old lunar yogas to be rewritten dynamically
rajyogas = rajyogas.filter(y =>
    !['amala_rajyoga', 'kemadruma_bhanga', 'gajakesari_yoga'].includes(y.id)
);

fs.writeFileSync(filepath, JSON.stringify(rajyogas, null, 2));

// Check doshas.json for Kemadruma
const doshasPath = 'kundali-engine/data/rules/doshas.json';
let doshas = JSON.parse(fs.readFileSync(doshasPath, 'utf8'));
doshas = doshas.filter(d => d.id !== 'kemadruma_dosha');
fs.writeFileSync(doshasPath, JSON.stringify(doshas, null, 2));

console.log('Cleaned up old static Lunar Yogas from rajyogas.json and doshas.json');
