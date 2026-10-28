const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');
const regex = /if \(\!modifierNote && cond\.powerMultiplier > 1\) \{[\s\S]*?\}\s+\}\s+\}\);/;
const replacement = `if (!modifierNote && cond.powerMultiplier > 1) {
                        if (cond.type === 'vipreet_rajyoga') modifierNote = \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\`;
                        else if (cond.type === 'major_dosha') modifierNote = \`Multiple eclipses detected (\${cond.powerMultiplier}x severity).\`;
                        else if (cond.type === 'daridra_yoga') modifierNote = \`Lord is debilitated/combust (\${cond.powerMultiplier}x severity).\`;
                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;
                    }
                }
            });`;
content = content.replace(regex, replacement);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
