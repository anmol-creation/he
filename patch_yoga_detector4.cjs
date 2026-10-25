const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

const search = `            let isCancelled = false;
            let modifierNote = null;

            let mahapurushLabels = [];
            // Evaluate Modifiers (Bhanga / Cancellations)`;

// It looks like mahapurushLabels isn't globally declared for the rule iteration. Let's make sure.
content = content.replace(`            let isCancelled = false;\n            let modifierNote = null;`, `            let isCancelled = false;\n            let modifierNote = null;\n            let mahapurushLabels = [];`);

// The push block was not perfectly replaced in my previous script? Let's check.
const search2 = `            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: (rule.frequency_multiplier || 1) * matchedCombinationsCount,
                isCancelled: isCancelled,
                modifier_note: modifierNote
            });`;

const replace2 = `            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: (rule.frequency_multiplier || 1) * matchedCombinationsCount,
                isCancelled: isCancelled,
                modifier_note: modifierNote,
                labels: mahapurushLabels
            });`;

content = content.replace(search2, replace2);
fs.writeFileSync(file, content);
console.log("Patched correctly");
