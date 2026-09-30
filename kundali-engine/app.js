document.getElementById('calculateBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('dob').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const resultBox = document.getElementById('resultBox');

    const [lat, lng] = location.split(',').map(s => s.trim());

    resultBox.style.display = 'block';
    resultBox.textContent = 'Calculating...';

    try {
        const response = await fetch('/api/calculate', {
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

        const signNames = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

        let output = `Kundali Results for ${name || 'User'}\n`;
        output += `Date: ${date} Time: ${time}\n`;
        output += `Location: Lat ${lat}, Lng ${lng}\n`;
        output += `Julian Day: ${data.jd.toFixed(4)}\n\n`;

        if (data.ascendant) {
            const ascSign = Math.floor(data.ascendant / 30);
            const ascDegree = data.ascendant % 30;
            output += `ASCENDANT (LAGNA): ${signNames[ascSign]} (${ascDegree.toFixed(2)}°)\n\n`;
        }

        output += `PLANETARY POSITIONS (Lahiri Ayanamsa):\n`;
        output += `------------------------------------------------------\n`;
        output += `Planet    | Sign         | Degree    | Speed / State\n`;
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

        resultBox.textContent = output;

    } catch (error) {
        resultBox.textContent = `Error: ${error.message}`;
    }
});
