    const BasePage = require("../../BasePage");
    const RECEIPT_BUTTON = { xpath: "//*[text()='View Receipt']"}
    const FACEBOOK_SHARE_BUTTON = { xpath: "//*[text()='Share on Facebook']"}
    const TOTAL_AMOUNT = { className: 'total-amt' };


    class ConfirmTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async isOnConfirmTab(){
            await this.isDisplayed(RECEIPT_BUTTON,60000);
        }
        async clickShareWithFacebookButton(){
            await this.click(FACEBOOK_SHARE_BUTTON);
        }
        async clickViewReceiptButton(){
            await this.click(FACEBOOK_SHARE_BUTTON);
        }
        async getPurchaseTotalAmount(){
            let total = await this.getElementText(TOTAL_AMOUNT);
            console.log(total.substring(8))
            return await this.convertPriceStringToDouble(total.substring(8));
        }
    }
    module.exports = ConfirmTab;