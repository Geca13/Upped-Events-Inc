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


    class TicketingPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async nextButtonPresent() {
            return await this.isDisplayed(NEXT_BUTTON,5000);
        }
        async clickNextButton(){
            await this.click(NEXT_BUTTON);
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
    }



    module.exports = TicketingPage;