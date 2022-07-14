    const BasePage = require("../../BasePage");
    const CARDHOLDER_NAME_INPUT = { css: "input[formControlName=name_on_card]"  };
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
    const EMBED_ADD_TO_SAVED_CARD_BUTTON = { xpath: "//*[text()='Add to Saved Card']"}



    class NewCardComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtNewCardTab(){
            await this.isDisplayed(CARDHOLDER_NAME_INPUT,5000)
        }

        async fillNewCardWithValidData(){
            await this.sentKeys(CARDHOLDER_NAME_INPUT,"Parma Parma");
            await this.sentKeys(CARD_NUMBER_INPUT,"2223000010309711");
            await this.sentKeys(CVV_INPUT,"900");
            await this.sentKeys(STREET_ADDRESS_INPUT,"Main Street 21/14");
            await this.sentKeys(MONTH_SELECT,"9");
            await this.sentKeys(YEAR_SELECT,"2023");
            await this.sentKeys(COUNTRY_SELECT, "Canada");
            await this.sentKeys(STATE_SELECT, "Alberta");
            await this.sentKeys(ZIP_CODE_INPUT,"14400");
        }

        async fillNewCardWithVisaData(firstName, lastName){
            await this.isDisplayed(CARDHOLDER_NAME_INPUT,5000);
            await this.sentKeys(CARDHOLDER_NAME_INPUT,firstName + ' ' + lastName);
            await this.sentKeys(CARD_NUMBER_INPUT,"4111111111111111");
            await this.sentKeys(CVV_INPUT,"900");
            await this.sentKeys(STREET_ADDRESS_INPUT,"Main Street 1/14");
            await this.sentKeys(MONTH_SELECT,"8");
            await this.sentKeys(YEAR_SELECT,"2024");
            await this.sentKeys(STATE_SELECT, "Minnesota");
            await this.sentKeys(ZIP_CODE_INPUT,"14400");
        }

        async clickSaveCardCheckbox(){
            await this.click(SAVE_CARD_CHECKBOX)
        }

        async clickEmbedSaveCardButton(){
            await this.click(EMBED_ADD_TO_SAVED_CARD_BUTTON)
        }

    }

    module.exports = NewCardComponent;
