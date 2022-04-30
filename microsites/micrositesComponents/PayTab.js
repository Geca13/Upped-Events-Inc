    const BasePage = require("../../BasePage");
    const PAY_CONTAINER = { className: 'pay-container' };
    const PAY_TABS = { className: 'box-container' };
    const SAVED_CARDS_HEADER = { xpath: "//*[text()='Saved Cards']"};
    const PAY_WITH_SERVICE_HEADER = { xpath: "//*[text()='Pay with Other Service']"};
    const PAY_WITH_SERVICE_TAB = { xpath: "//*[text()='Pay with Card or Service']"};
    const PAY_WITH_NEW_CARD_TAB = { xpath: "//*[text()='Pay with New Card']"};
    const PAY_WITH_WALLET_OPTION = { xpath: "//*[text()=' Pay with wallet ']"};
    const PAY_WITH_WALLET_BUTTON = { xpath: "//*[text()='Pay with wallet']"};
    const PAY_WITH_CARD_BUTTON = { xpath: "//*[text()='Pay with card']"};
    const APPLY_DISCOUNT_BUTTON = { xpath: "//*[text()='Apply']"};
    const DISCOUNT_CODE_LABEL = { xpath: "//*[text()='Discount Code ']"};
    const DISCOUNT_CODE_INPUT = { className: 'height'};
    const SAVED_CARDS_LIST = { className: 'user-card'}; //list

    class PayTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async savedCardsHeaderIsPresent() {
            return await this.isDisplayed(SAVED_CARDS_HEADER,5000);
        }
        async clickFirstCard(){
            await this.click(SAVED_CARDS_LIST);
        }
        async clickPayWithCardButton(){
            await this.click(PAY_WITH_CARD_BUTTON);
        }
    }

    module.exports = PayTab;