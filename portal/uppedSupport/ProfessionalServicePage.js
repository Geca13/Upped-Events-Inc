const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const REQUEST_SERVICE_BUTTON = { xpath: "//*[text()='Request Service']"}


class ProfessionalServicePage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnProfessionalServicePage(){
        await this.isDisplayed(REQUEST_SERVICE_BUTTON, 5000)
    }

    async openProfessionalServicePageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/u-support/professional-service")
        await this.isOnProfessionalServicePage();
    }

    async assertProfessionalServicePageTableHeadersNames(){
        await this.isOnProfessionalServicePage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0 ,"Service Id");
        await table.assertColumnNamesByIndex(1 ,"Service Name");
        await table.assertColumnNamesByIndex(2 ,"Time");
        await table.assertColumnNamesByIndex(3 ,"Service Type");
        await table.assertColumnNamesByIndex(4 ,"My Notes");
        await table.assertColumnNamesByIndex(5 ,"Submission Date");
        await table.assertColumnNamesByIndex(6 ,"Status");

    }

}
module.exports = ProfessionalServicePage;