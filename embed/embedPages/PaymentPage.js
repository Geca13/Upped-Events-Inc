    const BasePage = require('../../BasePage');
    const CARD_SERVICE_TAB = { xpath: "//*[text()='Pay with Card or Service']"}
    const NEW_CARD_TAB = { xpath: "//*[text()='Pay with New Card']"}
    const DISCOUNT_INPUT = { className: "discount"}
    const APPLY_DISCOUNT_BUTTON = { className: "apply-btn"}
    const PAY_CARD_BUTTON = { xpath: "//*[text()='Pay with card']"}
    const PAY_WALLET_BUTTON = { xpath: "//*[text()='Pay with wallet']"}



    class PaymentPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtPaymentPage(){
            await this.isDisplayed(CARD_SERVICE_TAB, 5000);
        }
        async clickCardOrServiceTab(){
            await this.click(CARD_SERVICE_TAB);
        }
        async clickPayWithCardButton(){
            await this.click(PAY_CARD_BUTTON);
        }
        async clickPayWithWalletButton(){
            await this.click(PAY_WALLET_BUTTON);
        }
        async clickNewCardTab(){
            await this.click(NEW_CARD_TAB);
        }
        async enterPromoCode(promoCode){
            await this.sentKeys(DISCOUNT_INPUT,promoCode);
        }
        async clickApplyDiscountButton(){
            await this.click(APPLY_DISCOUNT_BUTTON);
        }

    }
    module.exports = PaymentPage;