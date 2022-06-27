    const BasePage = require('../../../BasePage');
    const ADD_BUTTON = { xpath: "//a[text()='Add']" }

    class TicketQuestionsPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = TicketQuestionsPage;