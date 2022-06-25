    const BasePage = require("../../BasePage");
    const assert = require('assert')
    const TICKET_SELECT = { tagName: 'select'};

    class TicketsComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async sentKeysToTicketInput(index, quantity){
            let input = await this.getElementFromAnArrayByIndex(TICKET_SELECT, index);
            await input.sendKeys(quantity);
        }
        async confirmEnteredValuesBeforeLogin(){
            let firstSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 0);
            let secondSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 1);
            let thirdSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 2);
            let fourthSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 3);
            assert.equal(firstSelectValue,0);
            assert.equal(secondSelectValue,2);
            assert.equal(thirdSelectValue,2);
            assert.equal(thirdSelectValue,0);


        }


    }

    module.exports = TicketsComponent;