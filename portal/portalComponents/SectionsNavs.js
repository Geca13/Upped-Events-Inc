    const BasePage = require('../../BasePage');
    const NAV_LINKS = { xpath: "//a[@class='nav-link']"}
    const SUB_NAVS = { xpath: "//event-ticket-settings//ul//li//a" }
    class SectionsNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async returnNavLinksCount(){
            await this.isDisplayed(NAV_LINKS, 5000);
            return await this.returnElementsCount(NAV_LINKS);
        }

        async clickNavByIndex(index){
            await this.isDisplayed(NAV_LINKS, 5000);
            await this.clickElementReturnedFromAnArray(NAV_LINKS,index);
        }

        async getNavNameByIndex(index){
            await this.isDisplayed(NAV_LINKS, 5000);
            return await this.getElementTextFromAnArrayByIndex(NAV_LINKS, index);
        }

        async clickNavByText(text){
            await this.isDisplayed(NAV_LINKS, 5000);
            await this.timeout(500);
            await this.clickElementByLinkText(text);
        }

        async moveToEventNavs(){
            await this.moveToElement(NAV_LINKS);
            await this.isDisplayed(NAV_LINKS, 5000);
        }
        
        async taxesAndFeesNavIsDisplayed(){
            await this.isDisplayed(SUB_NAVS, 5000);
        }
        


    }
    module.exports = SectionsNavs;