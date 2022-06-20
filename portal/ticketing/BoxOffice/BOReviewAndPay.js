    const BasePage = require('../../../BasePage');
    const CARDHOLDER_NAME = { xpath: "//input[@formcontrolname='name_on_card']" };
    const CARD_NUMBER = { xpath: "//input[@formcontrolname='card_no']" };
    const CVC = { xpath: "//input[@formcontrolname='cvc']" };
    const EXPIRATION = { xpath: "//input[@formcontrolname='expirationDate']" };
    const APT = { xpath: "//input[@formcontrolname='aptNumber']" };
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




    class BOReviewAndPay extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnReviewPage(){
            await this.isDisplayed(CARDHOLDER_NAME, 5000);
        }

        async makePayment(){
            await this.isOnReviewPage();
            await this.sentKeys(CARDHOLDER_NAME,"Marjan Geca");
            await this.sentKeys(CARD_NUMBER,"4111111111111111");
            await this.sentKeys(CVC,"900");
            await this.sentKeys(EXPIRATION,"10102025");
            await this.sentKeys(APT,"22");
            await this.sentKeys(ADDRESS,"Main Street 6");
            await this.sentKeys(ZIP,"90009");
            await this.sentKeys(FIRST_NAME,"Marjan");
            await this.sentKeys(LAST_NAME,"Marjan");
            await this.sentKeys(BIRTH_DATE,"01012000");
            await this.sentKeys(EMAIL,"90009@90009.mk");
            await this.sentKeys(ADDITIONAL_EMAIL,"Marjan@Mar.mk");
            await this.click(ADD_BUTTON);
            await this.isDisplayed(ADDITIONAL_EMAIL_BADGE,5000);
            await this.click(PLACE_ORDER_BUTTON);
            await this.driver.sleep(30000);
        }
    }
    module.exports = BOReviewAndPay;