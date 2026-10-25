const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// I declared it twice probably, let's fix it by searching for the exact error and replacing one.
content = content.replace("            let mahapurushLabels = [];\n            let mahapurushLabels = [];", "            let mahapurushLabels = [];");
// OR it was declared outside and inside the block?
content = content.replace("            let isCancelled = false;\n            let modifierNote = null;\n            let mahapurushLabels = [];\n            let mahapurushLabels = [];", "            let isCancelled = false;\n            let modifierNote = null;\n            let mahapurushLabels = [];");
fs.writeFileSync(file, content);
