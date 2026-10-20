import cors from "cors";
import express from 'express';
import swisseph from 'swisseph';
import path from 'path';
import { detectYogas } from './yoga-detector.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the root and kundali-engine directory
app.use(express.static(path.join(__dirname, '..')));
app.use('/kundali-engine', express.static(path.join(__dirname)));

app.post('/api/calculate', (req, res) => {
    const { date, time, lat, lng } = req.body;

    try {
        // Simple logic to convert local time to UTC for Swisseph
        // Indian Standard Time is UTC+5:30. Let's assume input is IST for this basic setup.
        // In a real app, you'd use a timezone library.
        const istDateObj = new Date(`${date}T${time}:00+05:30`);
        const year = istDateObj.getUTCFullYear();
        const month = istDateObj.getUTCMonth() + 1; // getUTCMonth is 0-indexed
        const day = istDateObj.getUTCDate();

        // Accurate decimal UTC hour calculation
        const hour = istDateObj.getUTCHours() + (istDateObj.getUTCMinutes() / 60.0) + (istDateObj.getUTCSeconds() / 3600.0);

        const jd = swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);

        swisseph.swe_set_sid_mode(swisseph.SE_SIDM_LAHIRI, 0, 0);

        const results = [];
        const planets = [
            swisseph.SE_SUN, swisseph.SE_MOON, swisseph.SE_MARS,
            swisseph.SE_MERCURY, swisseph.SE_JUPITER, swisseph.SE_VENUS,
            swisseph.SE_SATURN, swisseph.SE_MEAN_NODE
        ];
        const planetNames = ['सूर्य (Sun)', 'चंद्र (Moon)', 'मंगल (Mars)', 'बुध (Mercury)', 'गुरु (Jupiter)', 'शुक्र (Venus)', 'शनि (Saturn)', 'राहु (Rahu)'];

        planets.forEach((planet, index) => {
            const flags = swisseph.SEFLG_SIDEREAL | swisseph.SEFLG_SPEED;
            const pos = swisseph.swe_calc_ut(jd, planet, flags);

            if (!pos.error) {
                // Calculate Sign (0=Aries, 1=Taurus...)
                const sign = Math.floor(pos.longitude / 30);
                const degreeInSign = pos.longitude % 30;


                // Dignity and Retrograde Calculation
                let isRetrograde = false;
                if (pos.longitudeSpeed < 0 && planetNames[index] !== 'राहु (Rahu)') {
                    isRetrograde = true;
                } else if (planetNames[index] === 'राहु (Rahu)' && pos.longitudeSpeed > 0) {
                    // Rahu is normally retrograde, if speed > 0 it's direct, but we'll stick to standard retrograde marker for simplicity
                    isRetrograde = false;
                } else if (planetNames[index] === 'राहु (Rahu)') {
                    isRetrograde = true; // Rahu/Ketu always retro visually
                }

                let dignity = "Neutral";
                const pName = planetNames[index];

                // Exaltation (Uccha) rules
                if (pName.includes('Sun') && sign === 0) dignity = "Uccha";
                else if (pName.includes('Moon') && sign === 1) dignity = "Uccha";
                else if (pName.includes('Mars') && sign === 9) dignity = "Uccha";
                else if (pName.includes('Mercury') && sign === 5) dignity = "Uccha";
                else if (pName.includes('Jupiter') && sign === 3) dignity = "Uccha";
                else if (pName.includes('Venus') && sign === 11) dignity = "Uccha";
                else if (pName.includes('Saturn') && sign === 6) dignity = "Uccha";

                // Debilitation (Neecha) rules (+6 signs from Uccha)
                else if (pName.includes('Sun') && sign === 6) dignity = "Neecha";
                else if (pName.includes('Moon') && sign === 7) dignity = "Neecha";
                else if (pName.includes('Mars') && sign === 3) dignity = "Neecha";
                else if (pName.includes('Mercury') && sign === 11) dignity = "Neecha";
                else if (pName.includes('Jupiter') && sign === 9) dignity = "Neecha";
                else if (pName.includes('Venus') && sign === 5) dignity = "Neecha";
                else if (pName.includes('Saturn') && sign === 0) dignity = "Neecha";

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

                    const pKey = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn'].find(k => pName.includes(k));
                    if (pKey && signLord) {
                        if (friends[pKey] && friends[pKey].includes(signLord)) {
                            dignity = "Friendly";
                        } else if (enemies[pKey] && enemies[pKey].includes(signLord)) {
                            dignity = "Enemy";
                        }
                    }
                }

                results.push({
                    name: planetNames[index],
                    longitude: pos.longitude,
                    sign: sign,
                    degreeInSign: degreeInSign,
                    speed: pos.longitudeSpeed,
                    isRetrograde: isRetrograde,
                    dignity: dignity
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

        // Build explicit Lagna Chart representation (Houses 1-12)
        const lagnaChart = [];
        for (let houseNum = 1; houseNum <= 12; houseNum++) {
            const signForHouse = (ascendantSign + houseNum - 1) % 12;
            const planetsInHouse = results.filter(p => p.house === houseNum).map(p => p.name);
            lagnaChart.push({
                house: houseNum,
                sign: signForHouse,
                planets: planetsInHouse
            });
        }

        const detectionData = detectYogas(results, ascendant);
        // detectionData now contains { yogas, chartStats }

        res.json({
            jd,
            ascendant,
            tithi: tithiData,
            planets: results,
            lagnaChart: lagnaChart,
            yogas: detectionData.yogas,
            chartStats: detectionData.chartStats
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
