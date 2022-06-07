    const BasePage = require('../BasePage');
    const VERIFY_EMAIL_BUTTON = { xpath: "//*[text()='Verify email address']"}
    const RESET_PASSWORD_BUTTON = { xpath: "//*[text()='Reset Password']"}
    const INBOX_FRAME = { tagName:'iframe'}
    const ACCEPT_INVITATION_BUTTON = { xpath: "//*[text()='Accept Invitation']"}



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
        async getOriginalWindow(){
            await this.getOriginalWindowOrTab()
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

        async clickResetPasswordButton(){
            await this.click(RESET_PASSWORD_BUTTON)
        }
        async resetPasswordButtonIsDisplayed(){
            await this.isDisplayed(RESET_PASSWORD_BUTTON,5000)
        }
        async clickAcceptInvitation(){
            await this.click(ACCEPT_INVITATION_BUTTON)
        }
        async acceptInvitationButtonIsDisplayed(){
            await this.isDisplayed(ACCEPT_INVITATION_BUTTON,5000)
        }

        async acceptVendorInvitation(email){
            await this.loadInbox();
            await this.elementIsDisplayedInInbox('<'+email+'>');
            await this.driver.sleep(1000)
            await this.findAndClickTheEmailForNewAccount('<'+email+'>');
            await this.switchToInboxIFrame();
            await this.acceptInvitationButtonIsDisplayed();
            await this.clickAcceptInvitation();

        }



    }
    module.exports = Inbox;