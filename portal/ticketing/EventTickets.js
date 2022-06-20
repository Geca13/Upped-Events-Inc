    const BasePage = require('../../BasePage');
    const EVENT_TICKETS_HEADER = { xpath: "//*[text()='Event Tickets']"}
    const TICKETS_NAV = { xpath: "//*[text()='Tickets']"}
    const SEATING_PLAN_NAV = { xpath: "//*[text()='Seating Plan']"}
    const ANALYTICS_NAV = { xpath: "//*[text()='Analytics']"}
    const SETTINGS_NAV = { xpath: "//*[text()='Settings']"}
    const BOX_OFFICE_NAV = { xpath: "//*[text()='Box Office']"}



    class EventTickets extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventTicketsHeaderIsDisplayed(){
            await this.isDisplayed(EVENT_TICKETS_HEADER,5000)
        }

        async clickTicketsTab(){
            await this.click(TICKETS_NAV);
        }
        async clickSeatingPlanTab(){
            await this.click(SEATING_PLAN_NAV);
        }
        async clickAnalyticsTab(){
            await this.click(ANALYTICS_NAV);
        }
        async clickSettingsTab(){
            await this.click(SETTINGS_NAV);
        }
        async clickBoxOfficeNav(){
            await this.click(BOX_OFFICE_NAV);
        }

    }
    module.exports = EventTickets;