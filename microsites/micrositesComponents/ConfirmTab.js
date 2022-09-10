    const BasePage = require("../../BasePage");
    const RECEIPT_BUTTON = { xpath: "//*[text()='View Receipt']"}
    const FACEBOOK_SHARE_BUTTON = { xpath: "//*[text()='Share on Facebook']"}
    const TOTAL_AMOUNT = { className: 'total-amt' };


    class ConfirmTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async isOnConfirmTab(){
            await this.isDisplayed(RECEIPT_BUTTON,90000, "receiptBtnMicro");
        }
        async clickShareWithFacebookButton(){
            await this.click(FACEBOOK_SHARE_BUTTON);
        }
        async clickViewReceiptButton(){
            await this.click(FACEBOOK_SHARE_BUTTON);
        }
        async getPurchaseTotalAmount(){
            let rawTotal = await this.getElementText(TOTAL_AMOUNT);
            let totalSubstring = rawTotal.substring(8)
            let total = parseFloat(totalSubstring)
            return total;
        }
    }
    module.exports = ConfirmTab;