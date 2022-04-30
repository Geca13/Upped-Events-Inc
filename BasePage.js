   const until = require('selenium-webdriver').until;

    class BasePage {
      constructor(driver) {
          this.driver = driver
      }

    async visit(url) {
         await this.driver.get(url)
      }

    find(locator) {
        return this.driver.findElement(locator)
     }
    async click(locator) {
        await this.find(locator).click()
      }

    async getElementText(locator) {
        await this.find(locator).getText();
    }

    async type(locator, inputText) {
        await this.find(locator).sendKeys(inputText)
    }

    async moveToElement(locator) {
          const actions = this.driver.actions({bridge: true});
          let element = await this.find(locator);
          await actions.move({duration:5000,origin:element,x:0,y:0}).perform();
    }

    async isDisplayed(locator,timeout) {
          if (timeout){
              await this.driver.wait(until.elementLocated(locator), timeout)
              await this.driver.wait(until.elementIsVisible(this.find(locator)), timeout)
              return true
          } else{
             try {
                 return await this.find(locator).isDisplayed()
             } catch (error) {
                 return false
             }
          }
    }
}

     module.exports = BasePage