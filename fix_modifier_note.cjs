const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const regex = /let finalScore = baseScore \* matchedCombinationsCount; \/\/ Multiplier amplification\s+\/\/ Check for specific condition power multipliers \(like from Vipreet Rajyoga\)\s+matchedConditions\.forEach\(cond => \{\s+if \(cond\.powerMultiplier\) \{\s+finalScore = finalScore \* cond\.powerMultiplier;\s+if \(\!modifierNote\) modifierNote = \`Strong Lagnesh boosts power \(\\\${cond.powerMultiplier}x\).\`;\s+\}\s+\}\);/;

const replacement = `let finalScore = baseScore * matchedCombinationsCount; // Multiplier amplification
            let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];

            // Check explicit cond.cancelReason from matched conditions (like parivartan)
            matchedConditions.forEach(cond => {
                if (cond.cancelReason) {
                    isCancelled = true;
                    modifierNote = cond.cancelReason;
                }
                if (cond.powerMultiplier && !isCancelled) {
                    finalScore = finalScore * cond.powerMultiplier;
                    if (!modifierNote) modifierNote = \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\`;
                }
            });

            // Evaluate Modifiers (Bhanga / Cancellations)`;

// Wait, looking at lines 712 etc from the error log, the original `let modifierNote = null;` was defined below where I added my hook in `fix_vipreet_multiplier.cjs`. Let's just remove the block we inserted and put it in the right place.
