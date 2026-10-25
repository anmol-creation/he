const fs = require('fs');
const file = 'kundali-engine/app.js';
let content = fs.readFileSync(file, 'utf8');
console.log(content.includes('condHTML'));
