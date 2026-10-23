import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rulesDir = path.join(__dirname, 'data', 'rules');
const housesDir = path.join(rulesDir, 'houses');
const yogaRules = [];

// Load general yoga rules
fs.readdirSync(rulesDir).forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(rulesDir, file);
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(fileContent)) {
            yogaRules.push(...fileContent);
        }
    }
});

// Load house-specific rules
if (fs.existsSync(housesDir)) {
    fs.readdirSync(housesDir).forEach(file => {
        if (file.endsWith('.json')) {
            const filePath = path.join(housesDir, file);
            const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            yogaRules.push(...fileContent);
        }
    });
}

const RASHI_LORDS = {
    0: 'Mars', 1: 'Venus', 2: 'Mercury', 3: 'Moon',
    4: 'Sun', 5: 'Mercury', 6: 'Venus', 7: 'Mars',
    8: 'Jupiter', 9: 'Saturn', 10: 'Saturn', 11: 'Jupiter'
};

function getHouseRelative(startHouse, offset) {
    return ((startHouse + offset - 2) % 12) + 1;
}

function getAspectingHouses(planetName, planetHouse) {
    let aspects = [getHouseRelative(planetHouse, 7)];
    if (planetName === 'Mars') {
        aspects.push(getHouseRelative(planetHouse, 4));
        aspects.push(getHouseRelative(planetHouse, 8));
    } else if (planetName === 'Jupiter' || planetName === 'Rahu' || planetName === 'Ketu') {
        aspects.push(getHouseRelative(planetHouse, 5));
        aspects.push(getHouseRelative(planetHouse, 9));
    } else if (planetName === 'Saturn') {
        aspects.push(getHouseRelative(planetHouse, 3));
        aspects.push(getHouseRelative(planetHouse, 10));
    }
    return [...new Set(aspects)];
}

function detectYogas(planetsData, ascendantDegree) {
    const ascendantSign = Math.floor(ascendantDegree / 30);
    const pMap = {};
    const houseLords = {};

    for(let i=1; i<=12; i++) {
        houseLords[i] = RASHI_LORDS[(ascendantSign + i - 1) % 12];
    }

    planetsData.forEach(p => {
        let match = p.name.match(/\((.*?)\)/);
        let nameEn = match ? match[1] : p.name;
        // Use explicitly calculated house from server if available, else fallback to standard sign calculation
        let house = p.house || ((p.sign - ascendantSign + 12) % 12) + 1;

        pMap[nameEn] = {
            sign: p.sign,
            house: house,
            degreeInSign: p.degreeInSign,
            longitude: p.longitude,
            aspects: getAspectingHouses(nameEn, house)
        };
    });

    const detectedYogas = [];

    for (const rule of yogaRules) {
        let matchedCombinationsCount = 0;
        let isCancelled = false;

        // Process Combinations (OR logic)
        if (rule.combinations && Array.isArray(rule.combinations)) {
            for (const cond of rule.combinations) {
                let isMatch = false;
                try {
                    if (cond.type === 'ascendant_sign') {
                        if (ascendantSign === cond.sign) {
                            isMatch = true;
                        }
                    }
                    else if (cond.type === 'single_planet') {
                        const p = pMap[cond.planet];
                        if (p) {
                            let houseMatch = cond.in_houses ? cond.in_houses.includes(p.house) : true;
                            let signMatch = cond.in_signs ? cond.in_signs.includes(p.sign) : true;
                            isMatch = houseMatch && signMatch;
                        }
                    }
                    else if (cond.type === 'conjunction') {
                        if (cond.planets) {
                            let house = null;
                            isMatch = true;
                            for (let pName of cond.planets) {
                                let p = pMap[pName];
                                if (!p) { isMatch = false; break; }
                                if (house === null) {
                                    house = p.house;
                                } else if (p.house !== house) {
                                    isMatch = false;
                                    break;
                                }
                            }
                            if (isMatch && cond.in_houses && !cond.in_houses.includes(house)) {
                                isMatch = false;
                            }
                        }
                    }
                    else if (cond.type === 'mutual_aspect') {
                        let p1 = pMap[cond.planet1];
                        let p2 = pMap[cond.planet2];
                        if (p1 && p2) {
                            let p1AspectsP2 = p1.aspects.includes(p2.house);
                            let p2AspectsP1 = p2.aspects.includes(p1.house);
                            isMatch = p1AspectsP2 && p2AspectsP1;
                        }
                    }
                    else if (cond.type === 'mutual_aspect_lords') {
                        // Get the planets ruling the specified houses
                        let lord1Name = houseLords[cond.lord1];
                        let lord2Name = houseLords[cond.lord2];
                        let p1 = pMap[lord1Name];
                        let p2 = pMap[lord2Name];
                        if (p1 && p2) {
                            let p1AspectsP2 = p1.aspects.includes(p2.house);
                            let p2AspectsP1 = p2.aspects.includes(p1.house);
                            isMatch = p1AspectsP2 && p2AspectsP1;
                        }
                    }
                    else if (cond.type === 'lord_in_house') {
                        let lordName = houseLords[cond.lord_of];
                        let p = pMap[lordName];
                        if (p) {
                            isMatch = cond.in_houses.includes(p.house);
                        }
                    }
                    else if (cond.type === 'lord_in_houses_multiple') {
                        let lordName = houseLords[cond.lord];
                        let p = pMap[lordName];
                        if (p) {
                            isMatch = cond.in_houses.includes(p.house);
                        }
                    }
                    else if (cond.type === 'ascendant_lordship') {
                        isMatch = (ascendantSign === cond.ascendant_sign && houseLords[1] === cond.planet);
                    }
                    else if (cond.type === 'conjunction_lords') {
                        let p1Name = houseLords[cond.lord1];
                        let p2Name = houseLords[cond.lord2];
                        let p1 = pMap[p1Name];
                        let p2 = pMap[p2Name];
                        if (p1 && p2) {
                            isMatch = (p1.house === p2.house);
                        }
                    }
                    else if (cond.type === 'mutual_kendra') {
                        let p1Name = cond.planets[0];
                        let p2Name = cond.planets[1];
                        let p1 = pMap[p1Name];
                        let p2 = pMap[p2Name];
                        if (p1 && p2) {
                            // Distance between them is 1, 4, 7, 10
                            let dist = (p1.house - p2.house + 12) % 12;
                            isMatch = (dist === 0 || dist === 3 || dist === 6 || dist === 9);
                        }
                    }
                    else if (cond.type === 'aspect_or_conjunction_lords') {
                        let p1Name = houseLords[cond.lord1];
                        let p2Name = houseLords[cond.lord2];
                        let p1 = pMap[p1Name];
                        let p2 = pMap[p2Name];
                        if (p1 && p2) {
                            let areConjoined = p1.house === p2.house;
                            let p1AspectsP2 = p1.aspects.includes(p2.house);
                            let p2AspectsP1 = p2.aspects.includes(p1.house);
                            isMatch = areConjoined || p1AspectsP2 || p2AspectsP1;

                            // Ensure this happens in specified houses if cond.in_houses is provided
                            if (isMatch && cond.in_houses) {
                                isMatch = cond.in_houses.includes(p1.house) && (cond.in_houses.includes(p2.house));
                            }
                        }
                    }
                    else if (cond.type === 'exchange_houses') {
                        let lord1Name = houseLords[cond.house1];
                        let lord2Name = houseLords[cond.house2];
                        let p1 = pMap[lord1Name];
                        let p2 = pMap[lord2Name];
                        if (p1 && p2) {
                            isMatch = (p1.house === cond.house2 && p2.house === cond.house1);
                        }
                    }
                    else if (cond.type === 'aspect_on_planet') {
                        let aspectingP = pMap[cond.aspecting_planet];
                        let targetP = pMap[cond.target_planet];
                        if (aspectingP && targetP) {
                            isMatch = aspectingP.aspects.includes(targetP.house);
                        }
                    }
                    else if (cond.type === 'conjunction_or_aspect') {
                        let p1 = pMap[cond.planet1];
                        let p2 = pMap[cond.planet2];
                        if (p1 && p2) {
                            let areConjoined = p1.house === p2.house;
                            let p1AspectsP2 = p1.aspects.includes(p2.house);
                            let p2AspectsP1 = p2.aspects.includes(p1.house);
                            isMatch = areConjoined || p1AspectsP2 || p2AspectsP1;
                        }
                    }
                    else if (cond.type === 'planet_in_relative_house') {
                        let fromP = pMap[cond.from_planet];
                        let targetP = pMap[cond.require_planet];
                        if (fromP && targetP) {
                            let relativeHouse = ((targetP.house - fromP.house + 12) % 12) + 1;
                            if (relativeHouse === cond.relative_house) {
                                isMatch = true;
                            }
                        }
                    }
                    else if (cond.type === 'mutual_kendra_lords') {
                        let p1Name = houseLords[cond.lord1];
                        let p2Name = houseLords[cond.lord2];
                        let p1 = pMap[p1Name];
                        let p2 = pMap[p2Name];
                        if (p1 && p2) {
                            let dist = (p1.house - p2.house + 12) % 12;
                            isMatch = (dist === 0 || dist === 3 || dist === 6 || dist === 9);
                        }
                    }
                    else if (cond.type === 'combustion' || cond.type === 'debilitation') {
                        // Usually found in cancellations, but checking if it exists as a combo type
                        if (cond.type === 'debilitation') {
                            isMatch = true;
                            for (let pName of cond.planets) {
                                if (pMap[pName] && pMap[pName].dignity !== 'Neecha') {
                                    isMatch = false; break;
                                }
                            }
                        } else if (cond.type === 'combustion') {
                            let p = pMap[cond.planet];
                            let sun = pMap['Sun'];
                            if (p && sun) {
                                let degDiff = Math.abs(p.longitude - sun.longitude);
                                if (degDiff > 180) degDiff = 360 - degDiff;
                                isMatch = degDiff <= (cond.degree_limit || 14);
                            }
                        }
                    }
                    else if (cond.type === 'neechbhanga_aspect' || cond.type === 'neechbhanga_conjunction' || cond.type === 'neechbhanga_exalted_in_kendra' || cond.type === 'neechbhanga_lord_in_kendra' || cond.type === 'complex_neechbhanga') {
                        // General check for any debilitated planet getting neechbhanga
                        for (let pName in pMap) {
                            let p = pMap[pName];
                            if (p.dignity === 'Neecha') {
                                let dispositorName = RASHI_LORDS[p.sign];
                                let dispositor = pMap[dispositorName];
                                if (dispositor) {
                                    if (cond.type === 'neechbhanga_aspect' && dispositor.aspects.includes(p.house)) {
                                        isMatch = true; break;
                                    } else if (cond.type === 'neechbhanga_conjunction' && dispositor.house === p.house) {
                                        isMatch = true; break;
                                    } else if (cond.type === 'neechbhanga_lord_in_kendra' && (dispositor.house === 1 || dispositor.house === 4 || dispositor.house === 7 || dispositor.house === 10)) {
                                        isMatch = true; break;
                                    }
                                }

                                // Exalted planet for that sign in kendra
                                if (cond.type === 'neechbhanga_exalted_in_kendra' || cond.type === 'complex_neechbhanga') {
                                    // Check if the planet that WOULD be exalted in this sign is in a Kendra
                                    let exaltedPlanetName = null;
                                    // Find which planet is exalted in p.sign
                                    if (p.sign === 0) exaltedPlanetName = 'Sun';
                                    else if (p.sign === 1) exaltedPlanetName = 'Moon';
                                    else if (p.sign === 9) exaltedPlanetName = 'Mars';
                                    else if (p.sign === 5) exaltedPlanetName = 'Mercury';
                                    else if (p.sign === 3) exaltedPlanetName = 'Jupiter';
                                    else if (p.sign === 11) exaltedPlanetName = 'Venus';
                                    else if (p.sign === 6) exaltedPlanetName = 'Saturn';

                                    if (exaltedPlanetName) {
                                        let exP = pMap[exaltedPlanetName];
                                        if (exP && (exP.house === 1 || exP.house === 4 || exP.house === 7 || exP.house === 10)) {
                                            isMatch = true; break;
                                        }
                                    }

                                    // Also honor specific complex neechbhanga JSON format if provided
                                    if (!isMatch && cond.type === 'complex_neechbhanga') {
                                        if (cond.planet_neech && pName === cond.planet_neech) {
                                            if (cond.aspect_by) {
                                                let asP = pMap[cond.aspect_by];
                                                if (asP && asP.aspects.includes(p.house)) {
                                                    isMatch = true; break;
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                    else if (cond.type === 'all_kendra_occupied') {
                        let kH = [1, 4, 7, 10];
                        let filled = new Set();
                        for (let key in pMap) {
                            if (key !== 'Rahu' && key !== 'Ketu') {
                                if (kH.includes(pMap[key].house)) {
                                    filled.add(pMap[key].house);
                                }
                            }
                        }
                        if (filled.size === 4) isMatch = true;
                    }
                    else if (cond.type === 'planets_in_x_houses') {
                        let uniqueHouses = new Set();
                        for (let key in pMap) {
                            if (key !== 'Rahu' && key !== 'Ketu') {
                                uniqueHouses.add(pMap[key].house);
                            }
                        }
                        if (uniqueHouses.size === cond.count) isMatch = true;
                    }
                    else if (cond.type === 'complex') {
                        // Complex ones generally require specific NLP or a detailed hardcoded map.
                        // For engine robustness without throwing an error, we can attempt soft-match
                        // based on the rule's ID or skip. (For now, treat true to avoid blocking, but ideally should be explicitly scripted per ID).
                        if (rule.id === 'gajakesari_yoga') {
                            let ju = pMap['Jupiter'];
                            let mo = pMap['Moon'];
                            if (ju && mo) {
                                let dist = (ju.house - mo.house + 12) % 12;
                                if (dist === 0 || dist === 3 || dist === 6 || dist === 9) isMatch = true;
                            }
                        } else if (rule.id && rule.id.startsWith('karmic_axis_')) {
                            // Logic for Karmic Axis (Rahu/Ketu Axis)
                            const parts = rule.id.split('_');
                            if (parts.length === 4) {
                                const rahuExpectedHouse = parseInt(parts[2]);
                                const ketuExpectedHouse = parseInt(parts[3]);
                                let rahuKey = Object.keys(pMap).find(k => k.includes('Rahu'));
                                let ketuKey = Object.keys(pMap).find(k => k.includes('Ketu'));
                                let rahu = rahuKey ? pMap[rahuKey] : null;
                                let ketu = ketuKey ? pMap[ketuKey] : null;

                                if (rahu && ketu && rahu.house === rahuExpectedHouse && ketu.house === ketuExpectedHouse) {
                                    isMatch = true;
                                }
                            }
                        } else {
                            // Currently unsupported complex string will evaluate false
                            isMatch = false;
                        }
                    }
                    else if (cond.type === 'kaal_sarp_direct' || cond.type === 'kaal_sarp_reverse') {
                        let rahuKey = Object.keys(pMap).find(k => k.includes('Rahu'));
                        let ketuKey = Object.keys(pMap).find(k => k.includes('Ketu'));
                        let rahu = rahuKey ? pMap[rahuKey] : null;
                        let ketu = ketuKey ? pMap[ketuKey] : null;
                        if (rahu && ketu) {
                            let rHouse = rahu.house;
                            let kHouse = ketu.house;
                            isMatch = true;
                            // Simplistic Hemmed Check: All normal planets must be between Rahu-Ketu or Ketu-Rahu
                            let start = cond.type === 'kaal_sarp_direct' ? rHouse : kHouse;
                            let end = cond.type === 'kaal_sarp_direct' ? kHouse : rHouse;
                            for (let key in pMap) {
                                if (key !== 'Rahu' && key !== 'Ketu' && !key.includes('Uranus') && !key.includes('Neptune') && !key.includes('Pluto')) {
                                    let h = pMap[key].house;
                                    // Check if house falls in the short arc from start to end
                                    let isHemmed = false;
                                    if (start < end) {
                                        if (h >= start && h <= end) isHemmed = true;
                                    } else {
                                        // Wraps around 12
                                        if (h >= start || h <= end) isHemmed = true;
                                    }
                                    if (!isHemmed) {
                                        isMatch = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error(`Error evaluating condition in ${rule.id}:`, e);
                }

                if (isMatch) matchedCombinationsCount++;
            }
        }

        // Process Cancellations (Parihar)
        if (matchedCombinationsCount > 0 && rule.cancellations && Array.isArray(rule.cancellations)) {
            for (const cancel of rule.cancellations) {
                // If a cancellation condition is met, nullify the yoga/dosha
                if (cancel.type === 'combustion') {
                    // Logic to check degrees from Sun (Stub)
                }
                // (More parihaars can be added here)
            }
        }

        if (matchedCombinationsCount > 0 && !isCancelled) {
            let finalName = rule.name;
            if (matchedCombinationsCount > 1) {
                finalName = `${finalName} (${matchedCombinationsCount}x Power)`;
            }

            // Calculate final score for this yoga
            let baseScore = rule.score || 10;
            let finalScore = baseScore * matchedCombinationsCount; // Multiplier amplification

            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: (rule.frequency_multiplier || 1) * matchedCombinationsCount
            });
        }
    }

    // --- HOLISTIC RARITY CALCULATION ---
    let totalRajyogaScore = 0;
    let totalDoshaScore = 0;
    let totalRarity = 0;

    detectedYogas.forEach(y => {
        if (y.score > 0) totalRajyogaScore += y.score;
        else totalDoshaScore += Math.abs(y.score); // keep absolute for comparison

        totalRarity += y.rarityScore || 0;
    });

    let netScore = totalRajyogaScore - totalDoshaScore;

    let chartTier = "B-Tier (Common)";
    let tierTitle = "सामान्य योग (Common Chart)";

    if (totalRajyogaScore >= 100 && totalDoshaScore >= 100) {
        chartTier = "Karmic-Tier (Fighter)";
        tierTitle = "अत्यधिक संघर्ष और महान सफलता (Rollercoaster/Karmic)";
    } else if (netScore >= 150) {
        chartTier = "S-Tier (Legendary)";
        tierTitle = "महा-राजयोग (Legendary / Top 1%)";
    } else if (netScore >= 80) {
        chartTier = "A-Tier (Excellent)";
        tierTitle = "उत्कृष्ट राजयोग (Excellent / Top 10%)";
    } else if (netScore <= -50) {
        chartTier = "Warning-Tier";
        tierTitle = "कठोर संघर्ष (Deep Struggle)";
    }

    // Sort yogas by score (power) in descending order
    detectedYogas.sort((a, b) => (b.score || 0) - (a.score || 0));

    const classicYogas = detectedYogas.filter(y => y.type !== "भाव फल");
    const bhaavPhal = detectedYogas.filter(y => y.type === "भाव फल");

    return {
        yogas: classicYogas,
        bhaavPhal: bhaavPhal,
        chartStats: {
            rajyogaScore: totalRajyogaScore,
            doshaScore: totalDoshaScore,
            netScore: netScore,
            rarityScore: totalRarity,
            tier: chartTier,
            tierTitle: tierTitle
        }
    };
}

export { detectYogas };
