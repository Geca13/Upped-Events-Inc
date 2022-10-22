const BasePage = require('../../BasePage');
const ADD_STAFF_SELECT = { name: "typeId" };
const ADD_BY_EMAIL_OPTION = { xpath: "(//a[@role='option'])[1]" };
const ADD_BY_CSV_OPTION = { xpath: "(//a[@role='option'])[2]" };
const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='firstName']" };
const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='lastName']" };
const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
const CANCEL_BUTTON = { xpath: "//button[contains(@class, 'secondary-btn')]" }
const ADD_TO_PROSPECTS_BUTTON = { xpath: "//button[text()='Add to prospects']" }


class AddStaffMemberModal extends BasePage {
    constructor(driver) {
        super(driver);
    }
    
}
module.exports = AddStaffMemberModal;