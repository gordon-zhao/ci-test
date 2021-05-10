const puppeteer = require('puppeteer');

describe('Test the test_button', () => {
  let page, browser;
  beforeAll(async() => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:5000/index.html');
    console.log("Hey Console!");
  }, 5000)
  
  it('Did I click the button?', async() => {
      await page.click("#test_button");
      await expect.anything(await page.evaluate(() => {
          document.getElementById("test_content")
        })
      );
  })

  afterAll(async() => {
      browser.close();
  }, 5000)
});