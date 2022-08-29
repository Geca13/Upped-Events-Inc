    const BasePage = require('../../BasePage');
    const ORDER_DETAILS_MODAL = { tagName: 'order-details-popup'};
    const CLOSE_POPUP_BUTTON = { className: 'popup-close'}
    const REFUND_TICKETS_BUTTON = { xpath: "//*[text()='Refund tickets']"}
    const RESEND_TICKETS_BUTTON = { xpath: "//*[text()='Resend tickets']"}
    const OPEN_REFUND_TICKETS_DROPDOWNS = { className: 'collapsable'} //LIST
    const SELECT_TICKET_REFUND_CHECKBOX = { xpath: '//tr//td//div//label'} // list if more opened at once
    const REFUND_AMOUNT_INPUT_CONTAINER = { className: 'input-currency'} // list if more opened at once 2nd child
    const REFUND_AMOUNT_INPUT = { xpath: '//td//div/input'} // list if more opened at once
    const REINSTATE_TICKETS_RADIO_LABEL = { xpath: "//label[@for='hptype-reinstate']"}
    const VOID_TICKETS_RADIO_LABEL = { xpath: "//label[@for='hptype-void']"}
    const NOTHING_RADIO_LABEL = { xpath: "//label[@for='hptype-nothing']"}
    const PROCESS_REFUND_BUTTON = { xpath: "//*[text()='Process']"}
    const CANCEL_REFUND_BUTTON = { xpath: "//button[@type='reset']"}
    const CUSTOM_TOTAL_REFUND_INPUT = { xpath: "//input[@name='fixed']"}
    const PERCENT_TOTAL_REFUND_INPUT = { xpath: "//input[@name='percent']"} //
    const PREVIOUS_ORDERS_OPTION = { xpath: "//*[text()='Previous Orders']"}
    const ORDER_DETAILS_MODAL_TOTAL = { xpath: "//table/tr"}



    class OrderDetailsModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async orderDetailsModalIsDisplayed(){
            await this.isDisplayed(RESEND_TICKETS_BUTTON,5000);
        }

        async getOrderTotalBeforeRefunds(){
            await this.orderDetailsModalIsDisplayed();
            let rawBeforeTotal = await this.getChildTextByParentIndexAndChildIndex(ORDER_DETAILS_MODAL_TOTAL,0,1);
            let substringTotal = rawBeforeTotal.substring(1)
            let beforeTotal = parseFloat(substringTotal);
            let fixed = beforeTotal.toFixed(2)
            return fixed;
        }
        async makeRefundOnAllTicketQuantity(){
            await this.orderDetailsModalIsDisplayed();
            await this.click(REFUND_TICKETS_BUTTON);
            await this.elementFromArrayOfElementsIsDisplayed(OPEN_REFUND_TICKETS_DROPDOWNS,0);
            await this.clickElementReturnedFromAnArray(OPEN_REFUND_TICKETS_DROPDOWNS,0);
            await this.elementFromArrayOfElementsIsDisplayed(SELECT_TICKET_REFUND_CHECKBOX,0);
            await this.clickAllElementsReturnedFromArray(SELECT_TICKET_REFUND_CHECKBOX);
            await this.click(PROCESS_REFUND_BUTTON);
            await this.orderDetailsModalIsDisplayed();
            await this.click(REFUND_TICKETS_BUTTON);
            await this.elementFromArrayOfElementsIsDisplayed(OPEN_REFUND_TICKETS_DROPDOWNS,1);
            await this.clickElementReturnedFromAnArray(OPEN_REFUND_TICKETS_DROPDOWNS,1);
            await this.elementFromArrayOfElementsIsDisplayed(SELECT_TICKET_REFUND_CHECKBOX,1);
            await this.clickAllElementsReturnedFromArray(SELECT_TICKET_REFUND_CHECKBOX);
            await this.driver.sleep(500);
            await this.sendKeysAllElementsReturnedFromArray(REFUND_AMOUNT_INPUT,"1");
            await this.click(PROCESS_REFUND_BUTTON);
            await this.driver.sleep(500)

        }
        async getOrderTotalAfterRefunds(){
            await this.timeout(2000);
            let rawAfterTotal = await this.getChildTextByParentIndexAndChildIndex(ORDER_DETAILS_MODAL_TOTAL,0,1);
            let afterTotalSubstring = rawAfterTotal.substring(1);
            let afterTotalFloat = parseFloat(afterTotalSubstring);
            let afterTotal = afterTotalFloat.toFixed(2)
            return afterTotal;
        }
        async closeOrderTotalModal(){
            await this.isDisplayed(CLOSE_POPUP_BUTTON,5000)
            await this.click(CLOSE_POPUP_BUTTON);
        }
    }
    module.exports = OrderDetailsModal;
