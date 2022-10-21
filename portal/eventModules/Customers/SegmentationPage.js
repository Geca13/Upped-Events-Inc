const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent');



class SegmentationPage extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnSegmentationPage(){
        let table = new TableComponent(this.driver)
        await table.tableIsDisplayed();
    }

    async assertSegmentationTableHeadersNames(){
        await this.isOnSegmentationPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Name");
        await table.assertColumnNamesByIndex(2 ,"Date");

    }
}
module.exports = SegmentationPage;