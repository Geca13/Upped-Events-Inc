    const BasePage = require('../../BasePage');
    const ColumnsOptionsModal = require('../portalComponents/ColumnsOptionsModal');
    const assert = require('assert')
    const { expect }= require('chai');
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
        
        async returnArrayOfTableHeaderNames(){
            let headerNames = [];
            let headers = await this.findAll(TABLE_COLUMN_NAMES)
            for(let i = 0; i< headers.length; i++){
                let name = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, i);
                if(name !== ''){
                    headerNames.push(name);
                }
            }
            return headerNames;
        }
        
        async returnColumnOptionsHeadersAfterOrderChange(from, to){
            let columnOptions = new ColumnsOptionsModal(this.driver) 
            let options = await columnOptions.dragColumnFromColumnIndexToColumnIndex(from, to);
            let columns = await this.returnArrayOfTableHeaderNames();
            await this.assertTableHeadersAfterChangeInColumnOptionsModal(columns, options)
        }
        
        async assertTableHeadersAfterChangeInColumnOptionsModal(tableHeaders, columnHeaders){
            for(let i = 0; i<tableHeaders.length; i++){
                assert.equal(tableHeaders[i], columnHeaders[i]);
            }
        }
        
        async assertColumnIsRemoved(index){
            let columnOptions = new ColumnsOptionsModal(this.driver);
            let columns = await this.findAll(TABLE_COLUMN_NAMES)
            let options = await columnOptions.removeColumnInModalAndReturnNewState(index);
            expect(columns).to.be.greaterThan(options);
        }
        
        async returnTheRemovedColumnAndAssertChange(columnName){
            let columnOptions = new ColumnsOptionsModal(this.driver)
            let columns = await this.findAll(TABLE_COLUMN_NAMES)
            let options = await columnOptions.returnTheRemovedColumn(columnName);
            expect(columns).to.be.lessThan(options);
        }

    }
    module.exports = TableComponent;