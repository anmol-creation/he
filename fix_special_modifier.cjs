const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const regex = /else if \(cond\.type === 'sanyasa_yoga'\) modifierNote = \`Massive planetary cluster \(\\\${cond\.powerMultiplier \+ 3} planets involved\)\.\`;/;
const replacement = `else if (cond.type === 'sanyasa_yoga') modifierNote = \`Massive planetary cluster (\${cond.powerMultiplier + 3} planets involved).\`;
                        else if (cond.type === 'special_yoga') modifierNote = \`Exceptional planetary alignment (\${cond.powerMultiplier}x power).\`;`;

content = content.replace(regex, replacement);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
