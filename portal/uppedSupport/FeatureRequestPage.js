const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const OPEN_FEATURE_REQUEST_BUTTON = { xpath: "//*[text()='Open Feature Request']"}


class FeatureRequestPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnFeatureRequestPage(){
        await this.isDisplayed(OPEN_FEATURE_REQUEST_BUTTON, 5000)
    }

    async openFeatureRequestPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/u-support/feature-requests")
        await this.isOnFeatureRequestPage();
    }

    async assertFeatureRequestPageTableHeadersNames(){
        await this.isOnFeatureRequestPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0 ,"Case #");
        await table.assertColumnNamesByIndex(1 ,"Submitted Date");
        await table.assertColumnNamesByIndex(2 ,"Source");
        await table.assertColumnNamesByIndex(3 ,"Subject");
        await table.assertColumnNamesByIndex(4 ,"Last Updated");
        await table.assertColumnNamesByIndex(5 ,"Status")

    }

}
module.exports = FeatureRequestPage;