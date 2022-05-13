const {By, Key, Keys} = require("selenium-webdriver");
const until = require('selenium-webdriver').until;


    class BasePage {
      constructor(driver) {
          this.driver = driver
      }

    async visit(url) {
         await this.driver.get(url)
    }

    async loginWithFacebookEmailAndPassword(emailLocator,email,passwordLocator,password,loginButton){
          await this.sentKeys(emailLocator,email);
          await this.sentKeys(passwordLocator,password);
          await this.click(loginButton);
    }

    async switchToFacebookWindow(locator){
        const originalWindow = await this.driver.getWindowHandle();
        await this.driver.sleep(2000)
        await this.click(locator);
        await this.driver.wait(
            async () => (await this.driver.getAllWindowHandles()).length === 2,
            10000
        );
        const windows = await this.driver.getAllWindowHandles();
        for (const window of windows) {
            if (window !== originalWindow) {
                await this.driver.switchTo().window(window);
            }
        }
        //await this.driver.wait(until.titleIs('Selenium documentation'), 10000);

    }

    async zoomOutWindow(locator){
        await this.find(locator).sendKeys(Key.CONTROL, Key.SUBTRACT);
    }

    find(locator) {
        return this.driver.findElement(locator)
    }

    findAll(locator) {
        return this.driver.findElements(locator);
    }

    async click(locator) {
        await this.find(locator).click()
    }

    async clickEnterKey(locator){
        let element = await this.find(locator);
        await element.sendKeys(Key.ENTER)
    }
    async clickEnterKey(locator){
        let element = await this.find(locator);
    await element.sendKeys(Key.ENTER)
    }

    async getRawTicketPrice(locator, index){
          let tickets = await this.findAll(locator);
          return await tickets[index].getText();
    }

    async getChildByIndex(locator, parentIndex, childIndex) {
        let parent = await this.findAll(locator);
        let children = await parent[parentIndex].findElements(By.xpath("./child::*"));
        return await children[childIndex].getText();
    }

    async findChildByIndexFromPrecedingSibling(locator){
          let knownSibling = await this.find(locator);
          let sibling = await knownSibling.findElement(By.xpath("./preceding-sibling::label"));

          let children = await sibling.findElements(By.xpath("./child::*"));
          console.log(children)
          await children[1].click();
    }

    async clickParent(locator){
          let child = await this.find(locator);
          let parent = await child.findElement(By.xpath("./"));
          await parent.click();
    }

    async getElementFromAnArrayByIndex(locator, index){
        let elements = await this.findAll(locator);
        return await elements[index];
    }
    async clickElementReturnedFromAnArray(locator,index){
          let element = await this.getElementFromAnArrayByIndex(locator, index);
          await element.click();
    }
    async sendKeysToElementReturnedFromAnArray(locator,index,keys){
          let element = await this.getElementFromAnArrayByIndex(locator, index);
          await element.sendKeys(keys);
        }

    async getElementText(locator) {
       return await this.find(locator).getText();
    }

    async getSubstringOfPriceString(locator,parentIndex, childIndex){
        let result = await this.getChildByIndex(locator,parentIndex, childIndex);
        return result.substring(1);
    }

    async getSubstringOfBracketedPriceString(locator,index){
          let result = await this.getRawTicketPrice(locator,index);
        return result.substring(2, result.length - 1);
    }

    async sentKeys(locator, inputText) {
        await this.find(locator).sendKeys(inputText)
    }

    convertPriceStringToDouble(priceString){
          let convertedPrice = parseFloat(priceString);
          return convertedPrice;
    }



    async moveToElement(locator) {
          const actions = this.driver.actions({bridge: true});
          let element = await this.find(locator);
          await actions.move({duration:5000,origin:element,x:0,y:0}).perform();

    }

        async moveToElementWithElement(element) {
            const actions = this.driver.actions({bridge: true});
            await actions.move({duration:5000,origin:element,x:0,y:0}).perform();
        }


    async switchToAnIframe(locator){
          let frame = await this.find(locator)
          await this.driver.switchTo().frame(frame);
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
        async isNotDisplayed(locator,timeout) {
            if (timeout){
                await this.driver.wait(until.elementLocated(locator), timeout)
                await this.driver.wait(until.elementIsNotVisible(this.find(locator)), timeout)
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

     module.exports = BasePage;

        /*for (const child of children) {
            let text = await child.getText();
            console.log(text + '111111');
        }*/