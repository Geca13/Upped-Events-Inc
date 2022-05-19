    const BasePage = require('../../../BasePage');
    const DONATIONS_CHECKBOX = { className: 'form-check-input'}
    const DONATIONS_TEXTAREA = { xpath: "//textarea[@type='text']" }
    const SAVE_DONATION_BUTTON = { xpath: "//*[text()='Save']"}


    class DonationsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async donationsPageCheckBoxIsDisplayed(){
            await this.isDisplayed(DONATIONS_CHECKBOX,5000);
        }
        async clickDonationsCheckbox(){
            await this.click(DONATIONS_CHECKBOX);
        }
        async donationsPageTextareaIsDisplayed(){
            await this.isDisplayed(DONATIONS_TEXTAREA,5000);
        }
        async sendDonationsMessage(){
            await this.sentKeys(DONATIONS_TEXTAREA, 'I need money for Beer, a lot of MONEY');
        }
        async clickDonationsSaveButton(){
            await this.click(SAVE_DONATION_BUTTON);
        }

        async createDonationForEvent(){
            await this.donationsPageCheckBoxIsDisplayed();
            await this.driver.sleep(1000)
            await this.clickDonationsCheckbox();
            await this.driver.sleep(1000)
            await this.donationsPageTextareaIsDisplayed();
            await this.driver.sleep(1000)
            await this.sendDonationsMessage();
            await this.driver.sleep(1000)
            await this.clickDonationsSaveButton();
        }

    }
    module.exports = DonationsPage;