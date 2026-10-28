const fs = require('fs');

const yogas = [];
const subhHouses = [1, 2, 4, 5, 7, 9, 10, 11];
const trikHouses = [6, 8, 12];
const thirdHouse = 3;

let idCounter = 1;

// Helper to determine type and score
function determineType(h1, h2) {
    if (subhHouses.includes(h1) && subhHouses.includes(h2)) return { type: 'महा योग', score: 30, cat: 'Maha' };
    if ((h1 === 3 && subhHouses.includes(h2)) || (h2 === 3 && subhHouses.includes(h1))) return { type: 'खल योग', score: 15, cat: 'Khala' };
    if (trikHouses.includes(h1) && trikHouses.includes(h2)) return { type: 'विपरीत राजयोग', score: 40, cat: 'Vipreet' };
    if (trikHouses.includes(h1) || trikHouses.includes(h2)) return { type: 'दैन्य योग', score: -20, cat: 'Dainya' };
    return { type: 'सामान्य परिवर्तन', score: 10, cat: 'General' };
}

// Generate all combinations 1 to 12
for (let h1 = 1; h1 <= 12; h1++) {
    for (let h2 = h1 + 1; h2 <= 12; h2++) {
        let meta = determineType(h1, h2);

        let desc = "";
        if (meta.cat === 'Maha') {
            desc = `भाव ${h1} और ${h2} के स्वामियों का महा परिवर्तन योग। यह व्यक्ति को अपने क्षेत्र में अपार सफलता, धन, सुख और राजा के समान प्रतिष्ठा दिलाता है।`;
            if (h1===1 && h2===9) desc = "लग्न और नवम भाव का महा परिवर्तन। स्वयं का भाग्य से जुड़ाव। अत्यंत सौभाग्यशाली और राजसी जीवन।";
            if (h1===9 && h2===10) desc = "धर्म-कर्माधिपति महा परिवर्तन योग। करियर और भाग्य का सर्वोच्च शिखर।";
        } else if (meta.cat === 'Khala') {
            desc = `भाव ${h1} और ${h2} का खल परिवर्तन योग। जीवन में अत्यधिक संघर्ष और पराक्रम के बाद सफलता। व्यक्ति कभी बहुत उदार तो कभी बहुत कठोर हो जाता है।`;
        } else if (meta.cat === 'Dainya') {
            desc = `भाव ${h1} और ${h2} का दैन्य योग। जीवन में कर्ज, रोग, शत्रु बाधा या अपमान का सामना करना पड़ सकता है। बनते काम बिगड़ने का भय।`;
            if (h1===1 && h2===6) desc = "लग्न और षष्ठ भाव का दैन्य योग। स्वास्थ्य समस्याएं और शत्रुओं से जीवन भर संघर्ष।";
            if (h1===1 && h2===8) desc = "लग्न और अष्टम भाव का दैन्य योग। जीवन में अचानक भारी उतार-चढ़ाव और गहरे संकटों का सामना।";
            if (h1===1 && h2===12) desc = "लग्न और व्यय भाव का दैन्य योग। खर्चे, दूर स्थानों पर भटकाव या अलगाव की स्थिति।";
        } else if (meta.cat === 'Vipreet') {
            desc = `भाव ${h1} और ${h2} का विपरीत राजयोग। बुराई ने बुराई को काट दिया। भारी संकटों, पतन या शत्रुओं के विनाश के बाद अचानक से मिलने वाली विशाल सफलता।`;
        }

        yogas.push({
            id: `parivartan_${h1}_${h2}`,
            name: `${h1} और ${h2} भाव का ${meta.type}`,
            type: meta.score > 0 ? "राजयोग" : "दोष",
            description: desc,
            combinations: [
                {
                    type: "exact_parivartan",
                    houseA: h1,
                    houseB: h2
                }
            ],
            cancellations: [
                {
                    type: "combust_or_mrit_lord",
                    description: "परिवर्तन करने वाला कोई भी ग्रह यदि अस्त या मृत हो, तो यह योग निष्फल (रद्द) हो जाता है।"
                }
            ],
            score: meta.score,
            frequency_multiplier: 1
        });
    }
}

fs.writeFileSync('kundali-engine/data/rules/parivartan.json', JSON.stringify(yogas, null, 2));
console.log(`Generated ${yogas.length} Parivartan Yogas.`);
