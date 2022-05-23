    const BasePage = require('../../BasePage')
    const EMAIL_INPUT = { id: 'email' }
    const PASSWORD_INPUT = { id: 'password' }
    const SUBMIT_BUTTON = { className: 'main-btn' }
    const FORGOT_PASSWORD_LINK = { className: 'forgotpassword' }

    class LoginComponent extends BasePage{
          constructor(driver) {
              super(driver);
        }

        async authenticate(username, password) {
          await this.driver.findElement(EMAIL_INPUT).sendKeys(username)
          await this.driver.findElement(PASSWORD_INPUT).sendKeys(password)
          await this.driver.findElement(SUBMIT_BUTTON).click()
        }
        async loginWithNewPassword(email, password){
              await this.sentKeys(EMAIL_INPUT,email);
              await this.sentKeys(PASSWORD_INPUT, password);
              await this.click(SUBMIT_BUTTON);
        }

        async waitPopupToBeLoaded(){
             await this.isDisplayed(SUBMIT_BUTTON, 5000)
        }

        async clickForgotPasswordLink(){
              await this.click(FORGOT_PASSWORD_LINK);
        }

        async getNewlyOpenedTab(originalWindow){
           await this.switchToNewlyOpenedWindowOrTab(originalWindow);
        }

        async loginAfterVerifyingAccount(password){
            await this.sentKeys(PASSWORD_INPUT, password);
            await this.click(SUBMIT_BUTTON)
            await this.driver.sleep(5000);
        }
}

    module.exports = LoginComponent