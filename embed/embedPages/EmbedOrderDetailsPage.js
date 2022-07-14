    const BasePage = require('../../BasePage')
    const ORDER_DETAILS_HEADER = { xpath: "//*[text()='Order Details']"};
    const PLACE_ORDER_BUTTON = { xpath: "//*[text()='Place your order']"};

    class EmbedOrderDetailsPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnOrderDetailsPage(){
            await this.isDisplayed(ORDER_DETAILS_HEADER,5000);
        }
        async clickPlaceOrderButton(){
            await this.isDisplayed(PLACE_ORDER_BUTTON,5000);
            await this.click(PLACE_ORDER_BUTTON);
        }

    }
    module.exports = EmbedOrderDetailsPage;