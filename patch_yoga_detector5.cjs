const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

const search = `            let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];

            let mahapurushLabels = [];`;
content = content.replace(search, `            let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];`);
fs.writeFileSync(file, content);
