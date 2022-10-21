    const BasePage = require('../../BasePage');
    const assert = require('assert')
    const TABLE = { id: "dataTable" }
    const TABLE_COLUMN_NAMES = { xpath: "//table[@id='dataTable']//tr/th//span" } //starts from index 1
    const TABLE_EMPTY_MESSAGE = { xpath: "//div[contains(@class, 'data-empty')]//h5" }


    class TableComponent extends BasePage{
        constructor(driver) {
            super(driver);
        }
        
        async tableIsDisplayed(){
            await this.isDisplayed(TABLE, 5000);
        }

        async assertColumnNamesByIndex(index, column){
            let columnName = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, index);
            assert.equal(columnName,column);
        }

        async clickColumnByIndex(index){
            await this.clickElementReturnedFromAnArray(TABLE_COLUMN_NAMES,index);
        }

        async messageWhenTableIsEmpty(message){
            let empty = await this.getElementText(TABLE_EMPTY_MESSAGE);
            assert.equal(empty,message);
        }

    }
    module.exports = TableComponent;