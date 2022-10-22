const BasePage = require('../../BasePage');
const SHIFT_NAME_INPUT = { xpath: "//input[@formcontrolname='name']" };
const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='startDate']" };
const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='endDate']" };
const CALENDAR_ICON = { className: 'icon-event' };
const FUNCTION_SELECT = { xpath: "//select-picker[@formcontrolname='functionId']" };
const FUNCTION_SELECT_OPTIONS = { xpath: "//ul[@role='presentation']//li//a" };
const SHIFT_LOCATION_SELECT = { id : "shiftLocations" }
const SHIFT_LOCATION_SELECT_OPTIONS = { xpath : "//ng-dropdown-panel//div//span" }
const FUNCTION_DETAILS_TEXTAREA = { xpath: "//textarea[@formcontrolname='functionDetails']]" };
const LOCATION_DETAILS_TEXTAREA = { xpath: "//textarea[@formcontrolname='locationDetails']" };
const JOB_DESCRIPTION_TEXTAREA = { xpath: "//textarea[@formcontrolname='instructions']]" };
const JOB_INSTRUCTIONS_TEXTAREA = { xpath: "//textarea[@formcontrolname='instructions']" };
const STAFF_NO_POSITIONS_INPUT = { xpath: "(//input[@formcontrolname='positions'])[1]" }
const LEAD_NO_POSITIONS_INPUT = { xpath: "(//input[@formcontrolname='positions'])[2]" }
const MANAGER_NO_POSITIONS_INPUT = { xpath: "(//input[@formcontrolname='positions'])[3]" }
const OWNER_NO_POSITIONS_INPUT = { xpath: "(//input[@formcontrolname='positions'])[4]" }
const STAFF_PAYOUT_TYPES_SELECT = { xpath: "(//select[@formcontrolname='payoutType'])[1]" }
const LEAD_PAYOUT_TYPES_SELECT = { xpath: "(//select[@formcontrolname='payoutType'])[2]" }
const MANAGER_PAYOUT_TYPES_SELECT = { xpath: "(//select[@formcontrolname='payoutType'])[3]" }
const OWNER_PAYOUT_TYPES_SELECT = { xpath: "(//select[@formcontrolname='payoutType'])[4]" }
const STAFF_PAYOUT_VALUE_INPUT = { xpath: "(//input[@formcontrolname='payoutValue'])[1]" }
const LEAD_PAYOUT_VALUE_INPUT = { xpath: "(//input[@formcontrolname='payoutValue'])[2]" }
const MANAGER_PAYOUT_VALUE_INPUT = { xpath: "(//input[@formcontrolname='payoutValue'])[3]" }
const OWNER_PAYOUT_VALUE_INPUT = { xpath: "(//input[@formcontrolname='payoutValue'])[4]" }
const STAFF_PAYOUT_PER_SELECT = { xpath: "(//select[@formcontrolname='payoutCalPer'])[1]" }
const LEAD_PAYOUT_PER_SELECT = { xpath: "(//select[@formcontrolname='payoutCalPer'])[2]" }
const MANAGER_PAYOUT_PER_SELECT = { xpath: "(//select[@formcontrolname='payoutCalPer'])[3]" }
const OWNER_PAYOUT_PER_SELECT = { xpath: "(//select[@formcontrolname='payoutCalPer'])[4]" }
const STAFF_SIGNUP_TYPE_SELECT = { xpath: "(//select[@formcontrolname='isCheckIn'])[1]" }
const LEAD_SIGNUP_TYPE_SELECT = { xpath: "(//select[@formcontrolname='isCheckIn'])[2]" }
const MANAGER_SIGNUP_TYPE_SELECT = { xpath: "(//select[@formcontrolname='isCheckIn'])[3]" }
const OWNER_SIGNUP_TYPE_SELECT = { xpath: "(//select[@formcontrolname='isCheckIn'])[4]" }
const BLUE_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[1]" }
const GREEN_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[2]" }
const ORANGE_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[3]" }
const SKY_BLUE_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[4]" }
const RED_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[5]" }
const PINK_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[6]" }
const LIGHT_GREEN_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[7]" }
const LEMON_RADIO_BUTTON = { xpath: "(//div[contains(@class, 'blue-radio')])[8]" }
const UPLOAD_FILE_BUTTON = { xpath: "//input[@type='file']" }
const CANCEL_BUTTON = { xpath: "//a[contains(@class, 'secondary-btn')]" }
const SAVE_BUTTON = { xpath: "//button[text()=' Save ']" }
const CLOSE_ARROW_BUTTON = { xpath: "//span[contains(@class, 'slide-close')]" }


class CreateNewShift extends BasePage {
    constructor(driver) {
        super(driver);
    }

    
}
module.exports = CreateNewShift;