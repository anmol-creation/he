const fs = require('fs');
let code = fs.readFileSync('kundali-engine/app.js', 'utf8');

// I need to add translations object and an event listener for langToggle.
// Also update the output string generation depending on the selected language.

const patch = `
const i18n = {
    en: {
        mainTitle: "Kundali Engine",
        subTitle: "Advanced Astrological Calculations using Swiss Ephemeris",
        nameLabel: "Name",
        dobLabel: "Date of Birth",
        timeLabel: "Time of Birth",
        cityLabel: "Birth Place (City)",
        calculateBtn: "Generate Kundali Data",
        searchLink: "Go to Historical Astronomical Search →",
        yogaTitle: "Yoga and Dosha Analysis",
        namePlaceholder: "Enter name",
        cityPlaceholder: "e.g., Ayodhya, India",
        fetchingCoords: "Fetching coordinates...",
        coordsReceived: (lat, lng) => \`Coordinates received: \${lat.toFixed(4)}, \${lng.toFixed(4)}. Calculating Kundali...\`,
        cityNotFound: 'City not found. Please try another name (e.g., "New Delhi, India").',
        networkError: 'Network response was not ok',
        kundaliResult: (name) => \`Kundali Result: \${name || 'User'}\`,
        dateStr: (date, time) => \`Date: \${date} Time: \${time}\`,
        locationStr: (city, lat, lng) => \`Location: \${city} (Lat: \${lat.toFixed(4)}, Lng: \${lng.toFixed(4)})\`,
        julianDay: "Julian Day",
        tithiStr: (name, pct) => \`Tithi (Lunar Day): \${name} (\${pct.toFixed(2)}% complete)\`,
        ascendantStr: (sign, deg) => \`Ascendant: \${sign} (\${deg.toFixed(2)}°)\`,
        planetPos: "Planetary Positions (Lahiri Ayanamsa):",
        tableHeader1: "Planet        | Sign              | Degree | State",
        tableHeader2: "------------------------------------------------------",
        direct: "Direct",
        retrograde: "Retrograde",
        stationary: "Stationary",
        noYogas: "No specific Yogas or Doshas found based on current rules.",
        error: (msg) => \`Error: \${msg}\`
    },
    hi: {
        mainTitle: "कुण्डली इंजन (Kundali Engine)",
        subTitle: "स्विस एफेमेरिस (Swiss Ephemeris) का उपयोग कर उन्नत ज्योतिषीय गणना",
        nameLabel: "नाम",
        dobLabel: "जन्म तिथि",
        timeLabel: "जन्म समय",
        cityLabel: "जन्म स्थान (शहर)",
        calculateBtn: "कुण्डली डेटा जनरेट करें",
        searchLink: "ऐतिहासिक खगोलीय खोज पर जाएँ →",
        yogaTitle: "योग और दोष विश्लेषण",
        namePlaceholder: "नाम दर्ज करें",
        cityPlaceholder: "उदा., अयोध्या, भारत",
        fetchingCoords: "कोऑर्डिनेट्स प्राप्त किए जा रहे हैं...",
        coordsReceived: (lat, lng) => \`कोऑर्डिनेट्स प्राप्त हुए: \${lat.toFixed(4)}, \${lng.toFixed(4)}. कुंडली की गणना की जा रही है...\`,
        cityNotFound: 'शहर नहीं मिला। कृपया दूसरा नाम आज़माएं (उदा., "New Delhi, India")।',
        networkError: 'नेटवर्क प्रतिक्रिया ठीक नहीं थी',
        kundaliResult: (name) => \`कुण्डली परिणाम: \${name || 'User'}\`,
        dateStr: (date, time) => \`दिनांक: \${date} समय: \${time}\`,
        locationStr: (city, lat, lng) => \`स्थान: \${city} (अक्षांश: \${lat.toFixed(4)}, देशांतर: \${lng.toFixed(4)})\`,
        julianDay: "जूलियन डे",
        tithiStr: (name, pct) => \`तिथि (Lunar Day): \${name} (\${pct.toFixed(2)}% पूर्ण)\`,
        ascendantStr: (sign, deg) => \`लग्न (Ascendant): \${sign} (\${deg.toFixed(2)}°)\`,
        planetPos: "ग्रह स्थिति (Planetary Positions - Lahiri Ayanamsa):",
        tableHeader1: "ग्रह (Planet)   | राशि (Sign)       | अंश (Degree)| अवस्था (State)",
        tableHeader2: "------------------------------------------------------",
        direct: "मार्गी (Direct)",
        retrograde: "वक्री (Retrograde)",
        stationary: "स्थिर (Stationary)",
        noYogas: "वर्तमान नियमों के आधार पर कोई विशिष्ट योग या दोष नहीं मिला।",
        error: (msg) => \`त्रुटि: \${msg}\`
    }
};

let currentLang = 'hi';

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langEnLabel = document.getElementById('lang-en-label');
    const langHiLabel = document.getElementById('lang-hi-label');

    // Initialize based on checkbox state
    updateLanguage(langToggle.checked ? 'hi' : 'en');

    langToggle.addEventListener('change', (e) => {
        const lang = e.target.checked ? 'hi' : 'en';
        updateLanguage(lang);
    });

    function updateLanguage(lang) {
        currentLang = lang;
        if (lang === 'hi') {
            langHiLabel.style.color = 'var(--vault-accent)';
            langHiLabel.style.fontWeight = 'bold';
            langHiLabel.style.opacity = '1';

            langEnLabel.style.color = '';
            langEnLabel.style.fontWeight = 'normal';
            langEnLabel.style.opacity = '0.5';
        } else {
            langEnLabel.style.color = 'var(--vault-accent)';
            langEnLabel.style.fontWeight = 'bold';
            langEnLabel.style.opacity = '1';

            langHiLabel.style.color = '';
            langHiLabel.style.fontWeight = 'normal';
            langHiLabel.style.opacity = '0.5';
        }

        // Update static UI elements
        const t = i18n[lang];
        document.getElementById('mainTitle').textContent = t.mainTitle;
        document.getElementById('subTitle').textContent = t.subTitle;
        document.getElementById('nameLabel').textContent = t.nameLabel;
        document.getElementById('dobLabel').textContent = t.dobLabel;
        document.getElementById('timeLabel').textContent = t.timeLabel;
        document.getElementById('cityLabel').textContent = t.cityLabel;
        document.getElementById('calculateBtn').textContent = t.calculateBtn;
        document.getElementById('searchLink').textContent = t.searchLink;
        document.getElementById('yogaTitle').textContent = t.yogaTitle;

        document.getElementById('name').placeholder = t.namePlaceholder;
        document.getElementById('city').placeholder = t.cityPlaceholder;

        // Clear results when switching language to avoid mixed translations
        document.getElementById('resultBox').style.display = 'none';
        document.getElementById('yogaContainer').style.display = 'none';
    }
});

document.getElementById('calculateBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('dob').value;
    const time = document.getElementById('time').value;
    const city = document.getElementById('city').value;
    const resultBox = document.getElementById('resultBox');

    const t = i18n[currentLang];

    resultBox.style.display = 'block';
    resultBox.textContent = t.fetchingCoords;

    let lat, lng;

    try {
        // Fetch coordinates using OpenStreetMap Nominatim API
        const geoResponse = await fetch(\`https://nominatim.openstreetmap.org/search?format=json&q=\${encodeURIComponent(city)}\`);
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
            lat = parseFloat(geoData[0].lat);
            lng = parseFloat(geoData[0].lon);
            resultBox.textContent = t.coordsReceived(lat, lng);
        } else {
            throw new Error(t.cityNotFound);
        }

        const response = await fetch('http://localhost:3000/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, time, lat, lng })
        });

        if (!response.ok) {
            throw new Error(t.networkError);
        }

        const data = await response.json();

        const signNamesHi = ["मेष (Aries)", "वृषभ (Taurus)", "मिथुन (Gemini)", "कर्क (Cancer)", "सिंह (Leo)", "कन्या (Virgo)", "तुला (Libra)", "वृश्चिक (Scorpio)", "धनु (Sagittarius)", "मकर (Capricorn)", "कुंभ (Aquarius)", "मीन (Pisces)"];
        const signNamesEn = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        const signNames = currentLang === 'hi' ? signNamesHi : signNamesEn;

        let output = t.kundaliResult(name) + '\\n';
        output += t.dateStr(date, time) + '\\n';
        output += t.locationStr(city, lat, lng) + '\\n';
        output += \`\${t.julianDay}: \${data.jd.toFixed(4)}\\n\`;
        if (data.tithi) {
            output += t.tithiStr(data.tithi.name, data.tithi.percentage * 100) + '\\n';
        }
        output += \`\\n\`;

        if (data.ascendant) {
            const ascSign = Math.floor(data.ascendant / 30);
            const ascDegree = data.ascendant % 30;
            output += t.ascendantStr(signNames[ascSign], ascDegree) + '\\n\\n';
        }

        output += t.planetPos + '\\n';
        output += t.tableHeader2 + '\\n';
        output += t.tableHeader1 + '\\n';
        output += t.tableHeader2 + '\\n';

        data.planets.forEach(p => {
            const signName = signNames[p.sign].padEnd(12);
            const deg = p.degreeInSign.toFixed(2).padStart(5) + '°';
            const planetName = p.name.padEnd(9);

            let state = t.direct;
            if (p.name === 'Rahu' || p.name === 'Ketu') state = t.retrograde;
            else if (p.speed < 0) state = t.retrograde;
            else if (p.speed === 0) state = t.stationary;

            output += \`\${planetName} | \${signName} | \${deg}   | \${state}\\n\`;
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

                const cardHTML = \`
                    <div class="\${cardClass}">
                        <div class="yoga-icon"><i class="\${iconClass}"></i></div>
                        <div class="yoga-content">
                            <h3 class="yoga-title">
                                \${yoga.name}
                                <span class="yoga-badge">\${yoga.type}</span>
                            </h3>
                            <p class="yoga-desc">\${yoga.description}</p>
                        </div>
                    </div>
                \`;
                yogaList.innerHTML += cardHTML;
            });
        } else if (data.yogas && data.yogas.length === 0) {
            yogaContainer.style.display = 'block';
            yogaList.innerHTML = \`
                <div style="text-align: center; color: var(--vault-text-muted); padding: 2rem;">
                    <i class="fa-solid fa-moon" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>\${t.noYogas}</p>
                </div>
            \`;
        } else {
             yogaContainer.style.display = 'none';
        }

    } catch (error) {
        resultBox.textContent = t.error(error.message);
    }
});
`;

fs.writeFileSync('kundali-engine/app.js', patch);
console.log('App patched');
