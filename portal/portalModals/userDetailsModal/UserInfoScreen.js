    const BasePage = require('../../../BasePage');
    const assert = require("assert");
    const ATTENDEE_FULL_NAME = { className:"attende_name" }
    const EMAIL_PHONE_ZIP_DATA = { xpath: "//div[contains(@class, 'mt-3')]//label[contains(@class, 'attende_font-weight-bold')]" } //list
    const EMAIL_PHONE_ZIP_LABELS = { xpath: "//div[contains(@class, 'mt-3')]//label[contains(@class, 'attende_font-weight-light')]" } //list
    const GENDER_DATA = { xpath: "//div[contains(@class, 'attende_gender_description')]//label[contains(@class, 'attende_font-weight-bold')]" }
    const GENDER_LABEL = { xpath: "//div[contains(@class, 'attende_gender_description')]//label[contains(@class, 'attende_font-weight-light')]" }
    const AGE_DATA = { xpath: "//div[contains(@class, 'attende_age_description')]//label[contains(@class, 'attende_font-weight-bold')]" }
    const AGE_LABEL = { xpath: "//div[contains(@class, 'attende_age_description')]//label[contains(@class, 'attende_font-weight-light')]" }
    const TOTAL_SPENT_AND_EVENTS_ATTENDED_DATA = { xpath: "//div[contains(@class, 'total_spent')]//span[@class = 'attende_font-weight-bold']" }// LIST
    const TOTAL_SPENT_AND_EVENTS_ATTENDED_LABEL = { xpath: "//div[contains(@class, 'total_spent')]//span[contains(@class, 'attende_font-weight-bold-14')]" } //list

    class UserInfoScreen extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnUserInfoScreen(){
            await this.isDisplayed(ATTENDEE_FULL_NAME, 5000, "userInfoScreen");
        }
        async assertUserInfoLabelsAndEmailData(customerEmail){
            let genderLabel = await this.getElementText(GENDER_LABEL);
            assert.equal(genderLabel ,"Gender");
            let ageLabel = await this.getElementText(AGE_LABEL);
            assert.equal(ageLabel ,"Age");
            let emailLabel = await this.getElementTextFromAnArrayByIndex(EMAIL_PHONE_ZIP_LABELS,0);
            assert.equal(emailLabel ,"Email");
            let phoneLabel = await this.getElementTextFromAnArrayByIndex(EMAIL_PHONE_ZIP_LABELS,1);
            assert.equal(phoneLabel ,"Phone");
            let zipLabel = await this.getElementTextFromAnArrayByIndex(EMAIL_PHONE_ZIP_LABELS,2);
            assert.equal(zipLabel ,"Zip Code");
            let totalLabel = await this.getElementTextFromAnArrayByIndex(TOTAL_SPENT_AND_EVENTS_ATTENDED_LABEL,0);
            assert.equal(totalLabel ,"Total Spent");
            let eventsAttendedLabel = await this.getElementTextFromAnArrayByIndex(TOTAL_SPENT_AND_EVENTS_ATTENDED_LABEL,1);
            assert.equal(eventsAttendedLabel ,"Total Events Attended");
            let emailData = await this.getElementTextFromAnArrayByIndex(EMAIL_PHONE_ZIP_DATA,0);
            assert.equal(emailData ,customerEmail);

        }

    }
    module.exports = UserInfoScreen;