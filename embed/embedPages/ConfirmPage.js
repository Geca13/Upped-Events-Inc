const BasePage = require('../../BasePage');
const FACEBOOK_SHARE_BUTTON = { xpath: "//*[text()='Share on Facebook']"}
const BACK_TO_START_BUTTON = { xpath: "//*[text()=' Back to Start ']"}

class ConfirmPage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async isAtConfirmPage(){
        await this.isDisplayed(FACEBOOK_SHARE_BUTTON,60000)
    }
}
    module.exports = ConfirmPage;