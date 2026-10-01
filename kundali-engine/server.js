import express from 'express';
import swisseph from 'swisseph';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

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
        const localDate = new Date(`${date}T${time}:00+05:30`);

        const year = localDate.getUTCFullYear();
        const month = localDate.getUTCMonth() + 1;
        const day = localDate.getUTCDate();
        const hour = localDate.getUTCHours() + localDate.getUTCMinutes() / 60.0 + localDate.getUTCSeconds() / 3600.0;

        const jd = swisseph.swe_julday(year, month, day, hour, swisseph.SE_GREG_CAL);

        swisseph.swe_set_sid_mode(swisseph.SE_SIDM_LAHIRI, 0, 0);

        const results = [];
        const planets = [
            swisseph.SE_SUN, swisseph.SE_MOON, swisseph.SE_MARS,
            swisseph.SE_MERCURY, swisseph.SE_JUPITER, swisseph.SE_VENUS,
            swisseph.SE_SATURN, swisseph.SE_MEAN_NODE
        ];
        const planetNames = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu'];

        planets.forEach((planet, index) => {
            const flags = swisseph.SEFLG_SIDEREAL | swisseph.SEFLG_SPEED;
            const pos = swisseph.swe_calc_ut(jd, planet, flags);

            if (!pos.error) {
                // Calculate Sign (0=Aries, 1=Taurus...)
                const sign = Math.floor(pos.longitude / 30);
                const degreeInSign = pos.longitude % 30;

                results.push({
                    name: planetNames[index],
                    longitude: pos.longitude,
                    sign: sign,
                    degreeInSign: degreeInSign,
                    speed: pos.longitudeSpeed
                });
            }
        });

        // Calculate Tithi (Lunar Day)
        // Tithi = (Moon Longitude - Sun Longitude) / 12
        let sunLong = 0;
        let moonLong = 0;
        results.forEach(p => {
            if (p.name === 'Sun') sunLong = p.longitude;
            if (p.name === 'Moon') moonLong = p.longitude;
        });

        let diff = moonLong - sunLong;
        if (diff < 0) diff += 360; // Normalize

        const tithiNumber = Math.floor(diff / 12) + 1; // 1 to 30
        const tithiPercentage = (diff % 12) / 12; // How far along in the Tithi

        const tithiNames = [
            "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
            "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
            "Trayodashi", "Chaturdashi", "Purnima", // Shukla Paksha
            "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
            "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
            "Trayodashi", "Chaturdashi", "Amavasya" // Krishna Paksha
        ];

        const paksha = tithiNumber <= 15 ? "Shukla" : "Krishna";
        const tithiData = {
            number: tithiNumber,
            name: `${paksha} ${tithiNames[tithiNumber - 1]}`,
            percentage: tithiPercentage
        };

        // Calculate Ascendant (Lagna)
        // Note: Ascendant calculation requires geocoordinates and swe_houses
        // swe_houses(jd_ut, lat, lon, hsys)
        // Note: In Javascript swe_houses typically returns { error: ..., cusps: [...], ascmc: [...] }
        const houses = swisseph.swe_houses(jd, parseFloat(lat), parseFloat(lng), 'P');
        let ascendant = null;

        // Debugging structure of 'houses'
        // console.log("Houses object:", houses);

        if (houses && houses.ascendant) {
            ascendant = houses.ascendant; // Swisseph JS wrapper uses .ascendant instead of .ascmc[0]
        }

        res.json({ jd, ascendant, tithi: tithiData, planets: results });
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
                    const paksha = tithiNumber <= 15 ? "Shukla" : "Krishna";

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
