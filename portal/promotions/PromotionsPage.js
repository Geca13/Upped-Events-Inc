    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal')
    const PROMOTIONS_HEADER = { xpath: "//*[text()='Promotions']"}
    const ADD_PROMOTION_BUTTON = { xpath: "//*[text()='Add']"}
    const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
    const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }



    class PromotionsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async promotionsHeaderIsVisible(){
            await this.isDisplayed(PROMOTIONS_HEADER,5000)
        }
        async clickAddPromotionButton(){
            await this.timeout(500);
            await this.click(ADD_PROMOTION_BUTTON)
        }
        async addPromotionButtonIsVisible(){
            await this.timeout(500);
            await this.isDisplayed(ADD_PROMOTION_BUTTON, 5000);
            await this.timeout(500);
        }

    }
    module.exports = PromotionsPage;
