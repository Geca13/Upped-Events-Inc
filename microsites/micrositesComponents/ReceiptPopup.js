    const BasePage = require("../../BasePage");
    const TICKETS_POPUP = { className: 'receipt-modal' };
    const CLOSE_POPUP_BUTTON = { className: 'close-btn' };
    const EVENT_NAME = { className: 'heading' };
    const PURCHASE_DETAILS = { className: 'sub-heading' };
    const TICKETS_NAMES = { className: 'name' }; //list
    const TICKETS_PRICES = { className: 'price' }; //list
    const SUBTOTAL_SECTION = { className: 'subtotal-section' }
    const TOTAL_SECTION = { className: 'total' }

    class ReceiptPopup extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }
