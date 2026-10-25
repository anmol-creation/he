const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// The initialization of mahapurushLabels might be out of scope for detectedYogas.push
// Let's check where it is declared.
