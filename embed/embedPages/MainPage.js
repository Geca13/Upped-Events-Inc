   /* const { Builder, By, until } = require('selenium-webdriver');
    const assert = require('assert');

    async function example() {
        let eventName = "Qa Purchase Event";
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize()
        await driver.get("https://events.dev.uppedevents.com/events");
        await driver.findElement(By.xpath("//*[text()='Sign In']")).click();
        await driver.findElement(By.id("email")).sendKeys("parma15@parma.it");
        await driver.findElement(By.id("password")).sendKeys("Pero1234");
        await driver.findElement(By.className("main-btn")).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//!*[text()='Qa Purchase ']")).click();
        /!*driver.wait(until.elementLocated(By.xpath("//!*[text()='Qa Purchase ']")), 5 * 1000).then(el => {
            el.click();
        });*!/
        await driver.sleep(5000);
        let title = await driver.findElement(By.className("event-title")).getText();

        assert.strictEqual(title,eventName);



driver.quit();

    }
example()*/

