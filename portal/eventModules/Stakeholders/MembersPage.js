const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent');



class MembersPage extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnMembersPage(){
        let table = new TableComponent(this.driver)
        await table.tableIsDisplayed();
    }

    async assertMembersTableHeadersNames(){
        await this.isOnMembersPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Name");
        await table.assertColumnNamesByIndex(2 ,"Tier");
        await table.assertColumnNamesByIndex(3 ,"Email");
        await table.assertColumnNamesByIndex(4 ,"Join Date");
        await table.assertColumnNamesByIndex(5 ,"Customer");
        await table.assertColumnNamesByIndex(6 ,"Dues");
        await table.assertColumnNamesByIndex(7 ,"Renewal Date");
        await table.assertColumnNamesByIndex(8 ,"Status");
        await table.assertColumnNamesByIndex(9 ,"Attention Needed");
    }
}
module.exports = MembersPage;