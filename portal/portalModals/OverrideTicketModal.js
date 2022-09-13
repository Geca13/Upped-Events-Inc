    const BasePage = require('../../BasePage');
    const MODEL_HEADER = { xpath: "//*[text()='Override Ticket ']"};
    const CLOSE_MODAL_ARROW = { className: "slide-close"};
    const MANAGER_CODE_INPUT = { xpath: "//input[@type='password']"};
    const CONFIRM_OVERRIDE = { xpath: "//button[text()='Confirm']"};
    const VALID_CODE_MESSAGE = { xpath: "//div[text()=' Valid Manager Code! ']"};
    const TICKET_NAME_INPUT = { xpath: "//input[@formcontrolname='name']"};
    const CURRENT_TICKET_PRICE_INPUT = { xpath: "//input[@formcontrolname='currentTicketPrice']"};
    const QUANTITY_INPUT = { xpath: "//input[@formcontrolname='quantity']"};
    const NEW_TICKET_PRICE_INPUT = { xpath: "//input[@formcontrolname='overriddenTicketPrice']"};
    const NEW_TICKET_QUANTITY_INPUT = { xpath: "//input[@formcontrolname='overriddenQuantity']"};
    const SAVE_BUTTON = { xpath: "//button[@type='submit']"};
    const CANCEL_BUTTON = { xpath: "//*[text()='Cancel']"};
    const { Key } = require("selenium-webdriver");




    class OverrideTicketModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async overrideModalIsDisplayed(){
            await this.isDisplayed(MANAGER_CODE_INPUT,5000);
        }
        async loginToTheOverrideModal(){
            await this.sentKeys(MANAGER_CODE_INPUT, "0000");
            await this.click(CONFIRM_OVERRIDE);
            await this.isDisplayed(VALID_CODE_MESSAGE,5000,);
        }
        async overrideTicketQuantity(newQuantity){
            await this.sentKeys(NEW_TICKET_QUANTITY_INPUT,newQuantity);
        }
        async setNewPrice(newPrice){
            await this.sentKeys(NEW_TICKET_PRICE_INPUT,newPrice);
        }
        async clickSaveChangesButton(){
            await this.clickElementReturnedFromAnArray(SAVE_BUTTON,1)
        }

    }
    module.exports = OverrideTicketModal;