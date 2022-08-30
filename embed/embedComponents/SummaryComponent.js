    const BasePage = require("../../BasePage");
    const assert = require('assert')
    const { expect } = require('chai');
    const DonationComponent = require('../../microsites/micrositesComponents/DonationComponent');
    const ORDER_TOTAL_HEADER = { className: "total-heading"}
    const TICKETS_COUNT = { id: "ticketCount" }
    const TICKETS_TOTAL = { id: "ticketCountTotal" }
    const DONATIONS_TITLE = { id: "donations" }
    const DONATIONS_TOTAL = { id: "donationsTotal" }
    const SUBTOTAL_TITLE = { id: "subtotal" }
    const SUBTOTAL_TOTAL = { id: "subtotalAmt" }
    const TAXES_TITLE = { id: "taxes" }
    const TAXES_TOTAL = { id: "taxesAmt" }
    const FEES_TITLE = { id: "fees" }
    const FEES_TOTAL = { id: "feesAmt" }
    const TOTAL_TITLE = { id: "totalDues" }
    const TOTAL_TOTAL = { id: "totalDuesAmt" }
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
            let calculatedDonation = ticketsTotal + parseFloat(donation);
            let subTotal = await this.getSubtotalValue();
            assert.equal(calculatedDonation.toFixed(2),subTotal);
            let taxes = await this.getTaxesValue();
            let fees = await this.getFeesValue();
            let calculatedTotal = parseFloat(subTotal) + parseFloat(taxes) + parseFloat(fees);
            let total = await this.getTotalValue();
            assert.equal(calculatedTotal.toFixed(2),total);

        }

        async donationIsDisplayed(){
            await this.isDisplayed(DONATIONS_TOTAL,5000);
        }

        async discountIsDisplayed(){
            await this.isDisplayed(DISCOUNT_VALUE, 5000);
        }
        async getTicketsTotal(){
            let rawTickets =  await this.getSubstringOfPriceString(TICKETS_TOTAL);
            let tickets = parseFloat(rawTickets);
            return tickets.toFixed(2);

        }

        async getDiscountValue(){
            let rawDiscount = await this.getSubstringOfPriceString(DISCOUNT_VALUE);
            let discount = parseFloat(rawDiscount);
            return discount.toFixed(2);
        }
        async getDonationValue(){
            await this.timeout(1000)
            let rawDonation = await this.getSubstringOfPriceString(DONATIONS_TOTAL)
            let donation = parseFloat(rawDonation);
            return  donation.toFixed(2);
            //return donationToFixed ;
        }
        async getSubtotalValue(){
            let rawSubtotal =  await this.getSubstringOfPriceString(SUBTOTAL_TOTAL)
            let subtotal = parseFloat(rawSubtotal);
            return subtotal.toFixed(2);
            //return subtotalToFixed ;
        }
        async getTaxesValue(){
            let rawTaxes =  await this.getSubstringOfPriceString(TAXES_TOTAL);
            let taxes = parseFloat(rawTaxes);
            return taxes.toFixed(2);
        }
        async getFeesValue(){
            let rawFees =  await this.getSubstringOfPriceString(FEES_TOTAL);
            let fees = parseFloat(rawFees);
            return  fees.toFixed(2);
        }
        async getTotalValue(){
            let rawTotal =  await this.getSubstringOfPriceString(TOTAL_TOTAL);
            let total = parseFloat(rawTotal);
            return total.toFixed(2);
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

        async assertTaxesAndFeesAreRefactoredToMatchNewPrice(fees,taxes){
            let afterPromoTaxes = await this.getTaxesValue();
            let afterPromoFees = await this.getFeesValue();
            expect(parseFloat(fees)).to.equal(parseFloat(afterPromoFees));
            expect(parseFloat(taxes)).to.be.greaterThan(parseFloat(afterPromoTaxes));
        }
        async returnTicketCount(){
            let tickets = await this.getElementText(TICKETS_COUNT);
            let count = tickets.substring(0, 1);
            return count;
        }
        async assertTotalEqualsThreePromotedPlusOneRegularTicketPrice(originalPrice, promotedPrice){
            let newTicketsTotal = await this.getTicketsTotal();
            let promotedTotal = (parseFloat(promotedPrice) * 3).toFixed(2);
            let ticketsTotal = parseFloat(promotedTotal) + parseFloat(originalPrice);
            assert.equal(parseFloat(newTicketsTotal), ticketsTotal);
        }
    }
    module.exports = SummaryComponent;
