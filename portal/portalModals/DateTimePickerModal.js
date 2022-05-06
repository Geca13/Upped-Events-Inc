    const BasePage = require('../../BasePage');
    const NEXT_MONTH_SELECT = { css: "button[aria-label='Next month']" };
    const DAY_28_OF_MONTH = { xpath: "//*[text()='28']"};
    const SET_DATE_TIME_BUTTON = { xpath: "//*[text()='Set']"};
    const CANCEL_DATE_TIME_BUTTON = { xpath: "//*[text()='Cancel']"};


    class DateTimePickerModal extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async datePickerIsVisible(){
           await this.isDisplayed(SET_DATE_TIME_BUTTON, 5000)
        }
        async clickNextMonthButton(){
            await this.click(NEXT_MONTH_SELECT);
        }
        async select28Day(){
            await this.click(DAY_28_OF_MONTH);
        }
        async clickSetButton(){
            await this.click(SET_DATE_TIME_BUTTON);
        }
        async clickCancelButton(){
            await this.click(CANCEL_DATE_TIME_BUTTON);
        }
        async datePickerIsNotVisible(){
            await this.isNotDisplayed(SET_DATE_TIME_BUTTON,30000)
        }


    }
    module.exports = DateTimePickerModal;
