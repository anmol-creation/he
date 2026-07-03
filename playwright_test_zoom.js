const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  await page.goto('http://localhost:3000/pages/historic-map.html');
  await page.waitForTimeout(2000);

  // Try focusing on Brahman directly
  await page.evaluate(() => {
     window.focusOnNode('brahman');
  });

  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/verification_brahman.png' });
  await browser.close();
})();
