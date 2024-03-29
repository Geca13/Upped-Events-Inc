    const BasePage = require('../../BasePage');
    const Validations = require('../../Validations&Alerts/MicrositesValidations');
    const Alerts = require('../../Validations&Alerts/Alerts');
    const assert = require('assert')
    const CLOSE_MODAL_BUTTON = { className: 'close-btn' };
    const SIGN_UP_BUTTONS = { xpath: "//button//span[contains(@class, 'justify-content-center')]"}
    const SIGN_UP_WITH_FACEBOOK_BUTTON = { xpath: "//*[text()='Sign Up with Facebook']"}
    const SIGN_UP_WITH_GOOGLE_BUTTON = { xpath: "//*[text()='Sign Up with Google']"}
    const SIGN_UP_WITH_EMAIL_BUTTON = { xpath: "//*[text()='Sign Up with Email']"}
    const SIGN_IN_LINK = { xpath: "//div[contains(@class, 'text-center')]//a[contains(@class, 'cursor-pointer')]"}
    const CREATE_AN_ACCOUNT_MODAL_TITLE = { xpath: "//div[contains(@class, 'login-container')]//h3[contains(@class, 'title')]"}
    const CREATE_AN_ACCOUNT_MODAL_DESCRIPTION = { xpath: "//div[contains(@class, 'login-container')]//p[contains(@class, 'title-subtext')]"}
    const FIRST_NAME_INPUT = { id: 'firstName'}
    const LAST_NAME_INPUT = { id: 'lastName'}
    const EMAIL_INPUT = { id: 'email'}
    const GENDER_SELECT = { tagName: 'select'}
    const GENDER_SELECT_OPTIONS = { tagName: 'option'} //list
    const DOB_INPUT = { id: 'dob'}
    const PASSWORD_INPUT = { id: 'password'}
    const VERIFY_PASSWORD_INPUT = { name:'confirmPassword'}
    const CREATE_ACCOUNT_BUTTON = { xpath: "//*[text()='Create Account']"}
    const EMAIL_IS_INVALID_MESSAGE = {  xpath: "//*[text()=' Email is invalid ']" }


    class CreateAccountModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async firstCreateAccountModalIsDisplayed(){
            await this.isDisplayed(SIGN_UP_WITH_EMAIL_BUTTON,5000);
            let header = await this.getElementText(CREATE_AN_ACCOUNT_MODAL_TITLE);
            let description = await this.getElementText(CREATE_AN_ACCOUNT_MODAL_DESCRIPTION);
            let google = await this.getElementTextFromAnArrayByIndex(SIGN_UP_BUTTONS, 0);
            let facebook = await this.getElementTextFromAnArrayByIndex(SIGN_UP_BUTTONS, 1);
            let email = await this.getElementTextFromAnArrayByIndex(SIGN_UP_BUTTONS, 2);
            let link = await this.getElementText(SIGN_IN_LINK);
            assert.equal(header,"Create an Account");
            assert.equal(description,"It only takes about a minute with Google or FaceBook!");
            assert.equal(google,"Sign Up with Google");
            assert.equal(facebook,"Sign Up with Facebook");
            assert.equal(email,"Sign Up with Email");
            assert.equal(link,"Sign In");

        }
        async secondCreateAccountModalIsDisplayed(){
            await this.isDisplayed(FIRST_NAME_INPUT,5000);
            await this.timeout(500);
        }

        async clickSignUpWithEmailButton(){
            await this.click(SIGN_UP_WITH_EMAIL_BUTTON);
            await this.timeout(500);
        }
        async createSixNumbersString(){
           return Math.floor(100000 + Math.random() * 900000);
        }

        async fillRandomButValidDataAndCreateAccount(name,lastName,email,password){

            await this.sentKeys(FIRST_NAME_INPUT, name);
            await this.sentKeys(LAST_NAME_INPUT, lastName);
            await this.sentKeys(EMAIL_INPUT, email);
            await this.click(GENDER_SELECT);
            await this.timeout(500)
            await this.clickElementReturnedFromAnArray(GENDER_SELECT_OPTIONS,0);
            await this.sentKeys(DOB_INPUT, '11112000');
            await this.sentKeys(PASSWORD_INPUT, password);
            await this.sentKeys(VERIFY_PASSWORD_INPUT, password);
            await this.click(CREATE_ACCOUNT_BUTTON);
            await this.timeout(1500);
            let alert = new Alerts(this.driver);
            await alert.successAlertIsDisplayed("Thank you for creating your account. A verification email has been sent to your email address. Please check your spam folder!")

        }

        async allValidationsAreShown(){
            let validations = new Validations(this.driver);
            await this.click(CREATE_ACCOUNT_BUTTON);

            await validations.allValidationsAreDisplayed();
            await validations.assertValidationMessagesTexts();
            let count7 = await validations.validationMessagesCount();
            assert.equal(count7,7);
            await this.sentKeys(FIRST_NAME_INPUT, "Mark");
            await validations.allValidationsAreDisplayedExceptFirstName();
            let count6 = await validations.validationMessagesCount();
            assert.equal(count6,6);
            await this.sentKeys(LAST_NAME_INPUT, "Blitzman");
            await validations.allValidationsAreDisplayedExceptFirstNameAndLastName();
            let count5 = await validations.validationMessagesCount();
            assert.equal(count5,5);
            await this.sentKeys(EMAIL_INPUT, "Filip");
            await validations.emailInvalidValidationIsDisplayed();
            let count5x2 = await validations.validationMessagesCount();
            assert.equal(count5x2,5);
            await this.sentKeys(EMAIL_INPUT, "@upped.com");
            await validations.allValidationsAreDisplayedExceptFirstLastNameAndEmail();
            let count4 = await validations.validationMessagesCount();
            assert.equal(count4,4);
            await this.click(GENDER_SELECT);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(GENDER_SELECT_OPTIONS,0);
            await validations.allValidationsAreNotDisplayedExceptDobPasswordAndVerifyPassword();
            let count3 = await validations.validationMessagesCount();
            assert.equal(count3,3);
            await this.sentKeys(DOB_INPUT, '11112000');
            await validations.allValidationsAreNotDisplayedExceptPasswordAndVerifyPassword();
            let count2 = await validations.validationMessagesCount();
            assert.equal(count2,2);
            await this.sentKeys(PASSWORD_INPUT, 'Pass');
            await validations.passwordInputLengthValidationIsDisplayed();
            await validations.passwordInputRegexValidationIsDisplayed();
            await validations.allValidationsAreNotDisplayedExceptVerifyPassword();
            let count3x2 = await validations.validationMessagesCount();
            assert.equal(count3x2,3);
            await this.sentKeys(PASSWORD_INPUT, 'word');
            await validations.passwordInputRegexValidationIsDisplayed();
            await validations.allValidationsAreNotDisplayedExceptVerifyPassword();
            let count2x2 = await validations.validationMessagesCount();
            assert.equal(count2x2,2);
            await this.sentKeys(PASSWORD_INPUT, '123');
            await validations.allValidationsAreNotDisplayedExceptVerifyPassword();
            let count1 = await validations.validationMessagesCount();
            assert.equal(count1,1);
            await this.sentKeys(VERIFY_PASSWORD_INPUT, 'Password123');
            let count0 = await validations.validationMessagesCount();
            assert.equal(count0,0);
        }



    }
    module.exports = CreateAccountModal;