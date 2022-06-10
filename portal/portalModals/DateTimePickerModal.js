    const BasePage = require('../../BasePage');
    const NEXT_MONTH_SELECT = { css: "button[aria-label='Next month']" };
    const DAY_13_OF_MONTH = { xpath: "//*[text()='13']"};
    const SET_DATE_TIME_BUTTON = { xpath: "//*[normalize-space(text())='Set']"};
    const CANCEL_DATE_TIME_BUTTON = { xpath: "//*[text()='Cancel']"};
    const HOUR_MINUTES_INPUTS = { className: "owl-dt-timer-input" }; //list


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
        async select13Day(){
            await this.click(DAY_13_OF_MONTH);
        }
        async clickSetButton(){
            await this.click(SET_DATE_TIME_BUTTON);
            await this.driver.sleep(1000)
        }
        async clickCancelButton(){
            await this.click(CANCEL_DATE_TIME_BUTTON);
        }
        async datePickerIsNotVisible(){
            await this.isNotDisplayed(SET_DATE_TIME_BUTTON,30000)
        }

         getHoursNow(){
            let today = new Date();
            let hour = today.getHours();
            if (hour > 12) {
               return (hour-12).toString();
            }else{
                return hour.toString();
            }
        }
        async enterTimeNow(){
           let hours = await this.getElementFromAnArrayByIndex(HOUR_MINUTES_INPUTS,0);
           hours.clear();
           await this.driver.sleep(500);
           let hour = this.getHoursNow();
          await hours.sendKeys(hour);
        }


    }
    module.exports = DateTimePickerModal;
