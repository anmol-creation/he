document.getElementById('calculateBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('dob').value;
    const time = document.getElementById('time').value;
    const city = document.getElementById('city').value;
    const resultBox = document.getElementById('resultBox');

    resultBox.style.display = 'block';
    resultBox.textContent = 'कोऑर्डिनेट्स प्राप्त किए जा रहे हैं...';

    let lat, lng;

    try {
        // Fetch coordinates using OpenStreetMap Nominatim API
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
            lat = parseFloat(geoData[0].lat);
            lng = parseFloat(geoData[0].lon);
            resultBox.textContent = `कोऑर्डिनेट्स प्राप्त हुए: ${lat.toFixed(4)}, ${lng.toFixed(4)}. कुंडली की गणना की जा रही है...`;
        } else {
            throw new Error('शहर नहीं मिला। कृपया दूसरा नाम आज़माएं (उदा., "New Delhi, India")।');
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

        let output = `कुण्डली परिणाम: ${name || 'User'}\n`;
        output += `दिनांक: ${date} समय: ${time}\n`;
        output += `स्थान: ${city} (अक्षांश: ${lat.toFixed(4)}, देशांतर: ${lng.toFixed(4)})\n`;
        output += `जूलियन डे: ${data.jd.toFixed(4)}\n`;
        if (data.tithi) {
            output += `तिथि (Lunar Day): ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(2)}% पूर्ण)\n`;
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

            let state = 'मार्गी (Direct)';
            if (p.name === 'Rahu' || p.name === 'Ketu') state = 'वक्री (Retrograde)';
            else if (p.speed < 0) state = 'वक्री (Retrograde)';
            else if (p.speed === 0) state = 'स्थिर (Stationary)';

            output += `${planetName} | ${signName} | ${deg}   | ${state}\n`;
        });

        resultBox.textContent = output;

        // Render Yogas and Doshas
        const yogaContainer = document.getElementById('yogaContainer');
        const yogaList = document.getElementById('yogaList');

        yogaList.innerHTML = ''; // Clear previous results

        if (data.yogas && data.yogas.length > 0) {
            yogaContainer.style.display = 'block';

            data.yogas.forEach(yoga => {
                const isDosha = yoga.type.toLowerCase().includes('dosha');
                const cardClass = isDosha ? 'yoga-card dosha' : 'yoga-card';
                // Pick an icon based on type (just a simple heuristic)
                let iconClass = isDosha ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-star';

                if(yoga.name.toLowerCase().includes('dhana')) iconClass = 'fa-solid fa-coins';
                if(yoga.name.toLowerCase().includes('raj')) iconClass = 'fa-solid fa-crown';
                if(yoga.name.toLowerCase().includes('saraswati') || yoga.name.toLowerCase().includes('buddhi')) iconClass = 'fa-solid fa-book-open';

                const cardHTML = `
                    <div class="${cardClass}">
                        <div class="yoga-icon"><i class="${iconClass}"></i></div>
                        <div class="yoga-content">
                            <h3 class="yoga-title">
                                ${yoga.name}
                                <span class="yoga-badge">${yoga.type}</span>
                            </h3>
                            <p class="yoga-desc">${yoga.description}</p>
                        </div>
                    </div>
                `;
                yogaList.innerHTML += cardHTML;
            });
        } else if (data.yogas && data.yogas.length === 0) {
            yogaContainer.style.display = 'block';
            yogaList.innerHTML = `
                <div style="text-align: center; color: var(--vault-text-muted); padding: 2rem;">
                    <i class="fa-solid fa-moon" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>वर्तमान नियमों के आधार पर कोई विशिष्ट योग या दोष नहीं मिला।</p>
                </div>
            `;
        } else {
             yogaContainer.style.display = 'none';
        }

    } catch (error) {
        resultBox.textContent = `Error: ${error.message}`;
    }
});
