const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

// The replacement above failed because it didn't match perfectly. Let's do it manually.
const oldCode = `
            // Check explicit cond.cancelReason from matched conditions (like parivartan or vipreet)
            matchedConditions.forEach(cond => {
                if (cond.cancelReason) {
                    isCancelled = true;
                    modifierNote = cond.cancelReason;
                }
                if (cond.powerMultiplier && !cond.cancelReason) {
                    finalScore = finalScore * cond.powerMultiplier;
                    if (!modifierNote) modifierNote = \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\`;
                }
            });`;

const newCode = `
            // Check explicit cond.cancelReason from matched conditions (like parivartan or vipreet)
            matchedConditions.forEach(cond => {
                if (cond.cancelReason) {
                    isCancelled = true;
                    modifierNote = cond.cancelReason;
                }
                if (cond.powerMultiplier && !cond.cancelReason) {
                    finalScore = finalScore * cond.powerMultiplier;
                    if (!modifierNote) {
                        modifierNote = cond.type === 'vipreet_rajyoga' ? \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\` : \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;
                    }
                }
            });`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
