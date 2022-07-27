    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal');
    const TicketsNav = require('../ticketing/TicketsNav');
    const assert = require("assert");
    const CREATE_TICKET_HEADER = { xpath: "//*[text()='Create Ticket']"}
    const TICKET_NAME_INPUT = { xpath: "//input[@id='name']" };
    const TICKET_DESCRIPTION_INPUT = { id: 'description' }
    const TICKET_RULES_INPUT = { id: 'rules' }
    const TICKET_QUANTITY_INPUT = { id: 'quantity'}
    const TICKET_PRICE_INPUT = { id: 'price' }
    const TICKET_START_DATE_INPUT = { id: 'startDate' }
    const TICKET_END_DATE_INPUT = { id: 'endDate' }
 /*   const TICKET_TYPE_OPTIONS_BUTTON = { className: 'btn-link' }
    const TICKET_TYPE_ON_TOGGLE = { className: 'lc_on' }*/
    const TICKET_TYPE_OFF_TOGGLE = { className: 'lc_off' }
    const TICKET_TYPE_OPTIONS_SELECT = { tagName: 'select' } //list
    const STAFF_WILL_SELECT_DEPARTMENT_OPTION = { id: 'bs-select-3-1' }
    const STAFF_ENGINEERING_OPTION = { id: 'bs-select-3-2'}
    const STAFF_SECURITY_OPTION = { id: 'bs-select-3-3' }
    const CANCEL_BUTTON = { xpath: "//button[@type='reset']" };
    const TICKET_TYPE_OPTIONS_BUTTON = { xpath: "//button[@aria-controls='panelOne']" }
    const TICKET_TYPE_DROPDOWNS = { xpath: "//button[@role='combobox']" } //list
    const TICKET_STAFF_OPTION= { xpath: "//*[text()='STAFF']"}
    const TICKET_STAFF_WILL_SELECT_DEPARTMENT = { xpath: "//*[text()='Staff Will Select Department']"}
    const TICKET_STAFF_SECURITY_DEPARTMENT = { xpath: "//*[text()='Security']"}
    const SAVE_TICKET_BUTTON = { xpath: "//*[text()=' Save ']"};
    const OFF_BUTTON = { xpath: "//*[text()='OFF']"};




    class CreateTicketModal extends BasePage {
        constructor(driver) {
            super(driver);
        }


        async ticketNameInputIsDisplayed(){
            await this.isDisplayed(TICKET_NAME_INPUT, 5000)
        }
        async saveTicketButtonIsVisible(){
            await this.isDisplayed(SAVE_TICKET_BUTTON, 5000)
        }
        async clickStartDateTimeInput(){
            await this.click(TICKET_START_DATE_INPUT);
        }

        async clickEndDateTimeInput(){
            await this.click(TICKET_END_DATE_INPUT);
        }

        async clickSaveTicketButton(){
            await this.click(SAVE_TICKET_BUTTON);
            await this.timeout(1500);
        }

        async createFirstTicketAndAssertDataOnTicketsAndUpdate(ticketName,ticketPrice,ticketOneQuantity){
            await this.ticketNameInputIsDisplayed();
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.clearInputField(TICKET_QUANTITY_INPUT);
            await this.sentKeys(TICKET_QUANTITY_INPUT, ticketOneQuantity.toString());
            await this.sentKeys(TICKET_PRICE_INPUT, ticketPrice);
            await this.click(TICKET_START_DATE_INPUT);
            await this.timeout(1500)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton();
            await this.timeout(1500)
            await startDatePicker.clickSetButton();
            await this.timeout(1500)
            await this.saveTicketButtonIsVisible();
            let name = await this.getEnteredTextInTheInput(TICKET_NAME_INPUT)
            let description = await this.getEnteredTextInTheInput(TICKET_DESCRIPTION_INPUT);
            let rules = await this.getEnteredTextInTheInput(TICKET_RULES_INPUT);
            let origStart = await this.getEnteredTextInTheInput(TICKET_START_DATE_INPUT)
            let origEnd = await this.getEnteredTextInTheInput(TICKET_END_DATE_INPUT);
            let origAtt = await this.getEnteredTextInTheInput(TICKET_QUANTITY_INPUT);
            let origPrice = await this.getEnteredTextInTheInput(TICKET_PRICE_INPUT);
            let price = await this.returnNumberWith$Sign(TICKET_PRICE_INPUT);
            let start = await this.getOnlyFullDateFromDateTimeInput(TICKET_START_DATE_INPUT);
            let end =await this.getOnlyFullDateFromDateTimeInput(TICKET_END_DATE_INPUT);
            let quantity = await this.numberWithCommas(TICKET_QUANTITY_INPUT);
            await this.timeout(1500)
            await this.click(SAVE_TICKET_BUTTON);
            await this.timeout(1500)
            let ticketNav = new TicketsNav(this.driver);
            await ticketNav.assertCorrectDataIsDisplayedInTableAfterCreatingFirstTicket(name,start,end,price,quantity);
            await this.isDisplayed(TICKET_NAME_INPUT,5000);
            let descriptionOnUpdate = await this.getEnteredTextInTheInput(TICKET_DESCRIPTION_INPUT);
            let rulesOnUpdate = await this.getEnteredTextInTheInput(TICKET_RULES_INPUT);
            let origStartOnUpdate = await this.getEnteredTextInTheInput(TICKET_START_DATE_INPUT)
            let origEndOnUpdate = await this.getEnteredTextInTheInput(TICKET_END_DATE_INPUT);
            let nameOnUpdate = await this.getEnteredTextInTheInput(TICKET_NAME_INPUT)
            let origAttOnUpdate = await this.getEnteredTextInTheInput(TICKET_QUANTITY_INPUT);
            let origPriceOnUpdate = await this.getEnteredTextInTheInput(TICKET_PRICE_INPUT);
            assert.equal(nameOnUpdate,name);
            assert.equal(origStartOnUpdate,origStart);
            assert.equal(origEndOnUpdate,origEnd);
            assert.equal(origAttOnUpdate,origAtt);
            assert.equal(origPriceOnUpdate,origPrice);
            assert.equal(descriptionOnUpdate,description);
            assert.equal(rulesOnUpdate,rules);

        }


        async createNewTicket(ticketName,ticketPrice,ticketOneQuantity){
            await this.ticketNameInputIsDisplayed();
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.clearInputField(TICKET_QUANTITY_INPUT);
            await this.sentKeys(TICKET_QUANTITY_INPUT, ticketOneQuantity);
            await this.sentKeys(TICKET_PRICE_INPUT, ticketPrice);
            await this.click(TICKET_START_DATE_INPUT);
            await this.timeout(1500)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton();
            await this.timeout(1500)
            await startDatePicker.clickSetButton();
            await this.timeout(1500)
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_TICKET_BUTTON);
            await this.timeout(1500);

        }

        async createNewTicketForQuantityCheck(ticketName,ticketQty){
            await this.ticketNameInputIsDisplayed();
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.clearInputField(TICKET_QUANTITY_INPUT);
            await this.timeout(1500)
            await this.sentKeys(TICKET_QUANTITY_INPUT, ticketQty);
            await this.sentKeys(TICKET_PRICE_INPUT, "5");
            await this.click(TICKET_START_DATE_INPUT);
            await this.timeout(1500)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            await this.timeout(1500)
            await startDatePicker.clickSetButton();
            await this.timeout(1500)
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_TICKET_BUTTON);
        }

        async createStaffTicket(ticketName,ticketPrice){
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.sentKeys(TICKET_QUANTITY_INPUT, '0');
            await this.sentKeys(TICKET_PRICE_INPUT, ticketPrice);
            await this.click(TICKET_START_DATE_INPUT);
            await this.timeout(1500)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            await this.timeout(1500)
            await startDatePicker.clickSetButton();
            await this.timeout(1500)
            await this.click(TICKET_TYPE_OPTIONS_BUTTON);
            //await this.isDisplayed(OFF_BUTTON,5000);
            await this.timeout(1500)
            await this.clickLastElementReturnedFromAnArray(OFF_BUTTON)
            await this.click(TICKET_TYPE_DROPDOWNS);
            await this.isDisplayed(TICKET_STAFF_OPTION,5000);
            await this.click(TICKET_STAFF_OPTION);
            await this.elementFromArrayOfElementsIsDisplayed(TICKET_TYPE_DROPDOWNS,1);
            await this.clickElementReturnedFromAnArray(TICKET_TYPE_DROPDOWNS,1);
            await this.isDisplayed(TICKET_STAFF_WILL_SELECT_DEPARTMENT,5000);
            await this.click(TICKET_STAFF_WILL_SELECT_DEPARTMENT);
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_TICKET_BUTTON);
            await this.timeout(1500)
            console.log("Successfully finished")
        }

        async getTicketNameValue(){
            let name = await this.getEnteredTextInTheInput(TICKET_NAME_INPUT);
            return name;
        }

        async getTicketDescriptionValue(){
            let description = await this.getEnteredTextInTheInput(TICKET_DESCRIPTION_INPUT);
            return description;
        }

        async getTicketRulesValue(){
            let rules = await this.getEnteredTextInTheInput(TICKET_RULES_INPUT);
            return rules;
        }

        async getTicketPriceValue(){
            let price = await this.getEnteredTextInTheInput(TICKET_PRICE_INPUT);
            return parseFloat(price).toFixed(2)
        }

    }
    module.exports = CreateTicketModal;