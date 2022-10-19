    const BasePage = require('../../BasePage');
    const TableComponent = require('../portalComponents/TableComponent')
    const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
    
    class StaffPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        
        async isOnStaffPage(){
            await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
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
