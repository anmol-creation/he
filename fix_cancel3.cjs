const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// The reason it wasn't cancelled is because `cond.cancelReason` is set, but the bottom code doesn't read it.
// Let's modify the bottom code to check if any matched condition has `cancelReason`.
const regex = /let isCancelled = false;\s+let modifierNote = null;\s+let mahapurushLabels = \[\];\s+\/\/ Evaluate Modifiers \(Bhanga \/ Cancellations\)/;

const replacement = `let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];

            // Check explicit cond.cancelReason from matched conditions (like parivartan)
            matchedConditions.forEach(cond => {
                if (cond.cancelReason) {
                    isCancelled = true;
                    modifierNote = cond.cancelReason;
                }
            });

            // Evaluate Modifiers (Bhanga / Cancellations)`;
content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
