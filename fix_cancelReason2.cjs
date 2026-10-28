const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// The yoga detector pushes yogas if `matchedCombinationsCount > 0` or if `rule.combinationsMatched`... wait.
// Let's look at how cancellations are pushed in standard loops in yoga-detector.js.
