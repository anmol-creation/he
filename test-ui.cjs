const { chromium } = require('playwright');
const http = require('http');

const server = http.createServer((req, res) => {
    // Simple mock server just to serve the files
    const fs = require('fs');
    const path = require('path');
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('404 File Not Found\n');
            }
            else {
                res.writeHead(500);
                res.end('500 Internal Server Error: '+error.code+'..\n');
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8080, async () => {
    console.log('Server running on 8080');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 1024 }
    });

    // We will route /api/calculate to a mock Hindi response
    await context.route('http://localhost:3000/api/calculate', async route => {
      const json = {
        "jd":2451535.1354166665,
        "ascendant":112.24234278583043,
        "tithi":{"number":1,"name":"शुक्ल पक्ष प्रतिपदा (Pratipada)","percentage":0},
        "planets":[{"name":"सूर्य (Sun)","longitude":246.46623936510207,"sign":8,"degreeInSign":6.466239365102069,"speed":1.0180177436153832},{"name":"चंद्र (Moon)","longitude":65.11487715472182,"sign":2,"degreeInSign":5.114877154721825,"speed":15.295368802339357},{"name":"मंगल (Mars)","longitude":296.4616351790342,"sign":9,"degreeInSign":26.461635179034204,"speed":0.774923749005937},{"name":"बुध (Mercury)","longitude":232.93067903297688,"sign":7,"degreeInSign":22.930679032976883,"speed":1.505587517235658},{"name":"गुरु (Jupiter)","longitude":1.1639735267580007,"sign":0,"degreeInSign":1.1639735267580007,"speed":0.006945620025242647},{"name":"शुक्र (Venus)","longitude":205.84920251750384,"sign":6,"degreeInSign":25.84920251750384,"speed":1.1954714167436942},{"name":"शनि (Saturn)","longitude":16.825831465304848,"sign":0,"degreeInSign":16.825831465304848,"speed":-0.03722089423128699},{"name":"राहु (Rahu)","longitude":101.71016768477278,"sign":3,"degreeInSign":11.710167684772784,"speed":-0.05299201983484405}],
        "yogas":[
            {"id":"ruchaka_yoga","name":"रुचक पंच महापुरुष राजयोग","type":"राजयोग","description":"मंगल के केंद्र (1, 4, 7, 10) में स्वराशि (मेष, वृश्चिक) या उच्च राशि (मकर) में होने से बनता है। निडरता और अजेय लीडरशिप प्रदान करता है।"},
            {"id":"lagna_rahu_dosha","name":"लग्न राहु दोष / चांडाल प्रभाव","type":"दोष","description":"लग्न में राहु। इंसान को बड़ा 'भ्रम' (Illusion) देता है और शॉर्टकट ढूंढने की आदत डालता है।"}
        ]
      };
      await route.fulfill({ json });
    });

    // Mock openstreetmap so it doesn't fail
    await context.route('https://nominatim.openstreetmap.org/search?format=json&q=Pilibhit%2C%20India', async route => {
      const json = [{ lat: '28.4947', lon: '80.1076' }];
      await route.fulfill({ json });
    });

    const page = await context.newPage();
    await page.goto('http://localhost:8080/kundali-engine/index.html');

    // Fill form and click
    await page.fill('#name', 'Anmol Agarwal');
    await page.click('#calculateBtn');

    // Wait for yogas to render
    await page.waitForSelector('.yoga-card');

    await page.screenshot({ path: '/tmp/kundali-hindi.png', fullPage: true });

    await browser.close();
    server.close();
});
