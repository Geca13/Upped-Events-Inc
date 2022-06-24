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
        async zoomOut(){
            await this.driver.sleep(5000);
            await this.zoomOutWindow(TICKET_SELECT);
            await this.driver.sleep(500);
            await this.zoomOutWindow(TICKET_SELECT);

        }


    }

    module.exports = TicketsComponent;