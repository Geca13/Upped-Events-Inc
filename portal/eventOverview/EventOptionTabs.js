    const BasePage = require('../../BasePage');
    const TICKETING_TAB = { xpath: "//*[text()='Ticketing']"}
    const TRANSACTION_CENTER_TAB = { xpath: "//*[text()='Transaction Center']"}
    const MAP_AND_AGENDA_TAB = { xpath: "//*[text()='Map and Agenda']"}
    const SHOP_MANAGEMENT_TAB = { xpath: "//*[text()='Shop Management']"}
    const PARTNER_MANAGEMENT_TAB = { xpath: "//*[text()='Partner Management']"}
    const STAFF_MANAGEMENT_TAB = { xpath: "//*[text()='Staff Management']"}
    const EVENT_MARKETING_TAB = { xpath: "//*[text()='Event Marketing']"}
    const CUSTOMER_ENGAGEMENTS_TAB = { xpath: "//*[text()='Customer Engagements']"}
    const RESOLUTION_CENTER_TAB = { xpath: "//*[text()='Resolution Center']"}
    const UPPED_SUPPORT_TAB = { xpath: "//*[text()='Upped Support']"}
    const PROMOTIONS_TAB = { xpath: "//*[text()='Promotions']"}


    class EventOptionTabs extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async clickTicketingTab(){
            await this.click(TICKETING_TAB);
        }
        async clickTransactionCenterTab(){
            await this.click(TRANSACTION_CENTER_TAB);
        }
        async clickMarAndAgendaTab(){
            await this.click(MAP_AND_AGENDA_TAB);
        }
        async clickShopManagementTab(){
            await this.click(SHOP_MANAGEMENT_TAB);
        }
        async clickPartnerManagementTab(){
            await this.click(PARTNER_MANAGEMENT_TAB);
        }
        async clickStaffManagementTab(){
            await this.click(STAFF_MANAGEMENT_TAB);
        }
        async clickEventMarketingTab(){
            await this.click(EVENT_MARKETING_TAB);
        }
        async clickCustomerEngagementTab(){
            await this.click(CUSTOMER_ENGAGEMENTS_TAB);
        }
        async clickResolutionCenterTab(){
            await this.click(RESOLUTION_CENTER_TAB);
        }
        async clickUppedSupportTab(){
            await this.click(UPPED_SUPPORT_TAB);
        }
        async clickPromotionsTab(){
            await this.click(PROMOTIONS_TAB);
        }

    }
    module.exports = EventOptionTabs;
