    const BasePage = require('../../../BasePage');
    const GENERAL_SETTINGS_SUBNAV = { xpath: "//*[text()='General Settings']"}
    const REFUND_RULES_SUBNAV = { xpath: "//*[text()='Refund Rules']"}
    const TAXES_AND_FEES_SUBNAV = { xpath: "//*[text()='Taxes & Fees']"}
    const TICKET_TERMS_SUBNAV = { xpath: "//*[text()='Ticket Terms']"}
    const TICKET_QUESTIONS_SUBNAV = { xpath: "//*[text()='Ticket Questions']"}
    const EVENT_CAPACITY_SUBNAV = { xpath: "//*[text()='Event Capacity']"}
    const TICKET_PERMISSIONS_SUBNAV = { xpath: "//*[text()='Ticket Permissions']"}


    class SettingsNav extends BasePage {
        constructor(driver) {
            super(driver);
        }


        async taxesAndFeesSubTabIsDisplayed(){
            await this.isDisplayed(TAXES_AND_FEES_SUBNAV,5000)
            await this.timeout(1000);
        }
        async clickTaxesAndFeesSubNav(){
            await this.click(TAXES_AND_FEES_SUBNAV,5000)
        }
        async clickGeneralSettings(){
            await this.click(GENERAL_SETTINGS_SUBNAV,5000)
        }
        async clickRefundRules(){
            await this.click(REFUND_RULES_SUBNAV,5000)
        }
        async clickTicketTerms(){
            await this.click(TICKET_TERMS_SUBNAV,5000)
        }
        async clickTicketQuestions(){
            await this.click(TICKET_QUESTIONS_SUBNAV,5000)
        }
        async clickEventCapacity(){
            await this.click(EVENT_CAPACITY_SUBNAV,5000)
        }
        async clickTicketPermissions(){
            await this.click(TICKET_PERMISSIONS_SUBNAV,5000)
        }

    }
    module.exports = SettingsNav;