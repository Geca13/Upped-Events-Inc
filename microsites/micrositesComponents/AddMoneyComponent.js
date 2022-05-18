    const BasePage = require("../../BasePage");
    const SECTIONS_TITLES = { className: 'extras-container' };
    const SECTION_TABS = { className: 'box-container' }; //list
    const BALANCE_LABEL = { className: 'balance-label' };
    const BALANCE = { className: 'balance' };
    const WALLET_IMAGE= { className: 'wallet-img' };
    const BALANCE_SUBTITLE = { className: 'balance-subtitle' };
    const ADD_FUNDS_INPUT = { className: 'form-control' };
    const ADD_MONEY_BUTTON = { xpath: "//*[text()='Add Money']"};


    class AddMoneyComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async getBalanceLabelText(){
            return await this.getElementText(BALANCE_LABEL);
        }
    }
    module.exports = AddMoneyComponent;