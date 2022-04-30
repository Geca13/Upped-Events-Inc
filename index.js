const { Builder, By, Key, util } = require("selenium-webdriver")
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://events.dev.uppedevents.com/events")

}
example();