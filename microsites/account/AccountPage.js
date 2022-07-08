    const BasePage = require('../../BasePage');
    const ACCOUNT_HEADER = { xpath: "//h4[contains(@class, 'title')]" };
    const MY_PURCHASES_TAB = { xpath: "//a[text()='My Purchases']"};
    const MY_WISHLIST_TAB = { xpath: "//a[text()='My Wishlist']"};
    const MY_WALLET_TAB = { xpath: "//a[text()='My Wallet']"};
    const EDIT_PROFILE_BUTTON = { xpath: "//a[text()='Edit Profile']"};
    const LOG_OFF_BUTTON = { xpath: "//a[text()='Log off']"};

    class AccountPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = AccountPage;