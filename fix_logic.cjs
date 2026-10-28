const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I found why Moon-only didn't trigger perfectly without aspects:
// In the yoga engine, aspects are calculated in `server.js`, but for mock data if we pass `aspects: []`,
// `dispositor.aspects.includes(p.house)` fails.
// But wait! `hasAscHit` was true in my previous test, which is why `isMoonOnly` evaluated to false.
// What about the previous test script output where `TEST 3: Cancelled (Bhanga)` returned `combinationsMatched: 1`?
// If hits was 1, why did it say cancelled?
// Ah, `cancelReason` was set, but it STILL had `hits++` from another rule!
// Rule 1: Combust. cancelReason set. Hits NOT incremented.
// Rule 2 (Exaltation Lord): Venus is in House 2. Moon is in House 2.
// Venus is in Moon Kendra! Hits incremented!
// So it got a hit on Rule 2, making `hits > 0`, making `isCancelled = false` but `modifier_note` still got appended because of Moon Kendra only.
// This is actually completely accurate! If one helping planet is combust, but the OTHER helping planet (Exaltation lord) is perfectly fine and in Kendra, the Neechbhanga STILL TRIGGERS via the other rule!
// Let me update the description so it accurately reflects this Partial Cancellation.

const replacement = `
                    if (hits > 0 || cancelReason) {
                        // Generate Yoga
                        let finalScore = (rule.score || 40);
                        let finalLabels = [];
                        let isMoonOnly = (moonOnlyHits > 0 && !hasAscHit);

                        if (hits === 0 && cancelReason) {
                            // Cancelled outright
                            finalScore = 0;
                        } else {
                            // Apply multipliers
                            finalScore = finalScore * hits;

                            if (isMoonOnly) {
                                finalScore = finalScore * 0.7;
                                finalLabels.push('🌙 चंद्र-आधारित');
                            }
                        }

                        // Refine the description
                        let desc = hits === 0 ? \`Neechbhanga failed: \${cancelReason}\` : \`Neechbhanga triggered with \${hits} conditions matched! Massive success after initial struggles.\`;
                        if (hits > 0 && cancelReason) {
                            desc += \` (Note: One condition failed -> \${cancelReason})\`;
                        }

                        detectedYogas.push({
                            id: \`\${rule.id}_\${neechName}\`,
                            name: \`\${rule.name} (\${neechName})\`,
                            type: rule.type,
                            description: desc,
                            combinationsMatched: hits,
                            score: finalScore,
                            rarityScore: rule.rarityScore || 4,
                            isCancelled: cancelReason !== null && hits === 0,
                            modifier_note: (hits === 0) ? cancelReason : (isMoonOnly ? "Formed from Moon Kendra only (0.7x power)." : (hits > 1 ? \`Multiple matches (\${hits}x power).\` : null)),
                            labels: finalLabels
                        });
                    }
`;

const regex = /if \(hits > 0 \|\| cancelReason\) \{[\s\S]*?labels: finalLabels\s+\}\s+\}/;
content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
console.log("Updated description logic for partial cancellations.");
