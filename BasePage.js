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
    }

    async switchToNewlyOpenedWindowOrTab(originalWindow){
        const windows = await this.driver.getAllWindowHandles();
        for (const window of windows) {
            if (window !== originalWindow) {
                await this.driver.switchTo().window(window);
            }
        }
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

    async locateElementByTextAndClick(text){
         let element = await this.driver.findElement(By.xpath("//*[text()='"+text+"']"));
         await this.moveToElementWithElement(element);
         await element.click();
    }

        async elementByTextIsDisplayed(text){
            await this.isDisplayed(this.driver.findElement(By.xpath("//*[text()=' "+text+" ']")));

        }
        async elementByTextWithoutSpacesIsDisplayed(text){
            await this.isDisplayed(this.driver.findElement(By.xpath("//*[text()='"+text+"']")));

        }

    async clickEnterKey(locator){
        let element = await this.find(locator);
        await element.sendKeys(Key.ENTER)
    }
    async clickEnterKey(locator){
        let element = await this.find(locator);
    await element.sendKeys(Key.ENTER)
    }
    async clearInputField(locator){
        let element = await this.find(locator);
        await element.clear();
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
          let parent = await child.findElement(By.xpath("ancestor::a"));
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
    async clickLastElementReturnedFromAnArray(locator){
          let elements = await this.findAll(locator);
          let lastElement = elements.length - 1;
          await elements[lastElement].click();
    }
    async sendKeysToElementReturnedFromAnArray(locator,index,keys){
          let element = await this.getElementFromAnArrayByIndex(locator, index);
          await element.sendKeys(keys);
    }
    async elementFromArrayOfElementsIsDisplayed(locator,index){
        let element = await this.getElementFromAnArrayByIndex(locator, index);
        await this.isDisplayed(locator,5000);
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

    async dragAndDropElement(locatorSource, locatorTarget){
        const actions = this.driver.actions({bridge: true});
        let source = this.find(locatorSource);
        let target = this.find(locatorTarget);
        /*await this.driver.executeScript("function createEvent(typeOfEvent) {\n" + "var event =document.createEvent(\"CustomEvent\");\n"
            + "event.initCustomEvent(typeOfEvent,true, true, null);\n" + "event.dataTransfer = {\n" + "data: {},\n"
            + "setData: function (key, value) {\n" + "this.data[key] = value;\n" + "},\n"
            + "getData: function (key) {\n" + "return this.data[key];\n" + "}\n" + "};\n" + "return event;\n"
            + "}\n" + "\n" + "function dispatchEvent(element, event,transferData) {\n"
            + "if (transferData !== undefined) {\n" + "event.dataTransfer = transferData;\n" + "}\n"
            + "if (element.dispatchEvent) {\n" + "element.dispatchEvent(event);\n"
            + "} else if (element.fireEvent) {\n" + "element.fireEvent(\"on\" + event.type, event);\n" + "}\n"
            + "}\n" + "\n" + "function simulateHTML5DragAndDrop(element, destination) {\n"
            + "var dragStartEvent =createEvent('dragstart');\n" + "dispatchEvent(element, dragStartEvent);\n"
            + "var dropEvent = createEvent('drop');\n"
            + "dispatchEvent(destination, dropEvent,dragStartEvent.dataTransfer);\n"
            + "var dragEndEvent = createEvent('dragend');\n"
            + "dispatchEvent(element, dragEndEvent,dropEvent.dataTransfer);\n" + "}\n" + "\n"
            + "var source = arguments[0];\n" + "var destination = arguments[1];\n"
            + "simulateHTML5DragAndDrop(source,destination);", source, target);*/

       // await this.driver.actions().move({origin:source}).press().perform();
        await this.driver.sleep(1000)
        //await this.moveToElement(locatorTarget);
        //await this.driver.actions().dragAndDrop(source, target).perform();
       // await this.driver.actions().move({origin:target}).release().perform();

       // await actions.dragAndDropBy(source, 0,150).perform();
        //await actions.clickAndHold(locatorSource).moveToElement(locatorTarget).build().perform(); await actions.dragAndDrop(locatorSource, { x: 0, y: 150 }).perform();
        await this.driver.sleep(1000);
    }

    async moveToElement(locator) {
          const actions = this.driver.actions({bridge: true});
          let element = await this.find(locator);
          await actions.move({duration:5000,origin:element,x:0,y:0}).perform();

    }

        async moveAwayFromElement(locator) {
            const actions = this.driver.actions({bridge: true});
            let element = await this.find(locator);
            await actions.move({duration:5000,origin:element,x:50,y:50}).perform();
            await actions.click();

        }

        async moveToElementWithElement(element) {
            const actions = this.driver.actions({bridge: true});
            await actions.move({duration:5000,origin:element,x:0,y:0}).perform();
        }


    async switchToAnIframe(locator){
          let frame = await this.find(locator)
          await this.driver.switchTo().frame(frame);
    }
    async getOriginalWindowOrTab(){
        return await this.driver.getWindowHandle();
    }

    async clickAllElementsReturnedFromArray(locator){
          let elements = await this.findAll(locator);
          for (const element of elements) {
              await element.click();
          }
    }

    async sendKeysAllElementsReturnedFromArray(locator,amount){
          let elements = await this.findAll(locator);
          for (const element of elements) {
              await element.clear();
              await this.driver.sleep(500);
              await element.sendKeys(amount)
          }
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

        async isDisplayedFromArray(locator,index ,timeout) {
            if (timeout){
                let elements = await this.findAll(locator);
                let element = elements[index];
                await this.driver.wait(until.elementLocated(element), timeout)
                await this.driver.wait(until.elementIsVisible(element), timeout)
                return true
            } else{
                try {
                    let elements = await this.findAll(locator);
                    let element = elements[index];
                    return element.isDisplayed()
                } catch (error) {
                    return false
                }
            }
        }

    async isNotDisplayed(locator,timeout) {
        if (timeout){
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