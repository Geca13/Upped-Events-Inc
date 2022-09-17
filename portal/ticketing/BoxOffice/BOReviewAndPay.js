    const BasePage = require('../../../BasePage');
    const assert = require('assert');
    require("dotenv").config();
    const { expect } = require('chai');
    const { Key, Keys} = require("selenium-webdriver");
    const PAYMENT_INFO_HEADER = {className: "payment-info"}
    const INPUT_LABELS = { xpath: "//label[@class='form-label']" }
    const PAYMENT_TYPES_LABELS = { xpath: "//div[@class='payment-types']//span" }
    const ATTENDEE_INFO_LABELS = { xpath: "//label[contains(@class, 'data-fields')]" }
    const ATTENDEE_EMAIL_LABELS = { xpath: "//span[@class='checkbox-message']" }
    const DEMOGRAPHIC_SECTION_HEADERS = { xpath: "//div[@class='demographic-heading']" }
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
    const CARD_FORM = { id: "cardForm" }
    const OPEN_ORDER_DETAILS = { xpath: "//i[contains(@class, 'icon-angle-right')]" }
    const ORDER_DETAILS_BOX = { id: "Orderdetail" };
    const ORDER_DETAILS_HEADER = { id: "orderheading" };
    const ORDER_DETAILS_SUBHEADER = { xpath: "//h3[@class='order-subheading']" };
    const ORDER_DETAILS_SECTION_TITLES = { xpath: "//div[contains(@class, 'title')]" };
    const TICKETS_NAME_PARENT = {  className:"justify-content-between"} //list
    const SUBTOTAL_HEADER = { xpath: "//div[@id='orderheading']" }
    const SUBTOTAL = { className: "sub-total"};
    const TOTAL_DUE = { className: "total-due"};
    const TOTAL = { className: "total-due-amount"};
    const PRICING_ADDING_NAMES = { xpath: "//div[contains(@class, 'mt-0')]" }
    const VALUES = { className: "w-7" };




    class BOReviewAndPay extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnReviewPage(){
            await this.isDisplayed(PLACE_ORDER_BUTTON, 5000);
        }

        async assertElementsOnReviewAndPaymentPageWhenOneTicketSelected(ticketName){
            await this.isOnReviewPage();
            let cCardLabel = await this.getElementTextFromAnArrayByIndex(PAYMENT_TYPES_LABELS, 0);
            let cashLabel = await this.getElementTextFromAnArrayByIndex(PAYMENT_TYPES_LABELS, 1);
            let checkLabel = await this.getElementTextFromAnArrayByIndex(PAYMENT_TYPES_LABELS, 2);
            let holderLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 0);
            let cardLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 1);
            let ccvLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 2);
            let dateLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 3);
            let zipLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 4);
            let addressLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 5);
            let countryLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 6);
            let stateLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 7);
            let nameLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 8);
            let surnameLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 9);
            let attendeeBirthLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_INFO_LABELS, 0);
            let attendeeGenderLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_INFO_LABELS, 1);
            let attendeeEmailLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_INFO_LABELS, 2);
            let additionalEmailsLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_INFO_LABELS, 3);
            let attendeeNoAccountLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_EMAIL_LABELS, 0);
            let sendCopyLabel = await this.getElementTextFromAnArrayByIndex(ATTENDEE_EMAIL_LABELS, 1);
            let demographicHeader  = await this.getElementTextFromAnArrayByIndex(DEMOGRAPHIC_SECTION_HEADERS, 0);
            let emailsHeader = await this.getElementTextFromAnArrayByIndex(DEMOGRAPHIC_SECTION_HEADERS, 1);
            let pickupAtHeader = await this.getElementTextFromAnArrayByIndex(DEMOGRAPHIC_SECTION_HEADERS, 2);
            await this.click(OPEN_ORDER_DETAILS);
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
            await this.isDisplayed(CONFIRMATION_MODAL,60000);
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
            await this.timeout(1000);

        }

        async makePaymentOnStaging(base){
            await this.isOnReviewPage();
            await this.sentKeys(CARDHOLDER_NAME,process.env.CARD_NAME);
            await this.sentKeys(CARD_NUMBER,process.env.CARD_NUMBER);
            await this.sentKeys(CVC,process.env.CVC);
            await this.sentKeys(EXPIRATION,"March" + Key.TAB + "2025");
            await this.sentKeys(ADDRESS,process.env.ADDRESS);
            await this.sentKeys(ZIP,"18940");
            await this.fillUserDataOnStaging(base);
            await this.click(PLACE_ORDER_BUTTON);
            await this.isDisplayed(CONFIRMATION_MODAL,60000, "confirmationModal");
            await this.timeout(1000);
            await this.confirmElementsForPaymentOnStaging();
            await this.timeout(1000);
        }

        async fillUserDataOnStaging(base) {
            await this.sentKeys(FIRST_NAME,base);
            await this.sentKeys(LAST_NAME,base);
            await this.sentKeys(BIRTH_DATE,"01012000");
            await this.sentKeys(EMAIL,process.env.AOL_CUSTOMER_EMAIL);
            await this.clickElementReturnedFromAnArray(CHECKBOX,4);
            await this.sentKeys(ADDITIONAL_EMAIL,process.env.AOL_VENDOR_EMAIL);
            await this.click(ADD_BUTTON);
            await this.timeout(1000);
            await this.isDisplayed(ADDITIONAL_EMAIL_BADGE,5000);
            await this.timeout(10000);

        }
        async confirmElementsForPaymentOnStaging(){
            let header = await this.getElementText(SUCCESS_ON_CONFIRM_MODAL);
            assert.equal("Sent!", header);
            let message = await this.getElementText(MESSAGE_ON_CONFIRM_MODAL);
            assert.equal("A copy of the receipt and tickets have been sent to:", message);
            let customerEmail = await this.getElementTextFromAnArrayByIndex(EMAILS_ON_CONFIRM_MODAL,0);
            let additionalEmail = await this.getElementTextFromAnArrayByIndex(EMAILS_ON_CONFIRM_MODAL,1);
            assert.equal(customerEmail, process.env.AOL_CUSTOMER_EMAIL);
            assert.equal(additionalEmail, process.env.AOL_VENDOR_EMAIL);
        }
    }
    module.exports = BOReviewAndPay;