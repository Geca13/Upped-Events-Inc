    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal');
    const CREATE_EVENT_HEADER = { xpath: "//*[text()='Create Event']"};
    const EVENT_NAME_LABEL = { xpath: "//*[text()='Event Name ']"}
    const EVENT_NAME_INPUT = { xpath: "//lint-modal-window//input[@formcontrolname='eventName']" };
    const OCCUR_SELECT = { xpath: "//button[@role='combobox']" };
    const OCCUR_ONCE = { xpath: "//*[text()='Once']"};
    const OCCUR_VARIOUS_TIMES = { xpath: "//*[text()='Various Times']"}
    const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventStartDate']" };
    const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventEndDate']" };
    const EVENT_ATTENDEES_INPUT = { xpath: "//input[@formcontrolname='eventAttendees']" };
    const EVENT_DESCRIPTION_INPUT = { xpath: "//textarea[@formcontrolname='eventDescription']" };
    const CREATE_EVENT_BUTTON = { className: "ar-btn"};
    const CLOSE_MODAL_BUTTON = { xpath: "//*[text()='Close']"};




    class CreateEventModal extends BasePage  {

        constructor(driver) {
            super(driver);
        }

        async occurrenceOptionsAreDisplayed(){
            await this.isDisplayed(OCCUR_ONCE,5000);
        }

        async createEventModalIsDisplayed(){
           await this.isDisplayed(EVENT_NAME_LABEL,5000);
        }
        async submitButtonIsClickable(){
            await this.isDisplayed(CREATE_EVENT_BUTTON,15000);
        }

        async fillFormWithValidDataAndSave(eventName){

            await this.sentKeys(EVENT_NAME_INPUT, eventName);
            await this.click(OCCUR_SELECT);
            await this.occurrenceOptionsAreDisplayed();
            await this.click(OCCUR_ONCE)
            await this.sentKeys(EVENT_ATTENDEES_INPUT, "12345");
            await this.sentKeys(EVENT_DESCRIPTION_INPUT, "Nesto");
            await this.click(START_DATE_TIME_PICKER);
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.clickNextMonthButton();
            await startDatePicker.select28Day();
            await this.driver.sleep(1500);
            await startDatePicker.clickSetButton();

            await this.driver.sleep(500);

            await this.click(END_DATE_TIME_PICKER);
            let endDatePicker = new DateTimePickerModal(this.driver);

            await endDatePicker.datePickerIsVisible();
            await endDatePicker.clickNextMonthButton();
            await endDatePicker.select28Day();
            await this.driver.sleep(1500);
            await endDatePicker.clickSetButton();
            await this.submitButtonIsClickable();
            await this.click(CREATE_EVENT_BUTTON)


        }



    }
    module.exports = CreateEventModal;