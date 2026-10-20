const SVG_NS = "http://www.w3.org/2000/svg";

export class KundaliChartRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentStyle = 'north';
        this.chartData = null;
        this.lang = 'hi';
    }

    setLanguage(lang) {
        this.lang = lang;
        if(this.chartData) this.render();
    }

    setData(data) {
        this.chartData = data;
        this.render();
    }

    setStyle(style) {
        this.currentStyle = style;
        if(this.chartData) this.render();
    }

    getPlanetSymbol(planetName, lang) {
        const pMap = {
            'Sun': {en: 'Su', hi: 'सू'}, 'सूर्य': {en: 'Su', hi: 'सू'},
            'Moon': {en: 'Mo', hi: 'चं'}, 'चंद्र': {en: 'Mo', hi: 'चं'},
            'Mars': {en: 'Ma', hi: 'मं'}, 'मंगल': {en: 'Ma', hi: 'मं'},
            'Mercury': {en: 'Me', hi: 'बु'}, 'बुध': {en: 'Me', hi: 'बु'},
            'Jupiter': {en: 'Ju', hi: 'गु'}, 'गुरु': {en: 'Ju', hi: 'गु'},
            'Venus': {en: 'Ve', hi: 'शु'}, 'शुक्र': {en: 'Ve', hi: 'शु'},
            'Saturn': {en: 'Sa', hi: 'श'}, 'शनि': {en: 'Sa', hi: 'श'},
            'Rahu': {en: 'Ra', hi: 'रा'}, 'राहु': {en: 'Ra', hi: 'रा'},
            'Ketu': {en: 'Ke', hi: 'के'}, 'केतु': {en: 'Ke', hi: 'के'}
        };
        const baseName = planetName.split(' ')[0];
        let key = Object.keys(pMap).find(k => planetName.includes(k));

        if (key && pMap[key]) {
            return pMap[key][lang] || pMap[key]['en'];
        }
        return baseName.substring(0, 2);
    }

    getAvastha(sign, degree) {
        // Odd signs: Aries(0), Gemini(2), Leo(4), Libra(6), Sagittarius(8), Aquarius(10)
        // Note: sign is 0-indexed here
        const isOdd = (sign % 2 === 0);
        let avasthaInfo, avScore, percentage;

        if (degree >= 0 && degree < 6) {
            avasthaInfo = isOdd ? "Baal" : "Mrit";
            percentage = isOdd ? "25" : "0";
            avScore = isOdd ? 0 : -2;
        } else if (degree >= 6 && degree < 12) {
            avasthaInfo = isOdd ? "Kumar" : "Vriddh";
            percentage = isOdd ? "50" : "10";
            avScore = isOdd ? 1 : -1;
        } else if (degree >= 12 && degree < 18) {
            avasthaInfo = "Yuva"; // Yuva for both
            percentage = "100";
            avScore = 2;
        } else if (degree >= 18 && degree < 24) {
            avasthaInfo = isOdd ? "Vriddh" : "Kumar";
            percentage = isOdd ? "10" : "50";
            avScore = isOdd ? -1 : 1;
        } else {
            avasthaInfo = isOdd ? "Mrit" : "Baal";
            percentage = isOdd ? "0" : "25";
            avScore = isOdd ? -2 : 0;
        }

        // Superscript percentage mapping
        const superscriptMap = {
            '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
            '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
        };
        const percentageStr = percentage.split('').map(char => superscriptMap[char] || char).join('');

        // FontAwesome Lightning Bolt (⚡) unicode: \uf0e7.
        // In SVG text, it needs the fa font family.
        const symbol = "\uf0e7" + percentageStr;

        return {
            symbol: symbol,
            score: avScore,
            tooltip: `Power: ${percentage}% (${avasthaInfo})`
        };
    }

    getPlanetDetails(p) {
        let emojis = "";
        let score = 0;
        let dignityText = "";

        // Retrograde Yin-Yang comes first if applicable
        if (p.isRetrograde) {
            emojis += "☯️";
            score += 0.5; // vakri planets are strong
            dignityText += "वक्री (Retrograde) | ";
        }

        // Dignity
        if (p.dignity === 'Vargottam') { emojis += "⭐️⁺⁵"; score += 4; dignityText += "वर्गोत्तम (Vargottam)"; }
        else if (p.dignity === 'Uccha') { emojis += "⭐️⁺⁴"; score += 3; dignityText += "उच्च (Exalted)"; }
        else if (p.dignity === 'Mooltrikona') { emojis += "⭐️⁺³"; score += 2.5; dignityText += "मूलत्रिकोण (Mooltrikona)"; }
        else if (p.dignity === 'Swarashi') { emojis += "⭐️⁺²"; score += 2; dignityText += "स्वराशि (Own Sign)"; }
        else if (p.dignity === 'Friendly') { emojis += "⭐️⁺¹"; score += 1; dignityText += "मित्र राशि (Friendly Sign)"; }
        else if (p.dignity === 'Neutral') { score += 0; dignityText += "सम (Neutral)"; }
        else if (p.dignity === 'Enemy') { emojis += "⭐️⁻¹"; score -= 1; dignityText += "शत्रु राशि (Enemy Sign)"; }
        else if (p.dignity === 'Combust') { emojis += "⭐️⁻²"; score -= 2; dignityText += "अस्त (Combust)"; }
        else if (p.dignity === 'Neecha') { emojis += "⭐️⁻³"; score -= 3; dignityText += "नीच (Debilitated)"; }

        // Avastha
        const av = this.getAvastha(p.sign, p.degree);
        score += av.score;

        // Determine Color based on score (Red to Green)
        let color = "#e0e0e0"; // Default
        if (score >= 4) color = "#FFD700"; // Gold for premium top level
        else if (score >= 2) color = "#4ade80"; // Bright Green
        else if (score >= 0) color = "#86efac"; // Light Green
        else if (score >= -1.5) color = "#fca5a5"; // Light Red
        else color = "#ff4d4d"; // Bright Red

        const combinedTooltip = `${av.tooltip} | ${dignityText}`;

        // Note: we separate avSymbol from emojis so we can apply font-awesome class to it in SVG
        return { emojis, avSymbol: av.symbol, color, tooltipText: combinedTooltip };
    }

    render() {
        if (!this.container || !this.chartData) return;
        this.container.innerHTML = '';

        const strokeColor = '#cc6a00';
        const signColor = '#888888';
        const bgColor = '#1a110b';

        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 400 400");
        svg.style.backgroundColor = bgColor;
        svg.style.borderRadius = "8px";
        svg.style.transition = "all 0.5s ease"; // Animation

        // Add defs for styling
        const defs = document.createElementNS(SVG_NS, "defs");
        svg.appendChild(defs);

        if (this.currentStyle === 'north') {
            this.renderNorthIndian(svg, strokeColor, signColor);
        } else {
            this.renderSouthIndian(svg, strokeColor, signColor);
        }

        this.container.appendChild(svg);

        // Entrance animation
        svg.animate([
            { opacity: 0, transform: 'scale(0.95)' },
            { opacity: 1, transform: 'scale(1)' }
        ], {
            duration: 500,
            easing: 'ease-out'
        });
    }

    createLine(svg, x1, y1, x2, y2, color) {
        const line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "2");
        line.style.transition = "stroke 0.3s ease";
        svg.appendChild(line);
    }

    createText(svg, x, y, text, color, fontSize, isBold = false, className = "") {
        const t = document.createElementNS(SVG_NS, "text");
        t.setAttribute("x", x);
        t.setAttribute("y", y);
        t.setAttribute("fill", color);
        t.setAttribute("font-size", fontSize);
        t.setAttribute("font-family", "sans-serif");
        t.setAttribute("text-anchor", "middle");
        t.setAttribute("dominant-baseline", "middle");
        if(isBold) t.setAttribute("font-weight", "bold");
        if(className) t.setAttribute("class", className);
        t.textContent = text;
        t.style.transition = "fill 0.3s ease, transform 0.2s ease";
        svg.appendChild(t);
        return t;
    }

    renderNorthIndian(svg, strokeColor, signColor) {
        const size = 400;
        const padding = 10;
        const w = size - 2*padding;
        const h = size - 2*padding;
        const cx = size/2;
        const cy = size/2;

        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttribute("x", padding);
        rect.setAttribute("y", padding);
        rect.setAttribute("width", w);
        rect.setAttribute("height", h);
        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", strokeColor);
        rect.setAttribute("stroke-width", "3");
        svg.appendChild(rect);

        this.createLine(svg, padding, padding, size-padding, size-padding, strokeColor);
        this.createLine(svg, padding, size-padding, size-padding, padding, strokeColor);

        this.createLine(svg, cx, padding, size-padding, cy, strokeColor);
        this.createLine(svg, size-padding, cy, cx, size-padding, strokeColor);
        this.createLine(svg, cx, size-padding, padding, cy, strokeColor);
        this.createLine(svg, padding, cy, cx, padding, strokeColor);

        const ascSign = this.chartData.ascendantSign;

        const houseCoords = [
            {hx: cx, hy: cy - h/4},       // H1
            {hx: cx - w/4, hy: padding + h/8}, // H2
            {hx: padding + w/8, hy: cy - h/4}, // H3
            {hx: cx - w/4, hy: cy},       // H4
            {hx: padding + w/8, hy: cy + h/4}, // H5
            {hx: cx - w/4, hy: size - padding - h/8}, // H6
            {hx: cx, hy: cy + h/4},       // H7
            {hx: cx + w/4, hy: size - padding - h/8}, // H8
            {hx: size - padding - w/8, hy: cy + h/4}, // H9
            {hx: cx + w/4, hy: cy},       // H10
            {hx: size - padding - w/8, hy: cy - h/4}, // H11
            {hx: cx + w/4, hy: padding + h/8}  // H12
        ];

        for (let i = 0; i < 12; i++) {
            const hNum = i + 1;
            const signNum = ((ascSign + i) % 12) + 1;

            this.createText(svg, houseCoords[i].hx, houseCoords[i].hy - 25, signNum.toString(), signColor, "12px");

            const housePlanets = this.chartData.planets.filter(p => p.house === hNum);

            // Layout planets with emojis and colors
            housePlanets.forEach((p, index) => {
                const details = this.getPlanetDetails(p);
                const pText = this.getPlanetSymbol(p.name, this.lang) + " " + details.emojis;
                const offset = (index - (housePlanets.length-1)/2) * 16;

                // Group to hold text and tooltip
                const g = document.createElementNS(SVG_NS, "g");
                svg.appendChild(g);

                // Main planet text
                const t = this.createText(g, houseCoords[i].hx - 10, houseCoords[i].hy + offset + 5, pText, details.color, "15px", true, "planet-text");

                // FontAwesome Icon text
                const faIcon = this.createText(g, houseCoords[i].hx + 10, houseCoords[i].hy + offset + 5, details.avSymbol, details.color, "12px", false, "fa-solid");
                faIcon.style.fontFamily = '"Font Awesome 6 Free"';
                faIcon.style.fontWeight = '900';

                // Add simple native tooltip
                const title = document.createElementNS(SVG_NS, "title");
                title.textContent = `${p.name} - ${details.tooltipText}`;
                g.appendChild(title);

                g.addEventListener('mouseenter', () => {
                    t.setAttribute('font-size', '18px');
                    faIcon.setAttribute('font-size', '14px');
                    g.style.cursor = 'pointer';
                });
                g.addEventListener('mouseleave', () => {
                    t.setAttribute('font-size', '15px');
                    faIcon.setAttribute('font-size', '12px');
                });
            });
        }
    }

    renderSouthIndian(svg, strokeColor, signColor) {
        const size = 400;
        const padding = 10;
        const w = size - 2*padding;
        const h = size - 2*padding;
        const cellW = w / 4;
        const cellH = h / 4;

        const signGrid = {
            12: {c:0, r:0}, 1: {c:1, r:0}, 2: {c:2, r:0}, 3: {c:3, r:0},
            11: {c:0, r:1},                               4: {c:3, r:1},
            10: {c:0, r:2},                               5: {c:3, r:2},
            9: {c:0, r:3},  8: {c:1, r:3}, 7: {c:2, r:3}, 6: {c:3, r:3}
        };

        for(let i=0; i<=4; i++) {
            if(i===0 || i===4 || i===1 || i===3) {
                 this.createLine(svg, padding, padding + i*cellH, size-padding, padding + i*cellH, strokeColor);
            } else if (i===2) {
                 this.createLine(svg, padding, padding + i*cellH, padding+cellW, padding + i*cellH, strokeColor);
                 this.createLine(svg, padding+3*cellW, padding + i*cellH, size-padding, padding + i*cellH, strokeColor);
            }
            if(i===0 || i===4 || i===1 || i===3) {
                 this.createLine(svg, padding + i*cellW, padding, padding + i*cellW, size-padding, strokeColor);
            } else if (i===2) {
                 this.createLine(svg, padding + i*cellW, padding, padding + i*cellW, padding+cellH, strokeColor);
                 this.createLine(svg, padding + i*cellW, padding+3*cellH, padding + i*cellW, size-padding, strokeColor);
            }
        }

        const ascSign = this.chartData.ascendantSign + 1;

        for (let sign = 1; sign <= 12; sign++) {
            const gridPos = signGrid[sign];
            const cx = padding + gridPos.c * cellW + cellW/2;
            const cy = padding + gridPos.r * cellH + cellH/2;

            if (sign === ascSign) {
                this.createText(svg, cx - cellW/3 + 5, cy - cellH/3 + 5, "As", strokeColor, "12px", true);
                this.createLine(svg, padding + gridPos.c*cellW, padding + gridPos.r*cellH, padding + gridPos.c*cellW + 20, padding + gridPos.r*cellH + 20, strokeColor);
            }

            const signPlanets = this.chartData.planets.filter(p => (p.sign + 1) === sign);

            signPlanets.forEach((p, index) => {
                const details = this.getPlanetDetails(p);
                const pText = this.getPlanetSymbol(p.name, this.lang) + " " + details.emojis;
                const offset = (index - (signPlanets.length-1)/2) * 16;

                const g = document.createElementNS(SVG_NS, "g");
                svg.appendChild(g);

                const t = this.createText(g, cx - 10, cy + offset, pText, details.color, "14px", true, "planet-text");

                const faIcon = this.createText(g, cx + 10, cy + offset, details.avSymbol, details.color, "11px", false, "fa-solid");
                faIcon.style.fontFamily = '"Font Awesome 6 Free"';
                faIcon.style.fontWeight = '900';

                const title = document.createElementNS(SVG_NS, "title");
                title.textContent = `${p.name} - ${details.tooltipText}`;
                g.appendChild(title);

                g.addEventListener('mouseenter', () => {
                    t.setAttribute('font-size', '17px');
                    faIcon.setAttribute('font-size', '13px');
                    g.style.cursor = 'pointer';
                });
                g.addEventListener('mouseleave', () => {
                    t.setAttribute('font-size', '14px');
                    faIcon.setAttribute('font-size', '11px');
                });
            });
        }
    }
}
