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

        async completeResetPasswordScenarioWithValidations(password){
            let validations = new Validations(this.driver);

            await this.isDisplayed(RESET_PASSWORD_HEADER,5000);
            await this.sentKeys(PASSWORD_INPUT, 'Pass' );
            await this.click(RESET_PASSWORD_HEADER);
            await validations.passwordInputLengthValidationIsDisplayed();
            await validations.passwordInputRegexValidationIsDisplayed();
            await this.find(PASSWORD_INPUT).clear();
            await this.timeout(2000);
            await this.sentKeys(PASSWORD_INPUT, password );
            console.log(password)
            await this.sentKeys(CONFIRM_PASSWORD_INPUT,password );
            await this.click(RESET_PASSWORD_HEADER);
            let count = await validations.validationMessagesCount();
            assert.equal(count,0);
            await this.click(CHANGE_PASSWORD_BUTTON);

        }
    }
    module.exports = ResetPasswordPage;