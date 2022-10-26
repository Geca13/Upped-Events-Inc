const BasePage = require('../../BasePage');
const assert = require('assert')
const PERSONAL_DETAILS_BUTTON = { xpath: "//*[text()=' Personal Details ']"}
const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
const SET_PASSWORD_INPUT = { xpath: "//input[@formcontrolname='password']" };
const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='firstName']" };
const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='lastName']" };
const ALREADY_HAVE_ACCOUNT_LINK = { className: 'already-account-link' }
const CONTINUE_OR_SUBMIT_BUTTON = { xpath: "//button[@type='submit']"}
const BACK_BUTTON = { xpath: "//*[text()=' Back ']"}
const CONTINUE_BUTTON = { xpath: "//*[text()='Continue']"}
const SUBMIT_BUTTON = { xpath: "//*[text()='Submit']"}
const ORGANIZATION_NAME_INPUT = { xpath: "//input[@formcontrolname='orgName']" };
const ORGANIZATION_PHONE_INPUT = { xpath: "//input[@formcontrolname='orgMobile']" };
const LOCATION_INPUT = { xpath: "//input[@formcontrolname='orgLocation']" };


class SetupNewVendorPage extends BasePage{
    constructor(driver) {
        super(driver);
    }

    async getNewlyOpenedTab(originalWindow){
        await this.switchToNewlyOpenedWindowOrTab(originalWindow);
    }

    async verifyEnteredData(email, firstName, lastName){
        await this.isDisplayed(SET_PASSWORD_INPUT,2508000);
        assert.equal(email, await this.getEmailInputValue());
        assert.equal(lastName, await this.getLastNameInputValue());
        assert.equal(firstName, await this.getFirstNameInputValue());
    }

    async completeRegistration(base){
        await this.sentKeys(SET_PASSWORD_INPUT,base + 'P@ss');
        await this.click(CONTINUE_BUTTON);
        await this.isDisplayed(ORGANIZATION_NAME_INPUT,10000);
        await this.sentKeys(ORGANIZATION_NAME_INPUT, 'Geca'+ base);
        await this.sentKeys(ORGANIZATION_PHONE_INPUT, base + '1234');
        await this.sentKeys(LOCATION_INPUT, 'Minneapolis, Minnesota');
        await this.click(SUBMIT_BUTTON);
        await this.timeout(10000)
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



}
module.exports = SetupNewVendorPage;