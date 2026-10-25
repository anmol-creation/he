const fs = require('fs');
const file = 'kundali-engine/server.js';
let content = fs.readFileSync(file, 'utf8');

const search = `        let ceoStatus = null;
        if (lagneshData) {
            ceoStatus = {
                key: lagneshKey,
                name: lagneshData.name,
                house: lagneshData.house,
                sign: lagneshData.sign,
                dignity: lagneshData.dignity,
                isRetrograde: lagneshData.isRetrograde,
                isCombust: lagneshData.isCombust || false
            };
        }`;

const replace = `        let ceoStatus = null;
        if (lagneshData) {
            let conditions = [];

            // 1. Paap Kartari Check
            // We need to check if House 12 and House 2 only have malefics (Sun, Mars, Saturn, Rahu, Ketu).
            const malefics = ['Sun', 'Mars', 'Saturn', 'Rahu', 'Ketu'];
            let h12Malefics = 0, h2Malefics = 0, h12Benefics = 0, h2Benefics = 0;

            // Helper to get house based on planet data
            const getHouse = (hNum) => results.filter(p => p.house === hNum);

            getHouse(12).forEach(p => {
                if (malefics.some(m => p.name.includes(m))) h12Malefics++;
                else h12Benefics++;
            });
            getHouse(2).forEach(p => {
                if (malefics.some(m => p.name.includes(m))) h2Malefics++;
                else h2Benefics++;
            });

            if (lagneshData.house === 1 && h12Malefics > 0 && h2Malefics > 0 && h12Benefics === 0 && h2Benefics === 0) {
                conditions.push({ type: 'danger', text: 'पाप कर्तरी दोष (The Hostage CEO): Lagnesh is trapped between enemies.' });
            }

            // 2. Exalted in Dusthana
            if (lagneshData.dignity === 'Uccha' && [6, 8, 12].includes(lagneshData.house)) {
                conditions.push({ type: 'danger', text: 'Dusthana में उच्च (Exalted in Bad Sector): High power applied to wrong areas (enemies, debts, obsessions).' });
            }

            // 3. Rahu/Ketu Conjunction
            let hasRahu = false, hasKetu = false;
            getHouse(lagneshData.house).forEach(p => {
                if (p.name.includes('Rahu')) hasRahu = true;
                if (p.name.includes('Ketu')) hasKetu = true;
            });
            if (hasRahu) conditions.push({ type: 'warning', text: 'राहु का ग्रहण (The Delusional King): Immense ambition but high risk of ego-driven downfall.' });
            if (hasKetu) conditions.push({ type: 'warning', text: 'केतु का ग्रहण (The Detached CEO): High capability but severe dissatisfaction or isolation.' });

            // 4. Benefic Aspects
            // Simple check: Is Jupiter or Venus in the 7th from Lagnesh? Or Jupiter 5th/9th?
            let hasBeneficAspect = false;
            let aspectsOnLagnesh = [];

            // We can approximate aspect logic here for simplicity, or just check Jupiter.
            // Jupiter aspects 5, 7, 9 from itself.
            const jup = results.find(p => p.name.includes('Jupiter'));
            if (jup && !jup.isCombust) {
                let d = (lagneshData.house - jup.house + 12) % 12; // distance
                if (d === 0 || d === 4 || d === 6 || d === 8) { // houses 1, 5, 7, 9
                    hasBeneficAspect = true;
                }
            }
            if (hasBeneficAspect) {
                conditions.push({ type: 'success', text: 'बोर्ड ऑफ डायरेक्टर्स (Board of Directors): Divine shield from Jupiter/Benefics protects against downfall.' });
            }

            // 5. Neechbhanga / Underdog
            if (lagneshData.dignity === 'Neecha') {
                conditions.push({ type: 'info', text: 'द अंडरडॉग (The Underdog): Severe initial struggle required to unlock true potential.' });
            }

            // 6. Avastha (Battery)
            let avasthaName = 'Unknown';
            let avasthaPower = 0;
            const isOdd = lagneshData.sign % 2 === 0;
            const deg = lagneshData.degreeInSign;
            if (isOdd) {
                if (deg <= 6) { avasthaName = "बाल (Infant)"; avasthaPower = 25; }
                else if (deg <= 12) { avasthaName = "कुमार (Adolescent)"; avasthaPower = 50; }
                else if (deg <= 18) { avasthaName = "युवा (Youth)"; avasthaPower = 100; }
                else if (deg <= 24) { avasthaName = "वृद्ध (Old)"; avasthaPower = 10; }
                else { avasthaName = "मृत (Dead)"; avasthaPower = 0; }
            } else {
                if (deg <= 6) { avasthaName = "मृत (Dead)"; avasthaPower = 0; }
                else if (deg <= 12) { avasthaName = "वृद्ध (Old)"; avasthaPower = 10; }
                else if (deg <= 18) { avasthaName = "युवा (Youth)"; avasthaPower = 100; }
                else if (deg <= 24) { avasthaName = "कुमार (Adolescent)"; avasthaPower = 50; }
                else { avasthaName = "बाल (Infant)"; avasthaPower = 25; }
            }

            ceoStatus = {
                key: lagneshKey,
                name: lagneshData.name,
                house: lagneshData.house,
                sign: lagneshData.sign,
                dignity: lagneshData.dignity,
                isRetrograde: lagneshData.isRetrograde,
                isCombust: lagneshData.isCombust || false,
                conditions: conditions,
                avastha: { name: avasthaName, power: avasthaPower }
            };
        }`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("Patched server CEO logic.");
