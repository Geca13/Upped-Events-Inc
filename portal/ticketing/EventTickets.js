    const BasePage = require('../../BasePage');
    const EVENT_TICKETS_HEADER = { xpath: "//*[text()='Event Tickets']"}
    const TICKETS_TAB = { xpath: "//*[text()='Tickets']"}
    const SEATING_PLAN_TAB = { xpath: "//*[text()='Seating Plan']"}
    const ANALYTICS_TAB = { xpath: "//*[text()='Analytics']"}
    const SETTINGS_TAB = { xpath: "//*[text()='Settings']"}


    class EventTickets extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventTicketsHeaderIsDisplayed(){
            await this.isDisplayed(EVENT_TICKETS_HEADER,5000)
        }

        async clickTicketsTab(){
            await this.click(TICKETS_TAB);
        }
        async clickSeatingPlanTab(){
            await this.click(SEATING_PLAN_TAB);
        }
        async clickAnalyticsTab(){
            await this.click(ANALYTICS_TAB);
        }
        async clickSettingsTab(){
            await this.click(SETTINGS_TAB);
        }

    }
    module.exports = EventTickets;