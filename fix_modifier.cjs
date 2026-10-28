const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const replacement = `            let baseScore = rule.score || 10;
            let finalScore = baseScore * matchedCombinationsCount; // Multiplier amplification

            let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];

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
            });

            // Evaluate Modifiers (Bhanga / Cancellations)`;

// regex to match from baseScore down to just before evaluate modifiers
const regex = /let baseScore = rule.score \|\| 10;[\s\S]*?\/\/ Evaluate Modifiers \(Bhanga \/ Cancellations\)/;

content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
