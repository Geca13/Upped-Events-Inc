    const BasePage = require('../BasePage');
    const VERIFY_EMAIL_BUTTON = { xpath: "//*[text()='Verify email address']"}
    const INBOX_FRAME = { tagName:'iframe'}



    class Inbox extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async loadInbox() {
            await this.visit('https://mail:upped2021@mail.dev.uppedevents.com/');
        }
        async elementIsDisplayedInInbox(text) {
            await this.elementByTextWithoutSpacesIsDisplayed(text);
        }
        async findAndClickTheEmailForNewAccount(email){
            await this.locateElementByTextAndClick(email);
        }
        async switchToInboxIFrame(){
            await this.switchToAnIframe(INBOX_FRAME);
        }
        async verifyEmail(){
            await this.click(VERIFY_EMAIL_BUTTON)
        }
        async verifyEmailButtonIsDisplayed(){
            await this.isDisplayed(VERIFY_EMAIL_BUTTON,5000)
        }

    }
    module.exports = Inbox;