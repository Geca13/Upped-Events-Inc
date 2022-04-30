    const BasePage = require('../../BasePage');
    const EVENT_TITLE = { className: 'event-title' };
    const EVENT_DESCRIPTION = { className: 'event-description' };
    const DETAILS_TAB = { xpath: "//*[text()='Event Description']"};

    class DetailsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

    }

    module.exports = DetailsTab;