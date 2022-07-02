    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const OverrideTicketModal = require('../../portalModals/OverrideTicketModal')
    const TICKET_GROUPS_TABS = { id: "eventsTab" }
    const COLUMN_TICKET_NAME = { className: "table-ticket-name" } //list
    const COLUMN_PRICE = { xpath: "//td[contains(@class, 'column-price')]//span" } //list
    const COLUMN_QUANTITY = { className: "column-quantity" } //list
    const COLUMN_SOLD = { className: "column-sold" } //list
    const COLUMN_SELECTS = { className: "numeric-dropdown" } //list
    const OVERRIDEN_QUANTITY_OPTIONS = { xpath: "//option[contains(@class, 'overriden')]" }
    const OVERRIDEN_TICKET_PRICE = { xpath: "//span[contains(@class, 'overriden')]" }

    const COLUMN_OVERRIDE = { className: "text-second" } //list
    const STEPPER = { id: "stepper" };
    const SAVE_BUTTON = { xpath: "//*[text()='Save']"};




    class BOSelectTickets extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnBoxOfficePage(){
            await this.isDisplayed(COLUMN_SELECTS,5000);
        }

        async selectTicketByIndexAndSendQuantity(index, quantity){
            await this.isOnBoxOfficePage();
            await this.driver.sleep(1000);
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,index,quantity);
            await this.click(SAVE_BUTTON);
        }

        async selectTwoTickets(){
            await this.isOnBoxOfficePage();
            await this.driver.sleep(1000);
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,3,"2");
            await this.click(SAVE_BUTTON);
        }

        async select3Tickets(){
            await this.isOnBoxOfficePage()
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,2,"3");
            await this.click(SAVE_BUTTON);
        }

        async select18Tickets(){
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,0,"5");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,1,"3");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,2,"4");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,3,"6");
            await this.click(SAVE_BUTTON);
        }

        async addNewQuantityAndSetNewPrice(){
            await this.clickElementReturnedFromAnArray(COLUMN_OVERRIDE,0);
            let override = new OverrideTicketModal(this.driver);
            await override.overrideModalIsDisplayed();
            await override.loginToTheOverrideModal();
            await override.overrideTicketQuantity("1");
            await this.driver.sleep(500)
            await override.setNewPrice('.5');
            await override.clickSaveChangesButton();
            await this.driver.sleep(5000);
        }

        async assertNewPriceAndQuantity(){
            await this.isOnBoxOfficePage();
            await this.driver.sleep(2000)
            let originalPrice = await this.getTextFromElementOfArray(COLUMN_PRICE,0);
            assert.equal(originalPrice,'1');
            await this.clickElementReturnedFromAnArray(COLUMN_SELECTS,0);
            await this.driver.sleep(500);
            await this.clickElementReturnedFromAnArray(OVERRIDEN_QUANTITY_OPTIONS,0);
            await this.isDisplayed(OVERRIDEN_TICKET_PRICE,5000);
            let newPrice = await this.getElementText(OVERRIDEN_TICKET_PRICE);
            assert.equal(newPrice,'1.5');
            let fontColor = await this.getFontColorFromAnArray(OVERRIDEN_TICKET_PRICE,0);
            assert.equal(fontColor,'rgba(255, 0, 0, 1)');
        }
        async selectFourIndividualTickets(){
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,0,"1");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,1,"1");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,2,"1");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,3,"1");
            await this.click(SAVE_BUTTON);
        }
        async getSelectedTicketsNames(ticketOneName,ticketTwoName,ticketThreeName,ticketFourName){
            let ticketOne = await this.getTextFromElementOfArray(COLUMN_TICKET_NAME,0);
            let ticketTwo = await this.getTextFromElementOfArray(COLUMN_TICKET_NAME,1);
            let ticketThree = await this.getTextFromElementOfArray(COLUMN_TICKET_NAME,2);
            let ticketFour = await this.getTextFromElementOfArray(COLUMN_TICKET_NAME,3);
            assert.equal(ticketOneName,ticketOne);
            assert.equal(ticketTwoName,ticketTwo);
            assert.equal(ticketThreeName,ticketThree);
            assert.equal(ticketFourName,ticketFour);
        }
    }
    module.exports = BOSelectTickets;