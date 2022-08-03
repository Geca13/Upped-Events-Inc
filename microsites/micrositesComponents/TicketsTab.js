    const BasePage = require("../../BasePage");
    const assert = require('assert');
    const QTY_INPUTS = { xpath: "//input[@type='number']"}; //list
    const INCREASE_QTY_BUTTONS = { xpath: "//*[text()=' + ']"}; //list
    const DECREASE_QTY_BUTTONS = { xpath: "//*[text()=' - ']"}; //list
    const TICKETS_CONTAINER = { className: 'tickets-list' }; //list
    const TICKETS_NAMES = { xpath: "//div[@class='name']" }; //list
    const TICKETS_PRICES = { className: 'ticket-price' }; //list
    const TICKETS_DESCRIPTION = { className: 'info' }; //list
    const TICKETS_HEADER = { className: 'title' }; //from list problematic
    const ALL_TICKETS_GROUP = { xpath: "//*[text()=' All ']"};


    class TicketsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async clickAllTicketsGroupButton(){
            await this.click(ALL_TICKETS_GROUP);
        }

        async allTicketsGroupButtonIsDisplayed(){
            await this.isDisplayed(ALL_TICKETS_GROUP, 5000);
        }
        async clickGroupTabs(groupName){
            await this.locateElementByTextAndClick(' '+groupName+' ');
        }
        async ticketGroupOrNameIsDisplayed(text){
            await this.elementByTextIsDisplayed(text)
        }

        async clickFirstIncreaseButton(){
            await this.elementFromArrayOfElementsIsDisplayed(INCREASE_QTY_BUTTONS,0)
            await this.timeout(500)
            await this.click(INCREASE_QTY_BUTTONS);
        }

        async sendKeysToQtyInput(index,qty){
           await this.isDisplayed(QTY_INPUTS,5000)
           await this.clearInputFieldByIndex(QTY_INPUTS,index)
           await this.sendKeysToElementReturnedFromAnArray(QTY_INPUTS,index,qty);
        }
        async clickIncreaseQtyButtonByIndex(index){
           await this.clickElementReturnedFromAnArray(INCREASE_QTY_BUTTONS,index);
        }
        async clickDecreaseQtyButtonByIndex(index){
            await this.clickElementReturnedFromAnArray(DECREASE_QTY_BUTTONS,index);
        }
        async assertFirstTicketInfoEqualsInPortalUpdateModalAndMicrosites(index, ticketName,ticketPrice,ticketDescription){
            console.log(ticketName)
            await this.isDisplayed(TICKETS_NAMES,5000);
            await this.timeout(2000);
            let names = await this.returnElementsCount(TICKETS_NAMES)
            console.log(names)
            let i = index;
            console.log(i)
            await this.timeout(1000);
            await this.driver.executeScript(`document.getElementsByClassName('ticket-price')[${i}].style.visibility='hidden'`);
            await this.timeout(1000);
            let name = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES,i);
            await this.timeout(1000);
            await this.driver.executeScript(`document.getElementsByClassName('ticket-price')[${i}].style.visibility='visible'`);
            await this.timeout(1000);
            let price = await this.getSubstringOfBracketedPriceString(TICKETS_PRICES,i);
            let description = await this.getElementTextFromAnArrayByIndex(TICKETS_DESCRIPTION,i);
            assert.equal(name, ticketName);
            assert.equal(price, ticketPrice);
            assert.equal(description, ticketDescription);

        }

        async getFirstTicketStringWith$Price(){
            let bracketedPrice = await this.getElementText(TICKETS_PRICES);
            let cleaned = bracketedPrice.substring(1, bracketedPrice.length - 1);
            return cleaned;
        }

        async getCleanPriceByIndex(index){

            let priceByIndex = await this.getElementTextFromAnArrayByIndex(TICKETS_PRICES, index)
            let cleanPrice = priceByIndex.substring(2, priceByIndex.length - 1)
            let parsed = parseFloat(cleanPrice);
            return parsed;
        }

        async getSubtotalFromMultipleTicketsTypes(){
            let subtotal = 0.00;
            let inputs = await this.findAll(QTY_INPUTS);
            for(let i = 0; i < inputs.length ; i++) {
                let inputValue = await this.getTextValueFromElementOfArray(QTY_INPUTS, i);
                if(parseInt(inputValue) > 0 ) {
                    let price = await this.getCleanPriceByIndex(i)
                    subtotal = subtotal + (price * parseInt(inputValue))
                }
            }
            return subtotal;
        }

    }

    module.exports = TicketsTab;