    const BasePage = require('../../../BasePage');
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" }
    const TEMPLATE_SELECTOR_DROPDOWN = { tagName: 'select' }
    const TEMPLATE_SELECTOR_OPTIONS  = { tagName: 'option' }
    const IMAGE = { tagName: 'figure' }
    const CROP_IMAGE_BUTTON = { className: 'img-featured'}
    const IMAGE_CROP_MODAL = { tagName: 'app-image-focus' }
    const SET_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()=' Set ']"}
    const CANCEL_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()='Cancel']"}


    class EventCardDesignPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async uploadPhotoInputIsDisplayed(){
            await this.isDisplayed(UPLOAD_PHOTO_INPUT,5000);
        }

        async uploadImage(){
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:/Upped/static/image.jpg")
        }
    }
    module.exports = EventCardDesignPage;
