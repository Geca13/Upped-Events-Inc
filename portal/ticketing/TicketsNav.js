    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const ADD_TICKETS_GROUP_BUTTON = { xpath: "//*[text()=' Add Group']" }
    const ADD_TICKET_BUTTON = { xpath: "//*[text()='Add']" }
    const ALL_TICKETS_TAB = { xpath: "//*[text()=' All ']" }
    const ACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Active ']" }
    const INACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Inactive ']" }
    const TICKET_TOGGLE = {className: 'lc_off' }
    const TICKET_ACTIVATION_MODAL = { tagName: 'response-message-popup' }
    const TICKET_ACTIVATION_YES_BUTTON = { xpath: "//*[text()='Yes']" }
    const TICKET_ACTIVATION_NO_BUTTON = { xpath: "//*[text()='No']" }
    const TICKET_ACTIVATION_TEXT_INPUT = { tagName: 'textarea' }



    class TicketsNav extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async createdTicketIsInTheTable(ticketName){
            await this.isDisplayed(By.xpath("//*[text()='"+ticketName+"']"),5000);
        }
        async addTicketButtonIsDisplayed(){
            await this.isDisplayed(ADD_TICKET_BUTTON, 5000)
        }
        async activateTicketModalIsDisplayed(){
            await this.isDisplayed(TICKET_ACTIVATION_MODAL, 5000)
        }

        async clickActivateTicketToggle(index){
            let toggle = await this.getElementFromAnArrayByIndex(TICKET_TOGGLE,index);
            await toggle.click();
        }
        async confirmActivationButton(){
            await this.click(TICKET_ACTIVATION_YES_BUTTON);
        }

        async clickAddTicketGroupButton(){
            await this.click(ADD_TICKETS_GROUP_BUTTON);
        }
        async clickAddTicketButton(){
            await this.click(ADD_TICKET_BUTTON);
        }
        async clickAllTicketsTab(){
            await this.click(ALL_TICKETS_TAB);
        }
        async clickActiveTicketsTab(){
            await this.click(ACTIVE_TICKETS_TAB);
        }
        async clickInactiveTicketsTab(){
            await this.click(INACTIVE_TICKETS_TAB);
        }
    }
    module.exports = TicketsNav;