    const BasePage = require('../../BasePage');
    const UserDetailsModal = require('../portalModals/userDetailsModal/UserDetailsModal');
    const assert = require('assert')
    const ATTENDEES_TABLE = { id: "dataTable" }
    const ATTENDEES_NAMES = { xpath: "//td[contains(@class, 'column-fullname')]//a[contains(@class, 'table-ticket-name')]//span" } //list
    const ATTENDEES_RESPONSES_COUNT = { xpath: "//td[contains(@class, 'column-totalquests')]//a[contains(@class, 'table-ticket-name')]//span" } //list
    const MODAL_HEADER = { className: "popup-header-title" };
    const QUESTIONS_NAMES = { xpath: "//h5[contains(@class, 'mb-1')]" } ; //list
    const RADIO_ANSWERS = { xpath: "//p[contains(@class, 'mb-1')]" } ; //list
    const INPUT_ANSWERS = { xpath: "//ol[contains(@class, 'm-l30')]//small" } ; //list
    const ANSWERS_TIMES = { xpath: "//div[contains(@class, 'justify-content-between')]//small" } ; //list


    class AttendeesTab extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnAttendeesTab(){
            await this.isDisplayed(ATTENDEES_TABLE,5000);
        }
        async checkForCustomerFullNameByIndex(index , firstName, lastName){
            await this.isOnAttendeesTab();
            let customer = await this.getElementTextFromAnArrayByIndex(ATTENDEES_NAMES, index);
            assert.equal(customer, firstName + " " + lastName);
        }
        async clickOnCustomerByIndexToOpenUserDetailsModal(index){
            await this.click(ATTENDEES_NAMES, index);
        }
        async checkForTicketQuestionsResponsesForTheFirstTwoPurchases(base){
            await this.isOnAttendeesTab();
            await this.clickElementReturnedFromAnArray(ATTENDEES_RESPONSES_COUNT, 2);
            await this.isDisplayed(MODAL_HEADER, 5000);
            await this.timeout(1000);
            let firstAnsweredQuestion = await this.getElementTextFromAnArrayByIndex(QUESTIONS_NAMES, 0);
            assert.equal(firstAnsweredQuestion, base + " Yes & No question")
            let firstRadioAnswer = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 0);
            assert.equal(firstRadioAnswer, base + " FANTA")
            let secondAnsweredQuestion = await this.getElementTextFromAnArrayByIndex(QUESTIONS_NAMES, 1);
            assert.equal(secondAnsweredQuestion, base + " Attendee Age")
            let secondRadioAnswer = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 1);
            assert.equal(secondRadioAnswer, base + " Under 18")
            let secondInputAnswer = await this.getElementTextFromAnArrayByIndex(INPUT_ANSWERS, 1);
            assert.equal(secondInputAnswer, "17");

            /*let thirdAnsweredQuestion = await this.getElementFromAnArrayByIndex(QUESTIONS_NAMES, 2);
            assert.equal(thirdAnsweredQuestion, base + " Yes & No question")
            let thirdRadioAnswer = await this.getElementFromAnArrayByIndex(RADIO_ANSWERS, 2);
            assert.equal(thirdRadioAnswer, base + " COCA COLA")
            let fourthAnsweredQuestion = await this.getElementFromAnArrayByIndex(QUESTIONS_NAMES, 3);
            assert.equal(fourthAnsweredQuestion, base + " Attendee Age")
            let fourthRadioAnswer = await this.getElementFromAnArrayByIndex(RADIO_ANSWERS, 3);
            assert.equal(fourthRadioAnswer, base + " 18 and Over")
            let fourthInputAnswer = await this.getElementFromAnArrayByIndex(INPUT_ANSWERS, 3);
            assert.equal(fourthInputAnswer, "38");*/
        }

        async checkForTicketQuestionsResponsesForTheUpdated(base,index){
            await this.isOnAttendeesTab();
            await this.clickElementReturnedFromAnArray(ATTENDEES_RESPONSES_COUNT, index);
            await this.isDisplayed(MODAL_HEADER, 5000);
            await this.timeout(1500);
            let firstAnsweredQuestion = await this.getElementTextFromAnArrayByIndex(QUESTIONS_NAMES, 0);
            assert.equal(firstAnsweredQuestion, base + " Yes & No question")
            let firstQuestionFirstRadioAnswer = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 0);
            assert.equal(firstQuestionFirstRadioAnswer, base + " FANTA")
            let firstQuestionSecondRadioAnswer = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 1);
            assert.equal(firstQuestionSecondRadioAnswer, base + " COCA COLA")
            let firstQuestionThirdRadioAnswerInCombo = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 2);
            assert.equal(firstQuestionThirdRadioAnswerInCombo, base + " OTHER")
            let firstQuestionFirstInputAnswerInCombo = await this.getElementTextFromAnArrayByIndex(INPUT_ANSWERS, 2);
            assert.equal(firstQuestionFirstInputAnswerInCombo, "Heineken Alcohol Free");
            let secondAnsweredQuestion = await this.getElementTextFromAnArrayByIndex(QUESTIONS_NAMES, 1);
            assert.equal(secondAnsweredQuestion, base + " Attendee Age")
            let secondQuestionFirstRadioAnswerInCombo = await this.getElementTextFromAnArrayByIndex(RADIO_ANSWERS, 3);
            assert.equal(secondQuestionFirstRadioAnswerInCombo, base + " Under 18")
            let secondQuestionFirstInputAnswerInCombo = await this.getElementTextFromAnArrayByIndex(INPUT_ANSWERS, 3);
            assert.equal(secondQuestionFirstInputAnswerInCombo, "15");
        }
    }
    module.exports = AttendeesTab;