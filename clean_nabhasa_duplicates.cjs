const fs = require('fs');
const filepath = 'kundali-engine/data/rules/nabhas_yogas.json';

// We will overwrite this file completely with a new unified dataset.
fs.unlinkSync(filepath);
console.log('Deleted old nabhas_yogas.json');
