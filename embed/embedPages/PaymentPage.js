    const BasePage = require('../../BasePage');
    const assert = require('assert');
    const NewCardComponent = require('../../microsites/micrositesComponents/NewCardComponent');
    const CARD_SERVICE_TAB = { xpath: "//*[text()='Pay with Card or Service']"}
    const NEW_CARD_TAB = { xpath: "//*[text()='Pay with New Card']"}
    const DISCOUNT_LABEL = { xpath: "//div[contains(@class , 'form-group')]//label" }
    const DISCOUNT_INPUT = { className: "discount"}
    const APPLY_DISCOUNT_BUTTON = { className: "apply-btn"}
    const PAY_CARD_BUTTON = { xpath: "//*[text()='Pay with card']"}
    const PAY_WALLET_BUTTON = { xpath: "//button[contains(@class , 'other-service-item')]"}
    const CONFIRM_PAYMENT_BUTTON = { xpath: "//*[text()='Confirm Payment']"}
    const SAVED_CARD = { className: "user-card" } //list
    const TABS = { xpath: "//div[contains(@class , 'pay-container')]//div[@class='box-container']" }
    const SECTION_HEADERS = { xpath: "//div[@class='title']" }




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
        async isOnPayWithNewCardTab(){
            let newCardComponent = new NewCardComponent(this.driver);
            await newCardComponent.isAtNewCardTab();
        }
        async confirmElementsOnPayWithCardOrServiceTab(){
            await this.isAtPaymentPage();
            await this.timeout(1000);
            let tabs = await this.returnElementsCount(TABS);
            assert.equal(tabs, 2);
            let cards = await this.returnElementsCount(SAVED_CARD);
            assert.equal(cards, 0);
            let firstTab = await this.getElementTextFromAnArrayByIndex(TABS, 0);
            let secondTab = await this.getElementTextFromAnArrayByIndex(TABS, 1);
            assert.equal(firstTab, "Pay with Card or Service");
            assert.equal(secondTab, "Pay with New Card");
            let firstTitle = await this.getElementTextFromAnArrayByIndex(SECTION_HEADERS, 0);
            let secondTitle = await this.getElementTextFromAnArrayByIndex(SECTION_HEADERS, 1);
            assert.equal(firstTitle, "Saved Cards");
            assert.equal(secondTitle, "Pay with Other Service");
            let payWithWalletButton = await this.getElementText(PAY_WALLET_BUTTON);
            assert.equal(payWithWalletButton, "Pay with wallet");
            let discountLabel = await this.getElementTextFromAnArrayByIndex(DISCOUNT_LABEL,0);
            assert.equal(discountLabel, "Discount Code");
            let applyDiscountButton = await this.getElementText(APPLY_DISCOUNT_BUTTON);
            assert.equal(applyDiscountButton, "Apply");
            let inputs = await this.returnElementsCount(DISCOUNT_INPUT);
            assert.equal(inputs, 1);

        }

        async confirmElementsOnPayWithNewCardTab(){
            let newCardComponent = new NewCardComponent(this.driver);
            await newCardComponent.isAtNewCardTab();
            await newCardComponent.assertFieldsLabelsOnEmbed();
            await newCardComponent.assertFieldsAreDisplayed();
            await newCardComponent.assertCountryOptionsAndSaveButtonNames();
        }

    }
    module.exports = PaymentPage;