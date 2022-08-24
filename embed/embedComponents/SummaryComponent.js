    const BasePage = require("../../BasePage");
    const assert = require('assert')
    const DonationComponent = require('../../microsites/micrositesComponents/DonationComponent');
    const ORDER_TOTAL_HEADER = { className: "total-heading"}
    const PROMO_CODE_MESSAGE = { className: "promo"}
    const TICKET_COUNT_AND_TICKET_TOTAL_PARENT = { className: "ticket-count"} //child index 0 text index 1 value
    const SUBTOTAL_PARENT = { className: "sub-total"} // //child index 0 text index 1 value
    const DONATIONS_PARENT = { className: "donations"} // //child index 0 text index 1 value
    const TAXES_PARENT = { className: "taxes"} // //child index 0 text index 1 value
    const FEES_PARENT = { className: "fee"} // //child index 0 text index 1 value
    const TOTAL_PARENT = { className: "grand-total"} // //child index 0 text index 1 value
    const DISCOUNT_TITLE = { id: "discount"}
    const DISCOUNT_VALUE = { id: "discountAmt" }
    const APPLIED_DISCOUNT_CODE = { id: "promocode" }


    class SummaryComponent extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async calculateSubtotalAndTotalBeforeDonationIsAdded(){
           let ticketsTotal = await this.getTicketsTotal();
           let subTotal = await this.getSubtotalValue();
           assert.equal(ticketsTotal,subTotal);
           let taxes = await this.getTaxesValue();
           let fees = await this.getFeesValue();
           let calculatedTotal = parseFloat(subTotal) + parseFloat(taxes) + parseFloat(fees);
           let total = await this.getTotalValue();
           assert.equal(calculatedTotal.toFixed(2),total);
           await this.timeout(1000);

        }
        async calculateSubtotalAndTotalAfterDonationIsAdded(){
            let ticketsTotal = await this.getTicketsTotal();
            let donation = await this.getDonationValue();
            let calculatedDonation =parseFloat(ticketsTotal) + parseFloat(donation);
            let subTotal = await this.getSubtotalValue();
            assert.equal(calculatedDonation.toFixed(2),subTotal);
            let taxes = await this.getTaxesValue();
            let fees = await this.getFeesValue();
            let calculatedTotal = parseFloat(subTotal) + parseFloat(taxes) + parseFloat(fees);
            let total = await this.getTotalValue();
            assert.equal(calculatedTotal.toFixed(2),total);

        }

        async donationIsDisplayed(){
            await this.isDisplayed(DONATIONS_PARENT,5000);
        }
        async getTicketsTotal(){
            let rawTickets =  await this.getSubstringOfPriceString(TICKET_COUNT_AND_TICKET_TOTAL_PARENT, 0, 1);
            let tickets = parseFloat(rawTickets);
            let ticketsToFixed = tickets.toFixed(2);
            return parseFloat(ticketsToFixed);
        }

        async getDiscountValue(){
            let rawDiscount = await this.getElementText(DISCOUNT_VALUE);
            let cleaned = rawDiscount.substring(1);
            let parsed = parseFloat(cleaned);
            return parsed;
        }
        async getDonationValue(){
            await this.timeout(1000)
            let rawDonation = await this.getSubstringOfPriceString(DONATIONS_PARENT, 0, 1)
            let donation = parseFloat(rawDonation);
            let donationToFixed = donation.toFixed(2);
            return donationToFixed ;
        }
        async getSubtotalValue(){
            let rawSubtotal =  await this.getSubstringOfPriceString(SUBTOTAL_PARENT, 0, 1)
            let subtotal = parseFloat( rawSubtotal );
            let subtotalToFixed = subtotal.toFixed(2);
            return subtotalToFixed ;
        }
        async getTaxesValue(){
            let rawTaxes =  await this.getSubstringOfPriceString(TAXES_PARENT, 0, 1);
            let taxes = parseFloat(rawTaxes);
            let taxesToFixed = taxes.toFixed(2);
            return taxesToFixed ;
        }
        async getFeesValue(){
            let rawFees =  await this.getSubstringOfPriceString(FEES_PARENT, 0, 1);
            let fees = parseFloat(rawFees);
            let feesToFixed = fees.toFixed(2);
            return feesToFixed ;
        }
        async getTotalValue(){
            let rawTotal =  await this.getSubstringOfPriceString(TOTAL_PARENT, 0, 1);
            let total = parseFloat(rawTotal);
            let totalToFixed = total.toFixed(2);
            return totalToFixed ;
        }

        async assertSummaryEqualsBeforeSignIn( ticketsTotal, ticketsSubtotal, taxes, fees, total){
            let afterTicketsTotal = await this.getTicketsTotal();
            let afterSubTotal = await this.getSubtotalValue();
            let afterTaxes = await this.getTaxesValue();
            let afterFees = await this.getFeesValue();
            let afterTotal = await this.getTotalValue();
            assert.equal(afterTicketsTotal,ticketsTotal);
            assert.equal(afterSubTotal,ticketsSubtotal);
            assert.equal(afterTaxes,taxes);
            assert.equal(afterFees,fees);
            assert.equal(afterTotal,total);
            await this.timeout(1000);
        }

        async assertDiscountElementsAreNotDisplayed(){
            let title = await this.returnElementsCount(DISCOUNT_TITLE);
            let value = await this.returnElementsCount(DISCOUNT_VALUE);
            let code = await this.returnElementsCount(APPLIED_DISCOUNT_CODE);
            assert.equal(title, 0);
            assert.equal(value, 0);
            assert.equal(code, 0);
        }

        async assertDiscountElementsAreDisplayed(promoCodeOne){
            let title = await this.returnElementsCount(DISCOUNT_TITLE);
            let value = await this.returnElementsCount(DISCOUNT_VALUE);
            let code = await this.returnElementsCount(APPLIED_DISCOUNT_CODE);
            let appliedMessage = await this.getElementText(APPLIED_DISCOUNT_CODE);
            assert.equal(appliedMessage, "Discounts Code: " + promoCodeOne);
            assert.equal(title, 1);
            assert.equal(value, 1);
            assert.equal(code, 1);
        }

        async assertNewPricePlusDiscountEqualTicketPrice(ticketOnePrice){
            let ticket = await this.getTicketsTotal();
            let discount = await this.getDiscountValue();
            let total = (ticket + discount);
            let ticketParsed = parseFloat(ticketOnePrice);
            assert.equal(total.toFixed(2),ticketParsed.toFixed(2) )
        }
    }
    module.exports = SummaryComponent;
