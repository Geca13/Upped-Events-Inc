    const BasePage = require('../../BasePage');
    const SHOPS_MANAGEMENT_HEADER = { xpath: "//h3[@class='wraper-title' and text()='Shops Management']"};
    const SHOPS_NAV = { xpath: "//h3[@class='nav-link' and text()='Shops']"};
    const APPLICATIONS_NAV = { xpath: "//h3[@class='nav-link' and text()='Applications']"};
    const VENDOR_SIGN_UP_FORM_NAV = { xpath: "//h3[@class='nav-link' and text()='Vendor SignUp Form']"};
    const SHOP_CATEGORIES_NAV = { xpath: "//h3[@class='nav-link' and text()='Shop Categories']"};


    class ShopsNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async headerIsDisplayed(){
            await this.isDisplayed(SHOPS_MANAGEMENT_HEADER,5000);
        }
        async shopsNavIsDisplayed(){
            await this.isDisplayed(SHOPS_NAV,5000);
        }
        async applicationsNavIsDisplayed(){
            await this.isDisplayed(APPLICATIONS_NAV,5000);
        }
        async vendorNavIsDisplayed(){
            await this.isDisplayed(VENDOR_SIGN_UP_FORM_NAV,5000);
        }
        async shopCategoriesNavIsDisplayed(){
            await this.isDisplayed(SHOP_CATEGORIES_NAV,5000);
        }
        async clickShopsNav(){
            await this.click(SHOPS_NAV);
        }
        async clickApplicationsNav(){
            await this.click(APPLICATIONS_NAV);
        }
        async clickVendorNav(){
            await this.click(VENDOR_SIGN_UP_FORM_NAV);
        }
        async clickCategoriesNav(){
            await this.click(SHOP_CATEGORIES_NAV);
        }
    }
    module.exports = ShopsNavs;