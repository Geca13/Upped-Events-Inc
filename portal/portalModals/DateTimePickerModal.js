    const BasePage = require('../../BasePage');
    const NEXT_MONTH_SELECT = { css: "button[aria-label='Next month']" };
    const DAY_28_OF_MONTH = { xpath: "//*[text()='28']"};
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
         getMinutesNowPlusOne(){
            let today = new Date();
             return (today.getMinutes()+1).toString();
        }
        getHoursNow(){
            let today = new Date();
            let hour = today.getHours();
            if (hour > 12) {
                return hour-12;
            }else{
                return hour;
            }
        }
        async enterTimeNow(){
           let minutes = await this.getElementFromAnArrayByIndex(HOUR_MINUTES_INPUTS,1);
           let minute = this.getMinutesNowPlusOne();
          await minutes.sendKeys(minute);
           let hours = await this.getElementFromAnArrayByIndex(HOUR_MINUTES_INPUTS,0);
           let hour = this.getHoursNow();
          await hours.sendKeys(hour);
        }


    }
    module.exports = DateTimePickerModal;
