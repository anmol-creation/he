const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const oldRegex = /else modifierNote = \`Multi-planet amplification \(\\\${cond\.powerMultiplier}x power\)\.\`;/g;
content = content.replace(oldRegex, `else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;\n                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
