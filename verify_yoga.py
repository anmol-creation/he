import asyncio
from playwright.async_api import async_playwright

async def run(playwright):
    browser = await playwright.chromium.launch(headless=True)
    page = await browser.new_page(viewport={"width": 1280, "height": 800})
    await page.goto("http://localhost:3000/kundali-engine/index.html")

    await page.wait_for_selector("#quickSave")
    await page.select_option("#quickSave", value="krishna")
    await page.wait_for_timeout(2000)

    # Find Neechbhanga Rajyoga accordion
    accordions = await page.locator(".accordion-header").all()
    for acc in accordions:
        text = await acc.inner_text()
        if "राजयोग" in text or "Rajyoga" in text:
            await acc.click()
            await page.wait_for_timeout(500)
            break

    await page.screenshot(path="/home/jules/verification/verification_neechbhanga.png", full_page=True)
    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)

asyncio.run(main())
