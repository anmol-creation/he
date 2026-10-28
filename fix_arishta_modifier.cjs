const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const regex = /else modifierNote = \`Multi-planet amplification \(\\\${cond.powerMultiplier}x power\)\.\`;/;
const replacement = `else if (cond.type === 'arishta_dosha') modifierNote = \`Multiple afflictions detected (\${cond.powerMultiplier}x severity).\`;\n                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;

content = content.replace(regex, replacement);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
