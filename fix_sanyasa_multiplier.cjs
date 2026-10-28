const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const regex = /else if \(cond\.type === 'sanyasa_yoga'\) modifierNote = \`Massive planetary cluster \(\\\${cond.powerMultiplier \+ 3} planets involved\)\.\`;/;
// In javascript, if cond.powerMultiplier is undefined, cond.powerMultiplier + 3 becomes NaN.
// Only apply it if powerMultiplier is defined.
// In TEST 1, cond.powerMultiplier was 1 (4-3). But it didn't print the modifierNote.
// Why didn't it print?
// Ah, `if (!modifierNote && cond.powerMultiplier > 1)`
// For 4 planets, `powerMultiplier` is 1. `1 > 1` is false.
// If I use 5 planets, it will be 2. Let's test 5 planets.
