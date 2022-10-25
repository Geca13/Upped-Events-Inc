    const BasePage = require('../../BasePage');
    const TableComponent = require('../portalComponents/TableComponent')
    const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
    const STAFF_NAME_COLUMN = { className: "column-name" }
    const STAFF_EMAIL_COLUMN = { className: "column-email" }
    const STAFF_POSITIONS_COLUMN = { className: "column-totalshiftpositions" }
    const STAFF_FUNCTION_COLUMN = { className: "column-functionname" }
    const STAFF_STATUS_COLUMN = { className: "column-statuslabel" }
    const STAFF_SOURCE_COLUMN = { className: "column-source" }
    const STAFF_ADDED_DATE_COLUMN = { className: "column-addedon" }
    const DEACTIVATED_STAFF_TOGGLE = {className: 'lc_off' }
    const ACTIVATED_STAFF_TOGGLE = {className: 'lc_on' }
    
    class StaffPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        
        async isOnStaffPage(){
            await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
        }

        async openStaffPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/staff")
            await this.isOnStaffPage();
        }

        async assertStaffTableHeadersNames(){
            await this.isOnStaffPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Name");
            await table.assertColumnNamesByIndex(2 ,"Email");
            await table.assertColumnNamesByIndex(3 ,"Positions");
            await table.assertColumnNamesByIndex(4 ,"Function");
            await table.assertColumnNamesByIndex(5 ,"Status");
            await table.assertColumnNamesByIndex(6 ,"Source");
            await table.assertColumnNamesByIndex(7 ,"Active/Inactive");
            await table.assertColumnNamesByIndex(8 ,"Added Date");

        }
    
    }
    module.exports = StaffPage;
