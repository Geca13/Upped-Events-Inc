    const BasePage = require("../../BasePage");
    const Validations = require('../../Validations&Alerts/Validations');
    const assert = require('assert')
    const RESET_PASSWORD_HEADER = { xpath: "//*[text()='Reset password']"}
    const PASSWORD_INPUT = { xpath: "//input[@formcontrolname='password']" };
    const CONFIRM_PASSWORD_INPUT = { xpath: "//input[@formcontrolname='confirm_password']" };
    const CHANGE_PASSWORD_BUTTON = { xpath: "//button[@type='submit']" };




    class ResetPasswordPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async completeResetPasswordScenarioWithValidations(){
            let validations = new Validations(this.driver);
            let password = Math.floor(100000 + Math.random() * 900000);
            await this.isDisplayed(RESET_PASSWORD_HEADER,5000);
            await this.sentKeys(PASSWORD_INPUT, 'Pass' );
            await validations.passwordsNotSameIsDisplayed();
            await validations.passwordInputLengthValidationIsDisplayed();
            await validations.passwordInputRegexValidationIsDisplayed();
            await this.sentKeys(PASSWORD_INPUT, password );
            await validations.passwordsNotSameIsDisplayed();
            await this.sentKeys(CONFIRM_PASSWORD_INPUT,'Pass'+ password );
            let count = await validations.validationMessagesCount();
            assert.equal(count,0);
            await this.click(CHANGE_PASSWORD_BUTTON);

        }
    }
    module.exports = ResetPasswordPage;