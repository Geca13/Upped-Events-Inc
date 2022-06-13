    const BasePage = require('../../BasePage');
    const PUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Publish']"}
    const UNPUBLISH_EVENT_BUTTON = { xpath: "//*[text()='Unpublish']"}


    class GeneralDetailsTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async publishButtonIsDisplayed(){
            await this.isDisplayed(PUBLISH_EVENT_BUTTON,15000);
        }
        async unpublishButtonIsDisplayed(){
            await this.isDisplayed(UNPUBLISH_EVENT_BUTTON,15000);
        }
        async clickPublishButton(){
            await this.click(PUBLISH_EVENT_BUTTON)
        }
        async clickUnpublishButton(){
            await this.click(UNPUBLISH_EVENT_BUTTON)
        }
    }
    module.exports = GeneralDetailsTab;