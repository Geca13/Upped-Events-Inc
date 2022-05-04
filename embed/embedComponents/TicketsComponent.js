    const BasePage = require("../../BasePage");
    const TICKET_SELECT = { tagName: 'select'}

    class TicketsComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async sentKeysToTicketInput(index, quantity){
            let input = await this.getElementFromAnArrayByIndex(TICKET_SELECT, index);
            await input.sendKeys(quantity);
        }


    }

    module.exports = TicketsComponent;