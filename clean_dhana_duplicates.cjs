const fs = require('fs');

const rajyogasPath = 'kundali-engine/data/rules/rajyogas.json';
let rajyogas = JSON.parse(fs.readFileSync(rajyogasPath, 'utf8'));
rajyogas = rajyogas.filter(y =>
    !['lakshmi_rajyoga', 'kendra_trikona_guru_shani', 'kendra_trikona_mangal', 'mahabhagya_yoga'].includes(y.id)
);
fs.writeFileSync(rajyogasPath, JSON.stringify(rajyogas, null, 2));

const wealthPath = 'kundali-engine/data/rules/wealth_yogas.json';
if (fs.existsSync(wealthPath)) {
    // Delete wealth_yogas.json as we are creating a unified dynamic Dhana scanner
    fs.unlinkSync(wealthPath);
    console.log('Deleted old static wealth_yogas.json');
}

console.log('Cleaned up old static Dhana/Bhagya Yogas from rajyogas.json');
