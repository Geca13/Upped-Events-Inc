    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const Alerts = require('../../Validations&Alerts/Alerts')
    const assert = require('assert')
    const ADD_TICKETS_GROUP_BUTTON = { xpath: "//*[text()=' Add Group']" }
    const ADD_TICKET_BUTTON = { xpath: "//*[text()='Add']" }
    const ALL_TICKETS_TAB = { xpath: "//*[text()=' All ']" }
    const ACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Active ']" }
    const INACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Inactive ']" }
    const TICKET_TOGGLE = {className: 'lc_off' }
    const TICKET_ACTIVATION_MODAL = { tagName: 'response-message-popup' }
    const TICKET_ACTIVATION_YES_BUTTON = { xpath: "//*[text()='Yes']" }
    const TICKET_ACTIVATION_NO_BUTTON = { xpath: "//*[text()='No']" }
    const TICKET_ACTIVATION_TEXT_INPUT = { tagName: 'textarea' }
    const TICKETS_GROUP_NAME_INPUT = { xpath: "//input[@placeholder='Group Name']" }
    const SAVE_TICKETS_GROUP_BUTTON = { xpath: "//i[@aria-hidden='true']" }
    const CANCEL_TICKETS_GROUP_BUTTON = { xpath: "//i[@aria-hidden='true']" }
    const SOLD_TICKETS_NUMBER = { className: 'column-sold'} //list
    const TOAST_BANNER = { id:'toast-container' }
    const TICKET_GROUP_TAB = { xpath: "//a[@role='tab']" }



    class TicketsNav extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async createdTicketIsInTheTable(ticketName){
            await this.isDisplayed(By.xpath("//*[text()='"+ticketName+"']"),15000);
        }
        async addTicketButtonIsDisplayed(){
            await this.isDisplayed(ADD_TICKET_BUTTON, 15000)
        }
        async activateTicketModalIsDisplayed(){
            await this.isDisplayed(TICKET_ACTIVATION_MODAL, 15000)
        }

        async savedTicketBannerIsDisplayed(){
            let saved = new Alerts(this.driver);
            await saved.savedAlertIsDisplayed('Ticket saved successfully!');
        }

        async successTicketGroupBannerIsDisplayed(){
            let success = new Alerts(this.driver);
            await success.successAlertIsDisplayed('Saved successfully');
        }

        async clickActivateTicketToggle(index){
            let toggle = await this.getElementFromAnArrayByIndex(TICKET_TOGGLE,index);
            await this.driver.sleep(1500)
            await toggle.click();
        }
        async confirmActivationButton(){
            await this.click(TICKET_ACTIVATION_YES_BUTTON);
        }
        async createTicketsGroup(groupName){
            await this.driver.sleep(1000);
            await this.click(ADD_TICKETS_GROUP_BUTTON);
            await this.isDisplayed(TICKETS_GROUP_NAME_INPUT,15000);
            await this.sentKeys(TICKETS_GROUP_NAME_INPUT, groupName);
            await this.click(SAVE_TICKETS_GROUP_BUTTON);
            await this.driver.sleep(2000)
            //await this.locateElementByTextAndClick(" " +groupName +" ");
        }

        async clickGroupTabByIndex(index){
            await this.clickElementReturnedFromAnArray(TICKET_GROUP_TAB,index);
        }

        async clickAddTicketButton(){
            await this.driver.sleep(500);
            await this.click(ADD_TICKET_BUTTON);
        }
        async clickAllTicketsTab(){
            await this.click(ALL_TICKETS_TAB);
        }
        async clickActiveTicketsTab(){
            await this.click(ACTIVE_TICKETS_TAB);
        }
        async clickInactiveTicketsTab(){
            await this.click(INACTIVE_TICKETS_TAB);
        }

        async checkForSoldTicketsAfterFirstTest(){
            await this.isDisplayed(SOLD_TICKETS_NUMBER,15000);
            let firstTicketSolds = await this.getRawTicketPrice(SOLD_TICKETS_NUMBER,0);
            let secondTicketSolds = await this.getRawTicketPrice(SOLD_TICKETS_NUMBER,1);
            let thirdTicketSolds = await this.getRawTicketPrice(SOLD_TICKETS_NUMBER,2);
            let fourthTicketSolds = await this.getRawTicketPrice(SOLD_TICKETS_NUMBER,3);
            assert.equal(firstTicketSolds,'5')
            assert.equal(secondTicketSolds,'5')
            assert.equal(thirdTicketSolds,'5')
            assert.equal(fourthTicketSolds,'5')

        }
    }
    module.exports = TicketsNav;


 