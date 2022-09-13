    const BasePage = require("../../BasePage");
    const Alerts = require('../../Validations&Alerts/Alerts')
    const TicketsTab = require('../micrositesComponents/TicketsTab')
    const LoginTab = require('../micrositesComponents/LoginTab')
    const assert = require("assert");
    const TICKETS_TAB = { xpath: "//*[text()='Tickets']"}
    const LOGIN_TAB = { id: "loginBtn"}
    const EXTRAS_TAB = { xpath: "//*[text()='Extras']"}
    const PAY_TAB = { xpath: "//*[text()='Pay']"}
    const CONFIRM_TAB = { xpath: "//*[text()='Confirm']"}
    const NAV_BUTTONS = { xpath: "//li[contains(@class , 'nav-item')]//button[contains(@class , 'btnTabClass')]" }
    const BACK_TO_EVENT_INFO_BUTTON = { xpath: "//*[text()=' Back to Event Info ']"}
    const NEXT_BUTTON = { xpath: "//*[text()='Next']"}
    const PREVIOUS_BUTTON = { xpath: "//*[text()=' Previous ']"}
    const PAGE_TITLE = { className: 'information-title' }
    const SUMMARY_ELEMENTS = { className: 'mini-total' } //list
    const GRAND_TOTAL_VALUE = { xpath: "//div[@class='grand-total']//div[2]" }
    const GRAND_TOTAL_LABEL = { xpath: "//div[@class='grand-total']//div" }
    const SUBTOTAL_TOTAL_VALUE = { xpath: "//div[@class='mini-total']//div[2]" }
    const SUBTOTAL_TOTAL_LABEL = { xpath: "//div[@class='mini-total']//div" }
    const LOGIN_INFO_MESSAGE = { className: 'message-text' }
    const LOGIN_LINK = { className: 'login-link' }
    const INFO_ICONS = { className: 'fa-info-circle' } //list
    const SUMMARY_TOOLTIPS = { className: 'tooltip-inner' } //list
    const CLOSE_BUTTON = { xpath: "//div[contains(@class , 'content')]//div[contains(@class , 'close-btn')]//i" }
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
            return await this.getChildTextByParentIndexAndChildIndex(SUMMARY_ELEMENTS,parentIndex,childIndex);
        }
        async nextButtonPresent() {
            await this.isDisplayed(NEXT_BUTTON,5000);
            await this.timeout(500);
        }
        async termsButtonPresent() {
            await this.isDisplayed(TICKET_TERMS_BUTTON,5000);
        }
        async clickNextButton(){
            await this.click(NEXT_BUTTON);
        }
        async clickTermsButton(){
            await this.click(TICKET_TERMS_BUTTON);
        }
        async clickBackToEventInfoButton(){
            await this.timeout(7000);
            await this.click(BACK_TO_EVENT_INFO_BUTTON);
        }
        async getSubtotalText() {
          return await this.getChildTextByParentIndexAndChildIndex(SUMMARY_ELEMENTS,0, 0);
        }
        async getNextButtonText() {
          return  await this.getElementText(NEXT_BUTTON);
        }

        async getSummaryPriceText(){
            return await this.getSubstringOfPriceStringByParent(SUMMARY_ELEMENTS,0, 1)
        }
        async removeDiscountIconIsDisplayed(){
            await this.isDisplayed(DISCOUNT_TRASH_ICON,5000);
        }
        async limitInfoMessageIsDisplayed(number){
            let info = new Alerts(this.driver);
            await info.correctInfoMessageIsDisplayed("You have exceeded maximum (" + number + ") limit to buy tickets");
        }

        async clickCloseTicketingPopupButton(){
            await this.isDisplayed(CLOSE_BUTTON, 5000);
            await this.click(CLOSE_BUTTON);
            await this.timeout(3000);
        }

        async assertWhenTicketsAreNotSelectedSubtotalAndTotalAre0(){
            await this.nextButtonPresent();
            let subtotal = await this.getElementText(SUBTOTAL_TOTAL_VALUE);
            let total = await this.getElementText(GRAND_TOTAL_VALUE);
            assert.equal(subtotal,'$0.00');
            assert.equal(total,subtotal);
        }

        async assertWhenTicketIsSelectedButNoTaxesAndFeesSubtotalAndTotalEqualTicketPrice(ticketPrice){
            await this.nextButtonPresent();
            let subtotal = await this.getElementText(SUBTOTAL_TOTAL_VALUE);
            let total = await this.getElementText(GRAND_TOTAL_VALUE);
            assert.equal(subtotal,ticketPrice);
            assert.equal(total,ticketPrice);
        }

        async assertTicketPriceEqualsSubtotalAndBuyerTotalEqualsGrandTotal( ticketPrice, ticketBuyerPrice){
            await this.nextButtonPresent();
            let subtotal = await this.getElementText(SUBTOTAL_TOTAL_VALUE);
            let total = await this.getElementText(GRAND_TOTAL_VALUE);
            assert.equal(subtotal.substring(1),ticketPrice);
            assert.equal(total.substring(1),ticketBuyerPrice);
        }

        async assertTicketsSubtotalMultipliedByTaxesAndFeesForEachTicketEqualsGrandTotal( savedTaxValue, saved$FeeValue){
            await this.nextButtonPresent();
            let rawSubtotal = await this.getElementText(SUBTOTAL_TOTAL_VALUE);
            let subtotal = rawSubtotal.substring(1);
            let feeSubstring = saved$FeeValue.substring(2);
            let feeParsed = parseFloat(feeSubstring);
            let totalFees = 2 * feeParsed ;
            let subtotalPlusTaxes = (parseFloat(subtotal) + parseFloat(subtotal) / 100 * savedTaxValue);
            let calculatedGrandTotal = parseFloat(subtotalPlusTaxes.toFixed(2)) + parseFloat(totalFees.toFixed(2));
            let total = await this.getElementText(GRAND_TOTAL_VALUE);
            let substringTotal = total.substring(1);
            let floatedTotal = parseFloat(substringTotal);
            assert.equal(calculatedGrandTotal.toFixed(2) ,floatedTotal);
        }

        async assertTicketsSubtotalMultipliedByTaxesAndFeesForEachTicketEqualsGrandTotalForMultipleTicketsAndQty( savedTaxValue, saved$FeeValue){
            await this.nextButtonPresent();
            let tickets = new TicketsTab(this.driver);
            let subtotal = await tickets.getSubtotalFromMultipleTicketsTypes();
            let rawExtractedSubtotal = await this.getElementText(SUBTOTAL_TOTAL_VALUE);
            let extractedSubtotal = rawExtractedSubtotal.substring(1);
            let parsedExtracted = parseFloat(extractedSubtotal);
            assert.equal(subtotal.toFixed(2) ,parsedExtracted);
            let subtotalPlusTaxes = (subtotal + subtotal / 100 * savedTaxValue);
            let feeSubstring = saved$FeeValue.substring(1);
            let feeParsed = parseFloat(feeSubstring);
            let totalFees = 10 * feeParsed ;
            let calculatedGrandTotal = parseFloat(subtotalPlusTaxes.toFixed(2)) + parseFloat(totalFees.toFixed(2));
            let total = await this.getElementText(GRAND_TOTAL_VALUE);
            let substringTotal = total.substring(1);
            let floatedTotal = parseFloat(substringTotal);
            assert.equal(calculatedGrandTotal.toFixed(2) ,floatedTotal);

        }
        async navButtonsCount(count){
            await this.timeout(1000)
            let buttons = await this.returnElementsCount(NAV_BUTTONS);
            assert.equal(buttons, count);
        }
        async navButtonNameByIndex(index, buttonName){
            await this.timeout(1000)
            let button = await this.getElementTextFromAnArrayByIndex(NAV_BUTTONS, index)
            assert.equal(button, buttonName);
        }

        async navButtonStyleWhenNotActive(index){
             await this.nextButtonPresent();
             let loginTab = await this.checkIfClassIsApplied(NAV_BUTTONS,index, "active");
             assert.equal(loginTab, false);
             let fontColor = await this.getFontColorFromAnArray(NAV_BUTTONS,1);
             assert.equal(fontColor,'rgba(0, 0, 0, 1)');
             let backgroundColor = await this.getBackgroundColorFromAnArray(NAV_BUTTONS,1);
             assert.equal(backgroundColor,'rgba(0, 0, 0, 0)');
        }

        async assertNavButtonToBeActiveByIndexAndAssertName(index, buttonName){
            let button = await this.checkIfClassIsApplied(NAV_BUTTONS,index, "active");
            assert.equal(button, true);
            let name = await this.getElementTextFromAnArrayByIndex(NAV_BUTTONS,index);
            assert.equal(button, buttonName);
        }

        async assertLoginTabStyleOnTicketingLoginPage(){
             await this.timeout(1000)
             let loginTab = await this.checkIfClassIsApplied(NAV_BUTTONS,1, "active");
             assert.equal(loginTab, true);
             let fontColor = await this.getFontColorFromAnArray(NAV_BUTTONS,1);
             assert.equal(fontColor,'rgba(255, 255, 255, 1)');
             let backgroundColor = await this.getBackgroundColorFromAnArray(NAV_BUTTONS,1);
             assert.equal(backgroundColor,'rgba(88, 88, 88, 1)');
        }

        async notLoggedInErrorMessageIsDisplayed(){
            let alert = new Alerts(this.driver);
            await alert.errorInfoMessageIsDisplayed("You haven't logged in yet");
        }

        async assertLoginLinkIsDisplayedAndText(){
            await this.isDisplayed(LOGIN_INFO_MESSAGE, 5000);
            let message = await this.getElementText(LOGIN_INFO_MESSAGE);
            assert.equal(message, "You will be able to update your tickets, apply discount codes, and/or access user-specific tickets after you login.")
        }
        async clickLoginLinkAndAssertLoginTabStyle(){
            await this.click(LOGIN_LINK);
            let login = new LoginTab(this.driver);
            await login.isAtLoginTab();
            await this.assertLoginTabStyleOnTicketingLoginPage();
        }

        async assertCorrectBehaviorAfterSuccessfulLogin(){
            await this.navButtonsCount(4);
            /*let alert = new Alerts(this.driver)
            await alert.successAlertIsDisplayed("Sucessfully logged in")*/
            await this.timeout(1000)
            let loginTab = await this.returnElementsCount(LOGIN_TAB);
            assert.equal(loginTab, 0);

        }


    }



    module.exports = TicketingPage;