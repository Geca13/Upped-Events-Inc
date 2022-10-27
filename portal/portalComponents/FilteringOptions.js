const BasePage = require('../../BasePage');
const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
class FilteringOptions extends BasePage {
    constructor(driver) {
        super(driver);
    }
    
    async clickAddColumnButton(){
        await this.isDisplayed(ADD_TABLE_COLUMN_BUTTON,5000);
        await this.click(ADD_TABLE_COLUMN_BUTTON);
    }

    async clickFilterButton(){
        await this.isDisplayed(FILTER_BUTTON,5000);
        await this.click(FILTER_BUTTON);
    }
    

}
module.exports = FilteringOptions;