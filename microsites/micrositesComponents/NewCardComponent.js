    const BasePage = require("../../BasePage");
    const CARDHOLDER_NAME_INPUT = { name: 'name' };
    const CARD_NUMBER_INPUT = { xpath: "//input[@type='tel']" };
    const SAVE_CARD_CHECKBOX = { xpath: "//input[@type='checkbox']" };
    const ZIP_CODE_INPUT = { css: "input[formControlName=cvc]" };
    const CVV_INPUT = { css: "input[formControlName=zip_code]" };
    const STREET_ADDRESS_INPUT = { css: "input[formControlName=billingAddress]" };
    const MONTH_SELECT = { css: "select[formControlName=month]" };
    const YEAR_SELECT = { css: "select[formControlName=year]" };
    const COUNTRY_SELECT = { css: "select[formControlName=country_id]" };
    const STATE_SELECT = { css: "select[formControlName=state]" };
    const INPUT_LABELS = { tagName: 'label' }; //list


    class NewCardComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = NewCardComponent;
