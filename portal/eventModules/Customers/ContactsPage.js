const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent');



class ContactsPage extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnContactsPage(){
        let table = new TableComponent(this.driver)
        await table.tableIsDisplayed();
    }
    
    async assertContactsTableHeadersNames(){
        await this.isOnContactsPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Full Name");
        await table.assertColumnNamesByIndex(2 ,"Type");
        await table.assertColumnNamesByIndex(3 ,"Email");
        await table.assertColumnNamesByIndex(4 ,"Last Event");
        await table.assertColumnNamesByIndex(5 ,"# Of Events");
        await table.assertColumnNamesByIndex(6 ,"Gender");
        await table.assertColumnNamesByIndex(7 ,"Age");
        await table.assertColumnNamesByIndex(8 ,"Total Spend");

    }
}
module.exports = ContactsPage;