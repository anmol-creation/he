const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

// I put "Multi-planet amplification" as the fallback.
// Oh, the regex replace in `fix_special_modifier.cjs` failed because I used `cond.powerMultiplier + 3` instead of `cond.powerMultiplier \+ 3` in the regex?
// Let's just fix it by replacing the whole block.
const regex = /else modifierNote = \`Multi-planet amplification \(\\\${cond.powerMultiplier}x power\)\.\`;/;
const replacement = `else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;
                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;`;
content = content.replace(regex, replacement);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
