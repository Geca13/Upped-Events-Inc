    const BasePage = require('../../BasePage');
    const assert = require('assert')
    const DONATION_INPUT = { name: 'donation'};
    const DONATE_HEADER = { className: 'donate-heading' };
    const DONATE_TO_HEADER = { xpath: "//div[@class='text-container']//span" };
    const DONATE_EVENT_NAME = { xpath: "//div[@class='text-container']//div[2]" };
    const DONATION_MESSAGE = { xpath: "//div[@class='text-container']//div[3]" };
    const OTHER_TEXT = { xpath: "//div[@class='text-container']//div[4]" };
    const DOLLAR_INPUT_SYMBOL = { xpath: "//div[@class='text-container']//div[5]//span" }
    const USD_TEXT = { xpath: "//div[@class='text-container']//div[6]" };
    const MINIMUM_DONATION_TEXT = { xpath: "//div[@class='text-container']//div[7]" };
    const DONATE_BUTTON_CONTAINER = { className: 'donations-buttons-box' };
    const DONATE_BUTTONS = { className: 'donations-button' }; //list
    const ADD_DONATION_BUTTON = { className: 'donation-order-button' };
    const RESET_DONATION_BUTTON = { className: 'donation-reset-button' };


    class EmbedDonateComponent extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async assertElementsOnDonateTab(eventName, message){
            await this.isDisplayed(DONATE_HEADER);
            await this.timeout(500);
            let donateHeader = await this.getElementText(DONATE_HEADER);
            assert.equal(donateHeader, "Donate");
            let donateToHeader = await this.getElementText(DONATE_TO_HEADER);
            assert.equal(donateToHeader, "Donate to the");
            let event = await this.getElementText(DONATE_EVENT_NAME);
            assert.equal(event, eventName);
            /*let donateMessage = await this.getElementText(DONATION_MESSAGE);
            assert.equal(donateMessage, message);*/
            let donationButtonsCount = await this.returnElementsCount(DONATE_BUTTONS);
            assert.equal(donationButtonsCount, 4);
            let $20 = await this.getElementTextFromAnArrayByIndex(DONATE_BUTTONS ,0);
            assert.equal($20, "$20");
            let $35 = await this.getElementTextFromAnArrayByIndex(DONATE_BUTTONS ,1);
            assert.equal($35, "$35");
            let $50 = await this.getElementTextFromAnArrayByIndex(DONATE_BUTTONS ,2);
            assert.equal($50, "$50");
            let $100 = await this.getElementTextFromAnArrayByIndex(DONATE_BUTTONS ,3);
            assert.equal($100, "$100");
            let other = await this.getElementText(OTHER_TEXT);
            assert.equal(other, "Other:");
            let input = await this.getEnteredTextInTheInput(DONATION_INPUT);
            assert.equal(input, "0");
            let $ = await this.getElementText(DOLLAR_INPUT_SYMBOL);
            assert.equal($, "$");
            let usdText = await this.getElementText(USD_TEXT);
            assert.equal(usdText, "USD");
            let minimum = await this.getElementText(MINIMUM_DONATION_TEXT);
            assert.equal(minimum, "($1 minimum donation)");
            let resetButton = await this.getElementText(RESET_DONATION_BUTTON);
            assert.equal(resetButton, "Reset");
            let addButton = await this.getElementText(ADD_DONATION_BUTTON);
            assert.equal(addButton, "Add to Order");

        }
    }
    module.exports = EmbedDonateComponent;