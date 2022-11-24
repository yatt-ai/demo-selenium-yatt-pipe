require("chromedriver");

const { Builder, By, Key } = require("selenium-webdriver");
var assert = require("chai").assert;

describe("add note", function () {
  it("should add a note and display on the page", async function () {
      /*Selenium automates:
      1. Open Chrome
      2. Navigate to app
      3. Type "Hello Selenium" in input box
      4. Clicks the Enter key
     */

    let driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://victoria-lo.github.io/bulletin-board/");

      await driver
        .findElement(By.xpath('//*[@id="new-item"]/input'))
        .sendKeys("Hello Selenium", Key.RETURN);

      let note = await driver
        .findElement(By.xpath('//*[@id="items"]/div/p'))
        .getText();

      assert.equal(note, "Hello Selenium");
      console.log("TEST PASSED");
    } finally {
      await driver.quit();
    }
  })
})
