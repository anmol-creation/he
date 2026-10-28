const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');
// Ah! Strong Lagnesh check is ALSO applied!
// In my mock, Ascendant = 0 (Aries). Lagnesh is Mars.
// Mars is in House 2!
// Wait, House 2 is NOT in [1, 4, 5, 7, 9, 10] AND Mars dignity is 'Neutral'.
// Then why "Multi-planet amplification (2x power)" if cond.powerMultiplier = 3?
// Let's print `cond.powerMultiplier`.
