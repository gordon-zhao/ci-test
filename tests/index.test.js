const puppeteer = require('puppeteer');

describe('Test the test_button', () => {
  let page, browser;
  beforeAll(async() => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost');
    console.log("Hey Console!");
  }, 5000)
  
  it('Did I click the button?', async() => {
      await page.click(".test_button");
      expect.anything(document.getElementById("test_content"));
  })

  async() => {await browser.close();}
})();