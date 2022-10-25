const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent')
const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
const TITLE_COLUMN = { className: "column-title" }
const TYPE_COLUMN = { className: "column-typename" }
const METHOD_COLUMN = { className: "column-methodname" }
const CONDITION_COLUMN = { className: "column-totalconditions" }
const CREATION_DATE_COLUMN = { className: "column-created-at" }
const DEACTIVATED_SHIFT_TOGGLE = {className: 'lc_off' }
const ACTIVATED_SHIFT_TOGGLE = {className: 'lc_on' }

class NotificationPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnNotificationPage(){
        await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
    }

    async openNotificationPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/customer-engagements/notifications")
        await this.isOnNotificationPage();
    }

    async assertNotificationPageTableHeadersNames(){
        await this.isOnNotificationPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Title");
        await table.assertColumnNamesByIndex(2 ,"Type");
        await table.assertColumnNamesByIndex(3 ,"Method");
        await table.assertColumnNamesByIndex(4 ,"Conditions");
        await table.assertColumnNamesByIndex(5,"Creation Date");
        await table.assertColumnNamesByIndex(6,"Active/Inactive");

    }

}
module.exports = NotificationPage;