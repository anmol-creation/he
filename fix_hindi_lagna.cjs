const fs = require('fs');

let serverCode = fs.readFileSync('kundali-engine/server.js', 'utf8');

// Replace Planet Names
serverCode = serverCode.replace(
    /const planetNames = \['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu'\];/g,
    "const planetNames = ['सूर्य (Sun)', 'चंद्र (Moon)', 'मंगल (Mars)', 'बुध (Mercury)', 'गुरु (Jupiter)', 'शुक्र (Venus)', 'शनि (Saturn)', 'राहु (Rahu)'];"
);

// Replace Tithi Names
serverCode = serverCode.replace(
    /const tithiNames = \[\s*"Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",\s*"Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",\s*"Trayodashi", "Chaturdashi", "Purnima", \/\/ Shukla Paksha\s*"Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",\s*"Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",\s*"Trayodashi", "Chaturdashi", "Amavasya" \/\/ Krishna Paksha\s*\];/g,
    `const tithiNames = [
            "प्रतिपदा (Pratipada)", "द्वितीया (Dwitiya)", "तृतीया (Tritiya)", "चतुर्थी (Chaturthi)", "पंचमी (Panchami)", "षष्ठी (Shashthi)",
            "सप्तमी (Saptami)", "अष्टमी (Ashtami)", "नवमी (Navami)", "दशमी (Dashami)", "एकादशी (Ekadashi)", "द्वादशी (Dwadashi)",
            "त्रयोदशी (Trayodashi)", "चतुर्दशी (Chaturdashi)", "पूर्णिमा (Purnima)", // Shukla Paksha
            "प्रतिपदा (Pratipada)", "द्वितीया (Dwitiya)", "तृतीया (Tritiya)", "चतुर्थी (Chaturthi)", "पंचमी (Panchami)", "षष्ठी (Shashthi)",
            "सप्तमी (Saptami)", "अष्टमी (Ashtami)", "नवमी (Navami)", "दशमी (Dashami)", "एकादशी (Ekadashi)", "द्वादशी (Dwadashi)",
            "त्रयोदशी (Trayodashi)", "चतुर्दशी (Chaturdashi)", "अमावस्या (Amavasya)" // Krishna Paksha
        ];`
);
serverCode = serverCode.replace(
    /const paksha = tithiNumber <= 15 \? "Shukla" : "Krishna";/g,
    'const paksha = tithiNumber <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";'
);

// Replace Ascendant calculation
serverCode = serverCode.replace(
    /const houses = swisseph\.swe_houses\(jd, parseFloat\(lat\), parseFloat\(lng\), 'P'\);/g,
    "const flags = swisseph.SEFLG_SIDEREAL;\n        const houses = swisseph.swe_houses_ex(jd, flags, parseFloat(lat), parseFloat(lng), 'P');"
);

fs.writeFileSync('kundali-engine/server.js', serverCode);

// Fix Frontend App.js for Hindi Sign Names
let appCode = fs.readFileSync('kundali-engine/app.js', 'utf8');
appCode = appCode.replace(
    /const signNames = \["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"\];/g,
    'const signNames = ["मेष (Aries)", "वृषभ (Taurus)", "मिथुन (Gemini)", "कर्क (Cancer)", "सिंह (Leo)", "कन्या (Virgo)", "तुला (Libra)", "वृश्चिक (Scorpio)", "धनु (Sagittarius)", "मकर (Capricorn)", "कुंभ (Aquarius)", "मीन (Pisces)"];'
);
appCode = appCode.replace(
    /innerHTML = `Lagna \(Ascendant\): \$\{ascSignName\} \(\$\{data\.ascendant\.toFixed\(2\)\}°\)`/g,
    'innerHTML = `लग्न (Ascendant): ${ascSignName} (${data.ascendant.toFixed(2)}°)`'
);
appCode = appCode.replace(
    /innerHTML = `Tithi: \$\{data\.tithi\.name\} \(\$\{\(data\.tithi\.percentage \* 100\)\.toFixed\(1\)\}% complete\)`/g,
    'innerHTML = `तिथि: ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(1)}% पूर्ण)`'
);

// Also change headers in app.js table creation
appCode = appCode.replace(
    /<th>Planet<\/th>/g, '<th>ग्रह (Planet)</th>'
);
appCode = appCode.replace(
    /<th>Zodiac Sign<\/th>/g, '<th>राशि (Sign)</th>'
);
appCode = appCode.replace(
    /<th>Degrees<\/th>/g, '<th>अंश (Degrees)</th>'
);

fs.writeFileSync('kundali-engine/app.js', appCode);

// Update Search Frontend
let searchCode = fs.readFileSync('kundali-engine/search.js', 'utf8');
searchCode = searchCode.replace(
    /<th>Tithi<\/th>/g, '<th>तिथि (Tithi)</th>'
);
fs.writeFileSync('kundali-engine/search.js', searchCode);
