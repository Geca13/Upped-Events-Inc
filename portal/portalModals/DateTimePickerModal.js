    const BasePage = require('../../BasePage');
    const OCCUR_SELECT = { css: "button[aria-label=Next month]" };
    const DAY_28_OF_MONTH = { xpath: "//*[text()='Once']"};
    const SET_DATE_TIME_BUTTON = { xpath: "//*[text()='Set']"};
    const CANCEL_DATE_TIME_BUTTON = { xpath: "//*[text()='Cancel']"};


    class DateTimePickerModal extends BasePage {
        constructor(driver) {
            super(driver);
        }


    }
    module.exports = DateTimePickerModal;
