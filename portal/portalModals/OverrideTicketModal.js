    const BasePage = require('../../BasePage');
    const MODEL_HEADER = { xpath: "//*[text()='Override Ticket ']"};
    const CLOSE_MODAL_ARROW = { className: "slide-close"};
    const MANAGER_CODE_INPUT = { xpath: "//input[@type='password']"};
    const CLOSE_MODAL_ARROW = { xpath: "//button[text()='Confirm']"};
    const VALID_CODE_MESSAGE = { xpath: "//div[text()=' Valid Manager Code! ']"};
    const TICKET_NAME_INPUT = { xpath: "//input[@formcontrolname='name']"};
    const CURRENT_TICKET_PRICE_INPUT = { xpath: "//input[@formcontrolname='currentTicketPrice']"};
    const QUANTITY_INPUT = { xpath: "//input[@formcontrolname='quantity']"};
    const NEW_TICKET_PRICE_INPUT = { xpath: "//input[@formcontrolname='overriddenTicketPrice']"};
    const NEW_TICKET_QUANTITY_INPUT = { xpath: "//input[@formcontrolname='overriddenQuantity']"};
    const SAVE_BUTTON = { xpath: "//*[text()='Save']"};
    const CANCEL_BUTTON = { xpath: "//*[text()='Cancel']"};




    class OverrideTicketModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = OverrideTicketModal;