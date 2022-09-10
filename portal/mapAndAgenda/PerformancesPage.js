    const BasePage = require('../../BasePage');
    const AddNewPerformanceModal = require('../portalModals/AddNewPerformanceModal');
    const ADD_PERFORMANCES_BUTTON = { xpath: "//*[text()='Add']"}
    const PERFORMANCES_TABLE = { tagName: 'table' }

    class PerformancesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isOnPerformancePage(){
            await this.isDisplayed(ADD_PERFORMANCES_BUTTON,5000, "addPerformanceBtn");
        }
        async clickAddPerformancesButton(){
            let newPerformance = new AddNewPerformanceModal(this.driver);
            await this.isOnPerformancePage();
            await this.click(ADD_PERFORMANCES_BUTTON);
            await newPerformance.createComedyPerformance();
            await this.isOnPerformancePage();

        }
    }
    module.exports = PerformancesPage;