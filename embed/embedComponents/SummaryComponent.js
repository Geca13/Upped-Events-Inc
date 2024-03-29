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
    const SUBTOTAL_TOTAL = { xpath: "//div[contains(@class , 'sub-total')]//div[@id='subtotalAmt']" }
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
            let calculatedDonation = parseFloat(ticketsTotal) + parseFloat(donation);
            let subTotal = await this.getSubtotalValue();
            assert.equal(calculatedDonation.toFixed(2),subTotal);
            let taxes = await this.getTaxesValue();
            let fees = await this.getFeesValue();
            let calculatedTotal = parseFloat(subTotal) + parseFloat(taxes) + parseFloat(fees);
            let total = await this.getTotalValue();
            assert.equal(calculatedTotal.toFixed(2),total);

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
            await this.timeout(1000)
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
            let total = (parseFloat(ticket) + parseFloat(discount));
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

        async assertTicketCountInOrderTotalInOrderDetails(number){
            let tickets = await this.returnTicketCount();
            assert.equal(tickets, number);
        }
        async assertTotalEqualsThreePromotedPlusOneRegularTicketPrice(originalPrice, promotedPrice){
            let newTicketsTotal = await this.getTicketsTotal();
            let promotedTotal = (parseFloat(promotedPrice) * 3).toFixed(2);
            let ticketsTotal = parseFloat(promotedTotal) + parseFloat(originalPrice);
            assert.equal(parseFloat(newTicketsTotal), ticketsTotal);
        }

        async calculateAndAssertTotalEquals10PromotedTicketsForOriginalHighestPriceAnd10RegularForLowerPriced(ticketTwoPrice, ticketFourPrice){
            await this.timeout(500)
            let toBeDiscounted = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedTotal = toBeDiscounted * 10;
            let notToBeDiscounted = parseFloat(ticketFourPrice) * 10 ;
            let total = discountedTotal + notToBeDiscounted;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals10PromotedTicketsByEachTicketPromotedPrice(ticketTwoPrice, ticketFourPrice){
            await this.timeout(500)
            let toBeDiscountedOne = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 4;
            let toBeDiscountedTwo = parseFloat(ticketFourPrice) - (parseFloat(ticketFourPrice) * (75/100));
            let discountedTwoTotal = toBeDiscountedTwo.toFixed(2) * 6;
            let total = discountedOneTotal + discountedTwoTotal;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals10PromotedTicketsByEachTicketPromotedPricePlusExceedingTicketsByRegularPrice(ticketTwoPrice, ticketFourPrice){
            await this.timeout(500)
            let toBeDiscountedOne = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 4;
            let toBeDiscountedTwo = parseFloat(ticketFourPrice) - (parseFloat(ticketFourPrice) * (75/100));
            let discountedTwoTotal = toBeDiscountedTwo.toFixed(2) * 6;
            let notToBeDiscounted = parseFloat(ticketFourPrice) * 3 ;
            let total = discountedOneTotal + discountedTwoTotal + notToBeDiscounted;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals15PromotedTicketsForNotLimitedTicket(ticketThreePrice){
            await this.timeout(500)
            let toBeDiscountedOne = parseFloat(ticketThreePrice) - (parseFloat(ticketThreePrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 15;
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, discountedOneTotal)
        }

        async calculateAndAssertTotalEquals20PromotedTicketsPlus5RegularPriceForNotLimitedTicket(ticketThreePrice){
            await this.timeout(500)
            let toBeDiscountedOne = parseFloat(ticketThreePrice) - (parseFloat(ticketThreePrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 20;
            let notToBeDiscounted = parseFloat(ticketThreePrice) * 5 ;
            let total = discountedOneTotal + notToBeDiscounted;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals20PromotedTicketsByEachTicketPromotedPricePlusExceeding5TicketsByRegularPrice(ticketTwoPrice, ticketThreePrice, ticketFourPrice){
            await this.timeout(500);
            let toBeDiscountedOne = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 7;
            let toBeDiscountedTwo = parseFloat(ticketThreePrice) - (parseFloat(ticketThreePrice) * (75/100));
            let discountedTwoTotal = toBeDiscountedTwo.toFixed(2) * 13;
            let notToBeDiscounted = parseFloat(ticketFourPrice) * 4 ;
            let notToBeDiscountedTwo = parseFloat(ticketThreePrice) ;
            let total = discountedOneTotal + discountedTwoTotal + notToBeDiscounted + notToBeDiscountedTwo;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals20PromotedTicketsTopPrice10NotLimited10(ticketTwoPrice, ticketThreePrice, ticketFourPrice){
            await this.timeout(500);
            let toBeDiscountedOne = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 10;
            let notToBeDiscounted = parseFloat(ticketFourPrice) * 10 ;
            let toBeDiscountedThree = parseFloat(ticketThreePrice) - (parseFloat(ticketThreePrice) * (75/100));
            let discountedThreeTotal = toBeDiscountedThree.toFixed(2) * 10;
            let total = discountedOneTotal + notToBeDiscounted + discountedThreeTotal;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }

        async calculateAndAssertTotalEquals20PromotedTicketsTopPrice10NotLimited10RestOnRegular(ticketTwoPrice, ticketThreePrice, ticketFourPrice){
            await this.timeout(500);
            let toBeDiscountedOne = parseFloat(ticketTwoPrice) - (parseFloat(ticketTwoPrice) * (75/100));
            let discountedOneTotal = toBeDiscountedOne.toFixed(2) * 10;
            let notToBeDiscounted = parseFloat(ticketTwoPrice) * 2 ;
            let notToBeDiscountedTwo = parseFloat(ticketFourPrice) * 6 ;
            let toBeDiscountedThree = parseFloat(ticketThreePrice) - (parseFloat(ticketThreePrice) * (75/100));
            let discountedThreeTotal = toBeDiscountedThree.toFixed(2) * 10;
            let notToBeDiscountedThree = parseFloat(ticketThreePrice) * 2;
            let total = discountedOneTotal + notToBeDiscountedThree + notToBeDiscounted + discountedThreeTotal + notToBeDiscountedTwo;
            let totalToFixed = total.toFixed(2);
            let summaryTicketsTotal = await this.getTicketsTotal();
            assert.equal(summaryTicketsTotal, totalToFixed)
        }
    }
    module.exports = SummaryComponent;
