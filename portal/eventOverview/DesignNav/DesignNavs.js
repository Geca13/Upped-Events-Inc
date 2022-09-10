    const BasePage = require('../../../BasePage');
    const EVENT_CARD_DESIGN_SUBNAV = { xpath: "//*[text()='Event Card Design']"}
    const APP_DESIGN_SUBNAV = { xpath: "//*[text()='App Design']"}
    const EVENT_SITE_SUBNAV = { xpath: "//*[text()='Event Site']"}
    const SPONSORSHIP_SUBNAV = { xpath: "//*[text()='Sponsorship']"}
    const EMBEDDING_SUBNAV = { xpath: "//*[text()='Embedding']"}


    class DesignNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async embeddedSubNavIsDisplayed(){
            await this.isDisplayed(EMBEDDING_SUBNAV,5000, "embeddingSubNav")
        }
        async clickEventCardDesignSubNav(){
            await this.click(EVENT_CARD_DESIGN_SUBNAV);
        }
        async clickAppDesignSubNav(){
            await this.click(APP_DESIGN_SUBNAV);
        }
        async clickEventSiteSubNav(){
            await this.click(EVENT_SITE_SUBNAV);
        }
        async clickSponsorshipSubNav(){
            await this.click(SPONSORSHIP_SUBNAV);
        }
        async clickEmbeddedSubNav(){
            await this.click(EMBEDDING_SUBNAV);
        }
    }
    module.exports = DesignNavs;