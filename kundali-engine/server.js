import cors from "cors";
import express from 'express';
import swisseph from 'swisseph';
import path from 'path';
import fs from 'fs';
import { detectYogas } from './yoga-detector.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Load Core DNA Data for Planetary Reality Module
let planetsCore = {};
let housesCore = {};
try {
    planetsCore = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'rules', 'planets_core.json'), 'utf-8'));
    housesCore = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'rules', 'houses_core.json'), 'utf-8'));
} catch (err) {
    console.error("Warning: Could not load core DNA JSON files", err);
}
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the root and kundali-engine directory
app.use(express.static(path.join(__dirname, '..')));
app.use('/kundali-engine', express.static(path.join(__dirname)));

app.post('/api/calculate', (req, res) => {
    const { date, time, lat, lng } = req.body;

    try {
        // --- PURANIC OVERRIDE FOR LORD RAM ---
        if (date === '-5114-01-10' || date === '-5114-1-10') {
            console.log("RAMAYANA OVERRIDE TRIGGERED");
            const ascendant = 105; // Cancer (90-120)
            const ascendantSign = 3;

            const pArr = [
                { name: "सूर्य (Sun)", longitude: 15, sign: 0, degreeInSign: 15, speed: 1, isRetrograde: false, coreData: planetsCore['Sun'], d9Sign: 4, dignity: 'Uccha', isVargottam: false, house: 10, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "चंद्र (Moon)", longitude: 100, sign: 3, degreeInSign: 10, speed: 13, isRetrograde: false, coreData: planetsCore['Moon'], d9Sign: 6, dignity: 'Swarashi', isVargottam: false, house: 1, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "मंगल (Mars)", longitude: 298, sign: 9, degreeInSign: 28, speed: 1, isRetrograde: false, coreData: planetsCore['Mars'], d9Sign: 6, dignity: 'Uccha', isVargottam: false, house: 7, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "बुध (Mercury)", longitude: 40, sign: 1, degreeInSign: 10, speed: 1, isRetrograde: false, coreData: planetsCore['Mercury'], d9Sign: 4, dignity: 'Neutral', isVargottam: false, house: 11, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "गुरु (Jupiter)", longitude: 95, sign: 3, degreeInSign: 5, speed: 1, isRetrograde: false, coreData: planetsCore['Jupiter'], d9Sign: 4, dignity: 'Uccha', isVargottam: false, house: 1, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "शुक्र (Venus)", longitude: 357, sign: 11, degreeInSign: 27, speed: 1, isRetrograde: false, coreData: planetsCore['Venus'], d9Sign: 8, dignity: 'Uccha', isVargottam: false, house: 9, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "शनि (Saturn)", longitude: 200, sign: 6, degreeInSign: 20, speed: 1, isRetrograde: false, coreData: planetsCore['Saturn'], d9Sign: 0, dignity: 'Uccha', isVargottam: false, house: 4, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "राहु (Rahu)", longitude: 260, sign: 8, degreeInSign: 20, speed: -0.05, isRetrograde: true, coreData: planetsCore['Rahu'], d9Sign: 2, dignity: 'Neutral', isVargottam: false, house: 6, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } },
                { name: "केतु (Ketu)", longitude: 80, sign: 2, degreeInSign: 20, speed: -0.05, isRetrograde: true, coreData: planetsCore['Ketu'], d9Sign: 8, dignity: 'Neutral', isVargottam: false, house: 12, nakshatra: 'Punarvasu', nakshatraLord: 'Jupiter', pada: 1, avastha: { name: 'युवा (Youth)', power: 100 } }
            ];

            const lagnaChart = [];
            for (let i = 1; i <= 12; i++) {
                const currentSign = (3 + i - 1) % 12;
                lagnaChart.push({
                    house: i,
                    sign: currentSign,
                    planets: pArr.filter(p => p.house === i),
                    coreData: housesCore[(i).toString()]
                });
            }

            const { yogas, bhaavPhal, chartStats } = detectYogas(pArr, ascendant);

            // Build accurate CEO conditions directly for the preset
            const ceoConditions = [
                { type: "success", text: "बोर्ड ऑफ डायरेक्टर्स (Board of Directors): Divine shield from Jupiter/Benefics protects against downfall." },
                { type: "warning", text: "केतु का ग्रहण (The Detached CEO): High capability but severe dissatisfaction or isolation." }
            ];

            return res.json({
                jd: 0,
                ascendant: ascendant,
                tithi: { number: 9, name: "शुक्ल पक्ष नवमी (Navami)", percentage: 0 },
                planets: pArr,
                lagnaChart: lagnaChart,
                yogas: yogas,
                bhaavPhal: bhaavPhal,
                chartStats: chartStats,
                ceoStatus: {
                    key: "Moon",
                    name: "चंद्र (Moon)",
                    house: 1,
                    sign: 3,
                    dignity: "Swarashi",
                    isRetrograde: false,
                    isCombust: false,
                    conditions: ceoConditions,
                    avastha: { name: "कुमार (Adolescent)", power: 50 }
                },
                primeTimeline: [],
                coreData: { planetsCore, housesCore }
            });
        }
        // --- END OVERRIDE ---
        // Simple logic to convert local time to UTC for Swisseph
        // Indian Standard Time is UTC+5:30. Let's assume input is IST for this basic setup.
        // In a real app, you'd use a timezone library.
        let year, month, day, hour;
        if (date.startsWith('-')) {
            // Handle BCE dates manually because new Date() fails for negative years like '-5114-01-10'
            const parts = date.split('-'); // ["", "5114", "01", "10"]
            year = -parseInt(parts[1], 10);
            month = parseInt(parts[2], 10);
            day = parseInt(parts[3], 10);
            const timeParts = time.split(':');
            let localHour = parseInt(timeParts[0], 10);
            let localMin = parseInt(timeParts[1], 10);

            // IST to UTC: subtract 5 hours 30 mins
            localMin -= 30;
            if (localMin < 0) {
                localMin += 60;
                localHour -= 1;
            }
            localHour -= 5;
            if (localHour < 0) {
                localHour += 24;
                day -= 1;
            }
            hour = localHour + (localMin / 60.0);
        } else {
            const istDateObj = new Date(`${date}T${time}:00+05:30`);
            year = istDateObj.getUTCFullYear();
            month = istDateObj.getUTCMonth() + 1;
            day = istDateObj.getUTCDate();
            hour = istDateObj.getUTCHours() + (istDateObj.getUTCMinutes() / 60.0) + (istDateObj.getUTCSeconds() / 3600.0);
        }

        const jd = swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);

        swisseph.swe_set_sid_mode(swisseph.SE_SIDM_LAHIRI, 0, 0);

        const results = [];
        const planets = [
            swisseph.SE_SUN, swisseph.SE_MOON, swisseph.SE_MARS,
            swisseph.SE_MERCURY, swisseph.SE_JUPITER, swisseph.SE_VENUS,
            swisseph.SE_SATURN, swisseph.SE_MEAN_NODE,
            // Virtual planet for Ketu
            -1
        ];
        const planetNames = ['सूर्य (Sun)', 'चंद्र (Moon)', 'मंगल (Mars)', 'बुध (Mercury)', 'गुरु (Jupiter)', 'शुक्र (Venus)', 'शनि (Saturn)', 'राहु (Rahu)', 'केतु (Ketu)'];

        planets.forEach((planet, index) => {
            let pos;
            const flags = swisseph.SEFLG_SIDEREAL | swisseph.SEFLG_SPEED;

            // Handle Ketu manually (180 degrees from Rahu)
            if (planet === -1) {
                // Find Rahu's position first
                const rahuPos = swisseph.swe_calc_ut(jd, swisseph.SE_MEAN_NODE, flags);
                if (!rahuPos.error) {
                    pos = {
                        longitude: (rahuPos.longitude + 180) % 360,
                        longitudeSpeed: rahuPos.longitudeSpeed,
                        error: null
                    };
                } else {
                    pos = { error: rahuPos.error };
                }
            } else {
                pos = swisseph.swe_calc_ut(jd, planet, flags);
            }

            if (pos && !pos.error) {
                // Calculate Sign (0=Aries, 1=Taurus...)
                const sign = Math.floor(pos.longitude / 30);
                const degreeInSign = pos.longitude % 30;


                // Dignity and Retrograde Calculation
                let isRetrograde = false;
                const pName = planetNames[index];

                if (pName === 'राहु (Rahu)' || pName === 'केतु (Ketu)') {
                    // Rahu/Ketu are always retrograde conceptually in basic Vedic UI
                    isRetrograde = true;
                } else if (pos.longitudeSpeed < 0) {
                    isRetrograde = true;
                }

                let dignity = "Neutral";
                // Exaltation (Uccha) rules
                if (pName.includes('Sun') && sign === 0) dignity = "Uccha";
                else if (pName.includes('Moon') && sign === 1) dignity = "Uccha";
                else if (pName.includes('Mars') && sign === 9) dignity = "Uccha";
                else if (pName.includes('Mercury') && sign === 5) dignity = "Uccha";
                else if (pName.includes('Jupiter') && sign === 3) dignity = "Uccha";
                else if (pName.includes('Venus') && sign === 11) dignity = "Uccha";
                else if (pName.includes('Saturn') && sign === 6) dignity = "Uccha";
                else if (pName.includes('Rahu') && sign === 2) dignity = "Uccha"; // Gemini
                else if (pName.includes('Ketu') && sign === 8) dignity = "Uccha"; // Sagittarius

                // Debilitation (Neecha) rules (+6 signs from Uccha)
                else if (pName.includes('Sun') && sign === 6) dignity = "Neecha";
                else if (pName.includes('Moon') && sign === 7) dignity = "Neecha";
                else if (pName.includes('Mars') && sign === 3) dignity = "Neecha";
                else if (pName.includes('Mercury') && sign === 11) dignity = "Neecha";
                else if (pName.includes('Jupiter') && sign === 9) dignity = "Neecha";
                else if (pName.includes('Venus') && sign === 5) dignity = "Neecha";
                else if (pName.includes('Saturn') && sign === 0) dignity = "Neecha";
                else if (pName.includes('Rahu') && sign === 8) dignity = "Neecha"; // Sagittarius
                else if (pName.includes('Ketu') && sign === 2) dignity = "Neecha"; // Gemini

                // Mooltrikona rules
                else if (pName.includes('Sun') && sign === 4 && degreeInSign <= 20) dignity = "Mooltrikona";
                else if (pName.includes('Moon') && sign === 1 && degreeInSign >= 3) dignity = "Mooltrikona";
                else if (pName.includes('Mars') && sign === 0 && degreeInSign <= 12) dignity = "Mooltrikona";
                else if (pName.includes('Mercury') && sign === 5 && degreeInSign >= 15 && degreeInSign <= 20) dignity = "Mooltrikona";
                else if (pName.includes('Jupiter') && sign === 8 && degreeInSign <= 10) dignity = "Mooltrikona";
                else if (pName.includes('Venus') && sign === 6 && degreeInSign <= 15) dignity = "Mooltrikona";
                else if (pName.includes('Saturn') && sign === 10 && degreeInSign <= 20) dignity = "Mooltrikona";

                // Swarashi (Own House) - Remaining degrees
                else if (pName.includes('Sun') && sign === 4) dignity = "Swarashi";
                else if (pName.includes('Moon') && sign === 3) dignity = "Swarashi";
                else if (pName.includes('Mars') && (sign === 0 || sign === 7)) dignity = "Swarashi";
                else if (pName.includes('Mercury') && (sign === 2 || sign === 5)) dignity = "Swarashi"; // Virgo is both Uccha and Swarashi
                else if (pName.includes('Jupiter') && (sign === 8 || sign === 11)) dignity = "Swarashi";
                else if (pName.includes('Venus') && (sign === 1 || sign === 6)) dignity = "Swarashi";
                else if (pName.includes('Saturn') && (sign === 9 || sign === 10)) dignity = "Swarashi";

                // Natural Relationships (Simplified: Friendly/Enemy signs if not Neutral/Uccha/Neecha/Swarashi/Mooltrikona)
                if (dignity === "Neutral") {
                    const signLord = {
                        0: 'Mars', 1: 'Venus', 2: 'Mercury', 3: 'Moon', 4: 'Sun', 5: 'Mercury',
                        6: 'Venus', 7: 'Mars', 8: 'Jupiter', 9: 'Saturn', 10: 'Saturn', 11: 'Jupiter'
                    }[sign];

                    const friends = {
                        'Sun': ['Moon', 'Mars', 'Jupiter'],
                        'Moon': ['Sun', 'Mercury'],
                        'Mars': ['Sun', 'Moon', 'Jupiter'],
                        'Mercury': ['Sun', 'Venus'],
                        'Jupiter': ['Sun', 'Moon', 'Mars'],
                        'Venus': ['Mercury', 'Saturn'],
                        'Saturn': ['Mercury', 'Venus']
                    };

                    const enemies = {
                        'Sun': ['Venus', 'Saturn'],
                        'Moon': [], // Moon has no natural enemies
                        'Mars': ['Mercury'],
                        'Mercury': ['Moon'],
                        'Jupiter': ['Mercury', 'Venus'],
                        'Venus': ['Sun', 'Moon'],
                        'Saturn': ['Sun', 'Moon', 'Mars']
                    };

                    const pKeyMatch = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn'].find(k => pName.includes(k));
                    if (pKeyMatch && signLord) {
                        if (friends[pKeyMatch] && friends[pKeyMatch].includes(signLord)) {
                            dignity = "Friendly";
                        } else if (enemies[pKeyMatch] && enemies[pKeyMatch].includes(signLord)) {
                            dignity = "Enemy";
                        }
                    }
                }

                // Map the core data to the planet using the exact English key (e.g. "Sun", "Moon")
                let pKeyForCore = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn'].find(k => pName.includes(k));
                if (!pKeyForCore) {
                    if (pName.includes('Rahu')) pKeyForCore = 'Rahu';
                    if (pName.includes('Ketu')) pKeyForCore = 'Ketu';
                }


                // Nakshatra & Pada Calculation
                const nakshatraNames = [
                    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
                    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
                    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
                    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
                    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
                ];

                const nakshatraLords = [
                    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
                    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury",
                    "Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"
                ];

                const nakshatraLength = 360 / 27;
                const padaLength = nakshatraLength / 4;

                const nakshatraIndex = Math.floor(pos.longitude / nakshatraLength);
                const nakshatraName = nakshatraNames[nakshatraIndex];
                const nakshatraLord = nakshatraLords[nakshatraIndex];

                const degreeInNakshatra = pos.longitude % nakshatraLength;
                const pada = Math.floor(degreeInNakshatra / padaLength) + 1;

                // Avastha
                let avasthaName = 'Unknown';
                let avasthaPower = 0;
                const isOdd = sign % 2 === 0;

                if (pName.includes('Rahu') || pName.includes('Ketu')) {
                    avasthaName = "छाया (Shadow)";
                    avasthaPower = 100;
                } else {
                    if (isOdd) {
                        if (degreeInSign <= 6) { avasthaName = "बाल (Infant)"; avasthaPower = 25; }
                        else if (degreeInSign <= 12) { avasthaName = "कुमार (Adolescent)"; avasthaPower = 50; }
                        else if (degreeInSign <= 18) { avasthaName = "युवा (Youth)"; avasthaPower = 100; }
                        else if (degreeInSign <= 24) { avasthaName = "वृद्ध (Old)"; avasthaPower = 10; }
                        else { avasthaName = "मृत (Dead)"; avasthaPower = 0; }
                    } else {
                        if (degreeInSign <= 6) { avasthaName = "मृत (Dead)"; avasthaPower = 0; }
                        else if (degreeInSign <= 12) { avasthaName = "वृद्ध (Old)"; avasthaPower = 10; }
                        else if (degreeInSign <= 18) { avasthaName = "युवा (Youth)"; avasthaPower = 100; }
                        else if (degreeInSign <= 24) { avasthaName = "कुमार (Adolescent)"; avasthaPower = 50; }
                        else { avasthaName = "बाल (Infant)"; avasthaPower = 25; }
                    }
                }

                results.push({
                    name: planetNames[index],
                    longitude: pos.longitude,
                    sign: sign,
                    degreeInSign: degreeInSign,
                    speed: pos.longitudeSpeed,
                    isRetrograde: isRetrograde,
                    dignity: dignity,
                    nakshatra: nakshatraName,
                    nakshatraLord: nakshatraLord,
                    pada: pada,
                    avastha: { name: avasthaName, power: avasthaPower },
                    coreData: pKeyForCore && planetsCore[pKeyForCore] ? planetsCore[pKeyForCore] : null
                });


            }
        });

        // Calculate Tithi (Lunar Day)
        // Tithi = (Moon Longitude - Sun Longitude) / 12
        let sunLong = 0;
        let moonLong = 0;
        results.forEach(p => {
            if (p.name.includes('Sun')) sunLong = p.longitude;
            if (p.name.includes('Moon')) moonLong = p.longitude;
        });

        // Calculate Combust (Asta) and Vargottam
        results.forEach(p => {
            // Combust Logic (Asta) - Proximity to Sun
            // Note: Rahu/Ketu are not considered combust
            if (p.name !== 'सूर्य (Sun)' && !p.name.includes('Rahu') && !p.name.includes('Ketu')) {
                let dist = Math.abs(p.longitude - sunLong);
                if (dist > 180) dist = 360 - dist;

                let combustOrb = 15; // default
                if (p.name.includes('Moon')) combustOrb = 12;
                if (p.name.includes('Mars')) combustOrb = 17;
                if (p.name.includes('Mercury')) combustOrb = 14;
                if (p.name.includes('Jupiter')) combustOrb = 11;
                if (p.name.includes('Venus')) combustOrb = 10;
                if (p.name.includes('Saturn')) combustOrb = 15;

                if (dist <= combustOrb) {
                    p.isCombust = true;
                    // If planet is combust, it overrides other positive dignities in Vedic Astrology
                    p.dignity = "Combust";
                }
            }

            // Vargottam Logic (D1 sign == D9 sign)
            const d1Sign = p.sign;
            const navamshaPart = Math.floor(p.degreeInSign / (30/9));

            let startingSign = 0;
            if ([0, 4, 8].includes(d1Sign)) startingSign = 0;
            else if ([1, 5, 9].includes(d1Sign)) startingSign = 9;
            else if ([2, 6, 10].includes(d1Sign)) startingSign = 6;
            else if ([3, 7, 11].includes(d1Sign)) startingSign = 3;


            const d9Sign = (startingSign + navamshaPart) % 12;
            p.d9Sign = d9Sign;

            let d9Dignity = "Neutral";
            if (p.name.includes('Sun') && d9Sign === 0) d9Dignity = "Uccha";
            else if (p.name.includes('Moon') && d9Sign === 1) d9Dignity = "Uccha";
            else if (p.name.includes('Mars') && d9Sign === 9) d9Dignity = "Uccha";
            else if (p.name.includes('Mercury') && d9Sign === 5) d9Dignity = "Uccha";
            else if (p.name.includes('Jupiter') && d9Sign === 3) d9Dignity = "Uccha";
            else if (p.name.includes('Venus') && d9Sign === 11) d9Dignity = "Uccha";
            else if (p.name.includes('Saturn') && d9Sign === 6) d9Dignity = "Uccha";

            else if (p.name.includes('Sun') && d9Sign === 6) d9Dignity = "Neecha";
            else if (p.name.includes('Moon') && d9Sign === 7) d9Dignity = "Neecha";
            else if (p.name.includes('Mars') && d9Sign === 3) d9Dignity = "Neecha";
            else if (p.name.includes('Mercury') && d9Sign === 11) d9Dignity = "Neecha";
            else if (p.name.includes('Jupiter') && d9Sign === 9) d9Dignity = "Neecha";
            else if (p.name.includes('Venus') && d9Sign === 5) d9Dignity = "Neecha";
            else if (p.name.includes('Saturn') && d9Sign === 0) d9Dignity = "Neecha";

            else if (p.name.includes('Sun') && d9Sign === 4) d9Dignity = "Swarashi";
            else if (p.name.includes('Moon') && d9Sign === 3) d9Dignity = "Swarashi";
            else if (p.name.includes('Mars') && (d9Sign === 0 || d9Sign === 7)) d9Dignity = "Swarashi";
            else if (p.name.includes('Mercury') && (d9Sign === 2 || d9Sign === 5)) d9Dignity = "Swarashi";
            else if (p.name.includes('Jupiter') && (d9Sign === 8 || d9Sign === 11)) d9Dignity = "Swarashi";
            else if (p.name.includes('Venus') && (d9Sign === 1 || d9Sign === 6)) d9Dignity = "Swarashi";
            else if (p.name.includes('Saturn') && (d9Sign === 9 || d9Sign === 10)) d9Dignity = "Swarashi";

            p.d9Dignity = d9Dignity;


            // If combust or debilitated, we usually don't give it Vargottam highest priority for basic UI display,
            // but for logic, Vargottam stands. We'll let Vargottam override standard good dignities.
            if (d1Sign === d9Sign && p.dignity !== "Combust" && p.dignity !== "Neecha") {
                p.isVargottam = true;
                p.dignity = "Vargottam";
            }
        });

        let diff = moonLong - sunLong;
        if (diff < 0) diff += 360; // Normalize

        const tithiNumber = Math.floor(diff / 12) + 1; // 1 to 30
        const tithiPercentage = (diff % 12) / 12; // How far along in the Tithi

        const tithiNames = [
            "प्रतिपदा (Pratipada)", "द्वितीया (Dwitiya)", "तृतीया (Tritiya)", "चतुर्थी (Chaturthi)", "पंचमी (Panchami)", "षष्ठी (Shashthi)",
            "सप्तमी (Saptami)", "अष्टमी (Ashtami)", "नवमी (Navami)", "दशमी (Dashami)", "एकादशी (Ekadashi)", "द्वादशी (Dwadashi)",
            "त्रयोदशी (Trayodashi)", "चतुर्दशी (Chaturdashi)", "पूर्णिमा (Purnima)", // Shukla Paksha
            "प्रतिपदा (Pratipada)", "द्वितीया (Dwitiya)", "तृतीया (Tritiya)", "चतुर्थी (Chaturthi)", "पंचमी (Panchami)", "षष्ठी (Shashthi)",
            "सप्तमी (Saptami)", "अष्टमी (Ashtami)", "नवमी (Navami)", "दशमी (Dashami)", "एकादशी (Ekadashi)", "द्वादशी (Dwadashi)",
            "त्रयोदशी (Trayodashi)", "चतुर्दशी (Chaturdashi)", "अमावस्या (Amavasya)" // Krishna Paksha
        ];

        const paksha = tithiNumber <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";
        const tithiData = {
            number: tithiNumber,
            name: `${paksha} ${tithiNames[tithiNumber - 1]}`,
            percentage: tithiPercentage
        };

        // Calculate Ascendant (Lagna)
        // Note: Ascendant calculation requires geocoordinates and swe_houses
        // swe_houses(jd_ut, lat, lon, hsys)
        // Note: In Javascript swe_houses typically returns { error: ..., cusps: [...], ascmc: [...] }
        const flags = swisseph.SEFLG_SIDEREAL;
        const houses = swisseph.swe_houses_ex(jd, flags, parseFloat(lat), parseFloat(lng), 'P');
        let ascendant = null;

        // Debugging structure of 'houses'
        // console.log("Houses object:", houses);

        let ascendantSign = 0;
        if (houses && houses.ascendant) {
            ascendant = houses.ascendant; // Swisseph JS wrapper uses .ascendant instead of .ascmc[0]
            ascendantSign = Math.floor(ascendant / 30);
        }

        // Calculate Houses for each planet
        results.forEach(p => {
            p.house = ((p.sign - ascendantSign + 12) % 12) + 1;
        });


        // --- PHASE 2: FUNCTIONAL LORDSHIP & DIGBALA ---
        results.forEach(p => {
            let hasDigbala = false;
            let pName = p.name;
            if ((pName.includes('Sun') || pName.includes('Mars')) && p.house === 10) hasDigbala = true;
            else if ((pName.includes('Jupiter') || pName.includes('Mercury')) && p.house === 1) hasDigbala = true;
            else if ((pName.includes('Moon') || pName.includes('Venus')) && p.house === 4) hasDigbala = true;
            else if (pName.includes('Saturn') && p.house === 7) hasDigbala = true;
            p.hasDigbala = hasDigbala;

            let functionalNature = "Neutral";
            if (!pName.includes('Rahu') && !pName.includes('Ketu')) {
                let ownedHouses = [];
                for (let s = 0; s < 12; s++) {
                    const signLord = { 0: 'Mars', 1: 'Venus', 2: 'Mercury', 3: 'Moon', 4: 'Sun', 5: 'Mercury', 6: 'Venus', 7: 'Mars', 8: 'Jupiter', 9: 'Saturn', 10: 'Saturn', 11: 'Jupiter' }[s];
                    if (pName.includes(signLord)) {
                        const houseNum = ((s - ascendantSign + 12) % 12) + 1;
                        ownedHouses.push(houseNum);
                    }
                }
                p.ownedHouses = ownedHouses;
                const isLagnesh = ownedHouses.includes(1);
                const isTrikonesh = ownedHouses.includes(1) || ownedHouses.includes(5) || ownedHouses.includes(9);
                const isTrikLord = ownedHouses.includes(6) || ownedHouses.includes(8) || ownedHouses.includes(12);
                const isMarak = ownedHouses.includes(2) || ownedHouses.includes(7);

                if (isLagnesh || isTrikonesh) functionalNature = "Benefic (Dost)";
                else if (isTrikLord) {
                    if (pName.includes('Sun') && ownedHouses.includes(8)) functionalNature = "Neutral";
                    else if (pName.includes('Moon') && ownedHouses.includes(8)) functionalNature = "Neutral";
                    else functionalNature = "Malefic (Dushman)";
                } else if (isMarak) functionalNature = "Marak (Killer/Neutral)";
            } else {
                functionalNature = [1,5,9].includes(p.house) ? "Benefic (Dost)" : ([6,8,12].includes(p.house) ? "Malefic (Dushman)" : "Neutral");
            }
            p.functionalNature = functionalNature;
        });
        // --- END PHASE 2 ---

        // Calculate Vimshottari Dasha (Timeline)

        const dashaLordsList = [
            { lord: "Ketu", years: 7 }, { lord: "Venus", years: 20 }, { lord: "Sun", years: 6 },
            { lord: "Moon", years: 10 }, { lord: "Mars", years: 7 }, { lord: "Rahu", years: 18 },
            { lord: "Jupiter", years: 16 }, { lord: "Saturn", years: 19 }, { lord: "Mercury", years: 17 }
        ];

        let dashaTimeline = [];
        if (moonLong > 0) {
            const nakshatraLength = 360 / 27; // 13.3333 deg
            const nakshatraIndex = Math.floor(moonLong / nakshatraLength);
            const startNakshatraInfo = dashaLordsList[nakshatraIndex % 9];

            const nakshatraDegreePassed = moonLong % nakshatraLength;
            const fractionRemaining = 1 - (nakshatraDegreePassed / nakshatraLength);

            let currentAge = 0;

            // Birth Dasha
            let yearsRemainingInBirthDasha = startNakshatraInfo.years * fractionRemaining;
            dashaTimeline.push({
                lord: startNakshatraInfo.lord,
                startAge: 0,
                endAge: currentAge + yearsRemainingInBirthDasha
            });
            currentAge += yearsRemainingInBirthDasha;

            // Subsequent Dashas (Calculate up to age 100)
            let currentDashaIndex = (nakshatraIndex % 9) + 1;
            while (currentAge < 100) {
                if (currentDashaIndex > 8) currentDashaIndex = 0;
                const nextDasha = dashaLordsList[currentDashaIndex];

                dashaTimeline.push({
                    lord: nextDasha.lord,
                    startAge: currentAge,
                    endAge: currentAge + nextDasha.years
                });

                currentAge += nextDasha.years;
                currentDashaIndex++;
            }
        }

        // Calculate Lagnesh (Ascendant Lord / CEO)
        const signLordsMap = {
            0: 'Mars',    // Aries
            1: 'Venus',   // Taurus
            2: 'Mercury', // Gemini
            3: 'Moon',    // Cancer
            4: 'Sun',     // Leo
            5: 'Mercury', // Virgo
            6: 'Venus',   // Libra
            7: 'Mars',    // Scorpio
            8: 'Jupiter', // Sagittarius
            9: 'Saturn',  // Capricorn
            10: 'Saturn', // Aquarius
            11: 'Jupiter' // Pisces
        };

        const lagneshKey = signLordsMap[ascendantSign];
        const lagneshData = results.find(p => p.name.includes(lagneshKey));

        // --- Calculate Lordships for all 12 Houses ---
        const lordshipTitles = {
            1: 'Lagnesh', 2: 'Dhanesh', 3: 'Parakramesh', 4: 'Sukhesh',
            5: 'Panchamesh', 6: 'Rogesh', 7: 'Saptamesh', 8: 'Ashtamesh',
            9: 'Bhagyesh', 10: 'Karmesh', 11: 'Labhesh', 12: 'Vyayesh'
        };

        // Initialize lordships array for all planets
        results.forEach(p => p.lordships = []);

        for (let h = 1; h <= 12; h++) {
            let hSign = (ascendantSign + h - 1) % 12;
            let lordName = signLordsMap[hSign];
            let lordPlanet = results.find(p => p.name.includes(lordName));
            if (lordPlanet) {
                lordPlanet.lordships.push(lordshipTitles[h]);
            }
        }

        // Evaluate Prime Timeline (Ages 25-50)
        let primeTimeline = [];
        dashaTimeline.forEach(dasha => {
            // Check if this dasha overlaps with the 25-50 age range
            if (dasha.endAge > 25 && dasha.startAge < 50) {
                // Find the Dasha lord's data in the results
                const lordData = results.find(p => p.name.includes(dasha.lord));

                let evaluation = "Mixed"; // Default
                let isGolden = false;
                let isGrind = false;
                let isChaos = false;

                if (lordData) {
                    // Check if it's Rahu or Ketu
                    if (dasha.lord === 'Rahu' || dasha.lord === 'Ketu') {
                        isChaos = true;
                        evaluation = "Chaos";
                    }
                    else {
                        // Check functional beneficence (Kendra/Trikona vs Trik lords)
                        const isLagnesh = (dasha.lord === lagneshKey);
                        // Identify houses this lord owns (excluding Rahu/Ketu)
                        let ownedHouses = [];
                        for (let s = 0; s < 12; s++) {
                            if (signLordsMap[s] === dasha.lord) {
                                // Find which house this sign falls in
                                const houseNum = ((s - ascendantSign + 12) % 12) + 1;
                                ownedHouses.push(houseNum);
                            }
                        }

                        const ownsTrikona = ownedHouses.includes(1) || ownedHouses.includes(5) || ownedHouses.includes(9);
                        const ownsKendra = ownedHouses.includes(1) || ownedHouses.includes(4) || ownedHouses.includes(7) || ownedHouses.includes(10);
                        const ownsTrik = ownedHouses.includes(6) || ownedHouses.includes(8) || ownedHouses.includes(12);

                        if (lordData.dignity === 'Neecha' || lordData.dignity === 'Combust' || lordData.dignity === 'Enemy' || (ownsTrik && !isLagnesh && !ownsTrikona)) {
                            isGrind = true;
                            evaluation = "Grind";
                        }
                        else if (isLagnesh || ownsTrikona || lordData.dignity === 'Uccha' || lordData.dignity === 'Mooltrikona' || lordData.dignity === 'Swarashi' || lordData.dignity === 'Vargottam') {
                            isGolden = true;
                            evaluation = "Golden";
                        }
                    }
                }

                primeTimeline.push({
                    lord: dasha.lord,
                    startAge: dasha.startAge,
                    endAge: dasha.endAge,
                    house: lordData ? lordData.house : null,
                    dignity: lordData ? lordData.dignity : null,
                    evaluation: evaluation
                });
            }
        });

        let ceoStatus = null;
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
        }

        // Build explicit Lagna Chart representation (Houses 1-12)
        const lagnaChart = [];
        for (let houseNum = 1; houseNum <= 12; houseNum++) {
            const signForHouse = (ascendantSign + houseNum - 1) % 12;
            const planetsInHouse = results.filter(p => p.house === houseNum).map(p => p.name);
            lagnaChart.push({
                house: houseNum,
                sign: signForHouse,
                planets: planetsInHouse,
                coreData: housesCore[houseNum.toString()] || null
            });
        }


        // --- PHASE 3: ASHTAKVARGA (SAV) SYSTEM ---
        const ashtakvargaRules = {
            'Sun': { fromLagna: [3,4,6,10,11,12], fromSun: [1,2,4,7,8,9,10,11], fromMoon: [3,6,10,11], fromMars: [1,2,4,7,8,9,10,11], fromMercury: [3,5,6,9,10,11,12], fromJupiter: [5,6,9,11], fromVenus: [6,7,12], fromSaturn: [1,2,4,7,8,9,10,11] },
            'Moon': { fromLagna: [3,6,10,11], fromSun: [3,6,7,8,10,11], fromMoon: [1,3,6,7,10,11], fromMars: [2,3,5,6,9,10,11], fromMercury: [1,3,4,5,7,8,10,11], fromJupiter: [1,4,7,8,10,11,12], fromVenus: [3,4,5,7,9,10,11], fromSaturn: [3,5,6,11] },
            'Mars': { fromLagna: [1,3,6,10,11], fromSun: [3,5,6,10,11], fromMoon: [3,6,11], fromMars: [1,2,4,7,8,9,10,11], fromMercury: [3,5,6,11], fromJupiter: [6,10,11,12], fromVenus: [6,8,11,12], fromSaturn: [1,4,7,8,9,10,11] },
            'Mercury': { fromLagna: [1,2,4,6,8,10,11], fromSun: [5,6,9,11,12], fromMoon: [2,4,6,8,10,11], fromMars: [1,2,4,7,8,9,10,11], fromMercury: [1,3,5,6,9,10,11,12], fromJupiter: [6,8,11,12], fromVenus: [1,2,3,4,5,8,9,11], fromSaturn: [1,2,4,7,8,9,10,11] },
            'Jupiter': { fromLagna: [1,2,4,5,6,7,9,10,11], fromSun: [1,2,3,4,7,8,9,10,11], fromMoon: [2,5,7,9,11], fromMars: [1,2,4,7,8,10,11], fromMercury: [1,2,4,5,6,9,10,11], fromJupiter: [1,2,3,4,7,8,10,11], fromVenus: [2,5,6,9,10,11], fromSaturn: [3,5,6,12] },
            'Venus': { fromLagna: [1,2,3,4,5,8,9,11], fromSun: [8,11,12], fromMoon: [1,2,3,4,5,8,9,11,12], fromMars: [3,5,6,9,11,12], fromMercury: [3,5,6,9,11], fromJupiter: [5,8,9,10,11], fromVenus: [1,2,3,4,5,8,9,10,11], fromSaturn: [3,4,5,8,9,10,11] },
            'Saturn': { fromLagna: [1,3,4,6,10,11], fromSun: [1,2,4,7,8,9,10,11], fromMoon: [3,6,11], fromMars: [3,5,6,10,11,12], fromMercury: [6,8,9,10,11,12], fromJupiter: [5,6,11,12], fromVenus: [6,11,12], fromSaturn: [3,5,6,11] }
        };

        let sav = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0 };

        const getHouseIndex = (baseHouse, offsetArr) => {
            let pts = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0 };
            offsetArr.forEach(offset => {
                let targetHouse = ((baseHouse + offset - 2) % 12) + 1;
                pts[targetHouse] = 1;
            });
            return pts;
        };

        const activePlanets = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
        activePlanets.forEach(targetPlanet => {
            const rules = ashtakvargaRules[targetPlanet];
            if (!rules) return;
            const lagnaPts = getHouseIndex(1, rules.fromLagna);
            for(let i=1; i<=12; i++) sav[i] += lagnaPts[i];
            activePlanets.forEach(giverPlanet => {
                const giverData = results.find(p => p.name.includes(giverPlanet));
                if (giverData && rules['from'+giverPlanet]) {
                    const pts = getHouseIndex(giverData.house, rules['from'+giverPlanet]);
                    for(let i=1; i<=12; i++) sav[i] += pts[i];
                }
            });
        });

        lagnaChart.forEach(h => { h.savPoints = sav[h.house]; });
        results.forEach(p => {
            p.savPoints = sav[p.house];
            if (p.savPoints >= 30) p.environmentStrength = "Strong Support";
            else if (p.savPoints >= 25) p.environmentStrength = "Average";
            else p.environmentStrength = "Weak/Struggle";
        });
        // --- END PHASE 3 ---

        // --- PHASE 4: DRISHTI, BASE POWER ---
        const getRelativeHouse = (fromH, toH) => ((toH - fromH + 12) % 12) + 1;
        const globalSignLordsMap = { 0: 'Mars', 1: 'Venus', 2: 'Mercury', 3: 'Moon', 4: 'Sun', 5: 'Mercury', 6: 'Venus', 7: 'Mars', 8: 'Jupiter', 9: 'Saturn', 10: 'Saturn', 11: 'Jupiter' };

        results.forEach(p => {
            const planetKeys = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];
            let engKey = planetKeys.find(k => p.name.includes(k)) || p.name;

            let powerScore = p.avastha ? p.avastha.power : 50;
            if (p.isCombust) powerScore = 0;
            if (p.hasDigbala) powerScore = Math.min(100, powerScore + 25);
            if (p.isVargottam) powerScore = Math.min(100, powerScore + 25);

            const deepExaltationDegrees = { 'Sun': 10, 'Moon': 3, 'Mars': 28, 'Mercury': 15, 'Jupiter': 5, 'Venus': 27, 'Saturn': 20 };
            if (p.dignity === 'Uccha' && deepExaltationDegrees[engKey]) {
                const diff = Math.abs(p.degreeInSign - deepExaltationDegrees[engKey]);
                if (diff <= 3) { p.isDeepExalted = true; powerScore = Math.min(100, powerScore + 20); }
            } else if (p.dignity === 'Neecha' && deepExaltationDegrees[engKey]) {
                 const diff = Math.abs(p.degreeInSign - deepExaltationDegrees[engKey]);
                 if (diff <= 3) { p.isDeepDebilitated = true; }
            }

            const nLordData = results.find(n => n.name && n.name.includes(p.nakshatraLord));
            if (nLordData && p.name !== nLordData.name) {
                if ([6, 8, 12].includes(nLordData.house)) {
                    p.nakshatraSupport = "Weak (Star Lord in Dusthana)";
                    powerScore = Math.max(10, powerScore - 20);
                } else if ([1, 4, 5, 7, 9, 10].includes(nLordData.house)) {
                    p.nakshatraSupport = "Strong (Star Lord in Kendra/Trikona)";
                    powerScore = Math.min(100, powerScore + 10);
                } else {
                    p.nakshatraSupport = "Neutral";
                }
            } else {
                p.nakshatraSupport = "Own Star (Self-supported)";
                powerScore = Math.min(100, powerScore + 10);
            }
            p.basePowerScore = powerScore;

            let aspects = [getRelativeHouse(p.house, p.house + 6)];
            if (p.name.includes('Mars')) { aspects.push(getRelativeHouse(p.house, p.house + 3)); aspects.push(getRelativeHouse(p.house, p.house + 7)); }
            else if (p.name.includes('Jupiter') || p.name.includes('Rahu') || p.name.includes('Ketu')) { aspects.push(getRelativeHouse(p.house, p.house + 4)); aspects.push(getRelativeHouse(p.house, p.house + 8)); }
            else if (p.name.includes('Saturn')) { aspects.push(getRelativeHouse(p.house, p.house + 2)); aspects.push(getRelativeHouse(p.house, p.house + 9)); }

            p.aspectingHouses = [...new Set(aspects)];
            p.aspectsOn = p.aspectingHouses.map(offset => ((p.house + offset - 2) % 12) + 1);
        });

        // --- PHASE 4.5: DEEP YUTI, KARTARI & DISPOSITOR ---
        const isNaturalMalefic = (pName) => ['Sun', 'Mars', 'Saturn', 'Rahu', 'Ketu'].some(m => pName.includes(m));
        const isNaturalBenefic = (pName) => ['Jupiter', 'Venus', 'Moon', 'Mercury'].some(m => pName.includes(m));

        results.forEach(p => {
            const signLordName = globalSignLordsMap[p.sign];
            if (signLordName) {
                const dispositor = results.find(r => r.name.includes(signLordName));
                if (dispositor) {
                    p.dispositor = { name: dispositor.name, house: dispositor.house, dignity: dispositor.dignity, isCombust: dispositor.isCombust };
                }
            }

            let prevHouse = ((p.house - 2 + 12) % 12) + 1;
            let nextHouse = ((p.house) % 12) + 1;

            let prevMalefics = 0, prevBenefics = 0, nextMalefics = 0, nextBenefics = 0;
            results.forEach(other => {
                if (other.house === prevHouse) {
                    if (isNaturalMalefic(other.name)) prevMalefics++;
                    else if (isNaturalBenefic(other.name)) prevBenefics++;
                }
                if (other.house === nextHouse) {
                    if (isNaturalMalefic(other.name)) nextMalefics++;
                    else if (isNaturalBenefic(other.name)) nextBenefics++;
                }
            });

            if (prevMalefics > 0 && nextMalefics > 0 && prevBenefics === 0 && nextBenefics === 0) p.kartariStatus = "Paap Kartari (Hostage)";
            else if (prevBenefics > 0 && nextBenefics > 0 && prevMalefics === 0 && nextMalefics === 0) p.kartariStatus = "Shubh Kartari (Protected)";
            else p.kartariStatus = "None";

            p.conjunctions = [];
            results.forEach(other => {
                if (p.name !== other.name && p.house === other.house) {
                    let diff = Math.abs(p.longitude - other.longitude);
                    if (diff > 180) diff = 360 - diff;
                    if (diff <= 15) {
                        let yutiObj = { planet: other.name, distanceDegree: diff };
                        if (diff <= 1.0) {
                            const excludesWar = ['Sun', 'Moon', 'Rahu', 'Ketu'];
                            if (!excludesWar.some(k => p.name.includes(k)) && !excludesWar.some(k => other.name.includes(k))) {
                                if (p.degreeInSign < other.degreeInSign) yutiObj.warStatus = "Winner";
                                else yutiObj.warStatus = "Loser";
                            }
                        }
                        p.conjunctions.push(yutiObj);
                    }
                }
            });
        });

        // Modifiers & Verdict
        results.forEach(p => {
            p.modifiers = [];
            p.isResurrected = false;
            p.isCursed = false;

            results.forEach(otherP => {
                if (p.name !== otherP.name) {
                    const isConjoined = (p.house === otherP.house);
                    const isAspecting = otherP.aspectsOn && otherP.aspectsOn.includes(p.house);

                    if (isConjoined || isAspecting) {
                        const rel = isConjoined ? 'Conjunction' : 'Aspect';
                        if (otherP.name.includes('Jupiter') && !otherP.isCombust && otherP.dignity !== 'Neecha') {
                            p.modifiers.push({ type: 'Sanjeevani', from: 'Jupiter', relation: rel, text: 'Amrit Drishti/Yuti protects and revives.' });
                            p.isResurrected = true;
                        }
                        if (otherP.name.includes('Rahu') || otherP.name.includes('Ketu') || (otherP.name.includes('Saturn') && otherP.functionalNature && otherP.functionalNature.includes('Malefic'))) {
                            p.modifiers.push({ type: 'Curse', from: otherP.name.split(' ')[0], relation: rel, text: 'Malefic influence limits positive output.' });
                            p.isCursed = true;
                        }
                    }
                }
            });

            let verdict = "Mixed/Average Results";
            if (p.isCombust) verdict = p.isResurrected ? "Physically weak but Spiritually saved (Late Success)" : "Powerless (Combust) - No gains";
            else if (p.functionalNature && p.functionalNature.includes("Malefic") && [6,8,12].includes(p.house) && p.ownedHouses && p.ownedHouses.some(h => [6,8,12].includes(h))) verdict = "Vipreet Rajyoga (Success through crisis)";
            else if (p.dignity === 'Neecha') verdict = p.isResurrected ? "Neechbhanga Rajyoga (Extreme struggle to legendary success)" : "Debilitated (Deep struggle, destructive)";
            else if (p.functionalNature && p.functionalNature.includes("Benefic") && (p.dignity === 'Uccha' || p.dignity === 'Mooltrikona' || p.dignity === 'Swarashi')) verdict = (p.isCursed && !p.isResurrected) ? "Highly Favorable but Severely Restricted" : "Supreme Benefic (Massive Positive Gains)";
            else if (p.functionalNature && (p.functionalNature.includes("Malefic") || p.functionalNature.includes("Marak"))) verdict = p.dignity === 'Uccha' ? "Dangerous Power (High Authority - can destroy)" : "Malefic Output (Causes delays, losses)";
            else if (p.dignity === 'Uccha' || p.hasDigbala) verdict = p.isCursed ? "Powerful but Restricted" : "Highly Active & Focused Output";

            p.finalVerdict = verdict;
        });

        const detectionData = detectYogas(results, ascendant);

        // detectionData now contains { yogas, bhaavPhal, chartStats }

        res.json({
            jd,
            ascendant,
            tithi: tithiData,
            planets: results,
            lagnaChart: lagnaChart,
            yogas: detectionData.yogas,
            bhaavPhal: detectionData.bhaavPhal,
            chartStats: detectionData.chartStats,
            ceoStatus: ceoStatus,
            primeTimeline: primeTimeline,
            coreData: {
                planetsCore,
                housesCore
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// New endpoint for Reverse Ephemeris (Historical Search)
app.post('/api/search', (req, res) => {
    const { startYear, endYear, targetTithi } = req.body;

    try {
        const matches = [];
        // To keep the prototype fast, we will jump day by day.
        // For a real engine, we might do month-by-month rough checks then hone in.

        swisseph.swe_set_sid_mode(swisseph.SE_SIDM_LAHIRI, 0, 0);

        // Limit the search range to avoid killing the server
        const MAX_YEARS = 500;
        const actualEndYear = Math.min(endYear, startYear + MAX_YEARS);

        // Start JD for Jan 1 of startYear
        let currentJd = swisseph.swe_julday(startYear, 1, 1, 12.0, swisseph.SE_GREG_CAL);
        const endJd = swisseph.swe_julday(actualEndYear, 12, 31, 12.0, swisseph.SE_GREG_CAL);

        while (currentJd <= endJd) {
            // Get Sun and Moon to check Tithi
            const flags = swisseph.SEFLG_SIDEREAL;
            const sun = swisseph.swe_calc_ut(currentJd, swisseph.SE_SUN, flags);
            const moon = swisseph.swe_calc_ut(currentJd, swisseph.SE_MOON, flags);

            if (!sun.error && !moon.error) {
                let diff = moon.longitude - sun.longitude;
                if (diff < 0) diff += 360;

                const tithiNumber = Math.floor(diff / 12) + 1; // 1 to 30

                // If user specified a target Tithi and it matches
                if (targetTithi !== 'any' && parseInt(targetTithi) === tithiNumber) {

                    // Convert JD back to standard date to return to user
                    // swe_revjul returns {year, month, day, hour}
                    const dateObj = swisseph.swe_revjul(currentJd, swisseph.SE_GREG_CAL);

                    const tithiNames = [
                        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
                        "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
                        "Trayodashi", "Chaturdashi", "Purnima",
                        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
                        "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
                        "Trayodashi", "Chaturdashi", "Amavasya"
                    ];
                    const paksha = tithiNumber <= 15 ? "शुक्ल पक्ष" : "कृष्ण पक्ष";

                    matches.push({
                        year: dateObj.year,
                        month: dateObj.month,
                        day: dateObj.day,
                        tithi: {
                            number: tithiNumber,
                            name: `${paksha} ${tithiNames[tithiNumber - 1]}`
                        }
                    });

                    // Jump ahead ~25 days since the same tithi won't happen again immediately
                    currentJd += 25;
                }
            }

            // Advance by 1 day
            currentJd += 1;

            // Safety cap if too many matches found in a broad search
            if (matches.length > 100) break;
        }

        res.json({ results: matches });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Kundali Engine server running at http://localhost:${PORT}`);
});
