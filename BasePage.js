    const {By, Key, Keys} = require("selenium-webdriver");
    const until = require('selenium-webdriver').until;
    const WebElement = require('selenium-webdriver').WebElement
    const fsp = require('fs').promises


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

    async returnElementsCount(locator){
      let elements =  await this.findAll(locator);
      return elements.length
    }

    async click(locator) {
        await this.find(locator).click()
    }

    async locateElementByTextAndClick(text){
         let element = await this.driver.findElement(By.xpath("//*[text()='"+text+"']"));
         //await this.moveToElementWithElement(element);
         await element.click();
    }

    async clickElementByText(text){
         let element = await this.driver.findElement(By.xpath("//*[text()='"+text+"']"));
         await element.click();
    }

    async clickElementByTextFromArray(text, index){
        let elements = await this.driver.findElement(By.xpath("//*[normalize-space(text())='"+text+"']"));
        let element = elements[index]
        await element.click();
    }

    async elementByTextIsDisplayed(text){
        await this.isDisplayed(this.driver.findElement(By.xpath("//*[text()=' "+text+" ']")));
    }
    async elementByTextWithoutSpacesIsDisplayed(text){
        await this.isDisplayed(this.driver.findElement(By.xpath("//*[text()='"+text+"']")));
    }

    async clickBackspaceKey(locator){
          await this.sentKeys(locator, Key.BACK_SPACE);
    }

    async getEnteredTextInTheInput(locator){
        let input =  await this.find(locator);
        return input.getAttribute("value");
    }
    async getEnteredTextInTheInputByIndex(locator, index){
        let inputs =  await this.findAll(locator);
        let input = inputs[index];
        return input.getAttribute("value");
    }


    async getTextValueFromElementOfArray(locator, index){
       let inputs =  await this.findAll(locator);
       return inputs[index].getAttribute("value");
    }
    async getTextFromElementOfArray(locator, index){
        let elements =  await this.findAll(locator);
        return await elements[index].getText();
    }



    async clearInputField(locator){
        let element = await this.find(locator);
        await element.clear();
    }
    async clearInputFieldByIndex(locator,index){
        let elements = await this.findAll(locator);
        let element = await elements[index];
        await element.clear();
    }

    async clearInputFieldByIndexAndSendKeys(locator , index, keys){
        let elements = await this.findAll(locator);
        let element = elements[index];
        await element.clear();
        await element.sendKeys(keys);
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

    async sentKeysToChildByIndexAndParentIndex(locator, parentIndex, childIndex, keys) {
        let parent = await this.findAll(locator);
        let children = await parent[parentIndex].findElements(By.xpath("./child::*"));
        return await children[childIndex].sendKeys(keys);
    }


    async findChildByIndexFromPrecedingSibling(locator){
        let knownSibling = await this.find(locator);
        let sibling = await knownSibling.findElement(By.xpath("./preceding-sibling::label"));
        let children = await sibling.findElements(By.xpath("./child::*"));
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
    async getFontColorFromAnArray(locator, index){
        let elements = await this.findAll(locator)
        return elements[index].getCssValue('color')

    }
    async getElementTextFromAnArrayByIndex(locator, index){
        let elements = await this.findAll(locator);
        return await elements[index].getText();
    }

    async getSubstringOfPriceString(locator,parentIndex, childIndex){
        let result = await this.getChildByIndex(locator,parentIndex, childIndex);
        return result.substring(1);
    }

    async getSubstringOfPriceStringWithStartAndEndIndex(locator,parentIndex, childIndex,startIndex, endIndex){
        let result = await this.getChildByIndex(locator,parentIndex, childIndex);
        return result.substring(startIndex,endIndex);
    }

    async getSubstringOfBracketedPriceString(locator,index){
        let result = await this.getRawTicketPrice(locator,index);
        return result.substring(2, result.length - 1);
    }
    async calculateNumbersFromArray(locator){
         let total = 0.00;
         let array = await this.findAll(locator);
         for (let i = 0; i < array.length; i++) {
              let amountText = await this.getElementTextFromAnArrayByIndex(locator, i);
              let amount = await this.convertPriceStringToDouble(amountText);
              total = total + amount;
         }
         return total.toFixed(2);
    }
    async assertNumberedArrayIsSortedAscending(locator){
          let array = await this.convertStringArrayToNumber(locator);
            if(array.length === 1){
                return true;
              }
          for (let i = 0; i < array.length-1; i++) {
             if (array[i] <= array[i + 1]) {
               return true;
               } else {
               return false;
             }
          }
    }

    async assertNumberedArrayIsSortedDescending(locator){
          let array = await this.convertStringArrayToNumber(locator);
            if(array.length === 1){
                return true;
              }
          for (let i = 0; i < array.length-1; i++) {
             if (array[i] >= array[i + 1]) {
               return true;
               } else {
               return false;
             }
          }
    }
        async convertStringArrayToNumber(locator){
          let converted = [];
          let original = await this.findAll(locator);
          for (let i = 0; i < original.length ; i++){
              let elementText = await this.getElementTextFromAnArrayByIndex(locator, i);
              let elementNumber = await this.convertPriceStringToDouble(elementText);
               converted.push(elementNumber);
          }
       return converted;
    }

    async getSubstringOfInboxEmailString(text){
         return text.substring(1, text.length - 1);
    }

    async sentKeys(locator, inputText) {
        await this.find(locator).sendKeys(inputText)
    }

    async convertPriceStringToDouble(priceString){
        let convertedPrice = parseFloat(priceString);
        return convertedPrice;
    }

    async dragAndDropElementByOffset(locatorSource, horizontal, vertical) {
        const actions = this.driver.actions();
        let source = this.find(locatorSource);
        await actions.dragAndDrop(source, { x: horizontal, y: vertical }).perform();
        await this.driver.sleep(1000);

    }

    async dragAndDropWithSourceElementOffset(locator, indexSource,indexTarget, horizontal,vertical){
         let elements = await this.findAll(locator);
         let source = elements[indexSource];
         let target = elements[indexTarget];
         const actions = this.driver.actions();
         await actions.move({duration:1000,origin:source,horizontal,vertical}).press().perform();
         await actions.dragAndDrop(source, target).perform();
    }

    async dragAndDropWithElements(sourceLocator, targetLocator){
         let source = await this.find(sourceLocator);
         let target = await this.find(targetLocator);
         const actions = this.driver.actions();
         await actions.move({duration:5000,origin:source,x:3,y:3}).press().perform();
         await actions.dragAndDrop(source, target).perform();
    }

    async dragAndDropWithElementsWithIndexes(sourceLocator, targetLocator,indexSource,indexTarget,){
         let from = this.findAll(sourceLocator);
         let source = await from[indexSource];
         let to = this.findAll(targetLocator);
         let target = await to[indexTarget];
         const actions = this.driver.actions();
         await actions.move({duration:1000,origin:source,x:3,y:3}).press().perform();
         await actions.dragAndDrop(source, target).perform();
    }

    async dragAndDropElement(locatorSource,indexSource, locatorTarget){
        const actions = this.driver.actions();
        let source = this.findAll(locatorSource);
        let s = source[indexSource];
        let destination = this.find(locatorTarget);
        //await actions.move({duration:1000,origin:source,x:0,y:0}).press().perform();
/*
        await this.driver.executeScript("function createEvent(typeOfEvent) {\n" + "var event =document.createEvent(\"CustomEvent\");\n"
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
            + "simulateHTML5DragAndDrop(source,destination);", source, destination);*/
        //await actions.move({duration:1000,origin:destination,x:0,y:0}).release().perform();
       // await this.driver.actions().move({origin:source}).press().perform();
        //await this.driver.sleep(1000)
        //await this.moveToElement(locatorTarget);
        //await actions.dragAndDrop(source, destination).perform();
       // await actions.move({duration:2000,origin:source,x:0,y:0}).press().perform();
        //await actions.move({duration:2000,origin:source,x:400,y:0}).release().perform();
        await actions
            .move({duration:2000,origin:s,x:0,y:0})
            .press()
            .move({duration:2000,origin:s,x:0,y:100})
            .release()
            .perform();
       // await this.driver.actions().move({origin:target}).release().perform();
        /*await this.driver.sleep(1000);
        await actions.dragAndDrop(s, destination).perform();
        await this.driver.sleep(1000);*/
       //await actions.dragAndDropBy(source, 0,150).perform();
        //await actions.clickAndHold(locatorSource).moveToElement(locatorTarget).build().perform(); await actions.dragAndDrop(locatorSource, { x: 0, y: 150 }).perform();
       // await this.driver.sleep(1000);
    }

    async simulateDragAndDrop(locatorSource, locatorTarget){
        await this.focusElement(locatorSource);
        await this.focusElement(locatorTarget)
    }

    async focusElement(locatorSource){
        await this.moveToElement(locatorSource);
        await this.clickEnterKey(locatorSource)
    }

    async clickEnterKey(locator){
         let element = await this.find(locator);
         await element.sendKeys(Key.ENTER)
    }

    async moveToElement(locator) {
         const actions = this.driver.actions({bridge: true});
         let element = await this.find(locator);
         await actions.move({duration:500,origin:element,x:0,y:0}).perform();
    }
    async moveToElementFromArrayByIndex(locator,index) {
         const actions = this.driver.actions({bridge: true});
         let elements = await this.findAll(locator);
         let element = elements[index];
         await actions.move({duration:5000,origin:element,x:0,y:0}).perform();
    }

    async moveAwayFromElement(locator, horizontal, vertical) {
         const actions = this.driver.actions();
         let element = await this.find(locator);
         await actions.move({duration:2500,origin:element,x:horizontal,y:vertical}).press().release().perform();
         await actions.doubleClick(element);
    }
    async moveAwayFromElementLocation(locator, horizontal, vertical) {
         const actions = this.driver.actions();
         let element = await this.find(locator);
         await actions.move({duration:2500,origin:element,x:horizontal,y:vertical}).perform();
    }
    async moveToElementWithElement(element) {
         const actions = this.driver.actions({bridge: true});
         await actions.move({duration:2000,origin:element,x:0,y:0}).perform();
    }
    async switchToAnIframe(locator){
         let frame = await this.find(locator)
         await this.driver.switchTo().frame(frame);
    }
    async acceptAlert(){
         await this.driver.wait(until.alertIsPresent());
         let alert = await this.driver.switchTo().alert();
         await alert.accept();
         await this.driver.sleep(500);
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

    async elementIsEnabled(locator){
         let element = await this.find(locator);
         return element.isEnabled();
    }

    async elementIsEnabledByIndexOfArray(locator,index){
         let elements = await this.findAll(locator);
         let element = elements[index];
         return element.isEnabled();
    }

    async isDisplayed(locator,timeout) {
          if (timeout){
              await this.driver.wait(until.elementLocated(locator), timeout)
              await this.driver.wait(until.elementIsVisible(this.find(locator)), timeout)
              await this.driver.wait(until.elementIsEnabled(this.find(locator)), timeout)
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
             await this.driver.wait(until.elementLocated(locator), timeout)
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

    async elementIsNotDisplayed(locator, timeout){
        await this.driver.wait(until.elementIsNotVisible(this.find(locator)), timeout)
        }

    async elementNotInTheDom(locator){

       let elements = await this.findAll(locator);
        if(await elements[0].getText() !== ''){
         return await this.elementNotInTheDom(locator);
       }
    }

    async takeScreenshot(location){
        this.driver.takeScreenshot().then(
             function(image) {
        require('fs').writeFileSync(location+'.png', image, 'base64');
            }
        );
    }


}

     module.exports = BasePage;

        /*for (const child of children) {
            let text = await child.getText();
            console.log(text + '111111');
        }*/