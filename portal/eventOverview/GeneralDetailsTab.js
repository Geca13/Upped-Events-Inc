    const BasePage = require('../../BasePage');
    const Alerts = require("../../Validations&Alerts/Alerts")
    const assert = require("assert");
    const EVENT_NAME_INPUT = { xpath: "//input[@formcontrolname='eventName']" };
    const EVENT_SHORTNAME_INPUT = { xpath: "//input[@formcontrolname='eventShortName']" };
    const OCCUR_SELECT = { xpath: "//button[@role='combobox']" };
    const OCCUR_ONCE = { xpath: "//*[text()='Once']"};
    const OCCUR_VARIOUS_TIMES = { xpath: "//*[text()='Various Times']"}
    const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventStartDate']" };
    const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventEndDate']" };
    const EVENT_ATTENDEES_INPUT = { xpath: "//input[@formcontrolname='eventAttendees']" };
    const EVENT_DESCRIPTION_INPUT = { xpath: "//textarea[@formcontrolname='eventDescription']" };
    const ENTERED_ADDRESS = { xpath: "//input[@formcontrolname='eventAddress']" };
    const PUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Publish']"}
    const UNPUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Unpublish']"}
    const EVENT_STATUS_DRAFT_LABEL = { className: "estatus"};
    const EVENT_STATUS_PUBLISHED_LABEL = { className: "published"}



    class GeneralDetailsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async publishButtonIsDisplayed(){
            await this.isDisplayed(PUBLISH_EVENT_BUTTON,15000);
        }
        async unpublishButtonIsDisplayed(){
            await this.isDisplayed(UNPUBLISH_EVENT_BUTTON,15000);
        }
        async clickPublishButton(){
            await this.timeout(500);
            await this.click(PUBLISH_EVENT_BUTTON)
        }
        async clickUnpublishButton(){
            await this.timeout(500);
            await this.click(UNPUBLISH_EVENT_BUTTON)
        }

        async verifyDetailsInGeneralDetailsPageAfterCreation(eventName,naMe,shortNAme,loCation,startDate,endDate,atTendees, desCription){
            await this.isDisplayed(EVENT_STATUS_LABEL,5000);
            let name = await this.getEnteredTextInTheInput(EVENT_NAME_INPUT);
            let shortName = await this.getEnteredTextInTheInput(EVENT_SHORTNAME_INPUT)
            let location = await this.getEnteredTextInTheInput(ENTERED_ADDRESS);
            let start = await this.formatDateTimeInputToIncludeComma(START_DATE_TIME_PICKER);
            let end =await this.formatDateTimeInputToIncludeComma(END_DATE_TIME_PICKER);
            let attendees = await this.numberWithCommas(EVENT_ATTENDEES_INPUT);
            let description = await this.getEnteredTextInTheInput(EVENT_DESCRIPTION_INPUT);
            //let occurs = await this.getEnteredTextInTheInput(OCCUR_SELECT);
            assert.equal(name,naMe);
            assert.equal(shortName,shortNAme)
            assert.equal(start,startDate);
            assert.equal(end,endDate);
            assert.equal(attendees,atTendees);
            assert.equal(description,desCription);
            assert.equal(location,loCation);
        }
        async publishEventAndAssertLabelBeforeAndAfter(){
            await this.isDisplayed(EVENT_STATUS_DRAFT_LABEL,5000);
            await this.timeout(500);
            let status = await this.getElementText(EVENT_STATUS_DRAFT_LABEL);
            assert.equal(status, "Draft");
            await this.moveToElement(PUBLISH_EVENT_BUTTON)
            await this.clickPublishButton();
            let alert = new Alerts(this.driver);
            await alert.successAlertIsDisplayed("Event published successfully");
            await this.timeout(500);
            let newStatus = await this.getElementText(EVENT_STATUS_DRAFT_LABEL);
            assert.equal(newStatus, "Published");

        }
        async unPublishEventAndAssertLabelBeforeAndAfter(){
            await this.isDisplayed(EVENT_STATUS_DRAFT_LABEL,5000);
            await this.timeout(500);
            let status = await this.getElementText(EVENT_STATUS_DRAFT_LABEL);
            assert.equal(status, "Published");
            await this.moveToElement(UNPUBLISH_EVENT_BUTTON)
            await this.clickUnpublishButton();
            let alert = new Alerts(this.driver);
            await alert.successAlertIsDisplayed("Event un-published successfully");
            await this.timeout(500);
            let newStatus = await this.getElementText(EVENT_STATUS_DRAFT_LABEL);
            assert.equal(newStatus, "Draft");

        }

    }
    module.exports = GeneralDetailsTab;