    const BasePage = require('../../BasePage');
    const PICTURES_CONTAINER = { className: 'pictures-row' }
    const PHOTOS = { className: 'photo' }; //list
    const BACK_TO_GALLERY_BUTTON = { xpath: "//*[text()=' Back to Gallery ']"}
    const PHOTO_GALLERY = { tagName: 'app-event-gallery' }
    const NEXT_PHOTO_BUTTON = { className: 'fa-chevron-right' };
    const PREVIOUS_PHOTO_BUTTON = { className: 'fa-chevron-left' };
    const IMAGES_SLIDER = { className: 'images-sliding-container' };
    const MAIN_IMAGE = { className: 'main-img' };

    class PhotosTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }

    module.exports = PhotosTab;