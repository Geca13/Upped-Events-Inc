    const BasePage = require('../../../BasePage');
    const assert = require('assert');
    const { expect } = require('chai');
    const { Key, Keys} = require("selenium-webdriver");
    const CARDHOLDER_NAME = { xpath: "//input[@formcontrolname='name_on_card']" };
    const CARD_NUMBER = { xpath: "//input[@formcontrolname='card_no']" };
    const CVC = { xpath: "//input[@formcontrolname='cvc']" };
    const EXPIRATION = { xpath: "//input[@formcontrolname='expirationDate']" };
    const ADDRESS = { xpath: "//input[@formcontrolname='billingAddress']" };
    const COUNTRY = { xpath: "//select[@formcontrolname='country_id']" };
    const STATE = { xpath: "//select[@formcontrolname='state']" };
    const ZIP = { xpath: "//input[@formcontrolname='zip_code']" };
    const FIRST_NAME = { xpath: "//input[@formcontrolname='firstName']" };
    const LAST_NAME = { xpath: "//input[@formcontrolname='lastName']" };
    const BIRTH_DATE = { xpath: "//input[@formcontrolname='dateOfBirth']" };
    const GENDER = { xpath: "//select[@formcontrolname='gender']" };
    const EMAIL = { xpath: "//input[@formcontrolname='email']" };
    const ADDITIONAL_EMAIL = { xpath: "//input[@formcontrolname='additionalEmail']" };
    const ADD_BUTTON = { xpath: "//button[text()='Add']" };
    const PLACE_ORDER_BUTTON = { xpath: "//button[text()=' Place Order ']" };
    const ADDITIONAL_EMAIL_BADGE = { className:"primary-badge"} //list
    const CONFIRMATION_MODAL = { className: "confirmation-heading" };
    const SUCCESS_ON_CONFIRM_MODAL = { className: "success-message" }
    const MESSAGE_ON_CONFIRM_MODAL = { className: "main-message" }
    const EMAILS_ON_CONFIRM_MODAL = { className: "single-email" } //list
    const CHECKBOX = { xpath: "//input[@type='checkbox']" } //list
    const CARD_FORM = { id: "cardForm"}




    class BOReviewAndPay extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnReviewPage(){
            await this.isDisplayed(PLACE_ORDER_BUTTON, 5000);
        }

        async makePayment(base){
            await this.isOnReviewPage();
            await this.sentKeys(CARDHOLDER_NAME,base +" Geca");
            await this.sentKeys(CARD_NUMBER,"4111111111111111");
            await this.sentKeys(CVC,"900");
            await this.sentKeys(EXPIRATION,"August" + Key.TAB + "2025");
            await this.sentKeys(ADDRESS,"Main Street " + base);
            await this.sentKeys(ZIP,"90009");
            await this.fillUserData(base);
            await this.click(PLACE_ORDER_BUTTON);
            await this.isDisplayed(CONFIRMATION_MODAL,55000);
            await this.timeout(1000);
            await this.confirmElementsForPayment(base);
            await this.timeout(1000);
        }
        async confirmElementsForPayment(base){
            let header = await this.getElementText(SUCCESS_ON_CONFIRM_MODAL);
            assert.equal("Sent!", header);
            let message = await this.getElementText(MESSAGE_ON_CONFIRM_MODAL);
            assert.equal("A copy of the receipt and tickets have been sent to:", message);
            let customerEmail = await this.getElementTextFromAnArrayByIndex(EMAILS_ON_CONFIRM_MODAL,0);
            let additionalEmail = await this.getElementTextFromAnArrayByIndex(EMAILS_ON_CONFIRM_MODAL,1);
            assert.equal("1. " + base+'@'+base+".mk",  customerEmail);
            assert.equal("2. " + base+'ad@ad'+base+".mk",  additionalEmail);
        }
        async paymentWith100DiscountAndDisabledForm(base){
            await this.isOnReviewPage();
            expect(await this.elementIsEnabled(CARDHOLDER_NAME)).to.be.false;
            expect(await this.elementIsEnabled(CARD_NUMBER)).to.be.false;
            expect(await this.elementIsEnabled(CVC)).to.be.false;
            expect(await this.elementIsEnabled(EXPIRATION)).to.be.false;
            expect(await this.elementIsEnabled(ADDRESS)).to.be.false;
            expect(await this.elementIsEnabled(ZIP)).to.be.false;
            expect(await this.elementIsEnabled(COUNTRY)).to.be.false;
            expect(await this.elementIsEnabled(STATE)).to.be.false;
            await this.fillUserData(base);
            await this.click(PLACE_ORDER_BUTTON);
            await this.isDisplayed(CONFIRMATION_MODAL,55000);
            await this.timeout(1000);
            await this.confirmElementsForPayment(base);
            await this.timeout(1000);
        }

        async fillUserData(base) {
            await this.sentKeys(FIRST_NAME,base);
            await this.sentKeys(LAST_NAME,base);
            await this.sentKeys(BIRTH_DATE,"01012000");
            await this.sentKeys(EMAIL,base+'@'+base+".mk");
            await this.clickElementReturnedFromAnArray(CHECKBOX,4);
            await this.sentKeys(ADDITIONAL_EMAIL,base+'ad@ad'+base+".mk");
            await this.click(ADD_BUTTON);
            await this.timeout(1000);
            await this.isDisplayed(ADDITIONAL_EMAIL_BADGE,5000);
            await this.timeout(10000);

        }
    }
    module.exports = BOReviewAndPay;