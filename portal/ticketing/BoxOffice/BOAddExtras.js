    const BasePage = require('../../../BasePage');
    const assert = require('assert')
    const EXTRAS_HEADER = { xpath: "//h2[text()='Extras']" }
    const EXTRAS_OPTIONS = { className: "text-center" } //list of three
    const DonationComponent = require('../../../microsites/micrositesComponents/DonationComponent');
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }
    const ADD_ONS_TOOLTIP = { className: "tooltip-inner" }




    class BOAddExtras extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnExtrasScreen(){
            await this.isDisplayed(EXTRAS_HEADER,5000);
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