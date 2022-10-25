    const BasePage = require('../../BasePage');
    const assert = require('assert');
    const NAV_LINKS = { xpath: "//ul[@id='offer-types']//a"}
    const EVENT_OVERVIEW_SUB_NAVS = { xpath: "//dashboard-event-demo-design//ul//li//a" }
    const EVENT_TEAM_SUB_NAVS = { xpath: "//dashboard-event-team//ul//li//a" }
    const EVENT_SETTINGS_SUB_NAVS = { xpath: "//event-settings//ul//li//a" }
    const EVENT_ANALYTICS_SUB_NAVS = { xpath: "//event-analytics//ul//li//a" }
    
    class SectionsNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async returnNavLinksCount(){
            await this.isDisplayed(NAV_LINKS, 5000);
            return await this.returnElementsCount(NAV_LINKS);
        }
        
        async assertNavLinksCount(count){
            assert.equal(await this.returnNavLinksCount(), count);
        }

        async assertNavLinkTextByIndex(text , index){
            assert.equal(await this.getElementTextFromAnArrayByIndex(NAV_LINKS, index), text);
        }

        async clickNavByIndex(index){
            await this.isDisplayed(NAV_LINKS, 5000);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(NAV_LINKS,index);
        }

        async clickNavByText(text){
            await this.isDisplayed(NAV_LINKS, 5000);
            await this.timeout(500);
            await this.clickElementByLinkText(text);
        }

        async getNavNameByIndex(index){
            await this.isDisplayed(NAV_LINKS, 5000);
            return await this.getElementTextFromAnArrayByIndex(NAV_LINKS, index);
        }

        async moveToEventNavs(){
            await this.moveToElement(NAV_LINKS);
            await this.isDisplayed(NAV_LINKS, 5000);
        }

        async returnSubNavLinksCount(){
            await this.timeout(1500);
            let subNavs = await this.findAll(EVENT_OVERVIEW_SUB_NAVS);
            if(subNavs.length > 0){
                return subNavs.length;
            }
            let teamSubs = await this.findAll(EVENT_TEAM_SUB_NAVS);
            if(teamSubs.length > 0){
                return teamSubs.length;
            }
            let settingsSubs = await this.findAll(EVENT_SETTINGS_SUB_NAVS);
            if(settingsSubs.length > 0){
                return settingsSubs.length;
            }
            let analyticsSubs = await this.findAll(EVENT_ANALYTICS_SUB_NAVS);
            if(analyticsSubs.length > 0){
                return analyticsSubs.length;
            }
        }
        
        async assertSectionSubNavsCount(count){
            assert.equal(await this.returnSubNavLinksCount(), count);
        }
        
        async assertEventOverviewSubNavLinkTextByIndex(text , index){
            assert.equal(await this.getElementTextFromAnArrayByIndex(EVENT_OVERVIEW_SUB_NAVS, index), text);
        }
        async assertEventTeamSubNavLinkTextByIndex(text , index){
            assert.equal(await this.getElementTextFromAnArrayByIndex(EVENT_TEAM_SUB_NAVS, index), text);
        }
        async assertEventSettingsSubNavLinkTextByIndex(text , index){
            assert.equal(await this.getElementTextFromAnArrayByIndex(EVENT_SETTINGS_SUB_NAVS, index), text);
        }
        async assertEventAnalyticsSubNavLinkTextByIndex(text , index){
            assert.equal(await this.getElementTextFromAnArrayByIndex(EVENT_ANALYTICS_SUB_NAVS, index), text);
        }

        /*
        async taxesAndFeesNavIsDisplayed(){
            await this.isDisplayed(SUB_NAVS, 5000);
        }

        

        async clickSubNavByIndex(index){
            await this.isDisplayed(SUB_NAVS, 5000);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(SUB_NAVS,index);
        }

        async getSubNavNameByIndex(index){
            await this.isDisplayed(SUB_NAVS, 5000);
            return await this.getElementTextFromAnArrayByIndex(SUB_NAVS, index);
        }

        async clickSubNavByText(text){
            await this.isDisplayed(SUB_NAVS, 5000);
            await this.timeout(500);
            await this.clickElementByLinkText(text);
        }
        
         */

    }
    module.exports = SectionsNavs;