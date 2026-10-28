const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const oldBlock = `else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;
const newBlock = `else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;\n                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
