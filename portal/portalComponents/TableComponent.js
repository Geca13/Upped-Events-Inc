    const BasePage = require('../../BasePage');
    const assert = require('assert')
    const TABLE_COLUMN_NAMES = { xpath: "//table[@id='dataTable']//tr/th//span" } //starts from index 1


    class TableComponent extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async assertColumnNamesByIndex(index, column){
            let columnName = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, index);
            assert.equal(columnName,column);
        }

        async clickColumnByIndex(index){
            await this.clickElementReturnedFromAnArray(TABLE_COLUMN_NAMES,index);
        }

    }
    module.exports = TableComponent;