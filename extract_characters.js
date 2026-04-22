const fs = require('fs');

// Read the library data file
const content = fs.readFileSync('js/data/library-data.js', 'utf8');

// Extract just the content of Sarga 1 using a regex or simple string manipulation
// We know it starts with 'पहला सर्ग' and ends before 'दूसरा सर्ग' or the end of the string block
const sarga1StartMatch = content.indexOf('बालकाण्ड\\n\\nपहला सर्ग');
let textToAnalyze = "";

if (sarga1StartMatch !== -1) {
    const startIdx = content.indexOf('तपस्वी वाल्मीकिजीने', sarga1StartMatch);
    const endIdx = content.indexOf('इस प्रकार श्रीवाल्मीकिनिर्मित', startIdx);
    if (startIdx !== -1 && endIdx !== -1) {
        textToAnalyze = content.substring(startIdx, endIdx);
        console.log("Found Sarga 1 text, length:", textToAnalyze.length);
    } else {
        console.log("Could not find start or end index.");
        // Try another way, just take the whole string
        const startString = "content: `॥ श्रीसीतारामचन्द्राभ्यां नमः ॥";
        const endString = "पहला सर्ग पूरा हुआ॥\\n१॥`";
        const idx1 = content.indexOf(startString);
        const idx2 = content.indexOf(endString);
        if(idx1 !== -1 && idx2 !== -1) {
           textToAnalyze = content.substring(idx1, idx2 + endString.length);
           console.log("Found Sarga 1 text via fallback, length:", textToAnalyze.length);
        }
    }
} else {
    console.log("Could not find Sarga 1 start marker.");
}

// Basic list of expected characters to look for (this helps the extraction)
const commonNames = [
    "वाल्मीकि", "नारद", "राम", "श्रीरामचन्द्र", "दशरथ", "कौसल्या",
    "कैकेयी", "भरत", "सुमित्रा", "लक्ष्मण", "सीता", "रोहिणी",
    "गुह", "भरद्वाज", "वसिष्ठ", "विराध", "शरभंग", "सुतीक्ष्ण", "अगस्त्य",
    "शूर्पणखा", "खर", "दूषण", "त्रिशिरा", "रावण", "मारीच", "जटायु",
    "कबन्ध", "शबरी", "हनुमान्", "सुग्रीव", "वाली", "तारा", "दुन्दुभि",
    "सम्पाति", "अक्षकुमार", "ब्रह्मा", "नल", "विभीषण"
];

let foundNames = new Set();

commonNames.forEach(name => {
    if (textToAnalyze.includes(name)) {
        foundNames.add(name);
    }
});

console.log("\nCharacters found:");
Array.from(foundNames).sort().forEach(name => console.log("- " + name));
