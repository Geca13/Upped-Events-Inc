    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const Alerts = require('../../../Validations&Alerts/Alerts')
    const EXTRAS_HEADER = { xpath: "//h2[text()='Extras']" }
    const EXTRAS_OPTIONS = { className: "text-center" } //list of three
    const DonationComponent = require('../../../microsites/micrositesComponents/DonationComponent');
    const EmbedDonate = require('../../../embed/embedComponents/EmbedDonateComponent')
    const BOStepper = require("./BOStepper");
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }
    const ADD_ONS_TOOLTIP = { className: "tooltip-inner" }




    class BOAddExtras extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnExtrasScreen(){
            await this.isDisplayed(EXTRAS_HEADER,5000);
        }

        async clickDonationOptionAndAssertWhenDonationButtonClickedValueAddedToInput(){
            try{
                await this.isOnExtrasScreen();
                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let donation = new EmbedDonate(this.driver);
                await donation.assertCorrectValuesInInputAfterDonationButtonIsClicked(0);
                await donation.assertCorrectValuesInInputAfterDonationButtonIsClicked(1);
                await donation.assertCorrectValuesInInputAfterDonationButtonIsClicked(2);
                await donation.assertCorrectValuesInInputAfterDonationButtonIsClicked(3);
            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickDonationOptionAddCustomDonationAndAssertAddedDonationMessage(){
            try{
                await this.isOnExtrasScreen();
                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let donation = new EmbedDonate(this.driver);
                await donation.addCustomDonationToInputAndAddItToOrder();
                let alert = new Alerts(this.driver);
                await alert.correctInfoMessageIsDisplayed("Donation added")
            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickDonationOptionAddCustomDecimalDonationAndAssertOnlyFullNumberIsDisplayed(){
            try{
                await this.isOnExtrasScreen();
                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let donation = new EmbedDonate(this.driver);
                let value = await donation.addCustomDonationAndReturnValue();
                assert.equal(value, "777");
            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async checkDonationAmountIsSavedInDonationModal(){
            try{
                await this.isOnExtrasScreen();
                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let donation = new EmbedDonate(this.driver);
                let value = await donation.addCustomDonationAndReturnValue();
                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                await donation.assertOnceSetDonationIsSavedCorrectlyInBox_OfficeModal(value);
            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickOnDonationOptionAndAssertElements(eventName){
            try{
               await this.isOnExtrasScreen();
               await this.isDisplayed(EXTRAS_OPTIONS, 5000);
               await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let donation = new EmbedDonate(this.driver);
                await donation.assertElementsOnDonateTab(eventName, "I need money for Beer, a lot of MONEY");

            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickDonationOptionAndReceiveDonationNotEnabledMessage(){
            try{

                await this.isDisplayed(EXTRAS_OPTIONS, 5000);
                await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
                let alert = new Alerts(this.driver);
                await alert.correctInfoMessageIsDisplayed("Event does not receive donations")

            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async assertElementsOnExtrasPage(){
            await this.isOnExtrasScreen();
            try{
                let extrasOptionsCount = await this.returnElementsCount(EXTRAS_OPTIONS);
                assert.equal(extrasOptionsCount, 3);
                let addOns = await this.getElementTextFromAnArrayByIndex(EXTRAS_OPTIONS, 0);
                let donation = await this.getElementTextFromAnArrayByIndex(EXTRAS_OPTIONS, 1);
                let merch = await this.getElementTextFromAnArrayByIndex(EXTRAS_OPTIONS, 2);
                assert.equal(addOns, 'Add-Ons');
                assert.equal(donation, 'Donation');
                assert.equal(merch, 'Merch\n' + '(Coming Soon)');
                await this.moveToElementFromArrayByIndex(EXTRAS_OPTIONS, 0);
                await this.isDisplayed(ADD_ONS_TOOLTIP, 5000);
                let soon = await this.getElementText(ADD_ONS_TOOLTIP);
                assert.equal(soon, 'COMING SOON');
            }catch (error) {
                await this.takeScreenshot("bosExtras-full")
                await this.writeError(error)
                throw error.toString();
            }
        }

        async clickNextButton(){
            await this.isDisplayed(NEXT_BUTTON,5000,);
            await this.click(NEXT_BUTTON);
        }

        async clickNavButtonByIndexWhenOnExtrasPage(index){
            await this.isOnExtrasScreen();
            let stepper = new BOStepper(this.driver);
            await stepper.clickNavElementByIndex(index);
        }

        async add20$ToOrderOnExtrasPage(){
            await this.isOnExtrasScreen();
            await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
            let donation = new DonationComponent(this.driver);
            await donation.isOnDonationScreen();
            await donation.click$20DonationButton();
            await this.timeout(500);
            await donation.clickAddDonationToOrderButton();
            await this.clickNextButton()
        }
        async add35$ToOrderOnExtrasPage(){
            await this.isOnExtrasScreen();
            await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
            let donation = new DonationComponent(this.driver);
            await donation.isOnDonationScreen();
            await donation.click$35DonationButton();
            await this.driver.sleep(500);
            await donation.clickAddDonationToOrderButton();
            await this.clickNextButton()
        }
        async add50$ToOrderOnExtrasPage(){
            await this.isOnExtrasScreen();
            await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
            let donation = new DonationComponent(this.driver);
            await donation.isOnDonationScreen();
            await donation.click$50DonationButton();
            await this.timeout(500);
            await donation.clickAddDonationToOrderButton();
            await this.clickNextButton()
        }
        async addCustom$ToOrderOnExtrasPage(){
            await this.isOnExtrasScreen();
            await this.clickElementReturnedFromAnArray(EXTRAS_OPTIONS,1);
            let donation = new DonationComponent(this.driver);
            await donation.isOnDonationScreen();
            await donation.enterCustomAmountInInput("1");
            await this.timeout(500);
            await donation.clickAddDonationToOrderButton();
            await this.clickNextButton();
        }
    }
    module.exports = BOAddExtras;