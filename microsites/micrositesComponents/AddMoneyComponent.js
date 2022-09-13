    const BasePage = require("../../BasePage");
    const assert = require('assert')
    const SECTIONS_TITLES = { className: 'extras-container' };
    const SECTION_TABS = { className: 'box-container' }; //list
    const BALANCE_LABEL = { className: 'balance-label' };
    const BALANCE = { className: 'balance' };
    const LOGO_WALLET_IMAGE= { className: 'wallet-img' };
    const BALANCE_SUBTITLE = { className: 'balance-subtitle' };
    const ADD_FUNDS_INPUT = { xpath: "//div[@class='col-8']//input" };
    const ADD_MONEY_BUTTON = { xpath: "//div[@class='col-4']//button"};
    const LOGO_WALLET_TEXT = { xpath: "//div[@class='tab-info']//div"};
    const LOGO_WALLET_BALANCE = { xpath: "//div[@class='tab-info']//div[2]"};



    class AddMoneyComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async getBalanceLabelText(){
            let label = await this.getElementText(BALANCE_LABEL);
            return label;
        }

        async getBalanceSubtitleText(){
            let subtitle = await this.getElementText(BALANCE_SUBTITLE);
            return subtitle;
        }

        async getInputPlaceholder(){
            let placeholder = await this.getPlaceholderTextFromInputByIndex(ADD_FUNDS_INPUT, 0);
            return placeholder;
        }

        async getButtonText(){
            let button = await this.getElementText(ADD_MONEY_BUTTON);
            return button;
        }

        async getBalanceStringValue(){
            let balance = await this.getElementText(BALANCE);
            return balance;
        }

        async getLogoBalanceStringValue(){
            let logoBalance = await this.getElementText(LOGO_WALLET_BALANCE);
            return logoBalance;
        }

        async getLogoBalanceMoneyValue(){
            let balanceString = await this.getLogoBalanceStringValue();
            let balance = balanceString.substring(2, balanceString.length - 1);
            let parsed = parseFloat(balance);
            let fixed = parsed.toFixed(2);
            return fixed;
        }

        async getBalanceMoneyValue(){
            let balanceString = await this.getBalanceStringValue();
            let balance = balanceString.substring(1);
            let parsed = parseFloat(balance);
            let fixed = parsed.toFixed(2);
            return fixed;
        }

        async getLogoSrcText(){
            let src = await this.returnImgSrcAttribute(LOGO_WALLET_IMAGE);
            return src;
        }

        async getLogoWalletText(){
            let text = await this.getElementText(LOGO_WALLET_TEXT);
            return text;
        }

        async addMoneyComponentIsDisplayed(){
            await this.isDisplayed(ADD_MONEY_BUTTON, 5000);
        }

        async assertAddMoneyComponentElements(){
            let logoSrc = await this.getLogoSrcText();
            assert.equal(logoSrc, "https://events.dev.uppedevents.com/assets/images/wallet.png");
            let logoText = await this.getLogoWalletText();
            assert.equal(logoText, "Upped Wallet");
            let logoBalanceValue = await this.getLogoBalanceMoneyValue();
            let balance = await this.getBalanceMoneyValue();
            assert.equal(logoBalanceValue, balance);
            let label = await this.getBalanceLabelText();
            assert.equal(label, "Your Current Wallet Balance is:");
            let subtitle = await this.getBalanceSubtitleText();
            assert.equal(subtitle, "You can add money to your digital wallet to make purchases at the event.");
            let placeholder = await this.getInputPlaceholder();
            assert.equal(placeholder, "Enter Value");
            let button = await this.getButtonText();
            assert.equal(button, "Add Money");


        }
    }
    module.exports = AddMoneyComponent;