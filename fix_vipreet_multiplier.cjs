const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// The `cond.powerMultiplier` is set inside the condition. But the bottom logic multiplies `finalScore` by `matchedCombinationsCount`.
// Let's modify the bottom logic to also multiply by `cond.powerMultiplier` if it exists.

const regex = /let finalScore = baseScore \* matchedCombinationsCount; \/\/ Multiplier amplification/;
const replacement = `let finalScore = baseScore * matchedCombinationsCount; // Multiplier amplification

            // Check for specific condition power multipliers (like from Vipreet Rajyoga)
            matchedConditions.forEach(cond => {
                if (cond.powerMultiplier) {
                    finalScore = finalScore * cond.powerMultiplier;
                    if (!modifierNote) modifierNote = \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\`;
                }
            });`;

content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
console.log('Added power multiplier hook for Vipreet Rajyoga.');
