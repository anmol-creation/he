import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load yoga rules
const rulesPath = path.join(__dirname, 'data', 'yoga_rules.json');
const yogaRules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));

function detectYogas(planetsData, ascendantDegree) {
    const ascendantSign = Math.floor(ascendantDegree / 30);

    // Create a map of planets for easy access
    const pMap = {};
    planetsData.forEach(p => {
        let match = p.name.match(/\((.*?)\)/);
        let nameEn = match ? match[1] : p.name; // Extract English name safely

        // Calculate house based on equal house system (sign-to-sign)
        let house = ((p.sign - ascendantSign + 12) % 12) + 1;

        pMap[nameEn] = {
            sign: p.sign,
            house: house,
            degreeInSign: p.degreeInSign,
            longitude: p.longitude
        };
    });

    const detectedYogas = [];

    // Evaluate each rule
    for (const rule of yogaRules) {
        let isMatch = false;
        const cond = rule.conditions;

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
                 // Simplified: assume mutual aspect means they are in 1/7 axis from each other (opposition)
                 // or same house (conjunction).
                 // Note: 'lords' requires finding which planet rules which house.
                 // For now, this is a stub for complex logic.
                 isMatch = false;
            }
            // Add more condition evaluators here as needed...

            // For complex conditions that we haven't fully implemented in logic yet,
            // we will skip or randomly assign for now until the full rules engine is built.
            // In a real app, you'd write out the exact astrological logic for all rule types.

        } catch (e) {
            console.error(`Error evaluating rule ${rule.id}:`, e);
        }

        if (isMatch) {
            detectedYogas.push({
                id: rule.id,
                name: rule.name,
                type: rule.type,
                description: rule.description
            });
        }
    }

    return detectedYogas;
}

export { detectYogas };
