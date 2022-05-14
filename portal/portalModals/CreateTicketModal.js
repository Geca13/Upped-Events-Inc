    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal')
    const CREATE_TICKET_HEADER = { xpath: "//*[text()='Create Ticket']"}
    const TICKET_NAME_INPUT = { xpath: "//lint-modal-window//input[@id='name']" };
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
        async createNewTicket(ticketName,ticketPrice){
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.sentKeys(TICKET_QUANTITY_INPUT, '1234');
            await this.sentKeys(TICKET_PRICE_INPUT, ticketPrice);
            await this.click(TICKET_START_DATE_INPUT);
            await this.driver.sleep(1000);

            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            await this.driver.sleep(1500);
            await startDatePicker.clickSetButton();
            await this.driver.sleep(1500);
           /* await this.click(TICKET_END_DATE_INPUT);
            let endDatePicker = new DateTimePickerModal(this.driver);
            await endDatePicker.datePickerIsVisible();
            await endDatePicker.clickNextMonthButton();
            await endDatePicker.select28Day();
            await this.driver.sleep(1500);
            await endDatePicker.clickSetButton();*/
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_TICKET_BUTTON);
        }
        async createStaffTicket(ticketName,ticketPrice){
            await this.sentKeys(TICKET_NAME_INPUT, ticketName);
            await this.sentKeys(TICKET_DESCRIPTION_INPUT, ticketName + ' description');
            await this.sentKeys(TICKET_RULES_INPUT, ticketName + ' rules');
            await this.sentKeys(TICKET_QUANTITY_INPUT, '1234');
            await this.sentKeys(TICKET_PRICE_INPUT, ticketPrice);
            await this.click(TICKET_START_DATE_INPUT);
            await this.driver.sleep(1000);
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            await this.driver.sleep(1500);
            await startDatePicker.clickSetButton();
            await this.driver.sleep(1500);
            await this.click(TICKET_TYPE_OPTIONS_BUTTON);
            await this.isDisplayed(TICKET_TYPE_DROPDOWNS,5000);
            await this.clickElementReturnedFromAnArray(TICKET_TYPE_OFF_TOGGLE,0);
            await this.click(TICKET_TYPE_DROPDOWNS);
            await this.isDisplayed(TICKET_STAFF_OPTION,5000);
            await this.click(TICKET_STAFF_OPTION);
            await this.elementFromArrayOfElementsIsDisplayed(TICKET_TYPE_DROPDOWNS,1);
            await this.clickElementReturnedFromAnArray(TICKET_TYPE_DROPDOWNS,1);
            await this.isDisplayed(TICKET_STAFF_WILL_SELECT_DEPARTMENT,5000);
            await this.click(TICKET_STAFF_WILL_SELECT_DEPARTMENT);
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_TICKET_BUTTON);
        }

    }
    module.exports = CreateTicketModal;