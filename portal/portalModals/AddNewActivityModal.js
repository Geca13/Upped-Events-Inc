    const BasePage = require('../../BasePage');
    const ACTIVITY_NAME_INPUT = { xpath: "//input[@formcontrolname='name']" };
    const TYPE_AND_LOCATION_SELECTS = { xpath: "//button[@role='combobox']" };
    const TYPE_AND_LOCATION_OPTIONS = { xpath: "//a[@role='option']" }; //list
    const ACTIVITY_DESCRIPTION_TEXTAREA = { xpath: "//textarea[@formcontrolname='description']" };
    const ACTIVITY_REMINDERS_MESSAGE_TEXTAREA = { xpath: "//textarea[@formcontrolname='message']" };
    const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='startDate']" };
    const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='endDate']" };
    const MAKE_FEATURED_CHECKBOX = { xpath: "//input[@formcontrolname='featured']" };
    const ALL_DAY_EVENT_CHECKBOX = { xpath: "//input[@formcontrolname='isFullDay']" };
    const TAG_INPUT = { xpath: "//input[@formcontrolname='tag']" };
    const ADD_TAG_BUTTON = { xpath: "//button[@type='button']" }; //list index 3
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" }
    const ADD_REMINDER_LINK = { xpath: "//*[text()='Add reminder']"}
    const CLOSE_MODAL_BUTTON = { xpath: "//button[@type='reset']" }
    const SAVE_PERFORMANCE_BUTTON = { xpath: "//*[text()='Save']"}
    const NOTIFY_USERS_DROPDOWN = { xpath: "//select[@formcontrolname='sendTo']" };
    const NOTIFY_TIME_DROPDOWN = { xpath: "//select[@formcontrolname='sendTime']" };
    const REMOVE_REMINDER_BUTTON = { className: 'icon-del'}
    const NOTIFY_ATTENDEES_OPTION = { xpath: "//*[text()='Attendees']"}
    const NOTIFY_VENDORS_OPTION = { xpath: "//*[text()='Vendors']"}
    const NOTIFY_STAFF_OPTION = { xpath: "//*[text()='Staff']"}
    const BEGINS_TIME_OPTION = { xpath: "//*[text()='When session begins']"}
    const MINUTES_10_BEFORE_OPTION = { xpath: "//*[text()='10 minutes before']"}
    const MINUTES_30_BEFORE_OPTION = { xpath: "//*[text()='30 minutes before']"}
    const HOUR_1_BEFORE_OPTION = { xpath: "//*[text()='1 hour before']"}
    const HOUR_2_BEFORE_OPTION = { xpath: "//*[text()='2 hour before']"}
    const CREATE_PERFORMANCE_MODAL_HEADER = { xpath: "//*[text()='Create Event Performance']"}
    const SAVED_TAGS = { className: 'primary-badge' }
    const SET_IMAGE_BUTTON = { xpath: "//app-image-focus//div//button[@type='button']"}


    class AddNewActivityModal extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtCreateActivityModal() {
            await this.isDisplayed(ACTIVITY_NAME_INPUT, 5000);
        }

        async typesDropdownOptionsAreDisplayed() {
            await this.isDisplayed(TYPE_AND_LOCATION_OPTIONS, 5000);
        }

        async locationOptionsAreDisplayed() {
            await this.isDisplayedFromArray(TYPE_AND_LOCATION_OPTIONS, 7, 5000);
        }


        async createFootballGame() {
            await this.isAtCreateActivityModal();
            await this.sentKeys(ACTIVITY_NAME_INPUT, "Football");
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_SELECTS, 0);
            await this.typesDropdownOptionsAreDisplayed();
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_OPTIONS, 3);
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_SELECTS, 0);
            await this.driver.sleep(1000);
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_SELECTS, 1);
            await this.driver.sleep(1000);
            //await this.locationOptionsAreDisplayed();
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_OPTIONS, 7);
            await this.clickElementReturnedFromAnArray(TYPE_AND_LOCATION_SELECTS, 1);
            await this.driver.sleep(500);
            await this.sentKeys(ACTIVITY_DESCRIPTION_TEXTAREA, "Best Football Game");
            await this.sentKeys(TAG_INPUT, "Vikings");
            await this.clickElementReturnedFromAnArray(ADD_TAG_BUTTON, 3);
            await this.isDisplayed(SAVED_TAGS, 5000);
            await this.sentKeys(TAG_INPUT, "Eagles");
            await this.clickElementReturnedFromAnArray(ADD_TAG_BUTTON, 3);
            //await this.click(MAKE_FEATURED_CHECKBOX);
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT, "D:\\Upped\\static\\eaglesvikings.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON, 5000);
            await this.click(SET_IMAGE_BUTTON);
            await this.driver.sleep(500);
            await this.click(SET_IMAGE_BUTTON);
            await this.isAtCreateActivityModal();
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            await this.moveToElement(ADD_REMINDER_LINK);
            await this.click(ADD_REMINDER_LINK);
            await this.isDisplayed(NOTIFY_USERS_DROPDOWN,5000);
            await this.click(NOTIFY_USERS_DROPDOWN)
            await this.isDisplayed(NOTIFY_ATTENDEES_OPTION);
            await this.click(NOTIFY_ATTENDEES_OPTION);
            await this.click(NOTIFY_TIME_DROPDOWN);
            await this.isDisplayed(HOUR_1_BEFORE_OPTION);
            await this.click(HOUR_1_BEFORE_OPTION);
            await this.moveToElement(ADD_REMINDER_LINK);
            await this.sentKeys(ACTIVITY_REMINDERS_MESSAGE_TEXTAREA, 'Game is to start in an hour!!! RUNNNN!!!');
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='visible'");
            await this.driver.sleep(500);
            await this.click(SAVE_PERFORMANCE_BUTTON);
            await this.driver.sleep(5000);

        }
    }
    module.exports = AddNewActivityModal;
