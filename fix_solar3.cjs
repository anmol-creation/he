const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const regex = /if \(\!modifierNote\) modifierNote = \`Strong Lagnesh boosts power \(\\\${cond\.powerMultiplier}x\)\.\`;/;
const replacement = `if (!modifierNote) modifierNote = cond.type === 'vipreet_rajyoga' ? \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\` : \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;
content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
