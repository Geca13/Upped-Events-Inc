    const BasePage = require('../../../BasePage');
    const ORDER_DETAILS_BOX = { id: "Orderdetail" };
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }
    const PROMO_INPUT = { xpath: "//div[@name='promoCode']//input" }
    const APPLY_BUTTON = { id: "applybtn" }
    const APPLIED_PROMOTION_DIV = { className: "discount-code" }



    class BOAddDetails extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnDetailsPage(){
            await this.isDisplayed(ORDER_DETAILS_BOX,5000);
        }
        async continueToPayment(){
            await this.isOnDetailsPage();
            await this.click(NEXT_BUTTON);
        }
        async addPromotionToTickets(promoCode){
            await this.sentKeys(PROMO_INPUT,promoCode);
            await this.click(APPLY_BUTTON);
            await this.isDisplayed(APPLIED_PROMOTION_DIV,5000);
            await this.click(NEXT_BUTTON);

        }
    }
    module.exports = BOAddDetails;