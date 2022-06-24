    const BasePage = require("../../BasePage");
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


    }
    module.exports = SummaryComponent;
