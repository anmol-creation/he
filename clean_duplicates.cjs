const fs = require('fs');

const rajyogasPath = 'kundali-engine/data/rules/rajyogas.json';
let rajyogas = JSON.parse(fs.readFileSync(rajyogasPath, 'utf8'));

// Filter out old harsh_vipareeta_rajyoga and vipreet_rajyoga_sarala/vimala
// We will rewrite them dynamically so we don't need these static entries.
rajyogas = rajyogas.filter(y =>
    !['harsha_vipareeta_rajyoga', 'vipreet_rajyoga_sarala', 'vipreet_rajyoga_vimala'].includes(y.id)
);

fs.writeFileSync(rajyogasPath, JSON.stringify(rajyogas, null, 2));
console.log('Removed duplicate static Vipreet Rajyogas from rajyogas.json');
