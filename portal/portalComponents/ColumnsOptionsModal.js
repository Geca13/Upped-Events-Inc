    const BasePage = require('../../BasePage');
    const assert = require("assert");
    const {By} = require("selenium-webdriver");
    const CLOSE_MODAL_ARROW = { xpath: "//div[contains(@class, 'column_title')]//span[contains(@class, 'slide-close')]" };
    const SAVE_BUTTON = { xpath: "//a[text()='Save']"};
    const CANCEL_BUTTON = { xpath: "//a[text()='Cancel']"};
    const COLUMN_NAMES = { xpath: "//div[contains(@class, 'column-groum')]//label" };
    const COLUMN_DRAGS = { xpath: "//div[contains(@class, 'column-groum')]//span" };
    const REMOVE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'input_close')]" };
    const ADD_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'w-bg')]" };
    const SELECT_COLUMN_DROPDOWN = { xpath: "/html/body/lint-modal-window/div/div/listing-columns-popup/div/div[1]/div[2]/select" }
    const SELECT_COLUMN_OPTIONS = { xpath: "//select[contains(@class, 'ng-star-inserted')]//option" }





    class ColumnsOptionsModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async columnOptionsModalIsDisplayed(){
            await this.isDisplayed(COLUMN_NAMES, 5000);
        }
        
        async removeColumnInModalAndReturnNewState(index){
            await this.isDisplayed(REMOVE_COLUMN_BUTTON);
            await this.clickElementReturnedFromAnArray(REMOVE_COLUMN_BUTTON,index);
            let columns = await this.findAll(COLUMN_NAMES);
            await this.click(SAVE_BUTTON);
            await this.timeout(500)
            return columns.length;
            
        }

        async dragColumnFromColumnIndexToColumnIndex(from, to){
            await this.columnOptionsModalIsDisplayed();
            const actions = this.driver.actions();
            let source = await this.driver.findElement(By.xpath(`(//div[contains(@class, 'column-groum')]//span)[${from}]`));
            let target = await this.driver.findElement(By.xpath(`(//div[contains(@class, 'column-groum')]//span)[${to}]`));
            await actions.move({duration:1000,origin:source,x:3,y:3}).press().perform();
            await actions.dragAndDrop(source, target).perform();
            let columns = await this.returnArrayOfStrings(COLUMN_NAMES);
            await this.click(SAVE_BUTTON);
            await this.timeout(500)
            return columns;
        }

        async assertHeadersEqualsColumnOptionsInModal(headers){
            await this.isDisplayed(COLUMN_NAMES);
            let columns = await this.returnArrayOfStrings(COLUMN_NAMES);
            for(let i = 0; i<columns.length; i++){
                assert.equal(headers[i], columns[i]);
            }
        }
        
        async checkColumnsAndMakeManipulationsOnTickets(){
            await this.columnOptionsModalIsDisplayed();
            let first = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 0);
            let second = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 1);
            let third = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 2);
            let fourth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 3);
            let fifth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 4);
            let sixth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 5);
            let seventh = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 6);
            let eight = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 7);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Start Date/Time');
            assert.equal(third,'End Date/Time');
            assert.equal(fourth,'Price');
            assert.equal(fifth,'Quantity');
            assert.equal(sixth,'Sold');
            assert.equal(seventh,'Reserved');
            assert.equal(eight,'Active/Inactive');
            await this.clickElementReturnedFromAnArray(REMOVE_COLUMN_BUTTON,1);
            await this.timeout(500)
            await this.clickElementReturnedFromAnArray(REMOVE_COLUMN_BUTTON,1);
            first = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 0);
            second = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 1);
            third = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 2);
            fourth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 3);
            fifth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 4);
            sixth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 5);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Price');
            assert.equal(third,'Quantity');
            assert.equal(fourth,'Sold');
            assert.equal(fifth,'Reserved');
            assert.equal(sixth,'Active/Inactive');
            await this.click(SAVE_BUTTON);

        }
        
        async returnTheRemovedColumn(columnName){
            await this.isDisplayed(ADD_COLUMN_BUTTON,5000)
            await this.click(ADD_COLUMN_BUTTON);
            await this.isDisplayed(SELECT_COLUMN_DROPDOWN, 5000);
            await this.sentKeys(SELECT_COLUMN_DROPDOWN, columnName);
            let columns = await this.findAll(COLUMN_NAMES);
            await this.click(SAVE_BUTTON);
            await this.timeout(500)
            return columns.length;
        }

        async makeNewManipulationsOnTickets(){
            await this.columnOptionsModalIsDisplayed();
            let first = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 0);
            let second = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 1);
            let third = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 2);
            let fourth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 3);
            let fifth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 4);
            let sixth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 5);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Price');
            assert.equal(third,'Quantity');
            assert.equal(fourth,'Sold');
            assert.equal(fifth,'Reserved');
            assert.equal(sixth,'Active/Inactive');
            await this.click(ADD_COLUMN_BUTTON);
            await this.isDisplayed(SELECT_COLUMN_DROPDOWN, 5000);
            await this.sentKeys(SELECT_COLUMN_DROPDOWN, "Start Date/Time");
            first = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 0);
            second = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 1);
            third = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 2);
            fourth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 3);
            fifth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 4);
            sixth = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 5);
            let seventh = await this.getElementTextFromAnArrayByIndex(COLUMN_NAMES, 6);
            assert.equal(first,'Ticket Name');
            assert.equal(second,'Start Date/Time');
            assert.equal(third,'Price');
            assert.equal(fourth,'Quantity');
            assert.equal(fifth,'Sold');
            assert.equal(sixth,'Reserved');
            assert.equal(seventh,'Active/Inactive');
            await this.click(SAVE_BUTTON);


        }
    }
    module.exports = ColumnsOptionsModal;