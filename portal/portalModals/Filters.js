    const BasePage = require('../../BasePage');
    const APPLY_BUTTON = { xpath: "//button[text()='Apply']" }
    const RESET_BUTTON = { xpath: "//a[text()='Reset']" }
    const CLOSE_ARROW = { className: "icon-arrow-long" }
    const NAME_INPUT = { xpath: "//label[text()='Name']/preceding-sibling::input" }
    const EMAIL_INPUT = { xpath: "//label[text()='Email']/preceding-sibling::input" }
    // TRANSACTION CENTER LOCATORS
    const ORDER_ID_INPUT = { xpath: "//label[text()='Order Id']/preceding-sibling::input" };
    const TRANSACTION_ID_INPUT = { xpath: "//label[text()='transaction Id']/preceding-sibling::input" };
    const ORDER_TYPE_SELECT = { xpath: "//label[text()='Order Type']/preceding-sibling::ng-select" };
    const MINIMUM_PRICE_INPUT = { xpath: "//label[text()='Price Min.']/preceding-sibling::input" };
    const MAXIMUM_PRICE_INPUT = { xpath: "//label[text()='Price Max.']/preceding-sibling::input" };
    const MINIMUM_ITEMS_INPUT = { xpath: "//label[text()='Items Min.']/preceding-sibling::input" };
    const MAXIMUM_ITEMS_INPUT = { xpath: "//label[text()='Items Max.']/preceding-sibling::input" };
    const TRANSACTIONS_STATUS_SELECT = { xpath: "//label[text()='Status']/preceding-sibling::ng-select" };
    const PAYMENT_MODE_SELECT = { xpath: "//label[text()='Payment Mode']/preceding-sibling::ng-select" };
    const SELLER_SELECT = { xpath: "//label[text()='Seller']/preceding-sibling::ng-select" };
    const VISIBLE_SELECT_OPTIONS = { xpath: "//div[@role='option']//span" }
    const USER_INPUT = { xpath: "//label[text()='User']/preceding-sibling::input" };
    // STAFF MEMBERS LOCATORS
    const STAFF_STATUS_SELECT = { xpath: "//label[text()='Status']/preceding-sibling::select-picker" }
    const STAFF_STATUS_OPTIONS = { xpath: "//a[@role='option']//span" }
    const POSITIONS_INPUT = { xpath: "//label[text()='Positions']/preceding-sibling::input" }
    const ADDED_DATE_INPUT = { xpath: "//label[text()='Added Date']/preceding-sibling::input" }
    // SHOPS LOCATORS
    const SHOP_NAME_INPUT = { xpath: "//label[text()='Shop Name']/preceding-sibling::input" };
    const VENDOR_MERCHANT_INPUT = { xpath: "//label[text()='Vendor/Merchant']/preceding-sibling::input" };
    const CATEGORIES_INPUT = { xpath: "//label[text()='Categories']/preceding-sibling::input" };
    // TICKETS LOCATORS
    const TICKET_NAME_INPUT = { xpath: "//label[text()='Ticket Name']/preceding-sibling::input" }
    const QUANTITY_INPUT = { xpath: "//label[text()='Quantity']/preceding-sibling::input" }
    const START_DATE_INPUT = { xpath: "//label[text()='Start Date']/preceding-sibling::input" };
    const END_DATE_INPUT = { xpath: "//label[text()='End Date']/preceding-sibling::input" };
    const PRICE_INPUT = { xpath: "//label[text()='Price']/preceding-sibling::input" };
    // PARTNERS LOCATORS
    const PARTNER_NAME_INPUT = { xpath: "//label[text()='partner Name']/preceding-sibling::input" };
    const ACTIVE_INACTIVE_INPUT = { xpath: "//label[text()='Active/Inactive']/preceding-sibling::input" };
    const NEXT_ACTION_INPUT = { xpath: "//label[text()='Next Action']/preceding-sibling::input" };
    const REMOVE_SELECTED_STATUS = { xpath: "//span[contains(@class, 'left')]" }




    class Filters extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async filtersModalIsOpened(){
            await this.isDisplayed(ORDER_ID_INPUT, 5000);
            await this.timeout(500);
        }
        async filterByIdInTransactionCenter(id){
            await this.filtersModalIsOpened();
            await this.click(ORDER_ID_INPUT);
            await this.timeout(500);
            await this.sentKeys(ORDER_ID_INPUT, id);
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }

        async filterByMinimumPriceInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MINIMUM_PRICE_INPUT);
            await this.timeout(500);
            await this.sentKeys(MINIMUM_PRICE_INPUT, "30.00");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByMaximumPriceInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MAXIMUM_PRICE_INPUT);
            await this.timeout(500);
            await this.sentKeys(MAXIMUM_PRICE_INPUT, "20.00");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByPriceRangeInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MINIMUM_PRICE_INPUT);
            await this.timeout(500);
            await this.sentKeys(MINIMUM_PRICE_INPUT, "20.00");
            await this.timeout(500);
            await this.click(MAXIMUM_PRICE_INPUT);
            await this.timeout(500);
            await this.sentKeys(MAXIMUM_PRICE_INPUT, "25.00");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByUserInTransactionCenter(base){
            await this.filtersModalIsOpened();
            await this.timeout(500);
            await this.sentKeys(USER_INPUT, base + " " + base);
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByPartialNameInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.timeout(500);
            await this.sentKeys(USER_INPUT, "Laz");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByMinimumItemsInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MINIMUM_ITEMS_INPUT);
            await this.timeout(500);
            await this.sentKeys(MINIMUM_ITEMS_INPUT, "10");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByMaximumItemsInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MAXIMUM_ITEMS_INPUT);
            await this.timeout(500);
            await this.sentKeys(MAXIMUM_ITEMS_INPUT, "2");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
        async filterByItemsRangeInTransactionCenter(){
            await this.filtersModalIsOpened();
            await this.click(MINIMUM_ITEMS_INPUT);
            await this.timeout(500);
            await this.sentKeys(MINIMUM_ITEMS_INPUT, "3");
            await this.timeout(500);
            await this.click(MAXIMUM_ITEMS_INPUT);
            await this.timeout(500);
            await this.sentKeys(MAXIMUM_ITEMS_INPUT, "5");
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }

        async filterByUserAndPriceRangeInTransactionCenter(base){
            await this.filtersModalIsOpened();
            await this.timeout(500);
            await this.sentKeys(MINIMUM_PRICE_INPUT, "20.00");
            await this.timeout(500);
            await this.click(MAXIMUM_PRICE_INPUT);
            await this.timeout(500);
            await this.sentKeys(MAXIMUM_PRICE_INPUT, "25.00");
            await this.timeout(500);
            await this.sentKeys(USER_INPUT, base + " " + base);
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }

        async filterByStatusInTransactionCenter(index) {
            await this.filtersModalIsOpened();
            await this.timeout(500);
            await this.click(TRANSACTIONS_STATUS_SELECT);
            await this.timeout(500);
            await this.isDisplayed(VISIBLE_SELECT_OPTIONS,5000);
        }

        async returnOptionName(index) {
            await this.timeout(1500);
            let option = await this.getElementTextFromAnArrayByIndex(VISIBLE_SELECT_OPTIONS, index);
            return option;
        }
        async selectOptionFromDropdown(index){
            let selectedOption = await this.findAll(REMOVE_SELECTED_STATUS);
            if (selectedOption.length === 1){
                await this.click(REMOVE_SELECTED_STATUS);
                await this.timeout(500);
            }
            await this.clickElementReturnedFromAnArray(VISIBLE_SELECT_OPTIONS, index);
            await this.timeout(500);
            await this.click(APPLY_BUTTON);
            await this.timeout(1000);
        }
    }
    module.exports = Filters;