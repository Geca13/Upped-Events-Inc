    const BasePage = require('../../BasePage');
    const TableComponent = require('../portalComponents/TableComponent')
    const ADD_SHIFT_BUTTON = { xpath: "//*[text()='Add']"}
    
    class FindEventsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
    
        async isOnFindEventPage(){
            await this.isDisplayed(ADD_SHIFT_BUTTON, 5000)
        }
    
        async assertFindEventsTableHeadersNames(){
    
            await this.isOnFindEventPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(0 ,"Event Name");
            await table.assertColumnNamesByIndex(1 ,"Location");
            await table.assertColumnNamesByIndex(2 ,"Start Date Time");
            await table.assertColumnNamesByIndex(3 ,"End Date Time");
            await table.assertColumnNamesByIndex(4,"Size");
            await table.assertColumnNamesByIndex(5,"Event Owner");
    
        }
    
    }
    module.exports = FindEventsPage;