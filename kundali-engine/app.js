
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

        const response = await fetch('http://localhost:3000/api/calculate', {
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

        const signNamesHi = ["मेष (Aries)", "वृषभ (Taurus)", "मिथुन (Gemini)", "कर्क (Cancer)", "सिंह (Leo)", "कन्या (Virgo)", "तुला (Libra)", "वृश्चिक (Scorpio)", "धनु (Sagittarius)", "मकर (Capricorn)", "कुंभ (Aquarius)", "मीन (Pisces)"];
        const signNamesEn = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        const signNames = currentLang === 'hi' ? signNamesHi : signNamesEn;

        let output = t.kundaliResult(name) + '\n';
        output += t.dateStr(date, time) + '\n';
        output += t.locationStr(city, lat, lng) + '\n';
        output += `${t.julianDay}: ${data.jd.toFixed(4)}\n`;
        if (data.tithi) {
            output += t.tithiStr(data.tithi.name, data.tithi.percentage * 100) + '\n';
        }
        output += `\n`;

        if (data.ascendant) {
            const ascSign = Math.floor(data.ascendant / 30);
            const ascDegree = data.ascendant % 30;
            output += t.ascendantStr(signNames[ascSign], ascDegree) + '\n\n';
        }

        output += t.planetPos + '\n';
        output += t.tableHeader2 + '\n';
        output += t.tableHeader1 + '\n';
        output += t.tableHeader2 + '\n';

        data.planets.forEach(p => {
            const signName = signNames[p.sign].padEnd(12);
            const deg = p.degreeInSign.toFixed(2).padStart(5) + '°';
            const planetName = p.name.padEnd(12);

            let state = t.direct;
            if (p.isRetrograde) state = t.retrograde;
            else if (p.speed === 0) state = t.stationary;

            let dignityStr = "";
            if(p.dignity === 'Uccha') dignityStr = " [⇧ Uccha]";
            if(p.dignity === 'Neecha') dignityStr = " [⇩ Neecha]";
            if(p.dignity === 'Swarashi') dignityStr = " [⌂ Swarashi]";

            output += `${planetName} | ${signName} | ${deg}   | ${state}${dignityStr}\n`;
        });

        resultBox.textContent = output;

                // Render Yogas and Doshas
        const yogaContainer = document.getElementById('yogaContainer');
        const yogaList = document.getElementById('yogaList');

        yogaList.innerHTML = ''; // Clear previous results

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

            data.yogas.forEach(yoga => {
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

                const cardHTML = `
                    <div class="${cardClass}">
                        <div class="yoga-icon"><i class="${iconClass}"></i></div>
                        <div class="yoga-content">
                            <h3 class="yoga-title">
                                ${yoga.name}
                                ${badgeHTML}
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
                    <p>${t.noYogas}</p>
                </div>
            `;
        } else {
             yogaContainer.style.display = 'none';
        }

    } catch (error) {
        resultBox.textContent = t.error(error.message);
    }
});
