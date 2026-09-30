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

        res.json({ jd, ascendant, planets: results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Kundali Engine server running at http://localhost:${PORT}`);
});
