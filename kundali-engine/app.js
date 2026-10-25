
import { KundaliChartRenderer } from './kundali-ui.js';

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
        patraLabel: "Patra (Current Life Status / Identity)",
        patraOptions: {
            student: "Student / Learner",
            struggling_hustler: "Struggling Hustler / Founder",
            job_employee: "9-to-5 Employee",
            established_business: "Established Businessman"
        },
        fetchingCoords: "Fetching coordinates...",
        coordsReceived: (lat, lng) => `Coordinates received: ${lat.toFixed(4)}, ${lng.toFixed(4)}. Calculating Kundali...`,
        cityNotFound: 'City not found. Please try another name (e.g., "New Delhi, India").',
        networkError: 'Network response was not ok',
        kundaliResult: (name) => `Kundali Result: ${name || 'User'}`,
        dateStr: (date, time) => `Date: ${date} Time: ${time}`,
        locationStr: (city, lat, lng) => `Location: ${city} (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)})`,
        julianDay: "Julian Day",
        tithiStr: (name, pct) => `Tithi (Lunar Day): ${name} (${pct.toFixed(2)}% complete)`,
        ascendantStr: (sign, deg) => `Ascendant: ${sign} (${deg.toFixed(2)}°)`,
        planetPos: "Planetary Positions (Lahiri Ayanamsa):",
        tableHeader1: "Planet        | Sign              | Degree | State",
        tableHeader2: "------------------------------------------------------",
        direct: "Direct",
        retrograde: "Retrograde",
        stationary: "Stationary",
        noYogas: "No specific Yogas or Doshas found based on current rules.",
        error: (msg) => `Error: ${msg}`
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
        patraLabel: "पात्र (वर्तमान जीवन स्थिति / Identity)",
        patraOptions: {
            student: "विद्यार्थी / अभी सीख रहा हूँ",
            struggling_hustler: "संघर्षरत / खुद का कुछ कर रहा हूँ (Founder)",
            job_employee: "नौकरीपेशा / जॉब (9-to-5)",
            established_business: "स्थापित व्यापारी"
        },
        fetchingCoords: "कोऑर्डिनेट्स प्राप्त किए जा रहे हैं...",
        coordsReceived: (lat, lng) => `कोऑर्डिनेट्स प्राप्त हुए: ${lat.toFixed(4)}, ${lng.toFixed(4)}. कुंडली की गणना की जा रही है...`,
        cityNotFound: 'शहर नहीं मिला। कृपया दूसरा नाम आज़माएं (उदा., "New Delhi, India")।',
        networkError: 'नेटवर्क प्रतिक्रिया ठीक नहीं थी',
        kundaliResult: (name) => `कुण्डली परिणाम: ${name || 'User'}`,
        dateStr: (date, time) => `दिनांक: ${date} समय: ${time}`,
        locationStr: (city, lat, lng) => `स्थान: ${city} (अक्षांश: ${lat.toFixed(4)}, देशांतर: ${lng.toFixed(4)})`,
        julianDay: "जूलियन डे",
        tithiStr: (name, pct) => `तिथि (Lunar Day): ${name} (${pct.toFixed(2)}% पूर्ण)`,
        ascendantStr: (sign, deg) => `लग्न (Ascendant): ${sign} (${deg.toFixed(2)}°)`,
        planetPos: "ग्रह स्थिति (Planetary Positions - Lahiri Ayanamsa):",
        tableHeader1: "ग्रह (Planet)   | राशि (Sign)       | अंश (Degree)| अवस्था (State)",
        tableHeader2: "------------------------------------------------------",
        direct: "मार्गी (Direct)",
        retrograde: "वक्री (Retrograde)",
        stationary: "स्थिर (Stationary)",
        noYogas: "वर्तमान नियमों के आधार पर कोई विशिष्ट योग या दोष नहीं मिला।",
        error: (msg) => `त्रुटि: ${msg}`
    }
};

let currentLang = 'hi';

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langEnLabel = document.getElementById('lang-en-label');
    const langHiLabel = document.getElementById('lang-hi-label');

    // Initialize chartRenderer globally
    window.chartRenderer = new KundaliChartRenderer('kundaliSvgContainer');
    document.getElementById('btnNorthStyle').addEventListener('click', (e) => {
        window.chartRenderer.setStyle('north');
        e.target.classList.add('active');
        document.getElementById('btnSouthStyle').classList.remove('active');
    });
    document.getElementById('btnSouthStyle').addEventListener('click', (e) => {
        window.chartRenderer.setStyle('south');
        e.target.classList.add('active');
        document.getElementById('btnNorthStyle').classList.remove('active');
    });

    // Initialize based on checkbox state
    updateLanguage(langToggle.checked ? 'hi' : 'en');

    langToggle.addEventListener('change', (e) => {
        const lang = e.target.checked ? 'hi' : 'en';
        updateLanguage(lang);
        window.chartRenderer.setLanguage(lang);
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

        document.getElementById('patraLabel').textContent = t.patraLabel;
        const patraSelect = document.getElementById('patra');
        patraSelect.options[0].text = t.patraOptions.student;
        patraSelect.options[1].text = t.patraOptions.struggling_hustler;
        patraSelect.options[2].text = t.patraOptions.job_employee;
        patraSelect.options[3].text = t.patraOptions.established_business;

        // Clear results when switching language to avoid mixed translations
        document.getElementById('resultBox').style.display = 'none';
        document.getElementById('yogaContainer').style.display = 'none';
    }
});

const quickSavePresets = {
    "ram": {
        name: "भगवान राम (Lord Ram)",
        dob: "-5114-01-10",
        time: "12:00",
        city: "Ayodhya, India"
    },
    "krishna": {
        name: "भगवान कृष्ण (Lord Krishna)",
        dob: "-3228-07-18",
        time: "00:00",
        city: "Mathura, India"
    }
};

document.getElementById('quickSave').addEventListener('change', (e) => {
    const val = e.target.value;
    if (quickSavePresets[val]) {
        document.getElementById('name').value = quickSavePresets[val].name;
        document.getElementById('dob').value = quickSavePresets[val].dob;
        document.getElementById('time').value = quickSavePresets[val].time;
        document.getElementById('city').value = quickSavePresets[val].city;
    }
});

document.getElementById('calculateBtn').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('dob').value;
    const time = document.getElementById('time').value;
    const city = document.getElementById('city').value;
    const patra = document.getElementById('patra').value;
    const resultBox = document.getElementById('resultBox');

    const t = i18n[currentLang];

    resultBox.style.display = 'block';
    resultBox.textContent = t.fetchingCoords;

    let lat, lng;

    try {
        // Fetch coordinates using OpenStreetMap Nominatim API
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
            lat = parseFloat(geoData[0].lat);
            lng = parseFloat(geoData[0].lon);
            resultBox.textContent = t.coordsReceived(lat, lng);
        } else {
            throw new Error(t.cityNotFound);
        }

        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, time, lat, lng, patra })
        });

        if (!response.ok) {
            throw new Error(t.networkError);
        }

        const data = await response.json();

        const signNamesHi = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
        const signNamesEn = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        const signNames = currentLang === 'hi' ? signNamesHi : signNamesEn;

        // Function to extract translated name based on current language
        const getPlanetName = (rawName) => {
            const match = rawName.match(/(.+?)\s*\((.+?)\)/);
            if (match) {
                return currentLang === 'hi' ? match[1].trim() : match[2].trim();
            }
            return rawName;
        };

        let outputHTML = `
            <div style="font-family: 'Work Sans', sans-serif; color: var(--vault-text-main);">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <h2 style="color: var(--vault-accent); margin: 0; font-family: 'EB Garamond', serif;">${t.kundaliResult(name)}</h2>
                    <p style="color: var(--vault-text-muted); font-size: 0.9rem; margin-top: 0.5rem;">
                        ${t.dateStr(date, time)}<br>
                        ${t.locationStr(city, lat, lng)}
                    </p>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; justify-content: center;">
                    <div style="background: rgba(0,0,0,0.5); padding: 0.8rem 1.2rem; border-radius: 6px; border: 1px solid var(--vault-border);">
                        <strong style="color: var(--vault-accent);">${t.julianDay}:</strong> ${data.jd.toFixed(4)}
                    </div>`;

        if (data.tithi) {
            outputHTML += `
                    <div style="background: rgba(0,0,0,0.5); padding: 0.8rem 1.2rem; border-radius: 6px; border: 1px solid var(--vault-border);">
                        <strong style="color: var(--vault-accent);">${currentLang === 'hi' ? 'तिथि' : 'Tithi'}:</strong> ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(1)}%)
                    </div>`;
        }

        if (data.ascendant) {
            const ascSign = Math.floor(data.ascendant / 30);
            const ascDegree = data.ascendant % 30;
            outputHTML += `
                    <div style="background: rgba(0,0,0,0.5); padding: 0.8rem 1.2rem; border-radius: 6px; border: 1px solid var(--vault-border);">
                        <strong style="color: var(--vault-accent);">${currentLang === 'hi' ? 'लग्न' : 'Ascendant'}:</strong> ${signNames[ascSign]} (${ascDegree.toFixed(2)}°)
                    </div>`;
        }

        outputHTML += `</div>`;

        // Planetary Positions Table
        outputHTML += `
            <h3 style="color: var(--vault-accent); font-family: 'EB Garamond', serif; margin-bottom: 1rem; text-align: center;">${t.planetPos}</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; text-align: left;">
                    <thead>
                        <tr style="background-color: rgba(204, 106, 0, 0.15); border-bottom: 1px solid var(--vault-accent);">
                            <th style="padding: 0.8rem; font-weight: 600; color: var(--vault-text-main);">${currentLang === 'hi' ? 'ग्रह' : 'Planet'}</th>
                            <th style="padding: 0.8rem; font-weight: 600; color: var(--vault-text-main);">${currentLang === 'hi' ? 'राशि' : 'Sign'}</th>
                            <th style="padding: 0.8rem; font-weight: 600; color: var(--vault-text-main);">${currentLang === 'hi' ? 'भाव' : 'House'}</th>
                            <th style="padding: 0.8rem; font-weight: 600; color: var(--vault-text-main);">${currentLang === 'hi' ? 'अंश' : 'Degree'}</th>
                            <th style="padding: 0.8rem; font-weight: 600; color: var(--vault-text-main);">${currentLang === 'hi' ? 'अवस्था/बल' : 'State/Power'}</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        data.planets.forEach(p => {
            const signName = signNames[p.sign];
            const deg = p.degreeInSign.toFixed(2) + '°';
            const planetName = getPlanetName(p.name);
            const houseStr = p.house ? p.house : "--";

            let emojis = "";
            if (p.isRetrograde) emojis += '<span title="Retrograde">☯️</span> ';

            if (p.dignity === 'Vargottam') emojis += '<span title="Vargottam">⭐️⁺⁵</span>';
            else if (p.dignity === 'Uccha') emojis += '<span title="Exalted">⭐️⁺⁴</span>';
            else if (p.dignity === 'Mooltrikona') emojis += '<span title="Mooltrikona">⭐️⁺³</span>';
            else if (p.dignity === 'Swarashi') emojis += '<span title="Own Sign">⭐️⁺²</span>';
            else if (p.dignity === 'Friendly') emojis += '<span title="Friendly">⭐️⁺¹</span>';
            else if (p.dignity === 'Enemy') emojis += '<span title="Enemy">⭐️⁻¹</span>';
            else if (p.dignity === 'Combust') emojis += '<span title="Combust">⭐️⁻²</span>';
            else if (p.dignity === 'Neecha') emojis += '<span title="Debilitated">⭐️⁻³</span>';

            const isOdd = (p.sign % 2 === 0);
            let d = p.degreeInSign;
            let power = 0;
            if (d >= 0 && d < 6) power = isOdd ? 25 : 0;
            else if (d >= 6 && d < 12) power = isOdd ? 50 : 10;
            else if (d >= 12 && d < 18) power = 100;
            else if (d >= 18 && d < 24) power = isOdd ? 10 : 50;
            else power = isOdd ? 0 : 25;

            const mapSuperscript = { 0: '⁰', 10: '¹⁰', 25: '²⁵', 50: '⁵⁰', 100: '¹⁰⁰' };
            emojis += ` <span title="Power ${power}%">⚡${mapSuperscript[power]}</span>`;

            outputHTML += `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.8rem; font-weight: 500;">${planetName}</td>
                    <td style="padding: 0.8rem;">${signName}</td>
                    <td style="padding: 0.8rem;">${houseStr}</td>
                    <td style="padding: 0.8rem;">${deg}</td>
                    <td style="padding: 0.8rem; font-size: 1.1rem;">${emojis}</td>
                </tr>
            `;
        });

        outputHTML += `</tbody></table></div>`;

        // Lagna Chart (Houses 1-12) Section is handled visually, not as a table here.

        // --- The Anchors / Semi-Fixed Section ---

        outputHTML += `<h3 style="color: var(--vault-accent); font-family: 'EB Garamond', serif; margin-bottom: 1rem; text-align: center; margin-top: 2rem;">
            ${currentLang === 'hi' ? 'द एंकर्स (अर्ध-निश्चित कर्म)' : 'The Anchors (Semi-Fixed Karma)'}
        </h3>`;

        // 1. Lagnesh (CEO) Anchor
        if (data.ceoStatus) {
            const ceo = data.ceoStatus;
            const isHi = currentLang === 'hi';

            let dignityText = ceo.dignity;
            if (isHi) {
                const digMap = { 'Vargottam': 'वर्गोत्तम', 'Uccha': 'उच्च', 'Mooltrikona': 'मूलत्रिकोण', 'Swarashi': 'स्वराशि', 'Friendly': 'मित्र', 'Neutral': 'सम', 'Enemy': 'शत्रु', 'Combust': 'अस्त', 'Neecha': 'नीच' };
                dignityText = digMap[ceo.dignity] || ceo.dignity;
            }

            // Determine Brutal Reality text based on placement
            let brutalText = "";
            let brutalTextHi = "";
            let ceoColor = "var(--vault-text)";

            // Kendra/Trikona (Good)
            if ([1, 4, 5, 7, 9, 10].includes(ceo.house)) {
                brutalText = `The CEO (${ceo.key}) is placed in a strong foundation house (${ceo.house}). It has the capacity to execute ideas, provided you put in the work.`;
                brutalTextHi = `लग्नेश (${ceo.key}) मजबूत भाव (${ceo.house}) में है। इसमें विचारों को क्रियान्वित करने की क्षमता है, बशर्ते आप मेहनत करें।`;
                ceoColor = "var(--vault-accent)";
            }
            // Trik Houses (Struggle)
            else if ([6, 8, 12].includes(ceo.house)) {
                brutalText = `The CEO (${ceo.key}) is struggling in the ${ceo.house}th house. The foundation is weak. Any Rajyogas in the chart will require 3x more hustle to manifest because you have to fix the foundation first. Stop relying on luck.`;
                brutalTextHi = `लग्नेश (${ceo.key}) संघर्षपूर्ण ${ceo.house}वें भाव में है। नींव कमजोर है। कुंडली में कोई भी राजयोग फलीभूत होने के लिए 3 गुना अधिक संघर्ष मांगेगा, क्योंकि आपको पहले अपनी नींव ठीक करनी होगी। भाग्य पर निर्भर रहना छोड़ दें।`;
                ceoColor = "#cc3333";
            }
            // Others (2, 3, 11)
            else {
                brutalText = `The CEO (${ceo.key}) is in the ${ceo.house}th house. Focus is directed heavily towards wealth, network, or daily grind. Effort equals reward.`;
                brutalTextHi = `लग्नेश (${ceo.key}) ${ceo.house}वें भाव में है। आपका ध्यान धन, नेटवर्क या दैनिक संघर्ष की ओर है। प्रयास से ही फल मिलेगा।`;
                ceoColor = "#ffcc00";
            }

            // Adjust for dignity
            if (ceo.dignity === 'Neecha' || ceo.dignity === 'Enemy' || ceo.isCombust) {
                brutalText += ` However, the CEO is currently weak (${dignityText}). Confidence and execution power are fundamentally compromised.`;
                brutalTextHi += ` हालाँकि, लग्नेश वर्तमान में कमजोर (${dignityText}) है। आत्मविश्वास और कार्य क्षमता मूल रूप से प्रभावित है।`;
                ceoColor = "#cc3333";
            } else if (ceo.dignity === 'Uccha' || ceo.dignity === 'Swarashi' || ceo.dignity === 'Mooltrikona') {
                brutalText += ` The CEO is in a powerful state (${dignityText}), granting strong willpower and self-reliance.`;
                brutalTextHi += ` लग्नेश शक्तिशाली अवस्था (${dignityText}) में है, जो दृढ़ इच्छाशक्ति और आत्मनिर्भरता प्रदान करता है।`;
                ceoColor = "var(--vault-accent)";
            }

            outputHTML += `
                <div style="background: rgba(0,0,0,0.6); border: 1px solid ${ceoColor}; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    <h3 style="color: ${ceoColor}; font-family: 'EB Garamond', serif; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; font-size: 1.5rem;">
                        <i class="fa-solid fa-anchor"></i> ${isHi ? 'एंकर 1: लग्नेश (कुंडली का CEO)' : 'Anchor 1: Lagnesh (The CEO of Your Chart)'}
                    </h3>

                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
                        <span style="background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 4px; font-size: 0.9rem;">
                            <strong>${isHi ? 'लग्नेश' : 'CEO'}:</strong> ${ceo.name}
                        </span>
                        <span style="background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 4px; font-size: 0.9rem;">
                            <strong>${isHi ? 'भाव' : 'Office (House)'}:</strong> ${ceo.house}
                        </span>
                        <span style="background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 4px; font-size: 0.9rem;">
                            <strong>${isHi ? 'अवस्था' : 'State'}:</strong> ${dignityText}
                        </span>
                    </div>

                    <div style="background: rgba(200, 50, 50, 0.1); border-left: 4px solid ${ceoColor}; padding: 1rem; font-style: italic; color: #eee; line-height: 1.5;">
                        <i class="fa-solid fa-skull" style="margin-right: 8px; opacity: 0.8;"></i>
                        <strong>Brutal Reality Check:</strong> ${isHi ? brutalTextHi : brutalText}
                    </div>
                </div>
            `;
        }

        // 2. Prime Timeline (Age 25-50) Anchor
        if (data.primeTimeline && data.primeTimeline.length > 0) {
            const isHi = currentLang === 'hi';

            outputHTML += `
                <div style="background: rgba(0,0,0,0.6); border: 1px solid var(--vault-border); border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                    <h3 style="color: var(--vault-text); font-family: 'EB Garamond', serif; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; font-size: 1.5rem;">
                        <i class="fa-solid fa-hourglass-half"></i> ${isHi ? 'एंकर 2: प्राइम टाइमलाइन (उम्र 25-50)' : 'Anchor 2: Prime Timeline (Age 25-50)'}
                    </h3>
                    <p style="font-size: 0.9rem; color: #aaa; margin-bottom: 1.5rem;">
                        ${isHi ? 'यह आपकी लाइफ का सबसे महत्वपूर्ण समय है जहाँ आप अपना साम्राज्य बनाते हैं। राजयोग तभी काम आते हैं जब वो इस समय के दौरान सक्रिय हों।' : 'This is the most crucial phase of life where you build your empire. Rajyogas are only useful if they activate during this period.'}
                    </p>

                    <div style="display: flex; flex-direction: column; gap: 1rem;">
            `;

            data.primeTimeline.forEach(dasha => {
                let evalColor = "var(--vault-text)";
                let evalIcon = "fa-circle-question";
                let evalTextEn = "";
                let evalTextHi = "";

                if (dasha.evaluation === "Golden") {
                    evalColor = "var(--vault-accent)"; // Gold
                    evalIcon = "fa-crown";
                    evalTextEn = `Golden Period. The planet is strong and favorable. Push hard, take risks, accelerator down.`;
                    evalTextHi = `स्वर्णिम काल। ग्रह मजबूत और अनुकूल है। पूरी ताकत लगाएँ, जोखिम लें, एक्सीलेटर दबाएँ।`;
                } else if (dasha.evaluation === "Grind") {
                    evalColor = "#cc3333"; // Red
                    evalIcon = "fa-hammer";
                    evalTextEn = `The Grind. Winter season. The planet is weak or malefic. Luck is zero. Rely solely on hard hustle and survival mode.`;
                    evalTextHi = `संघर्ष काल। सर्दी का मौसम। ग्रह कमजोर या पापी है। भाग्य शून्य है। केवल कड़ी मेहनत और सर्वाइवल मोड पर निर्भर रहें।`;
                } else if (dasha.evaluation === "Chaos") {
                    evalColor = "#a855f7"; // Purple
                    evalIcon = "fa-bolt";
                    evalTextEn = `Unpredictable Chaos. Rahu/Ketu illusion. Extreme highs or extreme lows. Stay grounded and practical.`;
                    evalTextHi = `अप्रत्याशित उथल-पुथल। राहु/केतु का भ्रम। अत्यधिक उच्च या अत्यधिक निम्न। जमीन से जुड़े रहें और व्यावहारिक बनें।`;
                } else {
                    evalColor = "#ffcc00"; // Yellow
                    evalIcon = "fa-scale-balanced";
                    evalTextEn = `Mixed Period. Effort equals reward.`;
                    evalTextHi = `मिश्रित काल। जितना प्रयास, उतना फल।`;
                }

                outputHTML += `
                        <div style="background: rgba(255,255,255,0.03); border-left: 4px solid ${evalColor}; padding: 1rem; border-radius: 4px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <strong style="font-size: 1.1rem; color: ${evalColor};">
                                    <i class="fa-solid ${evalIcon}"></i> ${getPlanetName(dasha.lord)} Mahadasha
                                </strong>
                                <span style="background: rgba(0,0,0,0.5); padding: 3px 8px; border-radius: 12px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.1);">
                                    Age ${dasha.startAge.toFixed(1)} to ${dasha.endAge.toFixed(1)}
                                </span>
                            </div>
                            <div style="font-size: 0.9rem; color: #ddd; margin-bottom: 0.5rem;">
                                ${isHi ? 'भाव' : 'House'}: ${dasha.house || '-'} | ${isHi ? 'अवस्था' : 'State'}: ${dasha.dignity || '-'}
                            </div>
                            <div style="font-style: italic; color: #bbb; font-size: 0.95rem;">
                                ${isHi ? evalTextHi : evalTextEn}
                            </div>
                        </div>
                `;
            });

            outputHTML += `
                    </div>
                </div>
            `;
        }

        if (data.lagnaChart) {

        // Planetary Reality Section
        outputHTML += `<h3 style="color: var(--vault-accent); font-family: 'EB Garamond', serif; margin-bottom: 1rem; text-align: center; margin-top: 2rem;">${currentLang === 'hi' ? 'ग्रहों की यथार्थता (Planetary Reality DNA)' : 'Planetary Reality (Core DNA vs Manifestation)'}</h3>`;
        outputHTML += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">`;

        data.planets.forEach(p => {
            const isHi = currentLang === 'hi';

            // Skip rendering nodes and virtuals if we don't have core data? No, Rahu and Ketu have core data.
            // Let's check if coreData exists
            if (!p.coreData || !p.coreData.role) return;

            const role = isHi ? p.coreData.role.hi : p.coreData.role.en;
            const agenda = isHi ? p.coreData.core_agenda.hi : p.coreData.core_agenda.en;
            const truth = isHi ? p.coreData.unchangeable_truth.hi : p.coreData.unchangeable_truth.en;

            // Reconstruct basic info
            const deg = `${Math.floor(p.degreeInSign)}° ${Math.floor((p.degreeInSign % 1) * 60)}'`;
            const signName = signNames[p.sign];
            const houseStr = p.house ? (isHi ? `भाव ${p.house}` : `House ${p.house}`) : '-';

            // Calculate Avastha / Power
            const isOdd = (p.sign % 2 === 0); // 0 is Aries
            let d = p.degreeInSign;
            let power = 0;
            if (d >= 0 && d < 6) power = isOdd ? 25 : 0;
            else if (d >= 6 && d < 12) power = isOdd ? 50 : 10;
            else if (d >= 12 && d < 18) power = 100;
            else if (d >= 18 && d < 24) power = isOdd ? 10 : 50;
            else power = isOdd ? 0 : 25;

            // Get translation for dignity
            let dignityText = p.dignity;
            if (isHi) {
                const digMap = { 'Vargottam': 'वर्गोत्तम', 'Uccha': 'उच्च', 'Mooltrikona': 'मूलत्रिकोण', 'Swarashi': 'स्वराशि', 'Friendly': 'मित्र', 'Neutral': 'सम', 'Enemy': 'शत्रु', 'Combust': 'अस्त', 'Neecha': 'नीच' };
                dignityText = digMap[p.dignity] || p.dignity;
            }

            outputHTML += `
                <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--vault-border); border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;">

                    <!-- Fixed DNA Section -->
                    <div style="background: rgba(0,0,0,0.6); padding: 1.2rem; border-bottom: 2px solid var(--vault-accent); position: relative;">
                        <span style="position: absolute; top: 10px; right: 10px; font-size: 1.2rem; opacity: 0.8;" title="Fixed DNA">🧬</span>
                        <h4 style="color: var(--vault-accent); font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            ${p.name.split(' ')[0]} <span style="font-size: 0.9rem; color: var(--vault-text-muted);">(${role})</span>
                        </h4>
                        <p style="font-size: 0.9rem; color: #cbd5e1; margin-bottom: 0.5rem;"><strong>${isHi ? 'मूल प्रकृति:' : 'Core Nature:'}</strong> ${agenda}</p>
                        <p style="font-size: 0.85rem; color: #94a3b8; font-style: italic;">" ${truth} "</p>
                    </div>

                    <!-- Changeable Manifestation Section -->
                    <div style="padding: 1.2rem; flex-grow: 1;">
                        <h5 style="color: var(--vault-text); font-size: 1rem; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1rem;" title="Current State">📍</span> ${isHi ? 'वर्तमान स्थिति (Manifestation)' : 'Current State (Manifestation)'}
                        </h5>

                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                            <span style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.85rem;">${houseStr}</span>
                            <span style="background: rgba(255,255,255,0.05); padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.85rem;">${signName} (${deg})</span>
                            <span style="background: ${p.dignity === 'Neecha' || p.dignity === 'Combust' || p.dignity === 'Enemy' ? 'rgba(239,68,68,0.2)' : p.dignity === 'Uccha' || p.dignity === 'Mooltrikona' || p.dignity === 'Swarashi' || p.dignity === 'Vargottam' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.85rem; border: 1px solid ${p.dignity === 'Neecha' || p.dignity === 'Combust' || p.dignity === 'Enemy' ? 'rgba(239,68,68,0.5)' : p.dignity === 'Uccha' || p.dignity === 'Mooltrikona' || p.dignity === 'Swarashi' || p.dignity === 'Vargottam' ? 'rgba(34,197,94,0.5)' : 'transparent'};">${dignityText}</span>
                        </div>

                        <!-- Avastha / Fixed Physical Power Section -->
                        <div style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 0.8rem; margin-top: 0.5rem;">
                            <div style="font-size: 0.85rem; color: var(--vault-text-muted); margin-bottom: 0.3rem; display: flex; align-items: center; justify-content: space-between;">
                                <span>${isHi ? 'ग्रह अवस्था (Physical Power):' : 'Graha Avastha (Physical Power):'}</span>
                                <span style="font-weight: bold; color: ${power === 100 ? '#4ade80' : power === 0 ? '#ef4444' : '#e2e8f0'};">${power}%</span>
                            </div>
                            <div style="width: 100%; background: rgba(0,0,0,0.5); height: 6px; border-radius: 3px; overflow: hidden;">
                                <div style="width: ${power}%; background: ${power === 100 ? '#4ade80' : power === 0 ? '#ef4444' : power >= 50 ? '#facc15' : '#f97316'}; height: 100%;"></div>
                            </div>
                            <div style="font-size: 0.75rem; color: #94a3b8; font-style: italic; margin-top: 0.4rem;">
                                ${power === 100 ? (isHi ? 'युवा अवस्था: ग्रह पूर्ण 100% क्षमता के साथ फल देने में सक्षम है।' : 'Yuva Avastha: Planet is fully capable of delivering 100% results.') :
                                   power === 0 ? (isHi ? 'मृत/बाल अवस्था: ग्रह में परिणाम देने की भौतिक ऊर्जा शून्य (0%) है।' : 'Mrit/Bala Avastha: Planet has zero (0%) physical energy to manifest results.') :
                                   (isHi ? `ग्रह ${power}% शक्ति (कुमार/वृद्ध) के साथ आंशिक परिणाम देगा।` : `Planet will deliver partial results with ${power}% capacity.`)}
                            </div>
                        </div>

                    </div>
                </div>
            `;
        });

        outputHTML += `</div>`;

outputHTML += `<h3 style="color: var(--vault-accent); font-family: 'EB Garamond', serif; margin-bottom: 1rem; text-align: center; margin-top: 2rem;">${currentLang === 'hi' ? 'लग्न कुण्डली (भाव 1-12)' : 'Lagna Chart (Houses 1-12)'}</h3>`;
            outputHTML += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">`;

            data.lagnaChart.forEach(h => {
                const sName = signNames[h.sign];
                // Clean up planet names in the house
                const pNamesList = h.planets.map(pn => getPlanetName(pn));
                const pNamesStr = pNamesList.length > 0 ? pNamesList.join(', ') : `<span style="opacity:0.4;">${currentLang === 'hi' ? 'रिक्त' : 'Empty'}</span>`;

                // Add house core info
                let houseCoreStr = '';
                if (h.coreData) {
                    const agenda = currentLang === 'hi' ? h.coreData.core_agenda.hi : h.coreData.core_agenda.en;
                    const truth = currentLang === 'hi' ? h.coreData.unchangeable_truth.hi : h.coreData.unchangeable_truth.en;
                    houseCoreStr = `
                        <div style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem; text-align: left;">
                            <div style="font-size: 0.8rem; color: var(--vault-accent); font-weight: bold; margin-bottom: 0.2rem;">${currentLang === 'hi' ? 'मूल प्रकृति' : 'Core Agenda'}</div>
                            <div style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 0.4rem;">${agenda}</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; font-style: italic;">"${truth}"</div>
                        </div>
                    `;
                }

                outputHTML += `
                    <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--vault-border); border-radius: 6px; padding: 1rem; text-align: center; position: relative; display: flex; flex-direction: column;">
                        <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: var(--vault-surface); border: 1px solid var(--vault-accent); color: var(--vault-accent); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">${h.house}</div>
                        <div style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--vault-text-muted);">${sName}</div>
                        <div style="margin-top: 0.5rem; font-weight: 500; font-size: 1rem;">${pNamesStr}</div>
                        <div style="flex-grow: 1;"></div>
                        ${houseCoreStr}
                    </div>
                `;
            });
            outputHTML += `</div>`;
        }

        outputHTML += `</div>`;

        resultBox.innerHTML = outputHTML;

        // Remove pre-wrap class to allow custom HTML formatting
        resultBox.style.whiteSpace = 'normal';
        resultBox.style.fontFamily = 'inherit';

        // Render Visual SVG Chart
        document.getElementById('chartSection').style.display = 'block';
        if (data.ascendant !== undefined && data.planets) {
            window.chartRenderer.setData({
                ascendantSign: Math.floor(data.ascendant / 30),
                planets: data.planets.map(p => ({
                    name: p.name,
                    sign: p.sign,
                    degree: p.degreeInSign,
                    isRetrograde: p.isRetrograde,
                    dignity: p.dignity,
                    house: p.house
                }))
            });
        }

        // Render Yogas and Doshas
        const yogaContainer = document.getElementById('yogaContainer');
        const yogaList = document.getElementById('yogaList');
        const bhaavPhalList = document.getElementById('bhaavPhalList');
        const bhaavPhalTitle = document.getElementById('bhaavPhalTitle');

        yogaList.innerHTML = ''; // Clear previous results
        bhaavPhalList.innerHTML = ''; // Clear previous results

        // Render Chart Stats
        if (data.chartStats) {
            document.getElementById('chartTierLabel').textContent = data.chartStats.tier;
            document.getElementById('chartTierTitle').textContent = data.chartStats.tierTitle;
            document.getElementById('statRajyoga').textContent = data.chartStats.rajyogaScore;
            document.getElementById('statDosha').textContent = data.chartStats.doshaScore;
            document.getElementById('statRarity').textContent = data.chartStats.rarityScore;

            // Contextual Patra Reading
            let patraText = "";
            const isHindi = (currentLang === 'hi');
            if (patra === 'student') {
                patraText = isHindi ? "विद्यार्थी के रूप में, यह पोटेंशियल आपको अपनी शिक्षा और स्किल्स में निवेश करने की सलाह देता है।" : "As a student, this potential advises you to invest heavily in skills and education.";
            } else if (patra === 'struggling_hustler') {
                patraText = isHindi ? "एक संघर्षरत फाउंडर के रूप में, आपको अपने राजयोगों का उपयोग धैर्य और निरंतरता के साथ करना होगा। हार न मानें, यह आपका कर्मा-टेस्टिंग फेज़ है।" : "As a struggling hustler, you must use your Rajyogas with patience and persistence. Do not give up, this is a karmic testing phase.";
            } else if (patra === 'job_employee') {
                patraText = isHindi ? "नौकरीपेशा व्यक्ति के रूप में, यह कुंडली आपको सुरक्षित विकास या रिस्क लेकर अपने पोटेंशियल को अनलॉक करने के बीच संतुलन दिखाती है।" : "As an employee, this chart shows the balance between safe steady growth and taking calculated risks to unlock potential.";
            } else if (patra === 'established_business') {
                patraText = isHindi ? "स्थापित व्यापारी के रूप में, इन योगों का उपयोग अपने साम्राज्य को स्थिर करने और दान/पुण्य के माध्यम से दोषों को कम करने के लिए करें।" : "As an established business, use these yogas to stabilize your empire and mitigate doshas through philanthropy.";
            }

            if (data.chartStats.tier.includes('Karmic')) {
                patraText += isHindi ? " (विशेष टिप: भारी राजयोग और दोष के कारण आपका जीवन रोलर-कोस्टर रहेगा, मेंटल हेल्थ का ध्यान रखें)।" : " (Special Tip: High yogas and doshas mean a rollercoaster life, guard your mental health).";
            }
            document.getElementById('patraReading').textContent = patraText;
        }

        if (data.yogas && data.yogas.length > 0) {
            yogaContainer.style.display = 'block';

            const karmicYogas = data.yogas.filter(y => y.type === 'Karmic Axis');

            if (karmicYogas.length > 0) {
                const karmicYoga = karmicYogas[0]; // Usually just one
                const karmicHTML = `
                    <div style="background: rgba(139, 0, 0, 0.1); border: 1px solid #dc2626; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <i class="fa-solid fa-infinity" style="color: #dc2626; font-size: 1.5rem; margin-right: 1rem;"></i>
                            <h3 style="color: #ef4444; margin: 0; font-family: 'Cinzel', serif;">Anchor 3: Karmic Axis (Rahu-Ketu)</h3>
                        </div>
                        <div style="color: var(--vault-text); margin-bottom: 0.5rem; font-weight: bold; font-size: 1.1rem;">${karmicYoga.name}</div>
                        <div style="color: var(--vault-text-muted); line-height: 1.5;">${karmicYoga.description}</div>
                    </div>
                `;
                yogaList.innerHTML += karmicHTML;
            }

            // Add Anchor 4: Vakri Grahas (Retrograde)
            const vakriPlanets = data.planets ? data.planets.filter(p => p.isRetrograde && !p.name.includes("Rahu") && !p.name.includes("Ketu")) : [];
            if (vakriPlanets.length > 0) {
                let vakriStr = vakriPlanets.map(p => {
                    const pName = currentLang === 'hi' ? p.name.split(' (')[0] : p.name;
                    const truth = p.coreData ? (currentLang === 'hi' ? p.coreData.unchangeable_truth.hi : p.coreData.unchangeable_truth.en) : "";
                    return `<div style="margin-bottom: 0.5rem;"><b>${pName}</b>: ${truth}</div>`;
                }).join('');
                const vakriHTML = `
                    <div style="background: rgba(217, 119, 6, 0.1); border: 1px solid #d97706; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <i class="fa-solid fa-yin-yang" style="color: #d97706; font-size: 1.5rem; margin-right: 1rem;"></i>
                            <h3 style="color: #f59e0b; margin: 0; font-family: 'Cinzel', serif;">Anchor 4: Stubborn Karma (Vakri Graha)</h3>
                        </div>
                        <div style="color: var(--vault-text-muted); line-height: 1.5;">
                            ${vakriStr}
                        </div>
                    </div>
                `;
                yogaList.innerHTML += vakriHTML;
            }

            const standardYogas = data.yogas.filter(y => y.type !== 'Karmic Axis');

            standardYogas.forEach(yoga => {
                const isDosha = yoga.type.toLowerCase().includes('dosha');
                const cardClass = isDosha ? 'yoga-card dosha' : 'yoga-card';
                // Pick an icon based on type (just a simple heuristic)

                let iconClass = 'fa-regular fa-star'; // Default Common

                // Detailed Rate Card Logic
                if (isDosha) {
                    if (yoga.name.includes('चांडाल') || yoga.name.includes('काल सर्प') || yoga.name.includes('गंभीर')) {
                        iconClass = 'fa-solid fa-skull'; // Severe/Karmic
                    } else {
                        iconClass = 'fa-solid fa-triangle-exclamation'; // Warning
                    }
                } else {
                    if (yoga.name.includes('महापुरुष') || yoga.name.includes('Legendary') || yoga.name.includes('महा')) {
                        iconClass = 'fa-solid fa-crown'; // Legendary
                    } else if (yoga.name.includes('राजयोग') || yoga.name.includes('Rare')) {
                        iconClass = 'fa-solid fa-star'; // Rare
                    }
                }

                // Add the 2x/3x Power badge if present
                let badgeHTML = "";
                if (yoga.name.includes('Power)')) {
                    const match = yoga.name.match(/(\d+x Power)/);
                    if (match) {
                        badgeHTML = ` <span class="yoga-badge" style="background-color: var(--vault-accent); color: #000; font-weight: bold;">${match[1]}</span>`;
                    }
                }

                // Render detailed labels (Digbala, CEO, Avastha, Cancellations)
                let labelsHTML = "";
                if (yoga.labels && yoga.labels.length > 0) {
                    let labelSpans = yoga.labels.map(label => {
                        let bgColor = "rgba(255, 255, 255, 0.1)";
                        let color = "#cbd5e1"; // default subtle text
                        let border = "1px solid rgba(255,255,255,0.2)";

                        // Apply Brutal Reality color coding
                        if (label.includes('⚡') || label.includes('💎') || label.includes('👑') || label.includes('🛡️') || label.includes('🔋')) {
                            bgColor = "rgba(212, 175, 55, 0.1)"; // Gold bg
                            color = "#d4af37"; // Gold text
                            border = "1px solid #d4af37";
                        }
                        if (label.includes('⚠️') || label.includes('💣') || label.includes('👁️')) {
                            bgColor = "rgba(220, 38, 38, 0.1)"; // Red bg
                            color = "#ef4444"; // Red text
                            border = "1px solid #ef4444";
                        }

                        return `<span style="display: inline-block; padding: 0.2rem 0.6rem; margin: 0.3rem 0.3rem 0 0; border-radius: 4px; font-size: 0.75rem; font-weight: 600; background: ${bgColor}; color: ${color}; border: ${border}; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${label}</span>`;
                    }).join('');

                    labelsHTML = `<div style="margin-top: 0.8rem; display: flex; flex-wrap: wrap; gap: 4px;">${labelSpans}</div>`;
                }

                let modifierHTML = "";
                let cardStyle = "";
                let titleStyle = "";

                if (yoga.isCancelled) {
                    cardStyle = "border-left-color: #f59e0b; opacity: 0.8;";
                    titleStyle = "text-decoration: line-through; color: #94a3b8;";
                    modifierHTML = `
                        <div style="margin-top: 0.8rem; padding: 0.8rem; background: rgba(245, 158, 11, 0.1); border: 1px dashed #f59e0b; border-radius: 4px;">
                            <div style="color: #f59e0b; font-size: 0.8rem; font-weight: bold; margin-bottom: 0.2rem; text-transform: uppercase;"><i class="fa-solid fa-ban" style="margin-right:0.3rem;"></i>Conditions Apply (Cancelled)</div>
                            <div style="color: #cbd5e1; font-size: 0.9rem; font-style: italic;">${yoga.modifier_note}</div>
                        </div>
                    `;
                } else if (yoga.type === 'Warning') {
                    cardStyle = "border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);";
                    iconClass = "fa-solid fa-radiation";
                }

                const cardHTML = `
                    <div class="${cardClass}" style="${cardStyle}">
                        <div class="yoga-icon"><i class="${iconClass}"></i></div>
                        <div class="yoga-content" style="width: 100%;">
                            <h3 class="yoga-title" style="${titleStyle}">
                                ${yoga.name}
                                ${badgeHTML}
                            </h3>
                            <p class="yoga-desc">${yoga.description}</p>
                            ${labelsHTML}
                            ${modifierHTML}
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
                    <p>${t.noYogas}</p>
                </div>
            `;
        }

        // Render Bhaav Phal
        if (data.bhaavPhal && data.bhaavPhal.length > 0) {
            bhaavPhalTitle.style.display = 'block';
            bhaavPhalList.style.display = 'flex';
            data.bhaavPhal.forEach(bp => {
                const cardHTML = `
                    <div style="background: var(--vault-surface); border: 1px solid var(--vault-border); border-left: 4px solid var(--vault-accent); padding: 1.5rem; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: transform 0.3s ease;">
                        <h4 style="color: var(--vault-text); font-size: 1.3rem; margin-bottom: 0.5rem; font-family: 'Cinzel', serif;">${bp.name}</h4>
                        <p style="color: var(--vault-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 0;">${bp.description}</p>
                    </div>
                `;
                bhaavPhalList.innerHTML += cardHTML;
            });
        } else {
            bhaavPhalTitle.style.display = 'none';
            bhaavPhalList.style.display = 'none';
        }

    } catch (error) {
        resultBox.textContent = t.error(error.message);
    }
});
