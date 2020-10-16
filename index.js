const puppeteer = require("puppeteer");

// Pass the User-Agent Test.
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(userAgent);
    await page.goto('https://10fastfingers.com/competition/5f88dd15460ce');

    await page.waitForSelector("#row1 span");
    const words = await page.evaluate(() => Array.from(document.querySelectorAll("#row1 span")).map(e => e.innerText));
    const str = words.reduce((acc, w) => acc += w + " ", "")
    // console.log("====", str);
    // await page.type("#inputfield", str);

    await page.evaluate(() => {
        alert("Browser is closing in 2 seconds");
    });

    setTimeout(async () => await browser.close(), 2000);
})();