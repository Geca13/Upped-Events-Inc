const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent');



class Tiers extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnTiersPage(){
        let table = new TableComponent(this.driver)
        await table.tableIsDisplayed();
    }

    async assertTiersTableHeadersNames(){
        await this.isOnTiersPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Tier Name");
        await table.assertColumnNamesByIndex(2 ,"Price");
        await table.assertColumnNamesByIndex(3 ,"# of Members");
        await table.assertColumnNamesByIndex(4 ,"Description");
    }
}
module.exports = Tiers;