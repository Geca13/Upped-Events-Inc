    const BasePage = require('../../../BasePage');
    const TICKET_GROUPS_TABS = { id: "eventsTab" }
    const COLUMN_TICKET_NAME = { className: "table-ticket-name" } //list
    const COLUMN_PRICE = { className: "column-price" } //list
    const COLUMN_QUANTITY = { className: "column-quantity" } //list
    const COLUMN_SOLD = { className: "column-sold" } //list
    const COLUMN_SELECTS = { className: "numeric-dropdown" } //list
    const COLUMN_OVERRIDE = { className: "text-second" } //list
    const STEPPER = { id: "stepper" };
    const SAVE_BUTTON = { xpath: "//*[text()='Save']"};




    class BOSelectTickets extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnBoxOfficePage(){
            await this.isDisplayed(COLUMN_SELECTS,5000);
        }

        async selectTwoTickets(){
            await this.sendKeysToElementReturnedFromAnArray(COLUMN_SELECTS,0,"2");
            await this.click(SAVE_BUTTON);
        }
    }
    module.exports = BOSelectTickets;