    const BasePage = require('../../BasePage');
    const WELCOME_TAB = { id: "tab-welcome" }
    const MY_EVENTS_TAB = { id: "tab-myevent" }
    const FIND_EVENTS_TAB = { xpath: "//*[text()='Find Events']"}
    const VENDOR_EVENTS_TAB = { xpath: "//*[text()='Vendor Events']"}
    const REQUESTED_EVENTS_TAB = { xpath: "//*[text()='Requested Events']"}
    const MY_EVENTS_FILTER_DROPDOWN = { className: "event-listing-dropdown" }
    const MESSAGES_BUTTON = { xpath: "//*[text()='Messages']" }
    const CREATE_EVENT_BUTTON = { id: "createEventSide"}
    const DASHBOARD_HEADER = { xpath: "//*[text()='Dashboard']"}



    class Dashboard extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async clickMyEventsTab(){
            await this.click(MY_EVENTS_TAB);
        }

        async clickCreateEventButton(){
            await this.click(CREATE_EVENT_BUTTON);
        }
        async isAtDashboardPage(){
            await this.isDisplayed(DASHBOARD_HEADER,10000);
            //await this.driver.executeScript("document.body.style.transform='scale(0.8, 0.8)'");
            //await this.driver.executeScript("document.body.style.zoom = '80%'")
        }
    }
    module.exports = Dashboard;