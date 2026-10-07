document.getElementById('calculateBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('dob').value;
    const time = document.getElementById('time').value;
    const city = document.getElementById('city').value;
    const resultBox = document.getElementById('resultBox');

    resultBox.style.display = 'block';
    resultBox.textContent = 'Fetching coordinates...';

    let lat, lng;

    try {
        // Fetch coordinates using OpenStreetMap Nominatim API
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
            lat = parseFloat(geoData[0].lat);
            lng = parseFloat(geoData[0].lon);
            resultBox.textContent = `Coordinates found: ${lat.toFixed(4)}, ${lng.toFixed(4)}. Calculating Kundali...`;
        } else {
            throw new Error('City not found. Please try a different name (e.g., "New Delhi, India").');
        }

        const response = await fetch('http://localhost:3000/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, time, lat, lng })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const signNames = ["मेष (Aries)", "वृषभ (Taurus)", "मिथुन (Gemini)", "कर्क (Cancer)", "सिंह (Leo)", "कन्या (Virgo)", "तुला (Libra)", "वृश्चिक (Scorpio)", "धनु (Sagittarius)", "मकर (Capricorn)", "कुंभ (Aquarius)", "मीन (Pisces)"];

        let output = `Kundali Results for ${name || 'User'}\n`;
        output += `Date: ${date} Time: ${time}\n`;
        output += `Location: ${city} (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)})\n`;
        output += `Julian Day: ${data.jd.toFixed(4)}\n`;
        if (data.tithi) {
            output += `Tithi (Lunar Day): ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(2)}% complete)\n`;
        }
        output += `\n`;

        if (data.ascendant) {
            const ascSign = Math.floor(data.ascendant / 30);
            const ascDegree = data.ascendant % 30;
            output += `लग्न (Ascendant): ${signNames[ascSign]} (${ascDegree.toFixed(2)}°)\n\n`;
        }

        output += `ग्रह स्थिति (Planetary Positions - Lahiri Ayanamsa):\n`;
        output += `------------------------------------------------------\n`;
        output += `ग्रह (Planet)   | राशि (Sign)       | अंश (Degree)| अवस्था (State)\n`;
        output += `------------------------------------------------------\n`;

        data.planets.forEach(p => {
            const signName = signNames[p.sign].padEnd(12);
            const deg = p.degreeInSign.toFixed(2).padStart(5) + '°';
            const planetName = p.name.padEnd(9);

            let state = 'Direct';
            if (p.name === 'Rahu' || p.name === 'Ketu') state = 'Retrograde';
            else if (p.speed < 0) state = 'Retrograde';
            else if (p.speed === 0) state = 'Stationary';

            output += `${planetName} | ${signName} | ${deg}   | ${state}\n`;
        });

        if (data.yogas && data.yogas.length > 0) {
            output += `\n`;
            output += `=== योग और दोष विश्लेषण (Yoga & Dosha Analysis) ===\n`;
            output += `Total Detected: ${data.yogas.length}\n`;
            output += `------------------------------------------------------\n`;
            data.yogas.forEach(yoga => {
                output += `• [${yoga.type}] ${yoga.name}\n`;
                output += `  ${yoga.description}\n\n`;
            });
        } else if (data.yogas && data.yogas.length === 0) {
            output += `\n`;
            output += `=== योग और दोष विश्लेषण (Yoga & Dosha Analysis) ===\n`;
            output += `No specific yogas or doshas detected based on current rules.\n`;
        }

        resultBox.textContent = output;

    } catch (error) {
        resultBox.textContent = `Error: ${error.message}`;
    }
});
