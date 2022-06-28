    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const CreateTicketQuestionPage = require('../../portalModals/CreateTicketQuestionModal')
    const ADD_BUTTON = { xpath: "//a[text()='Add']" }
    const SAVED_QUESTION = { xpath: "//td[contains(@class, 'column-title')]//span" } //list

    class TicketQuestionsPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnTicketQuestionsPage(){
            await this.isDisplayed(ADD_BUTTON,5000);
        }
        async createSimpleYesNoQuestion(base){
            await this.isOnTicketQuestionsPage();
            let createQuestionModal = new CreateTicketQuestionPage(this.driver);
            await createQuestionModal.createYesNoQuestion(base);
            await this.isDisplayed(SAVED_QUESTION, 5000);
            let question = this.getTextFromElementOfArray(SAVED_QUESTION,0);
            assert.equal(question, base + " Yes & No question");
        }

    }
    module.exports = TicketQuestionsPage;