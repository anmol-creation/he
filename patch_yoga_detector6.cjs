const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// I seem to have broken the braces matching!
// Let me just restore the file and re-apply cleanly.
