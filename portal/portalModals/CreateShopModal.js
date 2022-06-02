    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require("./DateTimePickerModal");
    const SHOP_NAME_INPUT = { xpath: "//input[@formcontrolname='shopName']" };
    const DESCRIPTION_INPUT = { xpath: "//input[@formcontrolname='description']" };
    const MAKE_FEATURED_CHECKBOX = { xpath: "//input[@formcontrolname='makeFeatured']" };
    const DROPDOWNS = { xpath: "//button[@type='button']"} //list by index - category:1, associated:2, partner:3
    // add tag button:4, vendor location:6
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" };
    const ADD_SHOP_BUTTON = { xpath: "//*[text()='Add Shop']"}
    const CANCEL_BUTTON = { xpath: "//button[@type='reset']"}


    class CreateShopModal extends BasePage{
        constructor(driver) {
            super(driver);
        }

    }
    module.exports = CreateShopModal;