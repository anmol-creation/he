const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// The logic needs fixing: Test 2 got 3 matches instead of Moon Only.
// Let's refine the script to perfectly calculate the logic for Test 1, 2, and 3.

const newInterceptorCode = `    for (const rule of yogaRules) {
        let matchedCombinationsCount = 0;
        let isCancelled = false;
        let matchedConditions = [];
        let labels = [];

        // Intercept Neechbhanga Rajyoga rules
        if (rule.id === 'general_neechbhanga_rajyoga') {
            let neechPlanets = [];
            // Find all debilitated planets
            for (let pName in pMap) {
                if (pMap[pName].dignity === 'Neecha') {
                    neechPlanets.push(pName);
                }
            }

            if (neechPlanets.length > 0) {
                // We evaluate Neechbhanga per debilitated planet and push a unique yoga for each
                for (let neechName of neechPlanets) {
                    let p = pMap[neechName];
                    let dispositorName = RASHI_LORDS[p.sign];
                    let dispositor = pMap[dispositorName];

                    // Exaltation lord logic: Planet that is exalted in p.sign
                    // 0: Sun, 1: Moon, 3: Jupiter, 5: Mercury, 6: Saturn, 9: Mars, 11: Venus
                    const exaltationLords = {
                        0: 'Sun', 1: 'Moon', 3: 'Jupiter', 5: 'Mercury', 6: 'Saturn', 9: 'Mars', 11: 'Venus'
                    };
                    let exaltedPlanetName = exaltationLords[p.sign] || null;
                    let exaltedLord = exaltedPlanetName ? pMap[exaltedPlanetName] : null;

                    let hits = 0;
                    let moonOnlyHits = 0;
                    let hasAscHit = false;
                    let hasMoonHit = false;

                    let cancelReason = null;

                    // Helper to check Bhanga for the helping planet
                    const checkBhanga = (helpingPlanet) => {
                        if (!helpingPlanet) return true; // Invalid
                        if (helpingPlanet.isCombust || helpingPlanet.dignity === 'Asta' || helpingPlanet.dignity === 'Neecha' || helpingPlanet.dignity === 'Mrit') {
                            return true; // Cancelled
                        }
                        return false;
                    };

                    // Rule 1: Dispositor in Kendra
                    if (dispositor) {
                        let inAscKendra = [1, 4, 7, 10].includes(dispositor.house);
                        let moonHouse = pMap['Moon'] ? pMap['Moon'].house : 1;
                        let inMoonKendra = [moonHouse, (moonHouse + 3) % 12 || 12, (moonHouse + 6) % 12 || 12, (moonHouse + 9) % 12 || 12].includes(dispositor.house);

                        if (inAscKendra || inMoonKendra) {
                            if (checkBhanga(dispositor)) {
                                cancelReason = \`Dispositor (\${dispositorName}) is powerless (Combust/Neecha/Mrit).\`;
                            } else {
                                hits++;
                                if (inAscKendra) hasAscHit = true;
                                if (inMoonKendra) hasMoonHit = true;
                                if (inMoonKendra && !inAscKendra) moonOnlyHits++;
                            }
                        }
                    }

                    // Rule 2: Exaltation Lord in Kendra
                    if (exaltedLord) {
                        let inAscKendra = [1, 4, 7, 10].includes(exaltedLord.house);
                        let moonHouse = pMap['Moon'] ? pMap['Moon'].house : 1;
                        let inMoonKendra = [moonHouse, (moonHouse + 3) % 12 || 12, (moonHouse + 6) % 12 || 12, (moonHouse + 9) % 12 || 12].includes(exaltedLord.house);

                        if (inAscKendra || inMoonKendra) {
                            if (checkBhanga(exaltedLord)) {
                                if (!cancelReason) cancelReason = \`Exaltation Lord (\${exaltedPlanetName}) is powerless.\`;
                            } else {
                                hits++;
                                if (inAscKendra) hasAscHit = true;
                                if (inMoonKendra) hasMoonHit = true;
                                if (inMoonKendra && !inAscKendra) moonOnlyHits++;
                            }
                        }
                    }

                    // Rule 3: Aspect of Dispositor
                    if (dispositor && dispositor.aspects && dispositor.aspects.includes(p.house)) {
                        if (checkBhanga(dispositor)) {
                            if (!cancelReason) cancelReason = \`Aspecting Dispositor (\${dispositorName}) is powerless.\`;
                        } else {
                            hits++;
                            hasAscHit = true; // Treated as solid hit
                        }
                    }

                    // Rule 4: Conjunction with Exalted Planet
                    if (exaltedLord && exaltedLord.house === p.house) {
                        if (checkBhanga(exaltedLord)) {
                            if (!cancelReason) cancelReason = \`Conjunct Exalted Planet (\${exaltedPlanetName}) is powerless.\`;
                        } else {
                            hits++;
                            hasAscHit = true;
                        }
                    }

                    // Rule 5: Connection (Parivartan or Conjunction) between Dispositor and Exaltation Lord
                    if (dispositor && exaltedLord) {
                        // Conjunction
                        if (dispositor.house === exaltedLord.house) {
                             if (!checkBhanga(dispositor) && !checkBhanga(exaltedLord)) {
                                 hits++;
                                 hasAscHit = true;
                             }
                        }
                        // Parivartan
                        else if (RASHI_LORDS[dispositor.sign] === exaltedPlanetName && RASHI_LORDS[exaltedLord.sign] === dispositorName) {
                            if (!checkBhanga(dispositor) && !checkBhanga(exaltedLord)) {
                                hits++;
                                hasAscHit = true;
                            }
                        }
                    }

                    if (hits > 0 || cancelReason) {
                        // Generate Yoga
                        let finalScore = (rule.score || 40);
                        let finalLabels = [];
                        let isMoonOnly = (moonOnlyHits > 0 && !hasAscHit);

                        // If everything is cancelled (hits == 0) OR if the hits were cancelled
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

                        detectedYogas.push({
                            id: \`\${rule.id}_\${neechName}\`,
                            name: \`\${rule.name} (\${neechName})\`,
                            type: rule.type,
                            description: hits === 0 ? \`Neechbhanga failed: \${cancelReason}\` : \`Neechbhanga triggered with \${hits} conditions matched! Massive success after initial struggles.\`,
                            combinationsMatched: hits,
                            score: finalScore,
                            rarityScore: rule.rarityScore || 4,
                            isCancelled: cancelReason !== null && hits === 0,
                            modifier_note: (hits === 0) ? cancelReason : (isMoonOnly ? "Formed from Moon Kendra only (0.7x power)." : (hits > 1 ? \`Multiple matches (\${hits}x power).\` : null)),
                            labels: finalLabels
                        });
                    }
                }
            }
            continue; // Skip the default processing for this rule
        }`;

// In the file, the previous interceptor code starts with exactly:
//     for (const rule of yogaRules) {
//         let matchedCombinationsCount = 0;
//         let isCancelled = false;
//         let matchedConditions = [];
//         let labels = [];
//         // Intercept Neechbhanga Rajyoga rules

// Let's replace the whole interceptor block we just added with the fixed one.
const regex = /    for \(const rule of yogaRules\) \{\s+let matchedCombinationsCount = 0;\s+let isCancelled = false;\s+let matchedConditions = \[\];\s+let labels = \[\];\s+\/\/ Intercept Neechbhanga Rajyoga rules[\s\S]*?continue; \/\/ Skip the default processing for this rule\s+\}/;

content = content.replace(regex, newInterceptorCode);
fs.writeFileSync(filepath, content);
console.log("Updated interceptor with proper Moon logic.");
