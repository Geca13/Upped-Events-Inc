    const BasePage = require('../../BasePage');
    const CreateShopModal = require('../portalModals/CreateShopModal');
    const MenuPage = require('../eventModules/Menus/MyMenusPage');
    const TableComponent = require('../portalComponents/TableComponent')
    const MenuSchedulerPage = require('../eventModules/Menus/MenuSchedulerPage');
    const ADD_SHOP_DROPDOWN = { id: 'dropdownBasic1' };
    const ADD_VENDOR_PARTNER_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Vendor Partner']"}
    const ADD_SHOP_OPTION = { xpath: "//a[@class='dropdown-item' and text()='Add Shop']"};
    const SHOP_EDIT_ICON = { xpath: "//a[@class='text-second']" }
    const DELETE_SHOP_ICON = { xpath: "//a[@class='text-danger']" }
    const SHOP_MENU_ICON = { xpath: "//a/i[@class='icon-menu']" }
    const DETAILS_MENU_OPTION = { xpath: "//a[text()=' View Details ']"}
    const EDIT_MENU_OPTION = { xpath: "//a[text()=' Edit Menu ']"}



    class ShopsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        
        async assertShopsTableHeadersNames(){
            await this.addShopDropdownIsDisplayed();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Shop Name ");
            await table.assertColumnNamesByIndex(2 ,"Vendor/Merchant ");
            await table.assertColumnNamesByIndex(3 ,"Categories ");
            await table.assertColumnNamesByIndex(4 ,"Hours ");
            await table.assertColumnNamesByIndex(5,"Location ");
            await table.assertColumnNamesByIndex(6 ,"# of Menus ");
            await table.assertColumnNamesByIndex(7 ,"Linked Shops ");
            await table.assertColumnNamesByIndex(8,"Featured ");
            await table.assertColumnNamesByIndex(9 ,"Menu Set ");
            await table.assertColumnNamesByIndex(10 ,"Needs Attention ");
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
            await this.timeout(500);
            let shopModal = new CreateShopModal(this.driver);
            await shopModal.createVendorShop(base);

        }

        async createNewShopForTickets(base){
            await this.addShopDropdownIsDisplayed();
            await this.clickAddShopDropdown();
            await this.addShopOptionIsDisplayed();
            await this.clickAddShopOption();
            let shopModal = new CreateShopModal(this.driver);
            await shopModal.addShopForTickets(base);

        }
        async createMenuFromShopsManagementPageForTickets(eventName,base,sectionName, sectionIndex, editIconIndex){
            let menu = new MenuPage(this.driver);
            await menu.createNewMenuAndSetNewName(base);
            await menu.createNewSection(sectionName, sectionIndex, editIconIndex);
            await menu.createMenuForTickets(eventName)
            
        }

    }
    module.exports = ShopsPage;