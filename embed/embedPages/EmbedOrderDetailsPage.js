    const BasePage = require('../../BasePage')
    const assert = require('assert');
    const PaymentPage = require('../embedPages/PaymentPage');
    const ORDER_DETAILS_HEADER = { xpath: "//div[@class='order-heading']//div"};
    const ORDER_DETAILS_SUBTITLE = { xpath: "//div[@class='ord-desc']"};
    const PAYMENT_INFO = { xpath: "//div[@class='payment-info']"};
    const EDIT_PAYMENT_INFO_LINK = { id: "editInfo"};
    const WALLET_AS_PAYMENT = { xpath : "//ng-conatiner//div[@class='ng-star-inserted']"};
    const CARD_AS_PAYMENT = { xpath: "//div[contains(@class , 'selected-card')]"}
    const CARD_BRAND = { xpath: "//div[contains(@class , 'selected-card')]//div[1]"}
    const CARD_NUMBER= { xpath: "//div[contains(@class , 'selected-card')]//div[@class='card-number']"};
    const TICKETS_SECTION_HEADER = { xpath: "//div[@class='ticket']"}
    const TICKETS_NAMES_AND_EDIT_CONTAINER = { xpath: "//div[@class='ticket-container']//div[contains(@class , 'wd-60')]" }
    const EDIT_TICKET_LINK = { id: "editDetail" }
    const EDIT_DONATION_LINK = { id: "editDonations"}
    const TICKETS_PRICES = { id: "ticketPrice" }
    const SUBTOTAL_TEXT = { xpath: "//div[contains(@class , 'order-subtotal')]//div[1]" }
    const SUBTOTAL_VALUE = { id: "subtotalAmt" }
    const PLACE_ORDER_BUTTON = { xpath: "//*[text()='Place your order']"};

    class EmbedOrderDetailsPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnOrderDetailsPage(){
            await this.isDisplayed(ORDER_DETAILS_HEADER,5000);
            await this.timeout(500)
        }
        async clickPlaceOrderButton(){
            await this.isDisplayed(PLACE_ORDER_BUTTON,5000);
            await this.click(PLACE_ORDER_BUTTON);
        }
        async assertElementsWhenOneTicketIsSelected(ticketOneName){
            await this.timeout(1000);
            let header = await this.getElementText(ORDER_DETAILS_HEADER);
            assert.equal(header, "Order Details");
            let subheader = await this.getElementText(ORDER_DETAILS_SUBTITLE);
            assert.equal(subheader, "Review your information before placing your order");
            let paymentInfo = await this.getElementText(PAYMENT_INFO);
            assert.equal(paymentInfo, "Payment Info Edit");
            let ticketsHeader = await this.getElementText(TICKETS_SECTION_HEADER);
            assert.equal(ticketsHeader, "Tickets:");
            let selectedTicket = await this.getElementText(TICKETS_NAMES_AND_EDIT_CONTAINER);
            assert.equal(selectedTicket, ticketOneName + " Edit");
            let selectedTicketTotal = await this.getElementText(TICKETS_PRICES);
            assert.equal(selectedTicketTotal,  "$2.00");
            let subtotalText = await this.getElementText(SUBTOTAL_TEXT);
            assert.equal(subtotalText, "Subtotal:");
            let subtotalValue = await this.getElementText(SUBTOTAL_VALUE);
            assert.equal(subtotalValue,  "$2.00");
        }

        async clickEditPaymentLinkAndAssertItIsOnPaymentPage(){
            await this.click(EDIT_PAYMENT_INFO_LINK);
            let payment = new PaymentPage(this.driver);
            await payment.isAtPaymentPage();
        }

        async clickEditLinkOnDisplayedTicketAssertIsOnTicketsPage(embedTickets){
            await this.isOnOrderDetailsPage();
            await this.isDisplayed(EDIT_TICKET_LINK,5000);
            await this.timeout(500);
            await this.click(EDIT_TICKET_LINK);
            await embedTickets.ticketListIsDisplayed();
            await this.timeout(1000);
        }

        async clickEditDonationLinkAndAssertItIsOnExtrasPage(embedDonate){
            await this.isOnOrderDetailsPage();
            await this.isDisplayed(EDIT_DONATION_LINK,5000);
            await this.timeout(500);
            await this.click(EDIT_DONATION_LINK);
            await embedDonate.donateScreenIsVisible();
            await this.timeout(1000);
        }

        async assertNumberOfEditTicketsLinks(number){
            let editTicketsLinks = await this.returnElementsCount(EDIT_TICKET_LINK);
            assert.equal(editTicketsLinks, number);
        }

        async assertTicketsSumEqualsSubtotalAndOrderTotalTicketsAndSubtotalValues(summary){
            await this.timeout(1000)
            let total = 0;
            let rawPrices = await this.findAll(TICKETS_PRICES);
            for(let i = 0; i < rawPrices.length; i++){
                let rawPrice = await this.getElementTextFromAnArrayByIndex(TICKETS_PRICES, i);
                let price = await this.convertPriceStringToDouble(rawPrice);
                console.log(price);
                total = total + parseFloat(price);
            }
            let subtotal = await this.convertPriceStringToDouble(await this.getElementText(SUBTOTAL_VALUE));
            console.log(subtotal);
            assert.equal(subtotal, total.toFixed(2));
            let ticketsSummaryTotal = await summary.getTicketsTotal();
            assert.equal(ticketsSummaryTotal, total.toFixed(2));
            let summarySubTotal = await summary.getSubtotalValue();
            assert.equal(summarySubTotal, total.toFixed(2));
        }


    }
    module.exports = EmbedOrderDetailsPage;