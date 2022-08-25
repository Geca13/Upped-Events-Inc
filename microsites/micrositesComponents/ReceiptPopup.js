    const BasePage = require("../../BasePage");
    const { expect } = require('chai');
    const TICKETS_POPUP = { className: 'receipt-modal' };
    const CLOSE_POPUP_BUTTON = { className: 'close-btn' };
    const EVENT_NAME = { id: 'eventName' };
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



    }
    module.exports = ReceiptPopup;
