const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Pass d9Sign to pMap
content = content.replace(
`            isCombust: p.isCombust || false,
            isRetrograde: p.isRetrograde || false
        };`,
`            isCombust: p.isCombust || false,
            isVargottam: p.isVargottam || false,
            isRetrograde: p.isRetrograde || false,
            d9Sign: p.d9Sign
        };`
);

// 2. Insert logic in Rajyoga evaluation
const search = `            let isCancelled = false;
            let modifierNote = null;

            // Evaluate Modifiers (Bhanga / Cancellations)
            if (rule.type === 'Rajyoga') {
                // Check if any planet causing this Rajyoga is Combust
                let combustPlanets = [];
                // Extract planet names from matched conditions
                // Since conditions can be complex, we check the global pMap for any combust planet
                // A better approach is to check if ANY planet involved in the conditions is combust
                rule.conditions.forEach(cond => {
                    if (cond.planet && pMap[cond.planet] && pMap[cond.planet].isCombust) {
                        combustPlanets.push(cond.planet);
                    } else if (cond.planets) {
                        cond.planets.forEach(pl => {
                            if (pMap[pl] && pMap[pl].isCombust) combustPlanets.push(pl);
                        });
                    }
                });
                if (combustPlanets.length > 0) {
                    isCancelled = true;
                    modifierNote = "Physical existence jal gaya (Asta/Combust). Rajyoga sirf khayalon mein reh jayega.";
                    finalScore = 0; // nullify power
                }
            }`;

const replace = `            let isCancelled = false;
            let modifierNote = null;
            let mahapurushLabels = [];
            // Evaluate Modifiers (Bhanga / Cancellations)
            if (rule.type === 'Rajyoga') {
                let isMahapurush = rule.name.includes("महापुरुष") || rule.name.includes("Mahapurush");
                let primaryPlanet = null;
                let combustPlanets = [];

                rule.conditions.forEach(cond => {
                    if (cond.planet) {
                        primaryPlanet = cond.planet;
                        if (pMap[cond.planet] && pMap[cond.planet].isCombust) combustPlanets.push(cond.planet);
                    } else if (cond.planets) {
                        cond.planets.forEach(pl => {
                            if (!primaryPlanet) primaryPlanet = pl;
                            if (pMap[pl] && pMap[pl].isCombust) combustPlanets.push(pl);
                        });
                    }
                });

                if (isMahapurush && primaryPlanet && pMap[primaryPlanet]) {
                    const p = pMap[primaryPlanet];
                    let powerMultiplier = 1;

                    let hasDigbala = false;
                    if ((primaryPlanet === 'Sun' || primaryPlanet === 'Mars') && p.house === 10) hasDigbala = true;
                    if ((primaryPlanet === 'Jupiter' || primaryPlanet === 'Mercury') && p.house === 1) hasDigbala = true;
                    if ((primaryPlanet === 'Moon' || primaryPlanet === 'Venus') && p.house === 4) hasDigbala = true;
                    if (primaryPlanet === 'Saturn' && p.house === 7) hasDigbala = true;

                    if (hasDigbala) {
                        powerMultiplier++;
                        mahapurushLabels.push("⚡ दिग्बल (Digbala)");
                    }
                    if (p.isVargottam) {
                        powerMultiplier++;
                        mahapurushLabels.push("💎 वर्गोत्तम (Vargottam)");
                    }
                    if (houseLords[1] === primaryPlanet) {
                        powerMultiplier++;
                        mahapurushLabels.push("👑 लग्नेश (CEO)");
                    }
                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
                        powerMultiplier++;
                        mahapurushLabels.push("👁️ गुरु की अमृत दृष्टि");
                    }

                    finalName = \`\${rule.name} (\${powerMultiplier}x Power)\`;
                    finalScore = baseScore * powerMultiplier;

                    const debSigns = { 'Sun': 6, 'Moon': 7, 'Mars': 3, 'Mercury': 11, 'Jupiter': 9, 'Venus': 5, 'Saturn': 0 };
                    if (p.d9Sign === debSigns[primaryPlanet]) {
                        mahapurushLabels.push("⚠️ Hollow Empire (D-9 Neecha)");
                    }

                    let rHouse = pMap['Rahu'] ? pMap['Rahu'].house : -1;
                    let kHouse = pMap['Ketu'] ? pMap['Ketu'].house : -1;
                    if (p.house === rHouse || p.house === kHouse) {
                        mahapurushLabels.push("💣 Explosive/Corrupted (Nodes)");
                    }
                }

                if (combustPlanets.length > 0) {
                    isCancelled = true;
                    modifierNote = "Physical existence jal gaya (Asta/Combust). Rajyoga sirf khayalon mein reh jayega.";
                    finalScore = 0;
                }
            }`;
content = content.replace(search, replace);

const searchPush = `            detectedYogas.push({
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

const replacePush = `            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: (rule.frequency_multiplier || 1) * matchedCombinationsCount,
                isCancelled: isCancelled,
                modifier_note: modifierNote,
                labels: (typeof mahapurushLabels !== 'undefined') ? mahapurushLabels : []
            });`;
content = content.replace(searchPush, replacePush);

fs.writeFileSync(file, content);
