    const BasePage = require('../../../BasePage');
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" }
    const TEMPLATE_SELECTOR_DROPDOWN = { tagName: 'select' }
    const TEMPLATE_SELECTOR_OPTIONS  = { tagName: 'option' }
    const IMAGE = { className: 'preview-img' }
    const CROP_IMAGE_BUTTON = { className: 'img-featured'}
    const IMAGE_CROP_MODAL = { tagName: 'app-image-focus' }
    const SET_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()=' Set ']"}
    const CANCEL_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()='Cancel']"}
    const SAVE_DESIGN_BUTTON = { xpath: "//*[text()='Save ']"}


    class EventCardDesignPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async uploadPhotoInputIsDisplayed(){
            await this.isDisplayed(SAVE_DESIGN_BUTTON,5000);
        }

        async uploadImage(){
            await this.uploadPhotoInputIsDisplayed();
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\image.jpg");
            await this.driver.executeScript("document.getElementsByTagName('figure')[0].style.visibility='visible'");
            await this.isDisplayed(IMAGE,15000);
            await this.moveToElement(IMAGE);
            await this.click(CROP_IMAGE_BUTTON);
            await this.isDisplayed(IMAGE_CROP_MODAL, 5000);
            await this.click(SET_CROPPED_IMAGE_BUTTON);
            await this.click(SAVE_DESIGN_BUTTON);
            await this.timeout(1500);
        }
    }
    module.exports = EventCardDesignPage;
