    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const Alerts = require('../../Validations&Alerts/Alerts')
    const TableComponent = require('../portalComponents/TableComponent')
    const ColumnOptionsModal = require('../portalComponents/ColumnsOptionsModal');
    const FilteringOptions = require('../portalComponents/FilteringOptions')
    const CreateTicketModal = require('../portalModals/CreateTicketModal')
    const { expect }= require('chai');
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
    const TABLE = { tagName: "table"}
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
    const DELETE_TICKET_BUTTONS = { xpath: "//a[@class='text-danger']"} //list
    const DRAG_ROW_FOUR = { xpath: "(//tr[@class='cdk-drag'])[4]"}
    const DRAG_ROW_ONE= { xpath: "(//tr[@class='cdk-drag'])[1]"}
    const DRAG_GROUP_ONE = { xpath: "(//div[@class='cdk-drop-list'])[4]"}



    class TicketsNav extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async openTicketsNavDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/tickets")
            await this.addTicketButtonIsDisplayed();
        }
        
        async createdTicketIsInTheTable(ticketName){
            await this.isDisplayed(By.xpath("//*[text()='"+ticketName+"']"),15000);
        }
        async addTicketButtonIsDisplayed(){
            await this.isDisplayed(ADD_TICKET_BUTTON, 15000)
            await this.timeout(1000);
        }
        async activateTicketModalIsDisplayed(){
            await this.isDisplayed(TICKET_ACTIVATION_MODAL, 15000)
        }

        async getTicketPriceForTicket(name){
            await this.isDisplayed(TICKETS_NAMES,5000);
            await this.timeout(500)
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, name);
            let price = await this.getElementTextFromAnArrayByIndex(TICKETS_PRICES,i);
            let convertedSubstring = price.substring(1);
            let converted = parseFloat(convertedSubstring);
            return converted;
        }

        async getTicketIndexByTicketName(name){
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, name);
            return i;
        }

        async returnTotalTickets(){
            let tickets = await this.returnElementsCount(TICKETS_NAMES);
            return tickets;
        }

        async assertCorrectDataIsDisplayedInTableAfterCreatingFirstTicket(name,start,end,price,quantity){
            await this.isDisplayed(TICKETS_NAMES,5000);
            await this.timeout(500)
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, name);
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


        async assertTicketNamePriceAndQuantity(name,price,quantity){
            await this.isDisplayed(TICKETS_NAMES,5000);
            await this.timeout(500)
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, name);
            await this.timeout(2000)
            let savedName = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, i);
            let savedPrice = await this.getElementTextFromAnArrayByIndex(TICKETS_PRICES, i);
            let savedQuantity = await this.getElementTextFromAnArrayByIndex(TICKETS_QUANTITIES, i);
            assert.equal(savedName,name);
            assert.equal(savedPrice.substring(1),price);
            assert.equal(savedQuantity,quantity);
            await this.timeout(500)
        }

        async clickEditTicketButton(index){
            await this.isDisplayed(EDIT_TICKET_BUTTONS,5000);
            await this.clickElementReturnedFromAnArray(EDIT_TICKET_BUTTONS,index)
        }

        async clickEditTicketButtonByTicketName(ticketOneName){
            await this.isDisplayed(TICKETS_NAMES,5000);
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, ticketOneName);
            await this.timeout(2000);
            await this.clickElementReturnedFromAnArray(EDIT_TICKET_BUTTONS,i);
            await this.timeout(1000);
        }

        async calculateAvailableTicketsByTicket(ticketOneName){
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, ticketOneName);
            let quantity = await this.getElementTextFromAnArrayByIndex(TICKETS_QUANTITIES,i);
            let parsedQty = parseInt(quantity);
            let sold = await this.getElementTextFromAnArrayByIndex(SOLD_TICKETS_NUMBER,i);
            let parsedSold = parseInt(sold);
            return parsedQty - parsedSold;
        }

        async savedTicketBannerIsDisplayed(){
            let saved = new Alerts(this.driver);
            await saved.savedAlertIsDisplayed('Ticket saved successfully!');
        }

        async successTicketGroupBannerIsDisplayed(){
            let success = new Alerts(this.driver);
            await success.successAlertIsDisplayed('Saved successfully');
        }

        async errorDeletingTicketMessage(){
            let error = new Alerts(this.driver);
            await error.errorInfoMessageIsDisplayed('Ticket cannot be deleted. It has already been sold or reserved.');
        }

        async clickActivateTicketToggle(ticketName){
            await this.isDisplayed(TICKETS_NAMES,5000);
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, ticketName);
            await this.timeout(2000);
            await this.clickElementReturnedFromAnArray(DEACTIVATED_TICKET_TOGGLE,i);
            await this.activateTicketModalIsDisplayed();
            await this.confirmActivationButton();
            await this.timeout(2000);
        }

        async confirmActivationButton(){
            await this.click(TICKET_ACTIVATION_YES_BUTTON);
            await this.isDisplayed(ACTIVATED_TICKET_TOGGLE,5000);
        }
        async createTicketsGroup(groupName){
            await this.timeout(1000);
            await this.click(ADD_TICKETS_GROUP_BUTTON);
            await this.isDisplayed(TICKETS_GROUP_NAME_INPUT,15000);
            await this.sentKeys(TICKETS_GROUP_NAME_INPUT, groupName);
            await this.click(SAVE_TICKETS_GROUP_BUTTON);
            await this.timeout(1500)
            //await this.locateElementByTextAndClick(" " +groupName +" ");
        }

        async clickGroupTabByIndex(index){
            await this.clickElementReturnedFromAnArray(TICKET_GROUP_TAB,index);
            await this.timeout(1000);
        }

        async assertTicketsByGroupsAndClassIsAppliedWhenClicked(base, clas){
            let tickets;
            let allTab = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 0, clas);
            let first = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 1, clas);
            let second = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 2, clas);
            let third = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 3, clas);
            expect(allTab).to.be.true;
            expect(first).to.be.false;
            expect(second).to.be.false;
            expect(third).to.be.false;
            await this.clickGroupTabByIndex(1);
            let count = await this.returnElementsCount(TICKETS_NAMES);
            expect(count).to.equal(2);
            tickets = await this.returnArrayOfStrings(TICKETS_NAMES);
            expect(tickets[0]).to.equal(base.toString() +"T1");
            expect(tickets[1]).to.equal(base.toString() +"staff");
            allTab = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 0, clas);
            first = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 1, clas);
            second = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 2, clas);
            third = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 3, clas);
            expect(allTab).to.be.false;
            expect(first).to.be.true;
            expect(second).to.be.false;
            expect(third).to.be.false;
            await this.clickGroupTabByIndex(2);
            count = await this.returnElementsCount(TICKETS_NAMES);
            expect(count).to.equal(2);
            tickets = await this.returnArrayOfStrings(TICKETS_NAMES);
            expect(tickets[0]).to.equal(base.toString() + "T2");
            expect(tickets[1]).to.equal(base.toString() + "T3");
            allTab = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 0, clas);
            first = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 1, clas);
            second = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 2, clas);
            third = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 3, clas);
            expect(allTab).to.be.false;
            expect(first).to.be.false;
            expect(second).to.be.true;
            expect(third).to.be.false;
            await this.clickGroupTabByIndex(3);
            count = await this.returnElementsCount(TICKETS_NAMES);
            expect(count).to.equal(1);
            tickets = await this.returnArrayOfStrings(TICKETS_NAMES);
            expect(tickets[0]).to.equal(base.toString() + "T4");
            allTab = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 0, clas);
            first = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 1, clas);
            second = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 2, clas);
            third = await this.checkIfClassIsApplied(TICKET_GROUP_TAB, 3, clas);
            expect(allTab).to.be.false;
            expect(first).to.be.false;
            expect(second).to.be.false;
            expect(third).to.be.true;

        }

        async clickAddTicketButton(){
            await this.addTicketButtonIsDisplayed();
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

        async assertTicketGroupNames(one, two, three){
            let grOne = await this.getElementTextFromAnArrayByIndex(TICKET_GROUP_TAB, 0);
            let grTwo = await this.getElementTextFromAnArrayByIndex(TICKET_GROUP_TAB, 1);
            let grThree = await this.getElementTextFromAnArrayByIndex(TICKET_GROUP_TAB, 2);
            let grFour = await this.getElementTextFromAnArrayByIndex(TICKET_GROUP_TAB, 3);
            assert.equal(grOne, "All")
            assert.equal(grTwo, one)
            assert.equal(grThree, two)
            assert.equal(grFour, three);
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

        async assertTicketsNavTableHeader(){
            await this.isDisplayed(TABLE_HEADERS, 5000);
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1, "Ticket Name");
            await table.assertColumnNamesByIndex(2, "Start Date/Time");
            await table.assertColumnNamesByIndex(3, "End Date/Time");
            await table.assertColumnNamesByIndex(4, "Price");
            await table.assertColumnNamesByIndex(5, "Quantity");
            await table.assertColumnNamesByIndex(6, "Sold");
            await table.assertColumnNamesByIndex(7, "Reserved");
            await table.assertColumnNamesByIndex(8, "Active/Inactive");

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
            await this.timeout(1000);
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
            await options.dragColumnFromColumnIndexToColumnIndex(1, 5);
            first = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 0);
            second = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 1);
            third = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 2);
            fourth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 3);
            fifth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 4);
            sixth = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 5);
            seventh = await this.getElementTextFromAnArrayByIndex(TABLE_HEADERS, 6);
            assert.equal(first,'Start Date/Time');
            assert.equal(second,'Price');
            assert.equal(third,'Quantity');
            assert.equal(fourth,'Ticket Name');
            assert.equal(fifth,'Sold');
            assert.equal(sixth,'Reserved');
            assert.equal(seventh,'Active/Inactive');


        }

        async assertNoTicketsMessageText(){
            await this.isDisplayed(NO_TICKETS_MESSAGE, 5000);
            await this.timeout(1000);
            let message = await this.getElementText(NO_TICKETS_MESSAGE);
            assert.equal(message,"You do not currently have any ticket.");
            await this.timeout(1000);
        }
        async assertQuantityEqualsSoldColumnByTicket(ticketName){
            await this.isDisplayed(TICKETS_NAMES,5000);
            let i = await this.returnIndexWhenTextIsKnown(TICKETS_NAMES, ticketName);
            let quantity = await this.getElementTextFromAnArrayByIndex(TICKETS_QUANTITIES,i);
            let sold = await this.getElementTextFromAnArrayByIndex(SOLD_TICKETS_NUMBER,i);
            assert.equal(quantity, sold);
        }

        async getAllTicketsNames(){
            let ticketsNames = []
            let tickets = await this.findAll(TICKETS_NAMES);
            for(let i = 0; i < tickets.length; i++){
                let ticketName = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, i);
                ticketsNames.push(ticketName)
            }
            return ticketsNames;
        }

        async dragThirdTicketInTopPosition(){
            await this.isDisplayed(DRAG_ROW_FOUR, 5000)
            await this.dragAndDropWithLocators(DRAG_ROW_FOUR, DRAG_ROW_ONE)
            await this.timeout(2000)
        }

        async clickGroupTabsByIndexAssertNumberOfTickets(ticketOneName, ticketTwoName, ticketThreeName, staffTicket){
            await this.clickGroupTabByIndex(1);
            let ticketsOne = await this.returnElementsCount(TICKETS_NAMES);
            assert.equal(ticketsOne, 2);
            let ticketOne = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 0);
            assert.equal(ticketOne, ticketOneName);
            let ticketStaff = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 1);
            assert.equal(ticketStaff, staffTicket);
            await this.clickGroupTabByIndex(2);
            let ticketsTwo = await this.returnElementsCount(TICKETS_NAMES);
            assert.equal(ticketsTwo, 2);
            let ticketTwo = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 0);
            assert.equal(ticketTwo, ticketTwoName);
            let ticketThree = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 1);
            assert.equal(ticketThree, ticketThreeName);
        }

        async dragTicketFromGroupTwoToGroupOne(){
            let tickets = await this.findAll(TICKETS_NAMES);
            let groups = await this.findAll(TICKET_GROUP_TAB);
            await this.dragAndDropWithElements(tickets[0], groups[1]);
            await this.timeout(1000);

        }
        async assertTicketIsRemovedFromGroupTwoAndAddedToGroupOne(ticketOneName, ticketTwoName, ticketThreeName, staffTicket){
            await this.timeout(1000)
            let ticketsTwo = await this.returnElementsCount(TICKETS_NAMES);
            assert.equal(ticketsTwo, 1);
            let ticketThree = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 0);
            assert.equal(ticketThree, ticketThreeName);
            await this.clickGroupTabByIndex(1);
            let ticketsOne = await this.returnElementsCount(TICKETS_NAMES);
            assert.equal(ticketsOne, 3);
            let ticketOne = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 0);
            assert.equal(ticketOne, ticketOneName);
            let ticketTwo = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 1);
            assert.equal(ticketTwo, ticketTwoName);
            let ticketStaff = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES, 2);
            assert.equal(ticketStaff, staffTicket);

        }

        async getSoldTicketsNumberForEachTicketInTicketsNav(){
            return await this.returnArrayOfStrings(SOLD_TICKETS_NUMBER);
        }

        async assertTicketsSoldInBoxOfficeEqualsSoldTicketsInTicketsNav(soldBoxOffice){
            let ticketNavSold = await this.getSoldTicketsNumberForEachTicketInTicketsNav();
            for(let i = 0; i < ticketNavSold.length; i++){
                assert.equal(ticketNavSold[i], soldBoxOffice[i]);
            }
        }
        async clickDeleteTicketButtonByTicketName(ticketName){
            let i = await this.getTicketIndexByTicketName(ticketName)
            await this.clickElementReturnedFromAnArray(DELETE_TICKET_BUTTONS, i);
            await this.acceptAlert();
        }
        
        
        
        async assertColumnNamesEqualsColumnOptionsModal(){
            await this.isDisplayed(TABLE_HEADERS, 5000);
            let table = new TableComponent(this.driver);
            let headers = await table.returnArrayOfTableHeaderNames();
            let options = new FilteringOptions(this.driver)
            await options.clickAddColumnButton(ADD_TABLE_COLUMN_BUTTON);
            let columns = new ColumnOptionsModal(this.driver)
            await columns.assertHeadersEqualsColumnOptionsInModal(headers);
        }

    }
    module.exports = TicketsNav;


 