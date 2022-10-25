const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }


class PendingDisputesPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnPendingDisputesPage(){
        await this.isDisplayed(FILTER_BUTTON, 5000)
    }

    async openPendingDisputesPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/resolution/disputes")
        await this.isOnPendingDisputesPage();
    }

    async assertPendingDisputesPageTableHeadersNames(){
        await this.isOnPendingDisputesPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"User");
        await table.assertColumnNamesByIndex(2 ,"Raised By");
        await table.assertColumnNamesByIndex(3 ,"User Role");
        await table.assertColumnNamesByIndex(4 ,"Raised To");
        await table.assertColumnNamesByIndex(5 ,"Dispute Type");
        await table.assertColumnNamesByIndex(6 ,"Comments");
        await table.assertColumnNamesByIndex(7 ,"Date Raise");

    }

}
module.exports = PendingDisputesPage;