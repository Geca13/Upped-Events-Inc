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
    const GENERAL_DETAILS_NAV = { xpath: "//*[text()='General Details']"}
    const DESIGN_NAV = { xpath: "//*[text()='Design']"}
    const PRIMARY_CONTACT_NAV = { xpath: "//*[text()='Primary Contact']"}
    const SETTINGS_NAV = { xpath: "//*[text()='Settings']"}
    const ATTENDEES_NAV = { xpath: "//*[text()='Attendees']"}
    const GROUPINGS_NAV = { xpath: "//*[text()='Groupings']"}
    const LOGS_NAV = { xpath: "//*[text()='Logs']"}
    const ANALYTICS_NAV = { xpath: "//*[text()='Analytics']"}



    class EventOptionTabs extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async clickAnalyticsNav(){
            await this.click(ANALYTICS_NAV);
        }
        async clickLogsNav(){
            await this.click(LOGS_NAV);
        }
        async clickGroupingsNav(){
            await this.click(GROUPINGS_NAV);
        }
        async clickAttendeesNav(){
            await this.click(ATTENDEES_NAV);
        }
        async clickPrimaryContactNav(){
            await this.click(PRIMARY_CONTACT_NAV);
        }
        async clickDesignNav(){
            await this.click(DESIGN_NAV);
        }

        async clickGeneralDetailsNav(){
           await this.click(GENERAL_DETAILS_NAV);
        }
        async ticketingTabIsDisplayed(){
            await this.isDisplayed(TICKETING_TAB,5000);
        }



        async clickTicketingTab(){
            await this.click(TICKETING_TAB);
        }
        async clickTransactionCenterTab(){
            await this.click(TRANSACTION_CENTER_TAB);
        }
        async clickMapAndAgendaTab(){
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
        async clickSettingsNav(){
            await this.click(SETTINGS_NAV);
        }

        async moveToEventNavs(){
            await this.moveToElement(SETTINGS_NAV);
            await this.isDisplayed(SETTINGS_NAV);
        }

    }
    module.exports = EventOptionTabs;
