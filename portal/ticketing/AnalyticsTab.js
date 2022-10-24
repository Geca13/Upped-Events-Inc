const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent')
const DATE_RANGE_PICKER = { xpath: "//input[@placeholder='Date Time']" }


class AnalyticsTab extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async openTicketsAnalyticsDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/ticket/analytics")
        await this.isOnTicketsAnalyticsPage();
    }

    async isOnTicketsAnalyticsPage(){
        await this.isDisplayed(DATE_RANGE_PICKER,5000);
    }

    async assertTicketsAnalyticsTableHeader(){
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0, "Zip Code");
        await table.assertColumnNamesByIndex(1, "Ticket Solds #");
        await table.assertColumnNamesByIndex(2, "Purchasers #");
        await table.assertColumnNamesByIndex(3, "Male");
        await table.assertColumnNamesByIndex(4, "Female");
        await table.assertColumnNamesByIndex(5, "Other");
        await table.assertColumnNamesByIndex(6, "Age <21");
        await table.assertColumnNamesByIndex(7, "Age 21-25");
        await table.assertColumnNamesByIndex(8, "Age 26-29");
        await table.assertColumnNamesByIndex(9, "Age 30-39");
        await table.assertColumnNamesByIndex(10, "Age 40-45");
        await table.assertColumnNamesByIndex(11, "Age 46+");
        await table.assertColumnNamesByIndex(12, "Unknown Age");

    }
}
module.exports = AnalyticsTab;