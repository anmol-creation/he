const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// There are TWO places where `cond.powerMultiplier` is checked!
// Ah, one in the Vipreet logic itself, and one at the bottom.
// Wait, why did the output say "Strong Lagnesh boosts power"?
// Let's look for `Strong Lagnesh boosts power`.
