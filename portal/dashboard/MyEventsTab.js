    const BasePage = require('../../BasePage');
    const { By } = require('selenium-webdriver');
    const assert = require('assert')
    const Alerts = require('../../Validations&Alerts/Alerts');
    const CreateEventModal = require("../portalModals/CreateEventModal")
    const EVENTS_TABLE = { xpath: "//dashboard-events-page" }
    //const EVENTS_NAMES_SPANS = { xpath: "//td/a/span"}
    const EVENTS_NAMES_SPANS = { xpath: "//td[contains(@class , 'column-eventname')]//a[contains(@class , 'table-ticket-name')]//span" };
    const EVENTS_ADDRESSES = { xpath: "//td[contains(@class , 'column-eventaddress ')]//span" }
    const ADDRESS_TOOLTIP = { xpath: "//div[@class='tooltip-inner']//p"}
    const EVENTS_START_DATE_TIME = { xpath: "//td[contains(@class , 'column-eventstartdate')]" }
    const EVENTS_END_DATE_TIME = { xpath: "//td[contains(@class , 'column-eventenddate')]" }
    const EVENTS_SIZES = { xpath: "//td[contains(@class , 'column-eventsize ')]//span" }



    class MyEventsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }


        async eventsTableIsDisplayed(){
            await this.isDisplayed(EVENTS_TABLE,5000);
        }

        async successBannerIsDisplayed(){
            let success = new Alerts(this.driver);
            await success.successAlertIsDisplayed()
        }

        async createdEventIsInTheTable(eventName){
            await this.isDisplayed(By.xpath("//td[contains(@class, 'column-eventname')]//a[contains(@class, 'table-ticket-name')]//span[text()='"+eventName+"']"),5000);
        }
        async clickTheNewCreatedEventInTheTable(eventName){
            await this.click(By.xpath("//td[contains(@class, 'column-eventname')]//a[contains(@class, 'table-ticket-name')]//span[text()='"+eventName+"']"));
            await this.timeout(2000);
        }
        async clickEventInTableByName(){
            await this.clickParent(EVENTS_NAMES_SPANS);
        }

        async assertCorrectValuesAfterCreation(text,eventName,address,startDate,endDate,attendees){
            await this.isDisplayed(EVENTS_NAMES_SPANS,5000);
            await this.timeout(500)

            let i = await this.returnIndexWhenTextIsKnown(EVENTS_NAMES_SPANS, text)
            console.log(i)
            await this.timeout(2000)
            let savedName = await this.getElementTextFromAnArrayByIndex(EVENTS_NAMES_SPANS, i);
            await this.moveToElementFromArrayByIndex(EVENTS_ADDRESSES,i);
            await this.isDisplayed(ADDRESS_TOOLTIP,5000);
            await this.timeout(500)
            let savedLocation = await this.getElementText(ADDRESS_TOOLTIP)
            let savedStartDateTime = await this.getElementTextFromAnArrayByIndex(EVENTS_START_DATE_TIME, i);
            let savedEndDateTime = await this.getElementTextFromAnArrayByIndex(EVENTS_END_DATE_TIME, i);
            let savedEventSize = await this.getElementTextFromAnArrayByIndex(EVENTS_SIZES, i);
            assert.equal(savedName,eventName);
            assert.equal(savedLocation,address)
            assert.equal(savedStartDateTime,startDate);
            assert.equal(savedEndDateTime,endDate);
            assert.equal(savedEventSize,attendees);
        }


    }
    module.exports = MyEventsTab;