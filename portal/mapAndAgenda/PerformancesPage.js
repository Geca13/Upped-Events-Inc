    const BasePage = require('../../BasePage');
    const AddNewPerformanceModal = require('../portalModals/AddNewPerformanceModal');
    const TableComponent = require("../portalComponents/TableComponent");
    const ADD_PERFORMANCES_BUTTON = { xpath: "//*[text()='Add']"}
    const PERFORMANCES_TABLE = { tagName: 'table' }

    class PerformancesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async openPerformancesPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/schedules/performances")
            await this.isOnPerformancePage();
        }

        async isOnPerformancePage(){
            await this.isDisplayed(ADD_PERFORMANCES_BUTTON,5000);
        }
        async clickAddPerformancesButton(){
            let newPerformance = new AddNewPerformanceModal(this.driver);
            await this.isOnPerformancePage();
            await this.click(ADD_PERFORMANCES_BUTTON);
            await newPerformance.createComedyPerformance();
            await this.isOnPerformancePage();

        }

        async assertPerformancesTableHeaders(){
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1, "Name");
            await table.assertColumnNamesByIndex(2, "Location");
            await table.assertColumnNamesByIndex(3, "Start Date/Time");
            await table.assertColumnNamesByIndex(4, "End Date/Time");
            await table.assertColumnNamesByIndex(5, "Confirmed");

        }
    }
    module.exports = PerformancesPage;