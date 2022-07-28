    const BasePage = require('../../../BasePage');
    const assert = require("assert");
    const INCLUDED_TAXES_RADIO = { xpath: "//*[text()=' Included, the price listed is the total price the attendee will pay ']"}
    const EXCLUDED_TAXES_RADIO = { xpath: "//*[text()=' Excluded, taxes and fees will be added on top of the ticket price ']"}
    const TAX_NAME_INPUT = { name: 'name' }
    const PERCENT_RATE_INPUTS = { name: 'percent' } //list
    const FEE_NAME_INPUT = { name: 'type' }
    const FEE_$_VALUE_INPUT = { name: 'price' }
    const ADD_BUTTONS = { xpath: "//*[text()='Add']"}//list
    const SAVE_TAXES_AND_FEES_BUTTON = { xpath: "//*[text()='Save']"}
    const TAXES_AND_FEES_NAMES = { className: 'inner-elements-full'}
    const TAXES_AND_FEES_VALUES = { tagName: 'tr'}
    const DELETE_TAX_OR_FEE = { className: "icon-del" }
    const EDIT_TAX_OR_FEE = { xpath: "//tbody//tr//td//span[@class='icon-edit-bg']" }




    class TaxesAndFeesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }



        async includeExcludeIsVisible(){
           await this.isDisplayed(INCLUDED_TAXES_RADIO, 5000);
           await this.timeout(1000);
        }
        async taxNameInputIsVisible(){
            await this.isDisplayed(TAX_NAME_INPUT, 5000)
        }
        async feeNameInputIsVisible(){
            await this.isDisplayed(FEE_NAME_INPUT, 5000)
        }
        async clickIncludeTaxesInPriceRadio(){
            await this.click(INCLUDED_TAXES_RADIO)
        }
        async clickExcludeTaxesInPriceRadio(){
            await this.click(EXCLUDED_TAXES_RADIO)
        }

        async setFirstTaxForTickets(taxName, taxValue){
            await this.sentKeys(TAX_NAME_INPUT, taxName);

            await this.sendKeysToElementReturnedFromAnArray(PERCENT_RATE_INPUTS,0,taxValue);

            await this.clickElementReturnedFromAnArray(ADD_BUTTONS,0)
        }
        async setSecondTaxForTickets(taxName, taxValue){
            await this.sentKeys(TAX_NAME_INPUT, taxName);
            await this.sendKeysToElementReturnedFromAnArray(PERCENT_RATE_INPUTS,1,taxValue);

            await this.clickElementReturnedFromAnArray(ADD_BUTTONS,0)
        }
        async setPercentFeeForTickets(feeName, feeValue){
            await this.sentKeys(FEE_NAME_INPUT, feeName);

            await this.sendKeysToElementReturnedFromAnArray(PERCENT_RATE_INPUTS,4,feeValue);

            await this.clickElementReturnedFromAnArray(ADD_BUTTONS,1)
        }
        async set$FeeForTickets(feeName, feeValue){
            await this.sentKeys(FEE_NAME_INPUT, feeName);

            await this.sentKeys(FEE_$_VALUE_INPUT, feeValue);

            await this.clickElementReturnedFromAnArray(ADD_BUTTONS,1)
        }
        async clickSaveTaxesAndFeesButton(){
            await this.click(SAVE_TAXES_AND_FEES_BUTTON)
        }
        async createTaxesAndFeesForEventTickets(){
            await this.includeExcludeIsVisible();
            await this.setFirstTaxForTickets("Tax One", "5.71");
            await this.taxNameInputIsVisible();
            await this.setSecondTaxForTickets("Tax Two", "4.18");
            await this.set$FeeForTickets("Fee $", "0.37");
            await this.feeNameInputIsVisible();
            await this.setPercentFeeForTickets("Fee %", "2.66");
            await this.clickSaveTaxesAndFeesButton();
        }

        async getTaxOrFeeNameByIndex(index){
            return await this.getElementTextFromAnArrayByIndex(TAXES_AND_FEES_NAMES, index);
        }

        async getTaxOrFeeValueByIndex(parentIndex, childIndex){
            return await this.getChildByIndex(TAXES_AND_FEES_VALUES, parentIndex, childIndex);
        }

        async assertTaxesAndFeesAreNotCreated(){
            await this.includeExcludeIsVisible();
            let editButtons = await this.returnElementsCount(EDIT_TAX_OR_FEE);
            assert.equal(editButtons,0);
            await this.timeout(1000);
        }


    }
    module.exports = TaxesAndFeesPage;
