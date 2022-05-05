    const BasePage = require('../../BasePage');
    const DASHBOARD_HEADER = { xpath: "//*[text()='Dashboard']"}
    const CREATE_EVENT_BUTTON = { id: "createEventSide"}



    class DashboardPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtDashboardPage(){
            await this.isDisplayed(DASHBOARD_HEADER,5000)
        }
        async clickCreateEventButton(){
            await this.click(CREATE_EVENT_BUTTON);
        }
        

    }
    module.exports = DashboardPage;
