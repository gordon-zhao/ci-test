const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost');
  console.log("Hey Console!");
  await page.click(".test_button");
  await test('Did I click the button?', () => {
      expect.anything(document.getElementById("test_content"))
  })
  await browser.close();
})();