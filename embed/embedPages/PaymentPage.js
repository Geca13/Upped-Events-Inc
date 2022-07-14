    const BasePage = require('../../BasePage');
    const NewCardComponent = require('../../microsites/micrositesComponents/NewCardComponent');
    const CARD_SERVICE_TAB = { xpath: "//*[text()='Pay with Card or Service']"}
    const NEW_CARD_TAB = { xpath: "//*[text()='Pay with New Card']"}
    const DISCOUNT_INPUT = { className: "discount"}
    const APPLY_DISCOUNT_BUTTON = { className: "apply-btn"}
    const PAY_CARD_BUTTON = { xpath: "//*[text()='Pay with card']"}
    const PAY_WALLET_BUTTON = { xpath: "//*[text()='Pay with wallet']"}
    const CONFIRM_PAYMENT_BUTTON = { xpath: "//*[text()='Confirm Payment']"}
    const SAVED_CARD = { className: "user-card" } //list




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
        async clickSavedCardByIndex(index){
            await this.clickElementReturnedFromAnArray(SAVED_CARD,index);
        }
        async clickConfirmPaymentButton(){
            await this.isDisplayed(CONFIRM_PAYMENT_BUTTON,5000);
            await this.click(CONFIRM_PAYMENT_BUTTON);
        }
        async clickPayWithCardButton(){
            await this.click(PAY_CARD_BUTTON);
        }
        async clickPayWithWalletButton(){
            await this.click(PAY_WALLET_BUTTON);
        }
        async clickNewCardTab(){
            await this.isAtPaymentPage();
            await this.click(NEW_CARD_TAB);
        }
        async fillValidDataOnCardOnTheEmbed(firstName,lastName){
            let newCard = new NewCardComponent(this.driver);
            await newCard.fillNewCardWithVisaData(firstName, lastName);
            await newCard.clickEmbedSaveCardButton();
        }
        async enterPromoCode(promoCode){
            await this.sentKeys(DISCOUNT_INPUT,promoCode);
        }
        async clickApplyDiscountButton(){
            await this.click(APPLY_DISCOUNT_BUTTON);
        }

    }
    module.exports = PaymentPage;