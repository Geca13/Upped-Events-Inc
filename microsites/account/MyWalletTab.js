    const BasePage = require('../../BasePage');
    const NewCardComponent = require('../micrositesComponents/NewCardComponent')
    const assert = require('assert')
    const BALANCE_TITLE = { xpath: "//div[contains(@class, 'title')]" }
    const WALLET_BALANCE = { xpath: "//div[@class='wallets-list-container']//div[3]" };
    const CARD_CONTAINER = { xpath: "//div[contains(@class, 'card-detail')]" };
    const CARD_INFO = { xpath: "//span[contains(@class, 'card-title')]" }; // list - name index 0, card type index 2
    const CARD_NUMBER = { xpath: "//span[contains(@class, 'card-number')]" }; //list
    const SET_DEFAULT_BUTTON = { xpath: "//button[text() = ' Set as default ']" }; //list
    const DELETE_CARD_BUTTON = { xpath: "//button[text() = ' Delete ']" }; //list
    const ADD_NEW_CARD_BUTTON = { xpath: "//button[text() = ' Add ']" };
    const FOOTER_FACEBOOK_ICON = {  className: "fa-facebook"}


    class MyWalletTab extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async myWalletScreenIsDisplayed(){
            await this.timeout(500);
            await this.isDisplayed(BALANCE_TITLE, 5000);
            await this.timeout(500);
        }
        async returnBalanceState(){
           await this.timeout(2000);
           await this.isDisplayed(WALLET_BALANCE);
           await this.timeout(2000);
           let rawBalance = await this.getElementText(WALLET_BALANCE);
           let stringBalance = rawBalance.substring(1);
           let balance = parseFloat(stringBalance);
           let fixed = balance.toFixed(2);
           return fixed;
        }
        async assertUserBalance(amount){
           let balance = await this.returnBalanceState();
           assert.equal(balance, amount)
        }
        async checkCardHolderName(firstName,lastName){
            await this.isDisplayed(CARD_CONTAINER,5000);
            let fullName = await this.getElementTextFromAnArrayByIndex(CARD_INFO,0);
            assert.equal(fullName, firstName + ' ' + lastName)
        }
        async checkCardBrand(brand){
            let brandName = await this.getElementTextFromAnArrayByIndex(CARD_INFO,1);
            assert.equal(brandName, brand);
        }
        async checkDisplayedCardNumber(text){
           let number = await this.getElementText(CARD_NUMBER);
           assert.equal(number, 'Last 4 digits: ' + text);
        }
        async setNewCardInProfile(firstName, lastName){
            await this.moveToElement(FOOTER_FACEBOOK_ICON);
            let newCardComponent = new NewCardComponent(this.driver);
            await newCardComponent.fillNewCardWithVisaData(firstName, lastName);
            await this.click(ADD_NEW_CARD_BUTTON);
        }

        async setNewCardForProfileInStaging(firstName, lastName){
            await this.moveToElement(FOOTER_FACEBOOK_ICON);
            let newCardComponent = new NewCardComponent(this.driver);
            await newCardComponent.fillNewCardInStaging(firstName, lastName);
            await this.click(ADD_NEW_CARD_BUTTON);
        }

        async calculateBalanceAfterPurchases(userBalance){
            let currentBalance = await this.returnBalanceState();
            assert.equal(currentBalance, userBalance);
        }
        async calculateBalanceAfterRefunds(userBalance){
            let calculatedBalance = await userBalance.toFixed(2);
            let currentBalance = await this.returnBalanceState();
            assert.equal(currentBalance, calculatedBalance);
        }

    }
    module.exports = MyWalletTab;