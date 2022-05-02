    const BasePage = require("../../BasePage");
    const TICKETS_TERMS_BUTTON = { className: 'terms-btn' };
    const QTY_INPUTS = { xpath: "//input[@type='number']"}; //list
    const INCREASE_QTY_BUTTONS = { xpath: "//*[text()=' + ']"}; //list
    const DECREASE_QTY_BUTTONS = { xpath: "//*[text()=' - ']"}; //list
    const TICKETS_CONTAINER = { className: 'tickets-list' }; //list
    const TICKETS_NAMES = { className: 'name' }; //list
    const TICKETS_PRICES = { className: 'ticket-price' }; //list
    const TICKETS_DESCRIPTION = { className: 'info' }; //list
    const TICKETS_HEADER = { className: 'title' }; //from list problematic


    class TicketsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async clickFirstIncreaseButton(){
            await this.click(INCREASE_QTY_BUTTONS);
        }

        async getTicketPrice(){
            return await this.getSubstringOfBracketedPriceString(TICKETS_PRICES,1)
        }
    }

    module.exports = TicketsTab;