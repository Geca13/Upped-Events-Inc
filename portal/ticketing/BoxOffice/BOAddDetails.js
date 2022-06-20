    const BasePage = require('../../../BasePage');
    const ORDER_DETAILS_BOX = { id: "Orderdetail" };
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }



    class BOAddDetails extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnDetailsPage(){
            await this.isDisplayed(ORDER_DETAILS_BOX,5000);
        }
        async continueToPayment(){
            await this.isOnDetailsPage();
            await this.click(NEXT_BUTTON);;
        }
    }
    module.exports = BOAddDetails;