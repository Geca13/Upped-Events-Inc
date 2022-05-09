    const BasePage = require('../../BasePage');
    const ADD_TICKETS_GROUP_BUTTON = { xpath: "//*[text()=' Add Group']"}
    const ADD_TICKET_BUTTON = { xpath: "//*[text()='Add']"}
    const ALL_TICKETS_TAB = { xpath: "//*[text()=' All ']"}
    const ACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Active ']"}
    const INACTIVE_TICKETS_TAB = { xpath: "//*[text()=' Inactive ']"}

    class TicketsTab extends BasePage {
        constructor(driver) {
            super(driver);
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
    module.exports = TicketsTab;