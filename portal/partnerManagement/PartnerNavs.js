    const BasePage = require('../../BasePage');
    const PARTNERS_NAV = { xpath: "//*[text()='Partners']"}
    const CONTRACTS_NAV  = { xpath: "//*[text()='Contracts']"}
    const PARTNER_SETTINGS_NAV = { xpath: "//*[text()='Settings']"}
    const APPLICATION_NAV  = { xpath: "//*[text()='Application']"}


    class PartnerNavs extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async partnersNavIsDisplayed(){
            await this.isDisplayed(PARTNERS_NAV,5000);
        }
        async partnersSettingNavIsDisplayed(){
            await this.isDisplayed(PARTNER_SETTINGS_NAV,5000);
        }
        async contractsNavIsDisplayed(){
            await this.isDisplayed(CONTRACTS_NAV,5000);
        }
        async applicationNavIsDisplayed(){
            await this.isDisplayed(APPLICATION_NAV,5000);
        }
        async clickPartnersNav(){
            await this.click(PARTNERS_NAV);
        }
        async clickPartnersSettingNav(){
            await this.click(PARTNER_SETTINGS_NAV);
        }
        async clickContractsNav(){
            await this.click(CONTRACTS_NAV);
        }
        async clickApplicationNav(){
            await this.click(APPLICATION_NAV);
        }
    }
    module.exports = PartnerNavs;