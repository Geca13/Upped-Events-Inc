    const BasePage = require('../../BasePage');
    const NEXT_MONTH_BUTTON = { css: "button[aria-label='Next month']" };
    const PREVIOUS_MONTH_BUTTON = { css: "button[aria-label='Previous month']" };
    const DAY_13_OF_MONTH = { xpath: "//*[text()='13']"};
    const SET_DATE_TIME_BUTTON = { xpath: "//*[normalize-space(text())='Set']"};
    const CANCEL_DATE_TIME_BUTTON = { xpath: "//*[text()='Cancel']"};
    const HOUR_MINUTES_INPUTS = { className: "owl-dt-timer-input" }; //list
    const PM_BUTTON = { xpath: "//*[text()=' PM ']"};
    const SELECTED_DAY_BUTTON = { className: "owl-dt-calendar-cell-selected" };
    const TODAY_DAY_BUTTON = { xpath: "//span[contains(@class , 'owl-dt-calendar-cell-today')]" };
    const MONTH_YEAR_BUTTON = { xpath: "//button[@aria-label='Choose month and year']//span[contains(@class, 'owl-dt-control-content')]" };
    const ADD_HOURS_BUTTON = { css: "button[aria-label='Add a hour']" };
    const ADD_MINUTES_BUTTON = { css: "button[aria-label='Add a minute']" };
    const REMOVE_HOURS_BUTTON = { css: "button[aria-label='Minus a hour']" };
    const REMOVE_MINUTES_BUTTON = { css: "button[aria-label='Minus a minute']" };




    class DateTimePickerModal extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async datePickerIsVisible(){
           await this.isDisplayed(SET_DATE_TIME_BUTTON, 5000)
        }
        async clickNextMonthButton(){
            await this.click(NEXT_MONTH_BUTTON);
        }
        async clickPreviousMonthButton(){
            await this.click(PREVIOUS_MONTH_BUTTON);
        }
        async selectTodayDate(){
            await this.click(TODAY_DAY_BUTTON);
        }

        async select13Day(){
            await this.click(DAY_13_OF_MONTH);
        }
        async clickSetButton(){
            await this.click(SET_DATE_TIME_BUTTON);
            await this.timeout(1500)
            let set = await this.findAll(SET_DATE_TIME_BUTTON);
            if(set.length > 0){
                await this.click(SET_DATE_TIME_BUTTON);
                await this.timeout(1000);
            }
        }
        async clickCancelButton(){
            await this.click(CANCEL_DATE_TIME_BUTTON);
        }
        async clickPMButton(){
            await this.click(PM_BUTTON)
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
           await this.timeout(500)
           let hour = this.getHoursNow();
          await hours.sendKeys(hour);
        }

        async getSelectedFullDateFromPicker(){
            let day = await this.getElementText(SELECTED_DAY_BUTTON);
            let monthYear = await this.getElementText(MONTH_YEAR_BUTTON);
            if( day.length === 1){
                day = "0"+day;
            }
            return day + ' ' + monthYear;
        }

        async updateTimeToXMinLater(minutesToAdd){
            await this.isDisplayed(HOUR_MINUTES_INPUTS,5000);
            await this.timeout(500);
            let today = new Date();
            let minutes = today.getMinutes();
            let updatedMinutes = minutes + parseInt(minutesToAdd);
            let minutesInput = await this.getElementFromAnArrayByIndex(HOUR_MINUTES_INPUTS,1);
            await minutesInput.clear();
            await minutesInput.sendKeys(updatedMinutes.toString())

        }

        async updateHourByOne(){
            await this.click(ADD_HOURS_BUTTON);
            await this.timeout(500);
            await this.clickSetButton();
        }


    }
    module.exports = DateTimePickerModal;
