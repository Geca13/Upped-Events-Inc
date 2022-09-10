    const BasePage = require('../../BasePage');
    const EVENT_TITLE = { xpath: "//div[@class='event-title']" };
    const EVENT_DESCRIPTION = { xpath: "//app-event-details//p[contains(@class, 'event-description')]" };
    const DETAILS_TAB = { xpath: "//*[text()='Event Description']"};

    class DetailsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isOnDetailsTab(){
            await this.isDisplayed(EVENT_DESCRIPTION,5000, "eventDescription");
            await this.timeout(500);
        }

        async getEventDescription(){
            await this.isOnDetailsTab();
            let description = await this.getElementText(EVENT_DESCRIPTION);
            return description;
        }
        async getEventFullName(){
            await this.isOnDetailsTab();
            let eventName = await this.getElementText(EVENT_TITLE);
            return eventName;
        }

    }

    module.exports = DetailsTab;