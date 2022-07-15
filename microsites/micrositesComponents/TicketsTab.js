    const BasePage = require("../../BasePage");
    const QTY_INPUTS = { xpath: "//input[@type='number']"}; //list
    const INCREASE_QTY_BUTTONS = { xpath: "//*[text()=' + ']"}; //list
    const DECREASE_QTY_BUTTONS = { xpath: "//*[text()=' - ']"}; //list
    const TICKETS_CONTAINER = { className: 'tickets-list' }; //list
    const TICKETS_NAMES = { className: 'name' }; //list
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
            await this.driver.sleep(500);
            await this.click(INCREASE_QTY_BUTTONS);
        }

        async getTicketPrice(){
            return await this.getSubstringOfBracketedPriceString(TICKETS_PRICES,1)
        }
        async sendKeysToQtyInput(index,qty){
           await this.clearInputFieldByIndex(QTY_INPUTS,index)
           await this.sendKeysToElementReturnedFromAnArray(QTY_INPUTS,index,qty);
        }
        async clickIncreaseQtyButtonByIndex(index){
           await this.clickElementReturnedFromAnArray(INCREASE_QTY_BUTTONS,index);
        }
        async clickDecreaseQtyButtonByIndex(index){
            await this.clickElementReturnedFromAnArray(DECREASE_QTY_BUTTONS,index);
        }
    }

    module.exports = TicketsTab;