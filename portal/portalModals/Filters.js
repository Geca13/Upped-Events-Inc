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




    class Filters extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = Filters;