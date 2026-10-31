const SVG_NS = "http://www.w3.org/2000/svg";

const vedicTitles = {
    1: {en: "Lagnesh", hi: "लग्नेश"}, 2: {en: "Dhanesh", hi: "धनेश"}, 3: {en: "Parakramesh", hi: "पराक्रमेश"}, 4: {en: "Sukhesh", hi: "सुखेश"},
    5: {en: "Panchamesh", hi: "पंचमेश"}, 6: {en: "Shashthesh", hi: "षष्ठेश"}, 7: {en: "Saptamesh", hi: "सप्तमेश"}, 8: {en: "Ashtamesh", hi: "अष्टमेश"},
    9: {en: "Bhagyesh", hi: "भाग्येश"}, 10: {en: "Karmesh", hi: "कर्मेश"}, 11: {en: "Labhesh", hi: "लाभेश"}, 12: {en: "Vyayesh", hi: "व्ययेश"}
};

const planetHindiNames = {
    "Sun": "सूर्य", "Moon": "चंद्र", "Mars": "मंगल",
    "Mercury": "बुध", "Jupiter": "गुरु", "Venus": "शुक्र",
    "Saturn": "शनि", "Rahu": "राहु", "Ketu": "केतु"
};

// Simplified interpretations for Lord in House logic (just as an example, this is usually detailed BPHS)
const getLordImpact = (houseLordNum, placedInHouse, lang) => {
    const specificImpacts = {
        2: {
            1: { en: "Wealth comes through self-effort and personal brand.", hi: "धन का आगमन स्वयं के प्रयासों, कौशल और नाम (Personal Brand) से होगा।" },
            2: { en: "Accumulation of immense wealth and successful family business.", hi: "अपार धन का संचय; पारिवारिक व्यवसाय और वाणी (Speech) से धन लाभ होगा।" },
            11: { en: "Multiple streams of income and gains from networks.", hi: "आय के कई स्रोत; मित्रों, बड़े भाई-बहनों और नेटवर्क से भारी धन लाभ होगा।" },
            12: { en: "Wealth is spent on foreign lands, charity, or losses.", hi: "धन का व्यय विदेश यात्रा, दान-पुण्य या नुकसान में हो सकता है। धन संचय में कठिनाई।" }
        }
    };

    if (specificImpacts[houseLordNum] && specificImpacts[houseLordNum][placedInHouse]) {
        return specificImpacts[houseLordNum][placedInHouse][lang];
    }

    if (lang === 'hi') {
        return `भाव ${houseLordNum} का स्वामी (अधिकारी) भाव ${placedInHouse} में स्थित है। इसका अर्थ है कि ${vedicTitles[houseLordNum].hi} विभाग के कार्य और परिणाम भाव ${placedInHouse} के क्षेत्रों (जैसे वहां के रिश्ते या कार्य) के माध्यम से संचालित होंगे।`;
    } else {
        return `The Lord of House ${houseLordNum} is placed in House ${placedInHouse}. This indicates that the matters and outcomes of the ${vedicTitles[houseLordNum].en} office will be heavily influenced by and managed through the domains of House ${placedInHouse}.`;
    }
};

export class DepartmentChartRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chartData = null;
        this.selectedHouse = null;
        this.lang = 'hi';

        this.container.style.position = 'relative';
        this.container.style.width = '100%';
        this.container.style.maxWidth = '400px';
        this.container.style.height = '400px';
        this.container.style.margin = '0 auto';

        this.detailBox = document.createElement('div');
        this.detailBox.id = 'deptDetailBox';
        this.detailBox.style.cssText = 'margin-top: 20px; padding: 15px; border: 1px solid var(--vault-accent); border-radius: 8px; background: rgba(0,0,0,0.4); display: none; text-align: left;';

        setTimeout(() => {
            if (this.container.parentNode) {
                this.container.parentNode.insertBefore(this.detailBox, this.container.nextSibling);
            }
        }, 100);
    }

    setLanguage(lang) {
        this.lang = lang;
        if(this.chartData) this.render();
    }

    updateData(data) {
        this.chartData = data;
        this.selectedHouse = null;
        this.detailBox.style.display = 'none';
        this.render();
    }

    createLine(svg, x1, y1, x2, y2, color) {
        const line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "2");
        line.style.pointerEvents = 'none';
        svg.appendChild(line);
    }

    createText(svg, x, y, text, color, fontSize, isBold = false) {
        const t = document.createElementNS(SVG_NS, "text");
        t.setAttribute("x", x);
        t.setAttribute("y", y);
        t.setAttribute("fill", color);
        t.setAttribute("font-size", fontSize);
        t.setAttribute("font-family", "sans-serif");
        t.setAttribute("text-anchor", "middle");
        t.setAttribute("dominant-baseline", "middle");
        if(isBold) t.setAttribute("font-weight", "bold");
        t.textContent = text;
        t.style.pointerEvents = "none";
        svg.appendChild(t);
        return t;
    }

    getHousePolygons(size, padding) {
        const cx = size/2;
        const cy = size/2;
        const sp = size - padding;
        const p = padding;

        const tl = `${p},${p}`; const tr = `${sp},${p}`;
        const bl = `${p},${sp}`; const br = `${sp},${sp}`;

        const tm = `${cx},${p}`; const bm = `${cx},${sp}`;
        const lm = `${p},${cy}`; const rm = `${sp},${cy}`;
        const c = `${cx},${cy}`;

        const itl = `${p + (cx-p)/2},${p + (cy-p)/2}`;
        const itr = `${cx + (sp-cx)/2},${p + (cy-p)/2}`;
        const ibl = `${p + (cx-p)/2},${cy + (sp-cy)/2}`;
        const ibr = `${cx + (sp-cx)/2},${cy + (sp-cy)/2}`;

        return {
            1: `${c} ${itl} ${tm} ${itr}`,
            2: `${tm} ${tl} ${itl}`,
            3: `${itl} ${tl} ${lm}`,
            4: `${c} ${lm} ${ibl} ${itl}`,
            5: `${lm} ${bl} ${ibl}`,
            6: `${ibl} ${bl} ${bm}`,
            7: `${c} ${ibl} ${bm} ${ibr}`,
            8: `${bm} ${br} ${ibr}`,
            9: `${ibr} ${br} ${rm}`,
            10:`${c} ${ibr} ${rm} ${itr}`,
            11:`${rm} ${tr} ${itr}`,
            12:`${itr} ${tr} ${tm}`,
        };
    }

    getLordPlacementText(houseNum, lang) {
        const signNum = ((this.chartData.ascendantSign - 1 + houseNum - 1) % 12) + 1;
        const signLords = {
            1: "Mars", 2: "Venus", 3: "Mercury", 4: "Moon",
            5: "Sun", 6: "Mercury", 7: "Venus", 8: "Mars",
            9: "Jupiter", 10: "Saturn", 11: "Saturn", 12: "Jupiter"
        };
        const lordNameEn = signLords[signNum];
        // The backend gives us full Hindi name strings sometimes or English strings. Let's make sure we find the planet correctly.
        const lordPlanet = this.chartData.planets.find(p => p.name.includes(lordNameEn) || p.name.includes(planetHindiNames[lordNameEn]));

        let officer = lang === 'hi' ? planetHindiNames[lordNameEn] : lordNameEn;
        let placement = lordPlanet ? `In H${lordPlanet.house}` : "Unknown";
        if(lang === 'hi' && lordPlanet) {
            placement = `भाव ${lordPlanet.house} में`;
        }
        return { officer, placement, placedInHouse: lordPlanet ? lordPlanet.house : null };
    }

    render() {
        if (!this.container || !this.chartData) return;
        this.container.innerHTML = '';

        const strokeColor = getComputedStyle(document.documentElement).getPropertyValue('--vault-accent').trim() || "#c5a059";
        const signColor = getComputedStyle(document.documentElement).getPropertyValue('--vault-text-muted').trim() || "#888";
        const hoverColor = "rgba(197, 160, 89, 0.15)";
        const selectedColor = "rgba(197, 160, 89, 0.35)";

        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 400 400");
        svg.style.background = 'var(--vault-surface)';
        svg.style.borderRadius = '8px';

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

        const polygons = this.getHousePolygons(size, padding);

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

        for(let i = 1; i <= 12; i++) {
            const poly = document.createElementNS(SVG_NS, "polygon");
            poly.setAttribute("points", polygons[i]);
            poly.setAttribute("fill", this.selectedHouse === i ? selectedColor : "transparent");
            poly.setAttribute("stroke", "none");
            poly.style.cursor = "pointer";
            poly.style.transition = "fill 0.2s ease";

            poly.addEventListener('mouseenter', () => {
                if(this.selectedHouse !== i) poly.setAttribute("fill", hoverColor);
            });
            poly.addEventListener('mouseleave', () => {
                if(this.selectedHouse !== i) poly.setAttribute("fill", "transparent");
            });

            poly.addEventListener('click', () => {
                this.selectedHouse = i;
                this.render();
                this.showDetails(i);
            });

            svg.appendChild(poly);

            const coord = houseCoords[i-1];
            const deptName = vedicTitles[i][this.lang] + (this.lang === 'hi' ? "" : "");
            const { officer, placement } = this.getLordPlacementText(i, this.lang);

            // Draw 3 lines of text
            this.createText(svg, coord.hx, coord.hy - 12, deptName, strokeColor, "12px", true);
            this.createText(svg, coord.hx, coord.hy + 2, officer, "#fff", "10px", false);
            this.createText(svg, coord.hx, coord.hy + 16, placement, signColor, "9px", false);
        }

        this.container.appendChild(svg);

        if (this.selectedHouse) {
            this.showDetails(this.selectedHouse);
        }
    }

    showDetails(houseNum) {
        const { officer, placement, placedInHouse } = this.getLordPlacementText(houseNum, this.lang);
        let deptName = vedicTitles[houseNum][this.lang] + (this.lang === 'hi' ? " विभाग" : " Office");

        let impactText = "";
        if(placedInHouse !== null) {
            impactText = getLordImpact(houseNum, placedInHouse, this.lang);
        }

        let html = `
            <h4 style="margin: 0 0 10px 0; color: var(--vault-accent); font-size: 16px; border-bottom: 1px dashed var(--vault-border); padding-bottom: 5px;">
                ${deptName}
            </h4>
            <div style="font-size: 14px; margin-bottom: 8px;">
                <strong style="color: var(--vault-text);">${this.lang === 'hi' ? 'अधिकारी (Officer):' : 'Officer (Lord):'}</strong> ${officer}
            </div>
            <div style="font-size: 14px; margin-bottom: 8px; color: var(--vault-text-muted);">
                <strong style="color: var(--vault-text);">${this.lang === 'hi' ? 'वर्तमान स्थिति:' : 'Current Placement:'}</strong> ${placement}
            </div>
            <div style="font-size: 14px; color: #fff; background: rgba(197, 160, 89, 0.1); padding: 10px; border-left: 3px solid var(--vault-accent); border-radius: 4px; line-height: 1.5;">
                <strong style="color: var(--vault-accent); display: block; margin-bottom: 5px;">
                   ${this.lang === 'hi' ? 'ज्योतिषीय प्रभाव (Impact):' : 'Astrological Impact:'}
                </strong>
                ${impactText}
            </div>
        `;

        this.detailBox.innerHTML = html;
        this.detailBox.style.display = 'block';
    }
}
