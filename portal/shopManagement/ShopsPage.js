    const BasePage = require('../../BasePage');
    const CreateShopModal = require('../portalModals/CreateShopModal');
    const MenuPage = require('../eventModules/MyMenusPage');
    const MenuSchedulerPage = require('../eventModules/MenuSchedulerPage');
    const ADD_SHOP_DROPDOWN = { id: 'dropdownBasic1' };
    const ADD_VENDOR_PARTNER_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Vendor Partner']"}
    const ADD_SHOP_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Shop']"};
    const SHOP_EDIT_ICON = { xpath: "//a[@class='text-second']" }
    const DELETE_SHOP_ICON = { xpath: "//a[@class='text-danger']" }
    const SHOP_MENU_ICON = { xpath: "//a[@class='icon-dots-wrapper']" }
    const DETAILS_MENU_OPTION = { xpath: "//a[text()=' View Details ']"}
    const EDIT_MENU_OPTION = { xpath: "//a[text()=' Edit Menu ']"}



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
        async createMenuFromShopsManagementPageForTickets(eventName,base,sectionName, sectionIndex, editIconIndex){
            await this.click(SHOP_MENU_ICON);
            await this.isDisplayed(EDIT_MENU_OPTION);
            await this.click(EDIT_MENU_OPTION);
            let menu = new MenuPage(this.driver);
            await menu.isOnMyMenusPage();
            await menu.createNewMenuAndSetNewName(base);
            await menu.createNewSection(sectionName, sectionIndex, editIconIndex);
            await menu.createMenuForTickets(eventName)
        }

    }
    module.exports = ShopsPage;