    const BasePage = require('../../../BasePage');
    const EXTRAS_HEADER = { xpath: "//h2[text()='Extras']" }
    const EXTRAS_OPTIONS = { className: "text-center" } //list of three
    const DonationComponent = require('../../../microsites/micrositesComponents/DonationComponent');
    const NEXT_BUTTON = { xpath: "//button[text()='Next']" }




    class BOAddExtras extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnExtrasScreen(){
            await this.isDisplayed(EXTRAS_HEADER,5000);
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