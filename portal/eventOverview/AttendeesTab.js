    const BasePage = require('../../BasePage');
    const UserDetailsModal = require('../portalModals/userDetailsModal/UserDetailsModal');
    const QuestionsResponseModal = require('../portalModals/QuestionsResponseModal')
    const assert = require('assert')
    const ATTENDEES_TABLE = { id: "dataTable" }
    const ATTENDEES_NAMES = { xpath: "//td[contains(@class, 'column-fullname')]//a[contains(@class, 'table-ticket-name')]//span" } //list
    const PURCHASED_TICKETS = { xpath: "//td[@class='column-totaltickets']//span" }
    const ATTENDEES_RESPONSES_COUNT = { xpath: "//td[contains(@class, 'column-totalquests')]//a[contains(@class, 'table-ticket-name')]//span" } //list



    class AttendeesTab extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnAttendeesTab(){
            await this.isDisplayed(ATTENDEES_TABLE,5000);
            await this.timeout(500)
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
            let responses = new QuestionsResponseModal(this.driver)
            await responses.assertTicketsForFirstTwoPurchases(base);

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
            let responses = new QuestionsResponseModal(this.driver)
            await responses.assertForTicketQuestionsResponsesForTheUpdated(base);
        }

        async getAlreadyPurchasedByCustomerFullName(customerFirstName, customerLastName){
            let fullName = customerFirstName + " " + customerLastName;
            let index = await this.returnIndexWhenTextIsKnown(ATTENDEES_NAMES, fullName);
            let purchasedTickets = await this.getElementTextFromAnArrayByIndex(PURCHASED_TICKETS, index);
            assert.notEqual(purchasedTickets, "0");
            return purchasedTickets;

        }
    }
    module.exports = AttendeesTab;