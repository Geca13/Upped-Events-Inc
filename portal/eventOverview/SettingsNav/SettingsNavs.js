    const BasePage = require('../../../BasePage');
    const EVENT_SECURITY_SUBNAV = { xpath: "//*[text()='Event Security']"}
    const EVENT_PAYMENTS_SUBNAV = { xpath: "//*[text()='Event Payments']"}
    const NOTIFICATIONS_SUBNAV = { xpath: "//*[text()='Notifications']"}
    const DONATIONS_SUBNAV = { xpath: "//*[text()='Donations']"}



    class SettingsNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventSecuritySubNavIsDisplayed(){
            await this.isDisplayed(EVENT_SECURITY_SUBNAV,5000)
        }
        async clickEventSecuritySubNav(){
            await this.click(EVENT_SECURITY_SUBNAV);
        }
        async clickEventPaymentsSubNav(){
            await this.click(EVENT_PAYMENTS_SUBNAV);
        }
        async clickNotificationsSubNav(){
            await this.click(NOTIFICATIONS_SUBNAV);
        }
        async clickDonationsSubNav(){
            await this.click(DONATIONS_SUBNAV);
        }
    }
    module.exports = SettingsNavs;