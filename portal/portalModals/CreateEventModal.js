    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal');
    const CREATE_EVENT_HEADER = { xpath: "//*[text()='Create Event']"};
    const EVENT_NAME_LABEL = { xpath: "//*[text()='Event Name ']"}
    const INPUT_FIELDS_WRAPPERS = { className: 'fields'}//list
    const EVENT_NAME_INPUT = { xpath: "//*[@id=\"createEvent\"]/div/div/create-event/div/div[2]/form/div[1]/div[1]/div/input" };
    const OCCUR_SELECT = { css: "button[title=Occurence select]" };
    const OCCUR_ONCE = { xpath: "//*[text()='Once']"};
    const OCCUR_VARIOUS_TIMES = { xpath: "//*[text()='Various Times']"}
    const DATE_TIME_PICKER_ICON = { className: 'icon-event'}; //list
    const EVENT_ATTENDEES_INPUT = { css: "input[formControlName=eventAttendees]" };
    const EVENT_DESCRIPTION_INPUT = { css: "input[formControlName=eventDescription]" };
    const CREATE_EVENT_BUTTON = { xpath: "//*[text()='Create']"};
    const CLOSE_MODAL_BUTTON = { xpath: "//*[text()='Close']"}



    class CreateEventModal extends BasePage {

        constructor(driver) {
            super(driver);
        }

        async createEventModalIsDisplayed(){
           await this.isDisplayed(CREATE_EVENT_HEADER,5000);
        }
        async fillFormWithValidData(){
            await this.driver.sleep(5000)
            //await this.click(EVENT_NAME_LABEL);


           // let eventNameInput = await this.getElementFromAnArrayByIndex(INPUT_FIELDS_WRAPPERS,0);
           //await eventNameInput.click();
           // await this.driver.sleep(5000)
            //await this.sentKeys(EVENT_NAME_INPUT, "Knights");
            //await this.click(OCCUR_SELECT);
           // await this.isDisplayed(OCCUR_ONCE, 5000);
          //  await this.click(OCCUR_ONCE);
            let firstCalendarIcon = await this.getElementFromAnArrayByIndex(DATE_TIME_PICKER_ICON,0);
            await firstCalendarIcon.click();

        }



    }
    module.exports = CreateEventModal;