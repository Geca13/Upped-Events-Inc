    const BasePage = require('../../BasePage')
    const ORDER_DETAILS_HEADER = { xpath: "//div[@class='order-heading']//div"};
    const ORDER_DETAILS_SUBTITLE = { xpath: "//div[@class='ord-desc']"};
    const PAYMENT_INFO = { xpath: "//div[@class='payment-info']"};
    const EDIT_PAYMENT_INFO_LINK = { xpath: "//div[@class='payment-info']//span"};
    const WALLET_AS_PAYMENT = { xpath : "//ng-conatiner//div[@class='ng-star-inserted']"};
    const CARD_AS_PAYMENT = { xpath: "//div[contains(@class , 'selected-card')]"}
    const CARD_BRAND = { xpath: "//div[contains(@class , 'selected-card')]//div[1]"}
    const CARD_NUMBER= { xpath: "//div[contains(@class , 'selected-card')]//div[@class='card-number']"};
    const TICKETS_SECTION_HEADER = { xpath: "//div[@class='ticket']"}
    const TICKETS_NAMES_AND_EDIT_CONTAINER = { xpath: "//div[@class='ticket-container']//div[contains(@class , 'wd-60')]" }
    const EDIT_TICKET_LINK = { xpath: "//div[@class='ticket-container']//div[contains(@class , 'wd-60')]//span" }
    const TICKETS_PRICES = { xpath: "//div[@class='ticket-container']//div[2]" }
    const SUBTOTAL_TEXT = { xpath: "//div[contains(@class , 'order-subtotal')]//div[1]" }
    const SUBTOTAL_VALUE = { xpath: "//div[contains(@class , 'order-subtotal')]//div[2]" }
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