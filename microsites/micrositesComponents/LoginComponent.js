    const EMAIL_INPUT = { id: 'email' }
    const PASSWORD_INPUT = { id: 'password' }
    const SUBMIT_BUTTON = { className: 'main-btn' }
    const BasePage = require('../../BasePage')



    class LoginComponent extends BasePage{
          constructor(driver) {
              super(driver);
        }

        async authenticate(username, password) {
          await this.driver.findElement(EMAIL_INPUT).sendKeys(username)
          await this.driver.findElement(PASSWORD_INPUT).sendKeys(password)
          await this.driver.findElement(SUBMIT_BUTTON).click()
        }

        async waitPopupToBeLoaded(){
             await this.isDisplayed(SUBMIT_BUTTON, 5000)
        }
}

    module.exports = LoginComponent