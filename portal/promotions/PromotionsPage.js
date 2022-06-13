    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal')
    const PROMOTIONS_HEADER = { xpath: "//*[text()='Promotions']"}
    const ADD_PROMOTION_BUTTON = { xpath: "//*[text()='Add']"}



    class PromotionsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async promotionsHeaderIsVisible(){
            await this.isDisplayed(PROMOTIONS_HEADER,5000)
        }
        async clickAddPromotionButton(){
            await this.driver.sleep(500);
            await this.click(ADD_PROMOTION_BUTTON)
        }
        async addPromotionButtonIsVisible(){
            await this.isDisplayed(ADD_PROMOTION_BUTTON)
        }

    }
    module.exports = PromotionsPage;
