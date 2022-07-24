    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const Alerts = require('../../Validations&Alerts/Alerts')
    const ColumnOptionsModal = require('../portalModals/ColumnsOptionsModal');
    const CreateTicketModal = require('../portalModals/CreateTicketModal')
    const assert = require('assert')
    const ADD_TICKETS_GROUP_BUTTON = { xpath: "//*[text()=' Add Group']" }
    const ADD_TICKET_BUTTON = { xpath: "//*[text()='Add']" }
    const ALL_TICKETS_TAB = { xpath: "//*[text()=' All ']" }
    const ACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Active ']" }
    const INACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Inactive ']" }
    const DEACTIVATED_TICKET_TOGGLE = {className: 'lc_off' }
    const ACTIVATED_TICKET_TOGGLE = {className: 'lc_on' }
    const TICKET_ACTIVATION_MODAL = { tagName: 'response-message-popup' }
    const TICKET_ACTIVATION_YES_BUTTON = { xpath: "//*[text()='Yes']" }
    const TICKET_ACTIVATION_NO_BUTTON = { xpath: "//*[text()='No']" }
    const TICKET_ACTIVATION_TEXT_INPUT = { tagName: 'textarea' }
    const TICKETS_GROUP_NAME_INPUT = { xpath: "//input[@placeholder='Group Name']" }
    const SAVE_TICKETS_GROUP_BUTTON = { xpath: "//i[@aria-hidden='true']" }
    const CANCEL_TICKETS_GROUP_BUTTON = { xpath: "//i[@aria-hidden='true']" }
    const TOAST_BANNER = { id:'toast-container' }
    const TICKET_GROUP_TAB = { xpath: "//a[@role='tab']" }
    const TABLE_HEADERS = { xpath: "//th/span" } //list
    const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
    const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
    const NO_TICKETS_MESSAGE = { xpath: "//div[@class='data-empty']//h5" }
    const TICKETS_NAMES = { className: "column-name" };
    const TICKETS_START_DATES = { className: "column-startdate" }
    const TICKETS_END_DATES = { className: "column-enddate" }
    const TICKETS_PRICES = { className: "column-price" };
    const TICKETS_QUANTITIES = { className: "column-quantity" };
    const SOLD_TICKETS_NUMBER = { className: 'column-sold'} //list
    const EDIT_TICKET_BUTTONS = { className: 'text-second'} //list



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

        async createFirstTicket(ticketOneName,ticketPrice,ticketOneQuantity){
            await this.addTicketButtonIsDisplayed();
            let newTicket = new CreateTicketModal(this.driver);
            await newTicket.createNewTicket(ticketOneName,ticketPrice,ticketOneQuantity)

        }
        async assertCorrectDataIsDisplayedInTableAfterCreatingFirstTicket(name,start,end,price,quantity){
            await this.isDisplayed(TICKETS_NAMES,5000);
            await this.timeout(500)

            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, name);
            console.log(i)
            await this.timeout(2000)
            let savedName = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, i);
            let savedStartDateTime = await this.getElementTextFromAnArrayByIndex(TICKETS_START_DATES, i);
            let savedEndDateTime = await this.getElementTextFromAnArrayByIndex(TICKETS_END_DATES, i);
            let savedPrice = await this.getElementTextFromAnArrayByIndex(TICKETS_PRICES, i);
            let savedQuantity = await this.getElementTextFromAnArrayByIndex(TICKETS_QUANTITIES, i);
            let soldQuantity = await this.getElementTextFromAnArrayByIndex(SOLD_TICKETS_NUMBER, i);
            assert.equal(savedName,name);
            assert.equal(savedStartDateTime,start);
            assert.equal(savedEndDateTime,end);
            assert.equal(savedPrice,price);
            assert.equal(savedQuantity,quantity);
            assert.equal(soldQuantity,'0');
            await this.clickEditTicketButton(i);
            await this.timeout(1500)
        }

        async clickEditTicketButton(index){
            await this.isDisplayed(EDIT_TICKET_BUTTONS,5000);
            await this.clickElementReturnedFromAnArray(EDIT_TICKET_BUTTONS,index)
        }

        async savedTicketBannerIsDisplayed(){
            let saved = new Alerts(this.driver);
            await saved.savedAlertIsDisplayed('Ticket saved successfully!');
        }

        async successTicketGroupBannerIsDisplayed(){
            let success = new Alerts(this.driver);
            await success.successAlertIsDisplayed('Saved successfully');
        }

        async clickActivateTicketToggle(ticketName){
            await this.isDisplayed(TICKETS_NAMES,5000);
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, ticketName);
            let toggle = await this.getElementFromAnArrayByIndex(DEACTIVATED_TICKET_TOGGLE,i);
            await this.timeout(1000);
            await toggle.click();
            await this.activateTicketModalIsDisplayed();
            await this.confirmActivationButton();


        }
        async confirmActivationButton(){
            await this.isDisplayed(TICKET_ACTIVATION_YES_BUTTON,5000);
            await this.timeout(500);
            await this.click(TICKET_ACTIVATION_YES_BUTTON);
            await this.isDisplayed(ACTIVATED_TICKET_TOGGLE,5000);
        }
        async createTicketsGroup(groupName){
            await this.timeout(1000);
            await this.click(ADD_TICKETS_GROUP_BUTTON);
            await this.isDisplayed(TICKETS_GROUP_NAME_INPUT,15000);
            await this.sentKeys(TICKETS_GROUP_NAME_INPUT, groupName);
            await this.click(SAVE_TICKETS_GROUP_BUTTON);
            await this.timeout(2000)
            //await this.locateElementByTextAndClick(" " +groupName +" ");
        }

        async clickGroupTabByIndex(index){
            await this.clickElementReturnedFromAnArray(TICKET_GROUP_TAB,index);
        }

        async clickAddTicketButton(){
            await this.timeout(1000)
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
            await this.isDisplayed(TABLE_HEADERS,5000)
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
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Price');
            assert.equal(third,'Quantity');
            assert.equal(fourth,'Sold');
            assert.equal(fifth,'Reserved');
            assert.equal(sixth,'Active/Inactive');
            await this.click(ADD_TABLE_COLUMN_BUTTON);
            await options.makeNewManipulationsOnTickets();
            await this.driver.sleep(1000);
            first = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 0);
            second = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 1);
            third = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 2);
            fourth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 3);
            fifth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 4);
            sixth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 5);
            let seventh = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 6);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Start Date/Time');
            assert.equal(third,'Price');
            assert.equal(fourth,'Quantity');
            assert.equal(fifth,'Sold');
            assert.equal(sixth,'Reserved');
            assert.equal(seventh,'Active/Inactive');
            let headers2 = await this.returnElementsCount(TABLE_HEADERS);
            assert.equal(headers2,7);
            await this.click(ADD_TABLE_COLUMN_BUTTON);
            await options.changeColumnOrdersByColumnIndex();

        }

        async assertNoTicketsMessageText(){
            await this.isDisplayed(NO_TICKETS_MESSAGE);
            await this.timeout(1000);
            let message = await this.getElementText(NO_TICKETS_MESSAGE);
            assert.equal(message,"You do not currently have any ticket.");
            await this.timeout(1000);
        }
    }
    module.exports = TicketsNav;


 