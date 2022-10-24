const BasePage = require('../../../BasePage');
const UserDetailsModal = require('../../portalModals/userDetailsModal/UserDetailsModal');
const TableComponent = require('../../portalComponents/TableComponent')
const QuestionsResponseModal = require('../../portalModals/QuestionsResponseModal')
const assert = require('assert')
const REPORTS_TABLE = { id: "dataTable" }
const ADD_BUTTON = { xpath: "//a[text()='Add']" }


class AnalyticsReportsPage extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnAnalyticsReportsPage(){
        await this.isDisplayed(REPORTS_TABLE,35000);
    }

    async openAnalyticsReportsPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/analytics/reports")
        await this.isOnAnalyticsReportsPage();
    }

    async assertAnalyticsReportsTableHeaders(){
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1, "Report Type");
        await table.assertColumnNamesByIndex(2, "Repeating");
        await table.assertColumnNamesByIndex(3, "Last Sent");
        await table.assertColumnNamesByIndex(4, "Report Date");
        await table.assertColumnNamesByIndex(5, "Shop");
        await table.assertColumnNamesByIndex(6, "Modifier");
        await table.assertColumnNamesByIndex(7, "Recipient");
    }
    
}
module.exports = AnalyticsReportsPage;