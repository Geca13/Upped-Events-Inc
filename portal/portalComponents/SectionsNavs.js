    const BasePage = require('../../BasePage');
    const NAV_LINKS = { xpath: "//a[@class='nav-link']"}
    const SETTINGS_NAV = { linkText: "Settings" }
    class SectionsNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async returnNavLinksCount(){
            let count = await this.returnElementsCount(NAV_LINKS);
            return count;
        }

        async clickNavByIndex(index){
            await this.clickElementReturnedFromAnArray(NAV_LINKS,index);
        }

        async getNavNameByIndex(index){
          let navName = await this.getElementTextFromAnArrayByIndex(NAV_LINKS, index)
          return navName;
        }

        async clickNavByText(text){
            await this.isDisplayed(NAV_LINKS, 5000);
            await this.clickElementByLinkText(text);
        }

        async moveToEventNavs(){
            await this.moveToElement(NAV_LINKS);
            await this.isDisplayed(NAV_LINKS, 5000);
        }


    }
    module.exports = SectionsNavs;