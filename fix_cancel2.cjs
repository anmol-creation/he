const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I also need to ensure that `cond.cancelReason` is caught by the logic at the bottom of `yoga-detector.js`
// Let's see what happens if I just run `req_test_parivartan.cjs`.
