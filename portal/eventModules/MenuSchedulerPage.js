    const BasePage = require('../../BasePage');
    const MY_MENUS_NAV = { xpath: "//*[text()='My Menus ']"}
    const MENU_SCHEDULER_NAV = { xpath: "//*[text()='Menu Scheduler']"}



    class MenuSchedulerPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = MenuSchedulerPage;