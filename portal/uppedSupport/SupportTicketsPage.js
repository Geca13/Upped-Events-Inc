const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const OPEN_SUPPORT_CASE_BUTTON = { xpath: "//*[text()='Open Support Case']"}


class SupportTicketsPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnSupportTicketsPage(){
        await this.isDisplayed(OPEN_SUPPORT_CASE_BUTTON, 5000)
    }

    async openSupportTicketsPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/u-support/support-tickets")
        await this.isOnSupportTicketsPage();
    }

    async assertSupportTicketsPageTableHeadersNames(){
        await this.isOnSupportTicketsPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0 ,"Case #");
        await table.assertColumnNamesByIndex(1 ,"Submitted Date");
        await table.assertColumnNamesByIndex(2 ,"Submitted By");
        await table.assertColumnNamesByIndex(3 ,"Subject");
        await table.assertColumnNamesByIndex(4 ,"Type");
        await table.assertColumnNamesByIndex(5 ,"Priority");
        await table.assertColumnNamesByIndex(6 ,"Assisted By");
        await table.assertColumnNamesByIndex(7 ,"Resolved Date");
        await table.assertColumnNamesByIndex(8 ,"Status");

    }

}
module.exports = SupportTicketsPage;