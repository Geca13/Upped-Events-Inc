    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const { expect }= require('chai');
    const Alerts = require('../../../Validations&Alerts/Alerts')
    const OverrideTicketModal = require('../../portalModals/OverrideTicketModal');
    const TableComponent = require('../../portalComponents/TableComponent');
    const BOStepper = require('../BoxOffice/BOStepper');
    const TICKET_GROUPS_TABS = { id: "eventsTab" }
    const COLUMN_TICKET_NAME = { className: "table-ticket-name" } //list
    const COLUMN_PRICE = { xpath: "//td[contains(@class, 'column-price')]//span" } //list
    const COLUMN_DESCRIPTION = { xpath: "//td[contains(@class, 'column-description')]//span" } //list
    const COLUMN_QUANTITY = { className: "column-quantity" } //list
    const COLUMN_SOLD = { className: "column-sold" } //list
    const COLUMN_SELECTS = { className: "numeric-dropdown" } //list
    const OVERRIDEN_QUANTITY_OPTIONS = { xpath: "//option[contains(@class, 'overriden')]" }
    const OVERRIDEN_TICKET_PRICE = { xpath: "//span[contains(@class, 'overriden')]" }
    const COLUMN_OVERRIDE = { className: "text-second" } //list
    const STEPPER = { id: "stepper" };
    const SAVE_BUTTON = { xpath: "//button[contains(@class, 'btn-purple')]"};




    class BOSelectTickets extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async openBoxOfficeDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/ticket/box-office")
            await this.isOnBoxOfficePage();
        }

        async isOnBoxOfficePage(){
            await this.isDisplayed(SAVE_BUTTON,5000);
        }

        async assertTicketDataByTicketName(ticketName,ticketPrice, ticketQuantity){

            await this.isOnBoxOfficePage();
            let i = await this.returnIndexWhenTextIsKnown(COLUMN_TICKET_NAME, ticketName);
            let ticketOne = await this.getTextFromElementOfArray(COLUMN_TICKET_NAME,i);
            let description = await this.getTextFromElementOfArray(COLUMN_DESCRIPTION,i);
            let price = await this.getTextFromElementOfArray(COLUMN_PRICE,i);
            let quantity = await this.getTextFromElementOfArray(COLUMN_QUANTITY,i);
            let sold = await this.getTextFromElementOfArray(COLUMN_SOLD,i);
            let selectValue = await this.getEnteredTextInTheInputByIndex(COLUMN_SELECTS,i);
            expect(ticketOne).to.equal(ticketName)
            expect(description).to.equal(ticketName + " description")
            expect(price).to.equal("$" + ticketPrice)
            expect(quantity).to.equal(ticketQuantity.toString())
            expect(sold).to.equal("0")
            expect(selectValue).to.equal("0")

        }

        async selectTicketByIndexSendQuantityAndSave(index, quantity){
            await this.isOnBoxOfficePage();
            await this.timeout(500);
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,index,quantity);
            await this.click(SAVE_BUTTON);
        }

        async selectTwoTickets(){
            await this.isOnBoxOfficePage();
            await this.timeout(1000);
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,3,"2");
            await this.click(SAVE_BUTTON);
        }

        async select3Tickets(){
            await this.isOnBoxOfficePage()
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,2,"3");
            await this.click(SAVE_BUTTON);
        }

        async select18Tickets(){
           try{
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,0,"5");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,1,"3");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,2,"4");
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,3,"6");
            await this.click(SAVE_BUTTON);
          } catch (error){
            await this.takeScreenshot("boTickets_18Tickets")
            await this.writeError(error)
            throw error.toString();
        }
        }

        async addNewQuantityAndSetNewPrice(){
            try {
                await this.clickElementReturnedFromAnArray(COLUMN_OVERRIDE,0);
                let override = new OverrideTicketModal(this.driver);
                await override.overrideModalIsDisplayed();
                await override.loginToTheOverrideModal();
                //await override.overrideTicketQuantity("1");
                await this.timeout(500);
                await override.setNewPrice('5');
                await override.clickSaveChangesButton();
                await this.timeout(1500);
                let newPrice = await this.getElementText(OVERRIDEN_TICKET_PRICE);
                assert.equal(newPrice,'$15');
                let fontColor = await this.getFontColorFromAnArray(OVERRIDEN_TICKET_PRICE,0);
                assert.equal(fontColor,'rgba(255, 0, 0, 1)');

            } catch (error){
                await this.takeScreenshot("boTickets_newPrice")
                await this.writeError(error)
                throw error.toString();
            }

        }

        /*async assertNewPriceAndQuantity(){
            await this.isOnBoxOfficePage();
            await this.timeout(2000)
            let originalPrice = await this.getTextFromElementOfArray(COLUMN_PRICE,0);
            assert.equal(originalPrice,'1');
            await this.clickElementReturnedFromAnArray(COLUMN_SELECTS,0);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(OVERRIDEN_QUANTITY_OPTIONS,0);
            await this.isDisplayed(OVERRIDEN_TICKET_PRICE,5000);
            let newPrice = await this.getElementText(OVERRIDEN_TICKET_PRICE);
            assert.equal(newPrice,'1.5');
            let fontColor = await this.getFontColorFromAnArray(OVERRIDEN_TICKET_PRICE,0);
            assert.equal(fontColor,'rgba(255, 0, 0, 1)');
        }*/
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

        async assertTableHeaders(){
            await this.isOnBoxOfficePage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(0 ,"Ticket Name");
            await table.assertColumnNamesByIndex(1 ,"Desciption");
            await table.assertColumnNamesByIndex(2 ,"Price");
            await table.assertColumnNamesByIndex(3 ,"Quantity");
            await table.assertColumnNamesByIndex(4 ,"Sold");
            await table.assertColumnNamesByIndex(5,"Select Ticket");
            await table.assertColumnNamesByIndex(6 ,"Overrides: Price/Quantity");
        }

        async assertNoTicketMessage(){
            await this.isOnBoxOfficePage();
            let table = new TableComponent(this.driver);
            await table.messageWhenTableIsEmpty("No record available")
        }

        async clickSaveButtonWhenTicketsNotSelectedAssertErrorMessage(){
            let selected = await this.getEnteredTextInTheInput(COLUMN_SELECTS);
            assert.equal(selected, "0");
            await this.click(SAVE_BUTTON);
            let alert = new Alerts(this.driver)
            await alert.errorInfoMessageIsDisplayed("Please select atleast one ticket");

        }

        async assertNavigationButtonsCountAndText(){
            let stepper = new BOStepper(this.driver);
            await stepper.assertNavStepsCountAndStepsNames();
        }

        async clickAddExtrasNavButtonWhenTicketsNotSelectedAssertErrorMessage(){
            try {
                let stepper = new BOStepper(this.driver);
                await stepper.clickNavElementByIndex(1);
                let alert = new Alerts(this.driver)
                await alert.errorInfoMessageIsDisplayed("Please select at least one ticket");
            }catch (error){
                await this.takeScreenshot("boTickets")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickNavButtonByIndexWhenTicketsSelected(index){
            let stepper = new BOStepper(this.driver);
            await stepper.clickNavElementByIndex(index);
        }

        async assertSelectedQtyByIndex(index, value){
            await this.isOnBoxOfficePage();
            let selected = await this.getEnteredTextInTheInputByIndex(COLUMN_SELECTS, index);
            assert.equal(selected, value);
        }


    }
    module.exports = BOSelectTickets;