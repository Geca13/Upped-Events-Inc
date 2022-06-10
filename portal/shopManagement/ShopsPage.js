    const BasePage = require('../../BasePage');
    const CreateShopModal = require('../portalModals/CreateShopModal')
    const ADD_SHOP_DROPDOWN = { id: 'dropdownBasic1' };
    const ADD_VENDOR_PARTNER_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Vendor Partner']"}
    const ADD_SHOP_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Shop']"}


    class ShopsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async addShopDropdownIsDisplayed(){
            await this.isDisplayed(ADD_SHOP_DROPDOWN,5000);
        }
        async clickAddShopDropdown(){
            await this.click(ADD_SHOP_DROPDOWN);
        }
        async addVendorOptionIsDisplayed(){
            await this.isDisplayed(ADD_VENDOR_PARTNER_OPTION,5000);
        }
        async clickAddVendorOption(){
            await this.click(ADD_VENDOR_PARTNER_OPTION);
        }
        async addShopOptionIsDisplayed(){
            await this.isDisplayed(ADD_SHOP_OPTION,5000);
        }
        async clickAddShopOption(){
            await this.click(ADD_SHOP_OPTION);
        }

        async addShopForVendor(base){
            await this.addShopDropdownIsDisplayed();
            await this.clickAddShopDropdown();
            await this.addVendorOptionIsDisplayed();
            await this.clickAddShopOption();
            await this.driver.sleep(500)
            let shopModal = new CreateShopModal(this.driver);
            await shopModal.createVendorShop(base);

        }

    }
    module.exports = ShopsPage;