const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }


class SettledDisputesPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnSettledDisputesPage(){
        await this.isDisplayed(FILTER_BUTTON, 5000)
    }

    async openSettledDisputesPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/resolution/settled")
        await this.isOnSettledDisputesPage();
    }

    async assertSettledDisputesPageTableHeadersNames(){
        await this.isOnSettledDisputesPage();
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
module.exports = SettledDisputesPage;