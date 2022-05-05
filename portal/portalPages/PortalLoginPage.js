    const BasePage = require('../../BasePage');
    const SIGN_IN_BUTTON = { xpath: "//*[text()='Sign In']"}
    const EMAIL_INPUT = { css: "input[formControlName=email]" };
    const PASSWORD_INPUT = { css: "input[formControlName=password]" };

    class PortalLoginPage extends BasePage {
        constructor(driver){
            super(driver);
        }
        async loadPortalUrl(){
           await this.visit('https://dev.portal.uppedevents.com/')
        }
        async isAtPortalLoginPage(){
            await this.isDisplayed(SIGN_IN_BUTTON, 30000)
        }

        async enterValidCredentialsAndLogin(){
            await this.sentKeys(EMAIL_INPUT,"email20@test.test");
            await this.sentKeys(PASSWORD_INPUT,"Test@123");
            await this.click(SIGN_IN_BUTTON)
        }
    }

    module.exports = PortalLoginPage;
