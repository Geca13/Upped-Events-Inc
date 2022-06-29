    const BasePage = require('../../BasePage');
    const assert = require('assert')
    const TICKETS_QUESTION_MODAL = { tagName:"ticket-questions-modal"}
    const HEADING = {  className: "heading"}
    const SUB_HEADING = { className: "sub-heading"}
    const TICKET_NAME = {  className: "ticket-name"} //list
    const QUESTION_TITLE = { className: "question-title"} //list
    const RESPONSE_RADIO = { xpath: "//div[contains(@class, 'round')]//label" } //list
    const RESPONSE_RADIO_TEXT = { className: "text-title"} //list
    const FINISH_BUTTON = { className: "finish-btn"}

    class TicketQuestionsModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async questionsModalIsDisplayed(){
            await this.isDisplayed(FINISH_BUTTON,5000);
        }
        async answerSimpleYesNo(base,ticketOneName){
            await this.questionsModalIsDisplayed();
            let heading = await this.getElementText(HEADING);
            assert.equal(heading, "Before You Go...");
            let subHeading = await this.getElementText(SUB_HEADING);
            assert.equal(subHeading, "Please answer the following question");
            let ticketName = await this.getElementText(TICKET_NAME);
            assert.equal(ticketName, ticketOneName);
            let ticketQuestion = await this.getElementText(QUESTION_TITLE);
            assert.equal(ticketQuestion, base + " What do you prefer?");
            let optionOne = this.getElementTextFromAnArrayByIndex(RESPONSE_RADIO_TEXT,0);
            assert.equal(optionOne, base + " FANTA");
            let optionTwo = this.getElementTextFromAnArrayByIndex(RESPONSE_RADIO_TEXT,1);
            assert.equal(optionTwo, base + " COCA COLA");
            await this.clickElementReturnedFromAnArray(RESPONSE_RADIO,0);
            await this.click(FINISH_BUTTON);
        }
    }
    module.exports = TicketQuestionsModal
