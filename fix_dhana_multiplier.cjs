const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I'll make sure `cond.powerMultiplier` doesn't print "Multi-planet amplification (1x power)" if multiplier is exactly 1.
// In `yoga-detector.js`:
// `if (cond.powerMultiplier && !cond.cancelReason) {`

const regex = /if \(cond\.powerMultiplier && !cond\.cancelReason\) \{[\s\S]*?\}\s+\}\);/;
const replacement = `if (cond.powerMultiplier && !cond.cancelReason) {
                    finalScore = finalScore * cond.powerMultiplier;
                    if (!modifierNote && cond.powerMultiplier > 1) {
                        modifierNote = cond.type === 'vipreet_rajyoga' ? \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\` : \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;
                    }
                }
            });`;

content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
console.log('Fixed modifierNote logic.');
