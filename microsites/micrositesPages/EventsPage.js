const SUCCESS_MESSAGE = { className: 'toast-message' }
const SIGN_IN_BUTTON = { xpath: "//*[text()='Sign In']"}
const SIGN_UP_BUTTON = { xpath: "//*[text()='Sign Up']"}
const BasePage = require('../../BasePage')
const EVENT = { xpath: "//*[text()='Qa Purchase ']"}
const EVENT_CARD = { tagName: 'event-card' }
const ACCOUNT_DROPDOWN = { xpath: "//*[text()=' Account ']"}
const SHORTNAME = { className: 'shortname' }

class EventsPage extends BasePage{
    constructor(driver) {
        super(driver);

    }

    async load() {
        await this.visit('https://events.dev.uppedevents.com/events')
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

    async signInButtonIsDisplayed(){
        await this.isDisplayed(SIGN_IN_BUTTON,10000);
    }

    async successMessagePresent() {
        return await this.isDisplayed(SUCCESS_MESSAGE);
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
    }
    async clickEvent(){
        await this.click(EVENT);
    }
    async clickNewEvent(eventName){
        await this.isDisplayed(SHORTNAME,20000);
        await this.locateElementByTextAndClick(eventName);
    }



}

module.exports = EventsPage