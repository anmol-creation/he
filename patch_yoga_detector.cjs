const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

const search = `            // Evaluate Modifiers (Bhanga / Cancellations)
            if (rule.type === 'Rajyoga') {
                // Check if any planet causing this Rajyoga is Combust
                let combustPlanets = [];`;

const replace = `            let mahapurushLabels = [];
            // Evaluate Modifiers (Bhanga / Cancellations)
            if (rule.type === 'Rajyoga') {
                // Check if it's a Mahapurush Yoga
                let isMahapurush = rule.name.includes("महापुरुष");
                let primaryPlanet = null;

                let combustPlanets = [];
                let hasRahuKetu = false;
                let isD9Debilitated = false;

                rule.conditions.forEach(cond => {
                    if (cond.planet) {
                        primaryPlanet = cond.planet;
                        if (pMap[cond.planet] && pMap[cond.planet].isCombust) {
                            combustPlanets.push(cond.planet);
                        }
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

                    // Digbala Check
                    // Sun/Mars in 10, Jupiter/Mercury in 1, Moon/Venus in 4, Saturn in 7
                    let hasDigbala = false;
                    if ((primaryPlanet === 'Sun' || primaryPlanet === 'Mars') && p.house === 10) hasDigbala = true;
                    if ((primaryPlanet === 'Jupiter' || primaryPlanet === 'Mercury') && p.house === 1) hasDigbala = true;
                    if ((primaryPlanet === 'Moon' || primaryPlanet === 'Venus') && p.house === 4) hasDigbala = true;
                    if (primaryPlanet === 'Saturn' && p.house === 7) hasDigbala = true;

                    if (hasDigbala) {
                        powerMultiplier++;
                        mahapurushLabels.push("⚡ दिग्बल (Digbala)");
                    }

                    // Vargottam Check
                    if (p.isVargottam) {
                        powerMultiplier++;
                        mahapurushLabels.push("💎 वर्गोत्तम (Vargottam)");
                    }

                    // Lagnesh Check
                    if (houseLords[1] === primaryPlanet) {
                        powerMultiplier++;
                        mahapurushLabels.push("👑 लग्नेश (CEO)");
                    }

                    // Jupiter Aspect
                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
                        powerMultiplier++;
                        mahapurushLabels.push("👁️ गुरु की अमृत दृष्टि");
                    }

                    finalName = \`\${rule.name} (\${powerMultiplier}x Power)\`;
                    finalScore = baseScore * powerMultiplier;

                    // D-9 Debilitation Check (Approximation, we need D-9 sign but we can use Vargottam Neecha check or just a placeholder if D9 sign isn't fully calculated for neecha)
                    // The engine already calculates p.d9Sign in server.js but doesn't pass it perfectly or check debilitation in D9.
                    // We'll check if the d9Sign matches the debilitation sign of the planet.
                    const debSigns = { 'Sun': 6, 'Moon': 7, 'Mars': 3, 'Mercury': 11, 'Jupiter': 9, 'Venus': 5, 'Saturn': 0 };
                    // Actually, pMap doesn't receive d9Sign currently. Let's look at server.js.
                    // I will add d9Sign to pMap.
                    if (p.d9Sign === debSigns[primaryPlanet]) {
                        isD9Debilitated = true;
                        mahapurushLabels.push("⚠️ Hollow Empire (D-9 Neecha)");
                    }

                    // Rahu/Ketu Conjunction Check
                    let rHouse = pMap['Rahu'] ? pMap['Rahu'].house : -1;
                    let kHouse = pMap['Ketu'] ? pMap['Ketu'].house : -1;
                    if (p.house === rHouse || p.house === kHouse) {
                        hasRahuKetu = true;
                        mahapurushLabels.push("💣 Explosive/Corrupted (Nodes)");
                    }
                }

                if (combustPlanets.length > 0) {`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("Patched yoga-detector logic.");
