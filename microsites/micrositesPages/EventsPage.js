    const BasePage = require('../../BasePage')
    const assert = require("assert");
    const EVENT = { xpath: "//*[text()='Qa Purchase ']"}
    const EVENT_CARD = { tagName: 'event-card' }
    const ACCOUNT_DROPDOWN = { xpath: "//*[text()=' Account ']"}
    const SHORTNAME = { className: 'shortname' }
    const SUCCESS_MESSAGE = { className: 'toast-message' }
    const SIGN_IN_BUTTON = { xpath: "//*[text()='Sign In']"}
    const SIGN_UP_BUTTON = { xpath: "//*[text()='Sign Up']"}
    const DROPDOWN_PROFILE_OPTION = { xpath: "//a[text()='Profile']" }
    const DROPDOWN_RECEIPTS_OPTION = { xpath: "//a[text()='Receipts']" }
    const DROPDOWN_MY_EVENTS_OPTION = { xpath: "//a[text()='My Events']" }
    const DROPDOWN_PAYMENT_INFO_OPTION = { xpath: "//a[text()='Payment Info']" }
    const DROPDOWN_LOGOUT_OPTION = { xpath: "//a[text()='Logout']" }

    class EventsPage extends BasePage{
        constructor(driver) {
            super(driver);
    }

    async load() {
        await this.visit('https://events.dev.uppedevents.com/events')
        await this.timeout(10000);
    }

    async clickSignInButton(){
        await this.click(SIGN_IN_BUTTON);
    }
    async clickSignUpButton(){
        await this.click(SIGN_UP_BUTTON);
    }
    async accountDropdownIsDisplayed(){
        await this.isDisplayed(ACCOUNT_DROPDOWN,10000);
    }
    async goToProfilePage(){
        await this.accountDropdownIsDisplayed();
        await this.click(ACCOUNT_DROPDOWN);
        await this.isDisplayed(DROPDOWN_PAYMENT_INFO_OPTION,5000);
        await this.click(DROPDOWN_PAYMENT_INFO_OPTION);
    }
    async logOut(){
        await this.accountDropdownIsDisplayed();
        await this.click(ACCOUNT_DROPDOWN);
        await this.isDisplayed(DROPDOWN_LOGOUT_OPTION,5000);
        await this.timeout(500)
        await this.click(DROPDOWN_LOGOUT_OPTION);
        await this.timeout(2500)
    }

    async signInButtonIsDisplayed(){
        await this.isDisplayed(SIGN_IN_BUTTON,10000);
    }

    async successMessagePresent() {
        return await this.isDisplayed(SUCCESS_MESSAGE,5000);
    }

    async successMessageText() {
        return await this.getElementText(SUCCESS_MESSAGE);
    }

    async hover() {
        return await this.moveToElement(SUCCESS_MESSAGE);
    }
    async eventIsAvailableToClick(){
        return await this.isDisplayed(EVENT,25000)
    }
    async eventCardIsAvailableToClick(){
        return await this.isDisplayed(EVENT_CARD,25000)
        await this.timeout(10000);
    }
    async clickEvent(){
        await this.click(EVENT);
    }
    async clickNewEvent(eventName){
        await this.isDisplayed(SHORTNAME,20000);
        await this.locateElementByTextAndClick(eventName);
    }
    async assertEventIsNotVisible(eventName){
        await this.timeout(10000);
        let events = await this.locateElementsByText(eventName);
        let totalEvents = events.length;
        assert.equal(totalEvents,0)
        await this.timeout(1000);
    }
    async assertEventIsVisible(eventName){
        await this.timeout(10000);
        let events = await this.locateElementsByText(eventName);
        let totalEvents = events.length;
        assert.equal(totalEvents,1);
        await this.timeout(1000);
    }
    async assertPlaceholderImageIsSetWhenImageIsNotSet(text){
          let src = await this.findEventCardImageSrcAttributeValue(text)
          assert.equal(src,"https://dev.api.uppedevents.com/images/2021/March/event_placeholder.png");
    }
    async assertPlaceholderImageIsRemovedWhenImageIsSet(text){
          let src = await this.findEventCardImageSrcAttributeValue(text)
          assert.notEqual(src,"https://dev.api.uppedevents.com/images/2021/March/event_placeholder.png");
          await this.timeout(1000);
    }
    async returnImageSrc(eventName){
          let src = await this.findEventCardImageSrcAttributeValue(eventName);
          return src;
    }



}

module.exports = EventsPage