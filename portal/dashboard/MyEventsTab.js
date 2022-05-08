    const BasePage = require('../../BasePage');
    const { By } = require('selenium-webdriver');
    const EVENTS_TABLE = { xpath: "//dashboard-events-page" }



    class MyEventsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventsTableIsDisplayed(){
            await this.isDisplayed(EVENTS_TABLE,5000);
        }
        async createdEventIsInTheTable(eventName){
            await this.driver.findElement(By.xpath("//*[text()='"+eventName+"']"))
        }

    }
    module.exports = MyEventsTab;