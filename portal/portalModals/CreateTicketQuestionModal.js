    const BasePage = require("../../BasePage");
    const SetImageModal = require('../portalModals/SetImageModal')
    const TITLE_INPUT = { xpath: "//input[@name='title']" };
    const TICKETS_SELECT = { xpath: "//input[@name='ticketIds']" };
    const TICKETS_LIST = { className: "ng-option-label" };
    const QUESTION = { xpath: "//textarea[@name='question_text']" };
    const RESPONSE_INPUT = { className: "response-question" }; //parent index child index 1
    const CHECKBOXES = { className: "myRipple2" }; //list probably with executor
    const IMAGE = { xpath: "//input[@type='file']" };
    const CREATE_BUTTON = { xpath: "//button[text()=' Create ']" };
    const CLOSE_BUTTON = { xpath: "//a[text()='Close']" };
    const RESET_BUTTON = { xpath: "//button[text()='Reset']" };

    class CreateTicketQuestionModal extends BasePage{
            constructor(driver) {
                super(driver);
            }
    }
    module.exports = CreateTicketQuestionModal;