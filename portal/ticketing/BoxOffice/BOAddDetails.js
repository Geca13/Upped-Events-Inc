    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const { expect } = require('chai');
    const QUESTION_TITLES = { className: "inner-heading"};
    const QUESTIONS = { className: "questions"};
    const ORDER_DETAILS_BOX = { id: "Orderdetail" };
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }
    const PROMO_INPUT = { xpath: "//div[@name='promoCode']//input" }
    const APPLY_BUTTON = { id: "applybtn" }
    const APPLIED_PROMOTION_DIV = { className: "discount-code" }
    const INVALID_DISCOUNT_CODE_ICON = { className: "icon-exclamation-triangle" }
    const TICKETS_NAME_PARENT = {  className:"justify-content-between"} //list
    const SUBTOTAL = { className: "sub-total"};
    const TOTAL = { className: "total-due-amount"};
    const VALUES = { className: "w-7" };
    const QUESTIONS_ROUND_CHECKBOXES = { xpath: "//div[contains(@class, 'round')]//label"}
    const QUESTION_INPUTS = { tagName: "textarea"}
    const RESPONSE_RADIO_TEXT = { className: "text-title"}



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
             assert.equal(await this.convertPriceStringToDouble("1"), await this.convertPriceStringToDouble(rawTicketOne.substring(2)));
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

        async confirmAllValuesAreZeroesAfter100PercentPromotionAndConfirmCompletion(promoCode){
            let beforeRawSubTotal = await this.getElementText(SUBTOTAL);
            let beforeSubtotal = await this.convertPriceStringToDouble(beforeRawSubTotal.substring(2));
            let beforeRawTaxes = await this.getElementTextFromAnArrayByIndex(VALUES, 7);
            let beforeRawFees = await this.getElementTextFromAnArrayByIndex(VALUES, 8);
            let beforeTaxes = await this.convertPriceStringToDouble(beforeRawTaxes.substring(2));
            let beforeFees = await this.convertPriceStringToDouble(beforeRawFees.substring(2));
            let beforeRawDonation = await this.getElementTextFromAnArrayByIndex(VALUES, 10);
            let beforeDonation = await this.convertPriceStringToDouble(beforeRawDonation.substring(2));
            assert.notEqual(0.00, beforeSubtotal);
            assert.notEqual(0.00, beforeTaxes);
            assert.notEqual(0.00, beforeFees);
            assert.equal(0.00,beforeDonation);
            await this.addPromotionToTickets(promoCode);
            let afterRawSubTotal = await this.getElementText(SUBTOTAL);
            let afterSubtotal = await this.convertPriceStringToDouble(afterRawSubTotal.substring(2));
            let afterRawTaxes = await this.getElementTextFromAnArrayByIndex(VALUES, 7);
            let afterRawFees = await this.getElementTextFromAnArrayByIndex(VALUES, 8);
            let afterTaxes = await this.convertPriceStringToDouble(afterRawTaxes.substring(2));
            let afterFees = await this.convertPriceStringToDouble(afterRawFees.substring(2));
            let afterRawDonation = await this.getElementTextFromAnArrayByIndex(VALUES, 10);
            let afterDonation = await this.convertPriceStringToDouble(afterRawDonation.substring(2));
            assert.equal(0.00, afterSubtotal);
            assert.equal(0.00, afterTaxes);
            assert.equal(0.00, afterFees);
            assert.equal(beforeSubtotal, afterDonation);
            assert.notEqual(0.00,afterDonation);

        }

        async checkForNumberOfCheckBoxes(count){
            let checkboxes = await this.returnElementsCount(QUESTIONS_ROUND_CHECKBOXES);
            assert.equal(count, checkboxes);
        }
        async checkForNumberOfTextInputs(count){
            let inputs = await this.returnElementsCount(QUESTION_INPUTS);
            assert.equal(count, inputs);
        }
        async checkForNumberOfQuestions(count){
            let questions = await this.returnElementsCount(QUESTIONS);
            assert.equal(count, questions);
        }
        async checkForNumberOfQuestionTitles(count){
            let titles = await this.returnElementsCount(QUESTION_TITLES);
            assert.equal(count, titles);
        }
        async checkForNumberOfDisplayedOptionLabels(count){
            let labels = await this.returnElementsCount(RESPONSE_RADIO_TEXT);
            assert.equal(count, labels);
        }
        async checkForOptionsLabelByIndex(index,label){
            let l = this.getElementTextFromAnArrayByIndex(RESPONSE_RADIO_TEXT,index);
            assert.equal(l, label);
        }
        async checkQuestionForm(checkboxes, inputs,questions, titles, labels){
            await this.checkForNumberOfCheckBoxes(checkboxes);
            await this.checkForNumberOfTextInputs(inputs);
            await this.checkForNumberOfQuestions(questions);
            await this.checkForNumberOfQuestionTitles(titles);
            await this.checkForNumberOfDisplayedOptionLabels(labels)
        }
        async checkForTitleNameByIndex(index,titleName){
            let title = this.getElementTextFromAnArrayByIndex(QUESTION_TITLES,index);
            assert.equal(title, titleName);
        }
        async checkForQuestionByIndex(index,question){
            let q = this.getElementTextFromAnArrayByIndex(QUESTIONS,index);
            assert.equal(q, question);
        }

        async answerFirstScenario(){
            await this.clickAllElementsReturnedFromArray(QUESTIONS_ROUND_CHECKBOXES, 0);
            await this.clickAllElementsReturnedFromArray(QUESTIONS_ROUND_CHECKBOXES, 3);
            await this.sendKeysToElementReturnedFromAnArray(QUESTION_INPUTS, 1, "38");
        }



    }
    module.exports = BOAddDetails;