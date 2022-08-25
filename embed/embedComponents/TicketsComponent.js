    const BasePage = require("../../BasePage");
    const assert = require('assert')
    const TICKET_SELECT = { tagName: 'select'};
    const TICKET_SELECT_OPTIONS = { xpath: "//select//option"}
    const TICKETS_LIST = { className: "tickets-list" }
    const TICKET_NOT_AVAILABLE_SOLD = { xpath: "//div[contains(@class, 'quantity-container')]//span" }
    const TICKET_CONTAINER = { xpath: "//li[contains(@class, 'list-group-item')]" }
    const TICKET_NAME_AND_PRICE = { className: "name" }
    const TICKET_RULES_ICON = { xpath: "//span[@class= 'ticket-info']//i" }
    const DISCOUNTED_TICKET_PRICE = { xpath: "//span[contains(@class, 'has-discount')]" }

    class TicketsComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }


        async assertFullTicketNameDisplay(ticketOneName, ticketOnePrice){
            await this.driver.executeScript("document.getElementsByClassName('ticket-info')[0].style.visibility='hidden'");
            let fullName = await this.getElementText(TICKET_NAME_AND_PRICE);
            assert.equal(fullName, ticketOneName + ' ($'+ticketOnePrice + '.00)')
        }

        async getTicketPriceByTicketName(ticketName) {
            let tickets = await this.findAll(TICKET_NAME_AND_PRICE);
            for(let i = 0; i < tickets.length; i++){
                let ticket = await this.getElementTextFromAnArrayByIndex(TICKET_NAME_AND_PRICE,i);
                let ticketname = ticket.split(" ")[0]
                if(await ticketname == ticketName){
                    return await ticket.split(" ")[1]
                }
            }
        }

        async getFullTicketLayoutByTicketName(ticketName) {
            let tickets = await this.findAll(TICKET_NAME_AND_PRICE);
            for(let i = 0; i < tickets.length; i++){
                let ticket = await this.getElementTextFromAnArrayByIndex(TICKET_NAME_AND_PRICE,i);
                let ticketname = ticket.split(" ")[0]
                if(await ticketname == ticketName){
                    return ticket
                }
            }
        }

        async getTicketIndexByTicketName(ticketName) {
            let tickets = await this.findAll(TICKET_NAME_AND_PRICE);
            for(let i = 0; i < tickets.length; i++){
                let ticket = await this.getElementTextFromAnArrayByIndex(TICKET_NAME_AND_PRICE,i);
                let ticketname = ticket.split(" ")[0]
                if(await ticketname == ticketName){
                    return i
                }
            }
        }

        async assertNumberOfTickets(number){
            let tickets = await this.returnElementsCount(TICKET_CONTAINER);
            assert.equal(tickets, number);
        }

        async sentKeysToTicketInput(index, quantity){
            let input = await this.getElementFromAnArrayByIndex(TICKET_SELECT, index);
            await input.sendKeys(quantity);
        }

        async assertTicketNotAvailableMessageIsDisplayed(){
            await this.isDisplayed(TICKET_NOT_AVAILABLE_SOLD, 5000);
            let message = await this.getElementText(TICKET_NOT_AVAILABLE_SOLD);
            assert.equal(message, "Ticket not available!")
        }

        async confirmEnteredValuesBeforeLogin(){
            //let firstSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 0);
            let secondSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 1);
            let thirdSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 2);
            let fourthSelectValue = this.getEnteredTextInTheInputByIndex(TICKET_SELECT, 3);
            //assert.equal(firstSelectValue,0);
            assert.equal(secondSelectValue,1);
            assert.equal(thirdSelectValue,2);
            assert.equal(fourthSelectValue,0);

        }
        async ticketListIsDisplayed(){
            await this.isDisplayed(TICKETS_LIST, 5000);
        }

        async assertDropDownElementsEqualsAvailableTickets(availableTickets){
            await this.isDisplayed(TICKET_SELECT_OPTIONS,5000);
            let dropdownOptions = await this.getElementTextFromTheLastElementFromAnArray(TICKET_SELECT_OPTIONS);
            let converted = parseInt(dropdownOptions);
            assert.equal(converted, availableTickets);
        }

        async assertDropDownElementsEquals(number){
            await this.isDisplayed(TICKET_SELECT_OPTIONS,5000);
            let dropdownOptions = await this.getElementTextFromTheLastElementFromAnArray(TICKET_SELECT_OPTIONS);
            assert.equal(dropdownOptions, number);
        }

        async assertTheNewTicketPriceEqualsDiscountedPrice(ticketName, discountedPrice){
            let prices = await this.getTicketPriceByTicketName(ticketName);
            let index = prices.indexOf(")")
            let newPrice = prices.substring(index + 1);
            assert.equal( newPrice , "($" + parseFloat(discountedPrice).toFixed(2) + ")");
        }

        async assertNewTicketNamePricesLayout(ticketName, originalPrice, discountedPrice){
            let fullTicketLayout = await this.getFullTicketLayoutByTicketName(ticketName);
            assert.equal(fullTicketLayout, ticketName + " " + originalPrice + "($" + parseFloat(discountedPrice).toFixed(2) + ")")
        }

        async assertFontColorAndStrikeOnOriginalPrice(ticketName){
            let index = await this.getTicketIndexByTicketName(ticketName)
            let fontColor = await this.getFontColorFromAnArray(DISCOUNTED_TICKET_PRICE,index);
            assert.equal(fontColor,'rgba(173, 3, 3, 1)');
            let decoration = await this.getFontTextDecorationFromAnArray(DISCOUNTED_TICKET_PRICE,index);
            let strike = decoration.split(" ")[0]
            assert.equal(strike,"line-through");
        }

    }

    module.exports = TicketsComponent;