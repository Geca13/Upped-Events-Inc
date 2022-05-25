    const BasePage = require('../../BasePage');
    const ADD_LAYER_MODAL = { className: 'popup-header-title' }
    const SAVE_LAYER_BUTTON = { xpath: "//*[text()='Save']"}
    const CLOSE_LAYER_BUTTON = { xpath: "//*[text()='Close']"}
    const TITLE_INPUT = { xpath: "//input[@formcontrolname='title']" };
    const CATEGORY_SELECT = { xpath: "//button[@title='Select category']" };
    const DESCRIPTION_TEXTAREA = { tagName: "textarea" };
    const CATEGORY_OPTIONS = { xpath: "//a[@role='option']" }; //list
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" }
    const CANCEL_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()='Cancel']"}
    const SET_IMAGE_BUTTON = { xpath: "//app-image-focus//div//button[@type='button']"}
    const BAR_OPTION = { xpath: "//*[text()='Bar']"}


    class AddLayerOnMapModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async modalIsLoaded(){
            await this.isDisplayed(TITLE_INPUT,5000);
        }
        async saveLayerButtonIsDisplayed(){
            await this.isDisplayed(SAVE_LAYER_BUTTON,5000);
        }
        async categoryOptionsAreDisplayed(){
            await this.isDisplayed(CATEGORY_OPTIONS,5000);
        }
        async addBarLocationOnMap(){
            await this.sentKeys(TITLE_INPUT, "Beer Bar");
            await this.click(CATEGORY_SELECT);
            await this.driver.sleep(500);
            await this.categoryOptionsAreDisplayed();
            await this.driver.sleep(500);
            await this.driver.executeScript("document.getElementsByClassName('opt')[1].click()");
            await this.driver.sleep(1500);
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Best Beer, come get some")
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\bar.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.click(SET_IMAGE_BUTTON);
            await this.driver.sleep(500);
            await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.driver.sleep(2500);
            await this.click(SAVE_LAYER_BUTTON);
            await this.driver.sleep(1000);
        }

        async addBurgersLocationOnMap(){
            await this.sentKeys(TITLE_INPUT, "Burgers Stand");
            await this.click(CATEGORY_SELECT);
            await this.driver.sleep(500);
            await this.categoryOptionsAreDisplayed();
            await this.driver.sleep(500);
            await this.driver.executeScript("document.getElementsByClassName('opt')[0].click()");
            await this.driver.sleep(1500);
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Best Burgers Here")
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\burger.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.driver.sleep(2500);
            await this.click(SAVE_LAYER_BUTTON);
            await this.driver.sleep(1000);
        }

        async addStageLocationOnMap(){
            await this.sentKeys(TITLE_INPUT, "Concertosh Stage");
            await this.click(CATEGORY_SELECT);
            await this.driver.sleep(500);
            await this.categoryOptionsAreDisplayed();
            await this.driver.sleep(500);
            await this.driver.executeScript("document.getElementsByClassName('opt')[10].click()");
            await this.driver.sleep(1500);
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Best Concert Here")
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\stage.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.click(SET_IMAGE_BUTTON);
            await this.driver.sleep(500);
            await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.driver.sleep(2500);
            await this.click(SAVE_LAYER_BUTTON);
            await this.driver.sleep(1000);
        }
    }
    module.exports = AddLayerOnMapModal;