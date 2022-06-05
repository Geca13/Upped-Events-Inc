    const BasePage = require("../../BasePage");
    const TICKETS_TAB = { xpath: "//*[text()='Tickets']"}
    const LOGIN_TAB = { xpath: "//*[text()='Login']"}
    const EXTRAS_TAB = { xpath: "//*[text()='Extras']"}
    const PAY_TAB = { xpath: "//*[text()='Pay']"}
    const CONFIRM_TAB = { xpath: "//*[text()='Confirm']"}
    const BACK_TO_EVENT_INFO_BUTTON = { xpath: "//*[text()=' Back to Event Info ']"}
    const NEXT_BUTTON = { xpath: "//*[text()='Next']"}
    const PREVIOUS_BUTTON = { xpath: "//*[text()=' Previous ']"}
    const PAGE_TITLE = { className: 'information-title' }
    const SUMMARY_ELEMENTS = { className: 'mini-total' } //list
    const GRAND_TOTAL = { className: 'grand-total' }
    const LOGIN_INFO_MESSAGE = { className: 'message-text' }
    const LOGIN_LINK = { className: 'login-link' }
    const INFO_ICONS = { className: 'fa-info-circle' } //list
    const SUMMARY_TOOLTIPS = { className: 'tooltip-inner' } //list
    const CLOSE_BUTTON = { className: 'fa-times' }
    const TAXES_CONTAINER = { css:'div[tooltipclass=maxWidthInitial]'}
    const QTY_INPUTS = { tagName: 'input' } //list
    const TAXES_TOOLTIP = { id: 'ngb-tooltip-1' }
    const FEES_TOOLTIP = { id: 'ngb-tooltip-2' }
    const CHILDREN = { xpath: "./child::*"}
    const DISCOUNT_TRASH_ICON = { xpath: "//*[text()='Discount ']"}
    const TICKET_TERMS_BUTTON = { className: 'terms-btn' }


    class TicketingPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async moveToTaxesInfoIcon(){
            await this.moveToElementFromArrayByIndex(INFO_ICONS,0)
            await this.isDisplayed(TAXES_TOOLTIP,5000);
        }
        async moveToFeesInfoIcon(){
            await this.moveToElementFromArrayByIndex(INFO_ICONS,1)
            await this.isDisplayed(FEES_TOOLTIP,5000);
        }

        async getMiniTotalValuesByParentAndChildIndex(parentIndex, childIndex){
            return await this.getChildByIndex(SUMMARY_ELEMENTS,parentIndex,childIndex);
        }
        async nextButtonPresent() {
            return await this.isDisplayed(NEXT_BUTTON,5000);
        }
        async termsButtonPresent() {
            return await this.isDisplayed(TICKET_TERMS_BUTTON,5000);
        }
        async clickNextButton(){
            await this.click(NEXT_BUTTON);
        }
        async clickTermsButton(){
            await this.click(TICKET_TERMS_BUTTON);
        }
        async clickBackToEventInfoButton(){
            await this.click(BACK_TO_EVENT_INFO_BUTTON);
        }
        async getSubtotalText() {
          return await this.getChildByIndex(SUMMARY_ELEMENTS,0, 0);
        }
        async getNextButtonText() {
          return  await this.getElementText(NEXT_BUTTON);
        }

        async getSummaryPriceText(){
            return await this.getSubstringOfPriceString(SUMMARY_ELEMENTS,0, 1)
        }
        async removeDiscountIconIsDisplayed(){
            await this.isDisplayed(DISCOUNT_TRASH_ICON,5000);
        }
    }



    module.exports = TicketingPage;