    const BasePage = require('../../BasePage');
    const Alerts = require("../../Validations&Alerts/Alerts");
    const assert = require("assert");
    const {Key} = require("selenium-webdriver");
    const SetImageModal = require('../portalModals/SetImageModal');
    const EVENT_NAME_INPUT = { xpath: "//div[@class='col-md-12']//input[@formcontrolname='eventName']" };
    const EVENT_SHORTNAME_INPUT = { xpath: "//input[@formcontrolname='eventShortName']" };
    const OCCUR_SELECT = { xpath: "//button[@role='combobox']" };
    const OCCUR_ONCE = { xpath: "//*[text()='Once']"};
    const OCCUR_VARIOUS_TIMES = { xpath: "//*[text()='Various Times']"}
    const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventStartDate']" };
    const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='eventEndDate']" };
    const EVENT_ATTENDEES_INPUT = { xpath: "//input[@formcontrolname='eventAttendees']" };
    const EVENT_DESCRIPTION_INPUT = { xpath: "//textarea[@formcontrolname='eventDescription']" };
    const ENTERED_ADDRESS = { xpath: "//input[@placeholder='Search Nearest Location']" };
    const PUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Publish']"}
    const UNPUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Unpublish']"}
    const EVENT_STATUS_LABEL = { className: "estatus"};
    const EVENT_STATUS_PUBLISHED_LABEL = { className: "published"}
    const EVENT_BANNER_INPUT = { xpath: "//input[@type='file']" }
    const PREVIEW_IMAGE_WRAPPER = { className: 'preview-img' };
    const PREVIEW_IMAGE = { xpath: "//div[@class='preview-img']//figure//img" };
    const DELETE_BANNER_IMAGE_BUTTON = { className: "icon-trash" }
    const SAVE_BUTTON = { xpath: "//button[text()='Save']"};



    class GeneralDetailsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async openEventGeneralDetailsPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/details")
            await this.publishButtonIsDisplayed();
        }


        async publishButtonIsDisplayed(){
            await this.isDisplayed(PUBLISH_EVENT_BUTTON,15000, "publishEvent");
        }
        async unpublishButtonIsDisplayed(){
            await this.isDisplayed(UNPUBLISH_EVENT_BUTTON,15000, "unpublishEvent");
        }
        async clickPublishButton(){
            await this.timeout(500);
            await this.click(PUBLISH_EVENT_BUTTON)
        }
        async clickUnpublishButton(){
            await this.timeout(500);
            await this.click(UNPUBLISH_EVENT_BUTTON)
        }

        async verifyDetailsInGeneralDetailsPageAfterCreation(shortName,naMe,loCation,startDate,endDate,atTendees, desCription){
            //await this.isDisplayed(EVENT_STATUS_LABEL,5000);
            //await this.isDisplayed(EVENT_NAME_INPUT,5000);
            await this.timeout(2500)
            await this.isDisplayed(EVENT_SHORTNAME_INPUT,5000);
            await this.clearInputField(EVENT_SHORTNAME_INPUT);
            await this.sentKeys(EVENT_SHORTNAME_INPUT,shortName);
            await this.scrollToView(SAVE_BUTTON)
            await this.moveToElement(SAVE_BUTTON)
            await this.click(SAVE_BUTTON);
            await this.timeout(2000);
            await this.scrollToView(EVENT_SHORTNAME_INPUT)
            let name = await this.getEnteredTextInTheInput(EVENT_NAME_INPUT);
            let shortname = await this.getEnteredTextInTheInput(EVENT_SHORTNAME_INPUT)
            let location = await this.getEnteredTextInTheInput(ENTERED_ADDRESS);
            let start = await this.getEnteredTextInTheInput(START_DATE_TIME_PICKER);
            let end =await this.getEnteredTextInTheInput(END_DATE_TIME_PICKER);
            let attendees = await this.getEnteredTextInTheInput(EVENT_ATTENDEES_INPUT);
            let description = await this.getEnteredTextInTheInput(EVENT_DESCRIPTION_INPUT);
            //let occurs = await this.getEnteredTextInTheInput(OCCUR_SELECT);
            //assert.equal(name,naMe);
            assert.equal(shortname,shortName)
            assert.equal(start,startDate);
            assert.equal(end,endDate);
            assert.equal(attendees,atTendees);
            assert.equal(description,desCription);
            //assert.equal(location,loCation);
        }
        async publishEventAndAssertLabelBeforeAndAfter(){
            await this.isDisplayed(EVENT_STATUS_LABEL,5000, "eventStatus");
            await this.timeout(500);
            let status = await this.getElementText(EVENT_STATUS_LABEL);
            assert.equal(status, "Draft");
            await this.moveToElement(PUBLISH_EVENT_BUTTON)
            await this.clickPublishButton();
            let alert = new Alerts(this.driver);
            await alert.successAlertIsDisplayed("Event published successfully");
            await this.timeout(500);
            let newStatus = await this.getElementText(EVENT_STATUS_LABEL);
            assert.equal(newStatus, "Published");

        }
        async unPublishEventAndAssertLabelBeforeAndAfter(){
            await this.isDisplayed(EVENT_STATUS_LABEL,5000, "eventStatus");
            await this.timeout(500);
            let status = await this.getElementText(EVENT_STATUS_LABEL);
            assert.equal(status, "Published");
            await this.moveToElement(UNPUBLISH_EVENT_BUTTON)
            await this.clickUnpublishButton();
            let alert = new Alerts(this.driver);
            await alert.successAlertIsDisplayed("Event un-published successfully");
            await this.timeout(500);
            let newStatus = await this.getElementText(EVENT_STATUS_LABEL);
            assert.equal(newStatus, "Draft");

        }

        async getEventDescription(){
            await this.isDisplayed(EVENT_DESCRIPTION_INPUT,5000, "eventDescription");
            await this.timeout(500);
            let description = await this.getEnteredTextInTheInput(EVENT_DESCRIPTION_INPUT);
            return description;
        }
        async getCityAndState(){
            let firstSeparation = []
            let abbreviationSeparation = []
            await this.isDisplayed(ENTERED_ADDRESS,5000, "enteredAddress");
            await this.timeout(500);
            let location = await this.getEnteredTextInTheInput(ENTERED_ADDRESS);
            firstSeparation = await location.split(', ')
            abbreviationSeparation = await firstSeparation[2].split(' ');
            let state = await this.returnStateFromAbbreviation(abbreviationSeparation[0]);
            let cityState = firstSeparation[1] + ', ' + state;
            return cityState;
        }

        async getEmbedScriptVariable(){
            await this.isDisplayed(EVENT_DESCRIPTION_INPUT, 5000, "eventDescription");
            await this.clearInputField(EVENT_DESCRIPTION_INPUT);
            await this.timeout(1000);
            await this.sentKeys(EVENT_DESCRIPTION_INPUT, Key.CONTROL + "v" );
            await this.timeout(1000);
            let script = await this.getEventDescription();
            await this.timeout(1000);
            return script;

        }

        async setBannerImageInThePortalAndAssertElements(){
            await this.scrollToView(EVENT_BANNER_INPUT);
            await this.moveToElement(EVENT_BANNER_INPUT);
            await this.sentKeys(EVENT_BANNER_INPUT,"D:\\Upped\\static\\image.jpg");
            let cropper = new SetImageModal(this.driver);
            await cropper.setImageModalIsDisplayed();
            await cropper.clickSetButton();
            await this.isDisplayed(PREVIEW_IMAGE_WRAPPER, 5000, "previewImage");
            let alerts = new Alerts(this.driver);
            await alerts.alertInfoMessageIsDisplayed("Files uploaded: (1)");
            await this.click(SAVE_BUTTON);
            await alerts.successAlertIsDisplayed("Event saved successfully!")
            await this.timeout(1000);
        }

        async removeBannerImageAndAssertPreviewAndAlertAreNotDisplayed(){
            await this.isDisplayed(PREVIEW_IMAGE_WRAPPER, 5000);
            await this.moveToElement(PREVIEW_IMAGE_WRAPPER);
            await this.isDisplayed(DELETE_BANNER_IMAGE_BUTTON, 5000);
            await this.timeout(500);
            await this.click(DELETE_BANNER_IMAGE_BUTTON);
            await this.timeout(500);
            await this.acceptAlert();
            await this.timeout(1000);
            await this.click(SAVE_BUTTON);
            await this.timeout(1000);
            let preview = await this.returnElementsCount(PREVIEW_IMAGE_WRAPPER);
            assert.equal(preview, 0);
            let alerts = new Alerts(this.driver);
            await alerts.assertInfoMessageIsNotDisplayed();
        }
        async getBannerImageSrc(){
            let src = await this.returnImgSrcAttribute(PREVIEW_IMAGE);
            return src;
        }
    }
    module.exports = GeneralDetailsTab;