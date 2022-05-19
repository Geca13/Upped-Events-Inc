    const BasePage = require('../../BasePage');
    const { By } = require('selenium-webdriver');
    const EVENTS_TABLE = { xpath: "//dashboard-events-page" }
    const EVENTS_NAMES_SPANS = { xpath: "//td/a/span"}



    class MyEventsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventsTableIsDisplayed(){
            await this.isDisplayed(EVENTS_TABLE,5000);
        }

        async createdEventIsInTheTable(eventName){
            await this.isDisplayed(By.xpath("//*[text()='"+eventName+"']"),5000);
        }
        async clickTheNewCreatedEventInTheTable(eventName){
            await this.click(By.xpath("//*[text()='"+eventName+"']"));
        }
        async clickEventInTableByName(){
            await this.clickParent(EVENTS_NAMES_SPANS);
        }


    }
    module.exports = MyEventsTab;