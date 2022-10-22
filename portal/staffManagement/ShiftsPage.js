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
    
    class ShiftsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
    
        async isOnShiftsPage(){
            await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
        }
    
        async assertShiftsTableHeadersNames(){
    
            await this.isOnShiftsPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(0 ,"Name");
            await table.assertColumnNamesByIndex(1 ,"Positions");
            await table.assertColumnNamesByIndex(2 ,"Start Date");
            await table.assertColumnNamesByIndex(3 ,"End Date");
            await table.assertColumnNamesByIndex(4,"Status");
    
        }
    
    
    
    }
    module.exports = ShiftsPage;
