    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const { expect } = require('chai');
    const QUESTION_TITLES = { className: "inner-heading"};
    const QUESTIONS = { className: "question"};
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
            await this.timeout(500);
            await this.sentKeys(PROMO_INPUT,promoCode);
            await this.timeout(500);
            await this.click(APPLY_BUTTON);
            await this.timeout(500);
            await this.isDisplayed(APPLIED_PROMOTION_DIV,5000);
        }
        async addWrongPromoCode(){
            await this.sentKeys(PROMO_INPUT,"FgRgR1");
            await this.click(APPLY_BUTTON);
            await this.isDisplayed(INVALID_DISCOUNT_CODE_ICON,5000);
            await this.clearInputField(PROMO_INPUT);
            await this.timeout(500)

        }
        async checkTicketsNamesInOrderDetails(ticketOneName,ticketTwoName,ticketThreeName,ticketFourName){
            let rawTicketOne = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,0,0);
            let rawTicketTwo = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,1,0);
            let rawTicketThree = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,2,0);
            let rawTicketFour = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,3,0);
            assert.equal(ticketOneName, rawTicketOne.substring(0,8));
            assert.equal(ticketTwoName, rawTicketTwo.substring(0,8));
            assert.equal(ticketThreeName, rawTicketThree.substring(0,8));
            assert.equal(ticketFourName, rawTicketFour.substring(0,8));
        }

         async checkTicketPricesInOrderDetails() {
             let rawTicketOne = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT, 0, 1);
             let ticketOne = rawTicketOne.substring(2);
             let rawTicketTwo = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT, 1, 1);
             let ticketTwo = rawTicketTwo.substring(2);
             let rawTicketThree = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT, 2, 1);
             let ticketThree = rawTicketThree.substring(2);
             let rawTicketFour = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT, 3, 1);
             let ticketFour = rawTicketFour.substring(2);

             assert.equal(parseFloat("1"), parseFloat(ticketOne));
             assert.equal(parseFloat("1.2"), parseFloat(ticketTwo));
             assert.equal(parseFloat("0.75"), parseFloat(ticketThree));
             assert.equal(parseFloat("0.25"), parseFloat(ticketFour));
         }

         async calculateTicketsSubTotal(){
             let subtotal = 0.00;
             for (let i = 0; i < 4; i++){
                 let rawAmount = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,i,1);
                 let amount = rawAmount.substring(2);
                 subtotal = subtotal + parseFloat(amount);
             }
             let rawSubTotal = await this.getElementText(SUBTOTAL);
             let substring = rawSubTotal.substring(2);
             let extracted = parseFloat(substring);
             assert.equal(extracted,subtotal)
         }
        async calculateTicketsTotal(){
            let items = await this.findAll(TICKETS_NAME_PARENT)
            let calculatedTotal = 0.00;
            for (let i = 0; i < items.length; i++){
                let rawAmount = await this.getChildTextByParentIndexAndChildIndex(TICKETS_NAME_PARENT,i,1);
                let amount = rawAmount.substring(2);
                calculatedTotal = calculatedTotal + parseFloat(amount);
            }
            let rawSubTotal = await this.getElementText(SUBTOTAL);
            let subtotalSubstring = rawSubTotal.substring(2);
            let subtotal = parseFloat(subtotalSubstring);
            calculatedTotal = calculatedTotal - subtotal;
            let calcFixedTotal = calculatedTotal.toFixed(2);
            let rawTotal = await this.getElementText(TOTAL);
            let totalSubstring = rawTotal.substring(2);
            let total = parseFloat(totalSubstring);
            assert.equal(calcFixedTotal,total)
        }

        async confirmAllValuesAreZeroesAfter100PercentPromotionAndConfirmCompletion(promoCode){
            let beforeRawSubTotal = await this.getElementText(SUBTOTAL);
            let beforeRawSubTotalSubString = beforeRawSubTotal.substring(2);
            let beforeSubtotal = parseFloat(beforeRawSubTotalSubString);

            let beforeRawTaxes = await this.getElementTextFromAnArrayByIndex(VALUES, 7);
            let beforeRawFees = await this.getElementTextFromAnArrayByIndex(VALUES, 8);

            let beforeRawTaxesSubString = beforeRawTaxes.substring(2)
            let beforeTaxes = parseFloat(beforeRawTaxesSubString);

            let beforeFeesSubString = beforeRawFees.substring(2);
            let beforeFees = parseFloat(beforeFeesSubString);

            let beforeRawDonation = await this.getElementTextFromAnArrayByIndex(VALUES, 10);

            let beforeRawDonationSubString = beforeRawDonation.substring(2);
            let beforeDonation = parseFloat(beforeRawDonationSubString);
            assert.notEqual(0.00, beforeSubtotal);
            assert.notEqual(0.00, beforeTaxes);
            assert.notEqual(0.00, beforeFees);
            assert.equal(0.00,beforeDonation);
            await this.addPromotionToTickets(promoCode);
            await this.timeout(1000);
            let afterRawSubTotal = await this.getElementText(SUBTOTAL);
            let afterRawSubTotalSubString = afterRawSubTotal.substring(2);
            let afterSubtotal = parseFloat(afterRawSubTotalSubString);

            let afterRawTaxes = await this.getElementTextFromAnArrayByIndex(VALUES, 7);
            let afterRawFees = await this.getElementTextFromAnArrayByIndex(VALUES, 8);

            let afterRawTaxesSubString = afterRawTaxes.substring(2)
            let afterTaxes = parseFloat(afterRawTaxesSubString);

            let afterFeesSubString = afterRawFees.substring(2);
            let afterFees = parseFloat(afterFeesSubString);

            let afterRawDonation = await this.getElementTextFromAnArrayByIndex(VALUES, 10);

            let afterRawDonationSubString = afterRawDonation.substring(2);
            let afterDonation = parseFloat(afterRawDonationSubString);
            assert.equal( afterSubtotal,0.00);
            assert.equal( afterTaxes, 0.00);
            assert.equal( afterFees ,0.00);
            assert.equal(afterDonation, beforeSubtotal);
            assert.notEqual(afterDonation, 0.00,);

        }

        async checkForNumberOfCheckBoxes(count){
            await this.isDisplayed(QUESTIONS_ROUND_CHECKBOXES,5000)
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
            let l = await this.getElementTextFromAnArrayByIndex(RESPONSE_RADIO_TEXT,index);
            assert.equal(l, label);
        }

        async checkQuestionForm(checkboxes, inputs,questions, titles, labels){
            await this.isOnDetailsPage();
            await this.timeout(2000);
            await this.checkForNumberOfCheckBoxes(checkboxes);
            await this.checkForNumberOfTextInputs(inputs);
            await this.checkForNumberOfQuestions(questions);
            await this.checkForNumberOfQuestionTitles(titles);
            await this.checkForNumberOfDisplayedOptionLabels(labels)
        }
        async checkForTitleNameByIndex(index,titleName){
            let title = await this.getElementTextFromAnArrayByIndex(QUESTION_TITLES,index);
            assert.equal(title, titleName);
        }
        async checkForQuestionByIndex(index,question){
            let q = await this.getElementTextFromAnArrayByIndex(QUESTIONS,index);
            assert.equal(q, question);
        }

        async answerFirstScenario(){
            await this.clickElementReturnedFromAnArray(QUESTIONS_ROUND_CHECKBOXES, 1);
            await this.clickElementReturnedFromAnArray(QUESTIONS_ROUND_CHECKBOXES, 3);
            await this.sendKeysToElementReturnedFromAnArray(QUESTION_INPUTS, 1, "38");

        }

    }
    module.exports = BOAddDetails;