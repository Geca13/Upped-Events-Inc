    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const Alerts = require('../../Validations&Alerts/Alerts')
    const ColumnOptionsModal = require('../portalModals/ColumnsOptionsModal')
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
    const TABLE_HEADERS = { xpath: "//th/span" } //list
    const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
    const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }



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

        async checkForTableColumnsTexts(){
            let headers = await this.returnElementsCount(TABLE_HEADERS);
            assert.equal(headers,8);
            let first = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 0);
            let second = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 1);
            let third = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 2);
            let fourth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 3);
            let fifth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 4);
            let sixth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 5);
            let seventh = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 6);
            let eight = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 7);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Start Date/Time');
            assert.equal(third,'End Date/Time');
            assert.equal(fourth,'Price');
            assert.equal(fifth,'Quantity');
            assert.equal(sixth,'Sold');
            assert.equal(seventh,'Reserved');
            assert.equal(eight,'Active/Inactive');

        }
        async manipulateColumnsFromTable(){
            await this.click(ADD_TABLE_COLUMN_BUTTON);
            let options = new ColumnOptionsModal(this.driver);
            await options.checkColumnsAndMakeManipulationsOnTickets();
            await this.driver.sleep(1000);
            let headers = await this.returnElementsCount(TABLE_HEADERS);
            assert.equal(headers,6);
            let first = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 0);
            let second = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 1);
            let third = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 2);
            let fourth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 3);
            let fifth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 4);
            let sixth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 5);
            assert.equal(first,'Price');
            assert.equal(second,'Quantity');
            assert.equal(third,'Ticket Name');
            assert.equal(fourth,'Sold');
            assert.equal(fifth,'Reserved');
            assert.equal(sixth,'Active/Inactive');
            await this.click(ADD_TABLE_COLUMN_BUTTON);
            await options.makeNewManipulationsOnTickets();
            await this.driver.sleep(1000);
            first = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 0);
            second = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 1);
            third = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 2);
            fourth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 3);
            fifth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 4);
            sixth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 5);
            let seventh = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 6);
            assert.equal(first,'End Date/Time');
            assert.equal(second,'Price');
            assert.equal(third,'Quantity');
            assert.equal(fourth,'Ticket Name');
            assert.equal(fifth,'Sold');
            assert.equal(sixth,'Reserved');
            assert.equal(seventh,'Active/Inactive');
            let headers2 = await this.returnElementsCount(TABLE_HEADERS);
            assert.equal(headers2,7);

        }
    }
    module.exports = TicketsNav;


 