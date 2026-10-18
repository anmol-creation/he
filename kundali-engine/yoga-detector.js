import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rulesPath = path.join(__dirname, 'data', 'yoga_rules.json');
const yogaRules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

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
                    if (cond.type === 'single_planet') {
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
                    else if (cond.type === 'mutual_aspect' || cond.type === 'mutual_aspect_lords') {
                        // Simplified check for now
                        isMatch = false;
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

    return {
        yogas: detectedYogas,
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
