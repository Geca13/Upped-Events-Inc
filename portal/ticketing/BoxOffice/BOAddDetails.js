    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const ORDER_DETAILS_BOX = { id: "Orderdetail" };
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }
    const PROMO_INPUT = { xpath: "//div[@name='promoCode']//input" }
    const APPLY_BUTTON = { id: "applybtn" }
    const APPLIED_PROMOTION_DIV = { className: "discount-code" }
    const INVALID_DISCOUNT_CODE_ICON = { className: "icon-exclamation-triangle" }
    const TICKETS_NAME_PARENT = {  className:"justify-content-between"} //list
    const SUBTOTAL = { className: "sub-total"};
    const TOTAL = { className: "total-due-amount"};



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
        async addWrongPromoCode(){
            await this.sentKeys(PROMO_INPUT,"FgRgR1");
            await this.click(APPLY_BUTTON);
            await this.isDisplayed(INVALID_DISCOUNT_CODE_ICON,5000);
            await this.clearInputField(PROMO_INPUT);
        }
        async checkTicketsNamesInOrderDetails(ticketOneName,ticketTwoName,ticketThreeName,ticketFourName){
            let rawTicketOne = await this.getChildByIndex(TICKETS_NAME_PARENT,0,0);
            let rawTicketTwo = await this.getChildByIndex(TICKETS_NAME_PARENT,1,0);
            let rawTicketThree = await this.getChildByIndex(TICKETS_NAME_PARENT,2,0);
            let rawTicketFour = await this.getChildByIndex(TICKETS_NAME_PARENT,3,0);
            assert.equal(ticketOneName, rawTicketOne.substring(0,8));
            assert.equal(ticketTwoName, rawTicketTwo.substring(0,8));
            assert.equal(ticketThreeName, rawTicketThree.substring(0,8));
            assert.equal(ticketFourName, rawTicketFour.substring(0,8));
        }

         async checkTicketPricesInOrderDetails() {
             let rawTicketOne = await this.getChildByIndex(TICKETS_NAME_PARENT, 0, 1);
             let rawTicketTwo = await this.getChildByIndex(TICKETS_NAME_PARENT, 1, 1);
             let rawTicketThree = await this.getChildByIndex(TICKETS_NAME_PARENT, 2, 1);
             let rawTicketFour = await this.getChildByIndex(TICKETS_NAME_PARENT, 3, 1);
             assert.equal(await this.convertPriceStringToDouble("1.5"), await this.convertPriceStringToDouble(rawTicketOne.substring(2)));
             assert.equal(await this.convertPriceStringToDouble("1.2"), await this.convertPriceStringToDouble(rawTicketTwo.substring(2)));
             assert.equal(await this.convertPriceStringToDouble("0.75"), await this.convertPriceStringToDouble(rawTicketThree.substring(2)));
             assert.equal(await this.convertPriceStringToDouble("0.25"), await this.convertPriceStringToDouble(rawTicketFour.substring(2)));
         }

         async calculateTicketsSubTotal(){
             let subtotal = 0.00;
             for (let i = 0; i < 4; i++){
                 let rawAmount = await this.getChildByIndex(TICKETS_NAME_PARENT,i,1);
                 let amount = rawAmount.substring(2);
                 subtotal = subtotal + await this.convertPriceStringToDouble(amount);
             }
             let rawSubTotal = await this.getElementText(SUBTOTAL);
             assert.equal(await this.convertPriceStringToDouble(rawSubTotal.substring(2)),subtotal)
         }
        async calculateTicketsTotal(){
            let items = await this.findAll(TICKETS_NAME_PARENT)
            let calculatedTotal = 0.00;
            for (let i = 0; i < items.length; i++){
                let rawAmount = await this.getChildByIndex(TICKETS_NAME_PARENT,i,1);
                let amount = rawAmount.substring(2);
                calculatedTotal = calculatedTotal + await this.convertPriceStringToDouble(amount);
            }
            let rawSubTotal = await this.getElementText(SUBTOTAL);
            let subtotal = await this.convertPriceStringToDouble(rawSubTotal.substring(2));
            calculatedTotal = calculatedTotal - subtotal;
            let rawTotal = await this.getElementText(TOTAL);
            let total = await this.convertPriceStringToDouble(rawTotal.substring(2));
            assert.equal(calculatedTotal.toFixed(2),total)
        }



    }
    module.exports = BOAddDetails;