    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const CreateTicketQuestionPage = require('../../portalModals/CreateTicketQuestionModal')
    const ADD_BUTTON = { xpath: "//a[text()='Add']" }
    const QUESTION_OFF_TOGGLE = {className: 'lc_off' }
    const QUESTION_ON_TOGGLE = {className: 'lc_on' }
    const SAVED_QUESTION = { xpath: "//td[contains(@class, 'column-title')]//span" } //list

    class TicketQuestionsPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async clickActivateQuestionButton(index){
            await this.isDisplayed(QUESTION_OFF_TOGGLE,5000);
            await this.clickElementReturnedFromAnArray(QUESTION_OFF_TOGGLE,index);
            await this.driver.sleep(500);
        }

        async isOnTicketQuestionsPage(){
            await this.isDisplayed(ADD_BUTTON,5000);
        }
        async createSimpleYesNoQuestion(base){
            await this.isOnTicketQuestionsPage();
            await this.click(ADD_BUTTON);
            let createQuestionModal = new CreateTicketQuestionPage(this.driver);
            await createQuestionModal.createYesNoQuestion(base);
            await this.isDisplayed(SAVED_QUESTION, 5000);
            let question = await this.getTextFromElementOfArray(SAVED_QUESTION,0);
            assert.equal(question, base + " Yes & No question");
        }

        async createQuestionWithInput(base){
            await this.isOnTicketQuestionsPage();
            await this.driver.sleep(5000);
            await this.click(QUESTION_OFF_TOGGLE);
            await this.click(ADD_BUTTON);
            let createQuestionModal = new CreateTicketQuestionPage(this.driver);
            await createQuestionModal.createQuestionWithTextInput(base);
            await this.isDisplayed(SAVED_QUESTION, 5000);
            await this.driver.sleep(1000);
            let question = await this.getTextFromElementOfArray(SAVED_QUESTION,1);
            assert.equal(question, base + " Attendee Age");
        }

    }
    module.exports = TicketQuestionsPage;