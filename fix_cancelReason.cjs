const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I need to add `let cancelReason = null;` before we assign it in the rule loop.
// Inside `for (const cond of rule.combinations)`, I'll add `let cancelReason = null;`
// Or just let it be accessible. `isCancelled = true` and we can attach modifier_note below.

const regex = /isCancelled = true;\s+cancelReason = `परिवर्तन करने वाला ग्रह \(\${isPowerless\(lordA\) \? lordA_Name : lordB_Name}\) शक्तिहीन \(अस्त\/मृत\) है।`;/;
const replacement = `isCancelled = true;\n                                cond.cancelReason = \`परिवर्तन करने वाला ग्रह (\${isPowerless(lordA) ? lordA_Name : lordB_Name}) शक्तिहीन (अस्त/मृत) है।\`;`;
content = content.replace(regex, replacement);

fs.writeFileSync(filepath, content);
