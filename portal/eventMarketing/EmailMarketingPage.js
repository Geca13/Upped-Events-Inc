const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent')
const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
const SHIFT_NAME_COLUMN = { className: "column-name" }
const SHIFT_POSITIONS_COLUMN = { className: "column-totalshiftpositions" }
const SHIFT_START_DATE_COLUMN = { className: "column-startdate" }
const SHIFT_END_DATE_COLUMN = { className: "column-enddate" }
const STAFF_SOURCE_COLUMN = { className: "column-source" }
const DEACTIVATED_SHIFT_TOGGLE = {className: 'lc_off' }
const ACTIVATED_SHIFT_TOGGLE = {className: 'lc_on' }

class EmailMarketingPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnEmailMarketingPage(){
        await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
    }

    async openEmailMarketingPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/engagement/emails")
        await this.isOnEmailMarketingPage();
    }

    async assertEmailMarketingPageTableHeadersNames(){
        await this.isOnEmailMarketingPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Title");
        await table.assertColumnNamesByIndex(2 ,"Sent");
        await table.assertColumnNamesByIndex(3 ,"Template Name");
        await table.assertColumnNamesByIndex(4 ,"Scheduled Date/Time");
        await table.assertColumnNamesByIndex(5,"Creation Date");

    }
    
}
module.exports = EmailMarketingPage;
