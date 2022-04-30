    const BasePage = require("../../BasePage");
    const RECEIPT_BUTTON = { xpath: "//*[text()='View Receipt']"}
    const FACEBOOK_SHARE_BUTTON = { xpath: "//*[text()='Share on Facebook']"}
    const TOTAL_AMOUNT = { className: 'total-amt' };


    class ConfirmTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = ConfirmTab;