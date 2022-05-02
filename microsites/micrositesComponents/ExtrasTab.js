    const BasePage = require("../../BasePage");
    const SECTIONS_TITLES = { className: 'extras-container' };
    const SECTION_TABS = { className: 'box-container' }; //list
    const BALANCE_LABEL = { className: 'balance-label' };
    const BALANCE = { className: 'balance' };
    const WALLET_IMAGE= { className: 'wallet-img' };
    const BALANCE_SUBTITLE = { className: 'balance-subtitle' };
    const ADD_FUNDS_INPUT = { className: 'form-control' };
    const ADD_MONEY_TAB = { xpath: "//*[text()='Add Money to Wallet']"};
    const DONATE_TAB = { xpath: "//*[text()='Donate']"};
    const ADD_MONEY_BUTTON = { xpath: "//*[text()='Add Money']"};
    const DONATION_INPUT = { id: 'donationAmount'};
    const DONATE_TITLE = { className: 'donate-head' };
    const DONATE_EVENT_NAME = { className: 'donate-event' };
    const DONATION_MESSAGE = { className: 'donations-message' };
    const DONATE_BUTTON_CONTAINER = { className: 'donations-buttons-box' };
    const DONATE_BUTTONS = { className: 'donations-button' }; //list
    const ADD_DONATION_BUTTON = { className: 'donation-order-button' };
    const RESET_DONATION_BUTTON = { className: 'donation-reset-button' };


    class ExtrasTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async balanceIsPresent() {
            return await this.isDisplayed(BALANCE,5000);
        }

        async getBalanceLabelText(){

            return await this.getElementText(BALANCE_LABEL);
        }
    }

    module.exports = ExtrasTab;