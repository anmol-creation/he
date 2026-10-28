const fs = require('fs');

const doshasPath = 'kundali-engine/data/rules/doshas.json';
let doshas = JSON.parse(fs.readFileSync(doshasPath, 'utf8'));

// Filter out old doshas to be rewritten dynamically
doshas = doshas.filter(d =>
    !['guru_chandal_dosha', 'kaal_sarp_dosha', 'angarak_dosha', 'shrapit_dosha'].includes(d.id)
);

fs.writeFileSync(doshasPath, JSON.stringify(doshas, null, 2));

const majorDoshas = [
    {
        id: "dosha_kaal_sarp",
        name: "कालसर्प दोष (Kaal Sarp Dosha)",
        type: "दोष",
        description: "सभी 7 ग्रह राहु और केतु के बीच में आ गए हैं। यह व्यक्ति के जीवन में भारी संघर्ष, विलंब (Delay), और अचानक उतार-चढ़ाव लाता है, भले ही कुंडली में कितने भी राजयोग क्यों न हों।",
        combinations: [{ type: "major_dosha", subtype: "kaal_sarp" }],
        cancellations: [],
        score: -50,
        frequency_multiplier: 1
    },
    {
        id: "dosha_mangalik",
        name: "मांगलिक दोष (Mangal Dosha)",
        type: "दोष",
        description: "मंगल का 1, 4, 7, 8 या 12वें भाव में होना। यह विवाह, वैवाहिक जीवन और स्वभाव (क्रोध) में गंभीर चुनौतियाँ पैदा करता है।",
        combinations: [{ type: "major_dosha", subtype: "mangalik" }],
        cancellations: [],
        score: -40,
        frequency_multiplier: 1
    },
    {
        id: "dosha_guru_chandal",
        name: "गुरु चांडाल दोष (Guru Chandal Dosha)",
        type: "दोष",
        description: "गुरु (ज्ञान) और राहु (धोखा/भ्रम) की युति। व्यक्ति अत्यधिक चालाक हो सकता है, धर्म/नियमों को तोड़ सकता है, और उसके नैतिक मूल्यों में गिरावट आ सकती है।",
        combinations: [{ type: "major_dosha", subtype: "guru_chandal" }],
        cancellations: [],
        score: -35,
        frequency_multiplier: 1
    },
    {
        id: "dosha_shrapit",
        name: "श्रापित दोष (Shrapit Dosha)",
        type: "दोष",
        description: "शनि (कर्म) और राहु (भ्रम) की युति। यह पिछले जन्म के बुरे कर्मों (श्राप) का संकेत है। जीवन के हर क्षेत्र में भयंकर रुकावटें और निराशा आती है।",
        combinations: [{ type: "major_dosha", subtype: "shrapit" }],
        cancellations: [],
        score: -45,
        frequency_multiplier: 1
    },
    {
        id: "dosha_angarak",
        name: "अंगारक दोष (Angarak Dosha)",
        type: "दोष",
        description: "मंगल (अग्नि) और राहु/केतु की युति। यह व्यक्ति को अत्यंत क्रोधी, आक्रामक और जिद्दी बनाता है। दुर्घटनाओं (Accidents) का खतरा रहता है।",
        combinations: [{ type: "major_dosha", subtype: "angarak" }],
        cancellations: [],
        score: -35,
        frequency_multiplier: 1
    },
    {
        id: "dosha_grahan",
        name: "ग्रहण दोष (Grahan Dosha)",
        type: "दोष",
        description: "सूर्य या चंद्रमा का राहु/केतु के साथ होना। यह आत्मविश्वास (सूर्य) या मानसिक शांति (चंद्रमा) को पूरी तरह ग्रहण लगा देता है। डिप्रेशन और निर्णय लेने में गलती।",
        combinations: [{ type: "major_dosha", subtype: "grahan" }],
        cancellations: [],
        score: -40,
        frequency_multiplier: 1
    }
];

fs.writeFileSync('kundali-engine/data/rules/major_doshas.json', JSON.stringify(majorDoshas, null, 2));
