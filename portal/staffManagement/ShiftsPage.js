    const BasePage = require('../../BasePage');
    const TableComponent = require('../portalComponents/TableComponent')
    const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
    
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
