const puppeteer = require('puppeteer');

describe('Test the test _button', () => {
  let page, browser;
  beforeAll(async() => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost');
  }, 5000)
  console.log("Hey Console!");
  
  it('Did I click the button?', async() => {
      await page.click(".test_button");
      expect.anything(document.getElementById("test_content"));
  })

  await browser.close();
})();