    const BasePage = require('../../BasePage');
    const MY_MENUS_NAV = { xpath: "//*[text()='My Menus ']"}
    const MENU_SCHEDULER_NAV = { xpath: "//*[text()='Menu Scheduler']"}
    const SELECT_EVENT_LABEL = { xpath: "//label[text()='Select Event']"}



    class MenuSchedulerPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnMenusScheduler(){
            await this.isDisplayed(SELECT_EVENT_LABEL,5000, "menuScheduler");
        }
        async clickMyMenusNav(){
            await this.isOnMenusScheduler();
            await this.click(MY_MENUS_NAV);
        }
    }
    module.exports = MenuSchedulerPage;