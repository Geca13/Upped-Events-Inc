    const BasePage = require('../../BasePage');
    const PREVIOUS_BUTTON = {  xpath: "//li[contains(@class, 'pagination-previous')]" }
    const NEXT_BUTTON = {  xpath: "//li[contains(@class, 'pagination-next')]" }
    const SELECT_ITEMS_PER_PAGE_DROPDOWN = { tagName: "select" }

    class PaginationComponent extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async selectXRowsPerPage(keys){
            await this.isDisplayed(SELECT_ITEMS_PER_PAGE_DROPDOWN,5000);
            await this.sentKeys(SELECT_ITEMS_PER_PAGE_DROPDOWN, keys);
            await this.driver.sleep(1000);
        }
    }
    module.exports = PaginationComponent;