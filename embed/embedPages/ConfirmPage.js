const BasePage = require('../../BasePage');
const VIEW_RECEIPT_BUTTON = { xpath: "//*[text()='View Receipt']"}
const DONE_BUTTON = { xpath: "//*[text()='Done']"}

class ConfirmPage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async isAtConfirmPage(){
        await this.isDisplayed(VIEW_RECEIPT_BUTTON,90000)
    }
    async goBackToStartPage(){
        await this.click(DONE_BUTTON)
    }
}
    module.exports = ConfirmPage;