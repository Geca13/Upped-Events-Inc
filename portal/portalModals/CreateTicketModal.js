    const BasePage = require('../../BasePage');
    const CREATE_TICKET_HEADER = { xpath: "//*[text()='Create Ticket']"}


    class CreateTicketModal extends BasePage {
        constructor(driver) {
            super(driver);
        }

    }
    module.exports = CreateTicketModal;