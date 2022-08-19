    const BasePage = require('../BasePage')
    const assert = require("assert");
    const LOGIN_OPTION = { xpath: "//a[@title='Profile']" }
    const EMAIL_INPUT = { id: "login-username"}
    const NEXT_BUTTON = { id: "login-signin"}
    const PASSWORD_INPUT = { id: "login-passwd"}
    const MAIL_NAV = { xpath: "//a[@title='Mail']"}
    const INBOX_NAV = { xpath: "//div[contains(@class, 'navItem')][1]"} //index 2
    const INBOX_NODE = { id: "inboxNode"}
    const FROM_COLUMN_EMAIL = { xpath: "//tr//td[@idx='2']//span" }
    const SUBJECT_COLUMN_EMAIL = { xpath: "//tr//td[@idx='3']//span" }
    const VERIFY_EMAIL_BUTTON = { xpath: "//*[text()='Verify email address']"}

    class Aol extends BasePage{
        constructor(driver) {
            super(driver);
         }

        async loadInbox() {
            await this.visit('https://www.aol.com/');
        }
        async inboxIsOpened(){
            await this.isDisplayed(LOGIN_OPTION,5000);
            await this.timeout(500);
        }

        async loginToAol(){
            await this.inboxIsOpened();
            await this.click(LOGIN_OPTION);
            await this.isDisplayed(EMAIL_INPUT, 5000);
            await this.sentKeys(EMAIL_INPUT, "karafiloski83@aol.com")
            await this.click(NEXT_BUTTON);
            await this.isDisplayed(PASSWORD_INPUT, 5000)
            await this.timeout(500);
            await this.sentKeys(PASSWORD_INPUT, "Golm@n123")
            await this.click(NEXT_BUTTON)
            await this.timeout(1000);
        }

        async clickOnInboxAndOpenEmail(originalWindow){
            await this.isDisplayed(MAIL_NAV,5000);
            await this.click(MAIL_NAV);
            await this.timeout(2000);
            await this.switchToNewlyOpenedWindowOrTab(originalWindow);
            await this.isDisplayed(INBOX_NODE, 15000);
            await this.timeout(500);
            await this.click(INBOX_NODE);
            await this.isDisplayed(FROM_COLUMN_EMAIL, 5000);
            await this.timeout(500);
            await this.click(FROM_COLUMN_EMAIL)
            await this.timeout(20000);
        }

        async verifyEmail(){
            await this.isDisplayed(VERIFY_EMAIL_BUTTON, 5000);
            await this.timeout(1000);
            await this.click(VERIFY_EMAIL_BUTTON);
            await this.timeout(5000)
        }
        async verifyEmailButtonIsDisplayed(){
            await this.isDisplayed(VERIFY_EMAIL_BUTTON,5000)
        }



        async loginPageIsOpened(){
            await this.isDisplayed(LOGIN_OPTION, 5000);
        }

        async elementIsDisplayedInInbox(text) {
            await this.elementByTextWithoutSpacesIsDisplayed(text);
            await this.timeout(3000)
        }
        async findAndClickTheEmailForNewAccount(email){
            await this.locateElementByTextAndClick(email);
        }
        async getOriginalWindow(){
            await this.getOriginalWindowOrTab()
        }

        /*async clickResetPasswordButton(){
            await this.click(RESET_PASSWORD_BUTTON)
            await this.timeout(1000);
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
            await this.timeout(2000)
            await this.findAndClickTheEmailForNewAccount('<'+email+'>');
            await this.switchToInboxIFrame();
            await this.acceptInvitationButtonIsDisplayed();
            await this.clickAcceptInvitation();

        }

        async checkAccountEmailIsSend(base){

            let rawEmail = await this.getChildByIndex(INBOX_TABLE_ROWS,1,1);
            let email = await this.getSubstringOfInboxEmailString(rawEmail);
            assert.equal(base+'@'+base+".mk", email);

        }
        async checkAdditionalEmailIsSend(base){
            let rawEmail = await this.getChildByIndex(INBOX_TABLE_ROWS,0,1);
            let email = await this.getSubstringOfInboxEmailString(rawEmail);
            assert.equal(base+'ad@ad'+base+".mk", email);
        }*/
    }
    module.exports = Aol;