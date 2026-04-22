const fs = require('fs');

const content = fs.readFileSync('js/data/library-data.js', 'utf8');
const textToAnalyze = content; // Just use the whole file since it only has Sarga 1 right now

const names = [
    "वाल्मीकि", "नारद", "राम", "श्रीरामचन्द्र", "दशरथ", "कौसल्या",
    "कैकेयी", "भरत", "सुमित्रा", "लक्ष्मण", "सीता", "रोहिणी",
    "गुह", "भरद्वाज", "वसिष्ठ", "विराध", "शरभंग", "सुतीक्ष्ण", "अगस्त्य",
    "शूर्पणखा", "खर", "दूषण", "त्रिशिरा", "रावण", "मारीच", "जटायु",
    "कबन्ध", "शबरी", "हनुमान्", "सुग्रीव", "वाली", "तारा", "दुन्दुभि",
    "सम्पाति", "अक्षकुमार", "ब्रह्मा", "नल", "विभीषण",
    "इक्ष्वाकु", "विष्णु", "प्रजापति", "कुबेर", "धर्मराज", "जनक"
];

let foundNames = new Set();

names.forEach(name => {
    if (textToAnalyze.includes(name)) {
        foundNames.add(name);
    }
});

console.log("Found characters:");
console.log(Array.from(foundNames).sort().join('\n'));
