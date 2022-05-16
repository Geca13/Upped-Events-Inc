    const BasePage = require('../../BasePage');
    const CLOSE_MODAL_BUTTON = { className: 'close-btn' };
    const SIGN_UP_WITH_FACEBOOK_BUTTON = { xpath: "//*[text()='Sign Up with Facebook']"}
    const SIGN_UP_WITH_GOOGLE_BUTTON = { xpath: "//*[text()='Sign Up with Google']"}
    const SIGN_UP_WITH_EMAIL_BUTTON = { xpath: "//*[text()='Sign Up with Email']"}
    const SIGN_IN_LINK = { xpath: "//*[text()='Sign In']"}
    const CREATE_AN_ACCOUNT_MODAL_TITLE = { xpath: "//*[text()='Create an Account']"}
    const FIRST_NAME_INPUT = { id: 'firstName'}
    const LAST_NAME_INPUT = { id: 'lastName'}
    const EMAIL_INPUT = { id: 'email'}
    const GENDER_SELECT = { tagName: 'select'}
    const GENDER_SELECT_OPTIONS = { tagName: 'option'} //list
    const DOB_INPUT = { id: 'dob'}
    const PASSWORD_INPUT = { id: 'password'}
    const VERIFY_PASSWORD_INPUT = { name:'confirmPassword'}
    const CREATE_ACCOUNT_BUTTON = { xpath: "//*[text()='Create Account']"}

    class CreateAccountModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async firstCreateAccountModalIsDisplayed(){
            await this.isDisplayed(SIGN_UP_WITH_EMAIL_BUTTON,5000)
        }
        async secondCreateAccountModalIsDisplayed(){
            await this.isDisplayed(CREATE_AN_ACCOUNT_MODAL_TITLE,5000)
        }
        async clickSignUpWithEmailButton(){
            await this.click(SIGN_UP_WITH_EMAIL_BUTTON)
        }
        async createSixNumbersString(){
           return Math.floor(100000 + Math.random() * 900000);
        }

        async fillRandomButValidDataAndCreateAccount(name,lastName,email,password){

            await this.sentKeys(FIRST_NAME_INPUT, name);
            await this.sentKeys(LAST_NAME_INPUT, lastName);
            await this.sentKeys(EMAIL_INPUT, email);
            await this.click(GENDER_SELECT);
            await this.driver.sleep(500);
            await this.clickElementReturnedFromAnArray(GENDER_SELECT_OPTIONS,0);
            await this.sentKeys(DOB_INPUT, '11112000');
            await this.sentKeys(PASSWORD_INPUT, password);
            await this.sentKeys(VERIFY_PASSWORD_INPUT, password);
            await this.click(CREATE_ACCOUNT_BUTTON);
            await this.driver.sleep(2000);
        }


    }
    module.exports = CreateAccountModal;