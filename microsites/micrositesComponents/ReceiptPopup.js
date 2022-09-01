    const BasePage = require("../../BasePage");
    const { expect } = require('chai');
    const assert = require('assert')
    const TICKETS_POPUP = { className: 'receipt-modal' };
    const CLOSE_POPUP_BUTTON = { className: 'close-btn' };
    const EVENT_NAME = { xpath: "//p[@id='eventName']" };
    const PURCHASE_DETAILS = { id: 'purchaseTime' };
    const TICKETS_NAMES_QUANTITY_DISCOUNT = { id: 'itemName' }; //list
    const TICKETS_PRICES = { id: 'itemPrice' }; //list
    const DISCOUNT_BY_TICKET_TYPE = { id: "itemAmt" }
    const SUBTOTAL_TOTAL = { xpath: "//span[@id='subtotalAmt']" }
    const DONATIONS_TITLE = { id: "donations" }
    const DONATIONS_TOTAL = { id: "donationAmt" }
    const TAXES_TITLE = { id: "taxes" }
    const TAXES_TOTAL = { id: "taxAmt" }
    const FEES_TITLE = { id: "fees" }
    const FEES_TOTAL = { id: "feesAmt" }
    const DISCOUNT_TITLE = { id: "discount"}
    const DISCOUNT_VALUE = { id: "discountAmt" }
    const SUBTOTAL_TITLE = { id: "subtotal" }
    const REFUND_VALUE = { id: "refundAmt" }
    const REFUND_TITLE = { id: "refund" }
    const TOTAL_VALUE = { id: "grandTotalAmt" }
    const TOTAL_TITLE = { id: "grandTotal" }

    class ReceiptPopup extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async receiptPopupIsVisible(){
            await this.isDisplayed(TAXES_TOTAL, 5000);
        }
        async assertDataFromSummaryEqualReceiptValues(tickets,donations,subtotal,taxes,fees,discount,total){
            await this.timeout(500)
            let extDonation = await this.getElementText(DONATIONS_TOTAL);
            let extSubtotal = await this.getElementText(SUBTOTAL_TOTAL);
            let extFees = await this.getElementText(FEES_TOTAL)
            let extTaxes = await this.getElementText(TAXES_TOTAL);
            let extDiscount = await this.getElementText(DISCOUNT_VALUE);
            let extTotal = await this.getElementText(TOTAL_VALUE);

            expect(extDonation.substring(1)).to.equal(donations);
            expect(extSubtotal.substring(1)).to.equal(tickets);
            expect(extFees.substring(1)).to.equal(fees);
            expect(extTaxes.substring(1)).to.equal(taxes);
            expect(extDiscount.substring(1)).to.equal(discount);
            expect(extTotal.substring(1)).to.equal(total);

        }

        async assertTicketsOnReceipt(ticketOneName,ticketTwoName,ticketThreeName){
            let names = await this.getCleanTicketNames();
            expect(names[0]).to.equal(ticketOneName);
            expect(names[1]).to.equal(ticketTwoName);
            expect(names[2]).to.equal(ticketThreeName);
            let qty = await this.getCleanTicketQuantity()
            expect(qty[0]).to.equal("1");
            expect(qty[1]).to.equal("3");
            expect(qty[2]).to.equal("2");
        }

        async getCleanTicketNames(){
            let cleaned = [];
            let tickets = await this.findAll(TICKETS_NAMES_QUANTITY_DISCOUNT);
            for(let i = 0; i < tickets.length; i++){
                let ticket = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES_QUANTITY_DISCOUNT, i);
                cleaned.push(ticket.split(' ')[1])
            }
            return cleaned;
        }

        async getCleanTicketQuantity(){
            let cleaned = [];
            let tickets = await this.findAll(TICKETS_NAMES_QUANTITY_DISCOUNT);
            for(let i = 0; i < tickets.length; i++){
                let ticket = await this.getElementTextFromAnArrayByIndex(TICKETS_NAMES_QUANTITY_DISCOUNT, i);
                cleaned.push(ticket.split(' ')[2].substring(1,2))
            }
            return cleaned;
        }
        async timeDateAndEventName(timeDate, eventName){
            let publishedEventName = await this.getElementText(EVENT_NAME);
            expect(publishedEventName).to.equal(eventName);
            let publishedTimeDate = await this.getElementText(PURCHASE_DETAILS);
            assert.equal(publishedTimeDate ,"Purchased on " + timeDate);
        }



    }
    module.exports = ReceiptPopup;
