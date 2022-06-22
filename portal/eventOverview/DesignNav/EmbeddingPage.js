    const BasePage = require('../../../BasePage');
    const COLOR_PICKER = { xpath: "//input[@type='color']" } //list
    const CARD_TYPE = { className: "rectangle-button" }; //list
    const NEXT_BUTTON = { xpath: "//a[text()='Next']"}
    const EMBED_OPTIONS = { className: "embed_select_container" }
    const WEBSITE_INPUT = { className: "origin-input" };
    const TICKET_GROUP_DROPDOWN = { id: "ticket-types" };
    const GENERATE_BUTTON = { xpath: "//a[text()='Generate']"};
    const CLOSE_POPUP_BUTTON = { className: "popup-close" };
    const COPY_EMBED_ICON = { className: "icon-copy" };




    class EmbeddingPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = EmbeddingPage;