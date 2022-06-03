    const BasePage = require('../../BasePage');
    const PERSONAL_DETAILS_BUTTON = { xpath: "//*[text()=' Personal Details ']"}
    const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
    const SET_PASSWORD_INPUT = { xpath: "//input[@formcontrolname='password']" };
    const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='firstName']" };
    const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='lastName']" };
    const ALREADY_HAVE_ACCOUNT_LINK = { className: 'already-account-link' }
    const CONTINUE_OR_SUBMIT_BUTTON = { xpath: "//button[@type='submit']"}
    const BACK_BUTTON = { xpath: "//*[text()=' Back ']"}
    const ORGANIZATION_NAME_INPUT = { xpath: "//input[@formcontrolname='orgName']" };
    const ORGANIZATION_PHONE_INPUT = { xpath: "//input[@formcontrolname='orgMobile']" };
    const LOCATION_INPUT = { xpath: "//input[@formcontrolname='orgLocation']" };


    class SetupNewVendorPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async personalDetailsButtonIsDisplayed(){
            await this.isDisplayed(PERSONAL_DETAILS_BUTTON,5000);
        }

        async getFirstNameInputValue(){
            return await this.getEnteredTextInTheInput(FIRST_NAME_INPUT);
        }
        async getLastNameInputValue(){
            return await this.getEnteredTextInTheInput(LAST_NAME_INPUT);
        }
        async getEmailInputValue(){
            return await this.getEnteredTextInTheInput(EMAIL_INPUT);
        }
        async isOnSetupNewVendorPage(){
            await this.personalDetailsButtonIsDisplayed();
        }
    }
    module.exports = SetupNewVendorPage;