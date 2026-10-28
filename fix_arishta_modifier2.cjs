const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');
const oldCode = `                        else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;
                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;
const newCode = `                        else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;
                        else if (cond.type === 'arishta_dosha') modifierNote = \`Multiple afflictions detected (\${cond.powerMultiplier}x severity).\`;
                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;
content = content.replace(oldCode, newCode);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
