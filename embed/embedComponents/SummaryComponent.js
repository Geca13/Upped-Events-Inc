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
    const DISCOUNT_PARENT = { className: "discount-applied"} // //child index 0 text index 1 value


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
           let calculatedTotal = await this.convertPriceStringToDouble(subTotal) + await this.convertPriceStringToDouble(taxes) + await this.convertPriceStringToDouble(fees);
           let total = await this.getTotalValue();
           assert.equal(calculatedTotal.toFixed(2),total);
        }
        async calculateSubtotalAndTotalAfterDonationIsAdded(){
            let ticketsTotal = await this.getTicketsTotal();
            let donation = await this.getDonationValue();
            let calculatedDonation = await this.convertPriceStringToDouble(ticketsTotal) + await this.convertPriceStringToDouble(donation);
            let subTotal = await this.getSubtotalValue();
            assert.equal(calculatedDonation.toFixed(2),subTotal);
            let taxes = await this.getTaxesValue();
            let fees = await this.getFeesValue();
            let calculatedTotal = await this.convertPriceStringToDouble(subTotal) + await this.convertPriceStringToDouble(taxes) + await this.convertPriceStringToDouble(fees);
            let total = await this.getTotalValue();
            assert.equal(calculatedTotal.toFixed(2),total);
        }

        async donationIsDisplayed(){
            await this.isDisplayed(DONATIONS_PARENT,5000);
        }
        async getTicketsTotal(){
            let rawTickets =  await this.getSubstringOfPriceString(TICKET_COUNT_AND_TICKET_TOTAL_PARENT, 0, 1);
            let tickets = await this.convertPriceStringToDouble(rawTickets);
            return tickets.toFixed(2);
        }
        async getDonationValue(){
            let rawDonation =  await this.getSubstringOfPriceString(DONATIONS_PARENT, 0, 1)
            let donation = await this.convertPriceStringToDouble(rawDonation);
            return donation.toFixed(2);
        }
        async getSubtotalValue(){
            let rawSubtotal =  await this.getSubstringOfPriceString(SUBTOTAL_PARENT, 0, 1)
            let subtotal = await this.convertPriceStringToDouble( rawSubtotal );
            return subtotal.toFixed(2);
        }
        async getTaxesValue(){
            let rawTaxes =  await this.getSubstringOfPriceString(TAXES_PARENT, 0, 1);
            let taxes = await this.convertPriceStringToDouble(rawTaxes);
            return taxes.toFixed(2);
        }
        async getFeesValue(){
            let rawFees =  await this.getSubstringOfPriceString(FEES_PARENT, 0, 1);
            let fees = await this.convertPriceStringToDouble(rawFees);
            return fees.toFixed(2);
        }
        async getTotalValue(){
            let rawTotal =  await this.getSubstringOfPriceString(TOTAL_PARENT, 0, 1);
            let total = await this.convertPriceStringToDouble(rawTotal);
            return total.toFixed(2);
        }



    }
    module.exports = SummaryComponent;
