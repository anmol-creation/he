const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// I also need to make sure d9Sign is passed from server.js to pMap!
const search2 = `        pMap[nameEn] = {
            sign: p.sign,
            house: house,
            degreeInSign: p.degreeInSign,
            longitude: p.longitude,
            aspects: getAspectingHouses(nameEn, house),
            dignity: p.dignity,
            isCombust: p.isCombust || false,
            isRetrograde: p.isRetrograde || false`;

const replace2 = `        pMap[nameEn] = {
            sign: p.sign,
            d9Sign: p.d9Sign,
            house: house,
            degreeInSign: p.degreeInSign,
            longitude: p.longitude,
            aspects: getAspectingHouses(nameEn, house),
            dignity: p.dignity,
            isCombust: p.isCombust || false,
            isVargottam: p.isVargottam || false,
            isRetrograde: p.isRetrograde || false`;

content = content.replace(search2, replace2);

// Now, ensure the labels are passed in the returned detectedYogas
const search3 = `            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: rule.frequency_multiplier,
                isCancelled: isCancelled,
                modifier_note: modifierNote
            });`;
const replace3 = `            detectedYogas.push({
                id: rule.id,
                name: finalName,
                type: rule.type,
                description: rule.description,
                combinationsMatched: matchedCombinationsCount,
                score: finalScore,
                rarityScore: rule.frequency_multiplier,
                isCancelled: isCancelled,
                modifier_note: modifierNote,
                labels: mahapurushLabels || []
            });`;

content = content.replace(search3, replace3);
fs.writeFileSync(file, content);
console.log("Patched yoga-detector logic 2.");
