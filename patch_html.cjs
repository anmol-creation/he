const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'kundali-engine', 'index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

const cssToInject = `
        /* Language Toggle Styles */
        .lang-toggle-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 1rem;
            gap: 0.5rem;
            color: var(--vault-text-muted);
            font-family: 'Work Sans', sans-serif;
            font-size: 0.9rem;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(204, 106, 0, 0.3);
            transition: .4s;
            border: 1px solid var(--vault-accent);
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: var(--vault-primary);
            transition: .4s;
        }

        input:checked + .slider {
            background-color: rgba(204, 106, 0, 0.6);
        }

        input:checked + .slider:before {
            transform: translateX(26px);
            background-color: #fff;
        }

        .slider.round {
            border-radius: 24px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
`;

content = content.replace('body {', cssToInject + '\n        body {');

const toggleHtml = `
        <div class="lang-toggle-container">
            <span id="lang-en-label" style="opacity: 0.5;">English</span>
            <label class="switch">
                <input type="checkbox" id="langToggle" checked>
                <span class="slider round"></span>
            </label>
            <span id="lang-hi-label" style="color: var(--vault-accent); font-weight: bold;">हिंदी</span>
        </div>
`;

content = content.replace('<h1 class="title">Kundali Engine</h1>', toggleHtml + '\n        <h1 class="title" id="mainTitle">Kundali Engine</h1>');

// Add ids to elements for easy replacement
content = content.replace('<p class="subtitle">स्विस एफेमेरिस (Swiss Ephemeris) का उपयोग कर उन्नत ज्योतिषीय गणना</p>', '<p class="subtitle" id="subTitle">स्विस एफेमेरिस (Swiss Ephemeris) का उपयोग कर उन्नत ज्योतिषीय गणना</p>');
content = content.replace('<label for="name">नाम</label>', '<label for="name" id="nameLabel">नाम</label>');
content = content.replace('<label for="dob">जन्म तिथि</label>', '<label for="dob" id="dobLabel">जन्म तिथि</label>');
content = content.replace('<label for="time">जन्म समय</label>', '<label for="time" id="timeLabel">जन्म समय</label>');
content = content.replace('<label for="city">जन्म स्थान (शहर)</label>', '<label for="city" id="cityLabel">जन्म स्थान (शहर)</label>');
content = content.replace('<button id="calculateBtn">कुण्डली डेटा जनरेट करें</button>', '<button id="calculateBtn">कुण्डली डेटा जनरेट करें</button>');
content = content.replace('<a href="search.html"', '<a href="search.html" id="searchLink"');
content = content.replace('<h2 class="title" style="font-size: 2rem; margin-bottom: 1.5rem;">योग और दोष विश्लेषण</h2>', '<h2 class="title" id="yogaTitle" style="font-size: 2rem; margin-bottom: 1.5rem;">योग और दोष विश्लेषण</h2>');


fs.writeFileSync(indexHtmlPath, content);
