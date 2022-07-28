    const BasePage = require('../../BasePage');
    const ADD_LAYER_MODAL = { className: 'popup-header-title' }
    const SAVE_LAYER_BUTTON = { xpath: "//*[text()='Save']"}
    const CLOSE_LAYER_BUTTON = { xpath: "//*[text()='Close']"}
    const TITLE_INPUT = { xpath: "//input[@formcontrolname='title']" };
    const CATEGORY_SELECT = { xpath: "//button[@title='Select category']" };
    const LOCATION_OFFERING_SELECT = { xpath: "//select[@title='Select Option']" }; //list index 1
    const LOCATION_OFFERING_ACTIVITIES_OPTION = { xpath: "//*[text()='Activities']" }; //list index 1
    const LOCATION_OFFERING_RETAIL_OPTION = { xpath: "//a//span[text()='Retail Goods']" };
    const DESCRIPTION_TEXTAREA = { tagName: "textarea" };
    const CATEGORY_OPTIONS = { xpath: "//a[@role='option']" }; //list
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" }
    const CANCEL_CROPPED_IMAGE_BUTTON = { xpath: "//*[text()='Cancel']"}
    const SET_IMAGE_BUTTON = { xpath: "//*[text()=' Set ']"}
    const ZOOM_OUT_BUTTON = { xpath: "//*[text()=' Zoom Out ']" };
    const BAR_OPTION = { xpath: "//*[text()='Bar']"}


    class AddLayerOnMapModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async modalIsLoaded(){
            await this.isDisplayed(TITLE_INPUT,15000);
        }
        async saveLayerButtonIsDisplayed(){
            await this.isDisplayed(SAVE_LAYER_BUTTON,25000);
        }
        async categoryOptionsAreDisplayed(){
            await this.isDisplayed(CATEGORY_OPTIONS,15000);
        }
        async addVendorBarLocationOnMap(base){
            await this.sentKeys(TITLE_INPUT, base +" Bar");
            await this.click(CATEGORY_SELECT);
            await this.timeout(500)
            await this.categoryOptionsAreDisplayed();
            await this.timeout(500)
            await this.driver.executeScript("document.getElementsByClassName('opt')[1].click()");
            await this.timeout(1500)
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Best Beer, Wine and Snacks, come get some")
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped-Events-Inc\\static\\bar.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,15000);
            await this.timeout(1000)
            await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.timeout(1500)
            await this.click(SAVE_LAYER_BUTTON);
            await this.timeout(2000);        }

        async addTicketingLocationOnMap(base){
            await this.sentKeys(TITLE_INPUT, base + " Tickets");
            await this.click(CATEGORY_SELECT);
            await this.timeout(500)
            await this.categoryOptionsAreDisplayed();
            await this.timeout(500)
            await this.driver.executeScript("document.getElementsByClassName('opt')[2].click()");
            await this.timeout(1500)
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Tickets Here for Cash");
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped-Events-Inc\\static\\tickets.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.timeout(1500)
            await this.click(SET_IMAGE_BUTTON);
            await this.timeout(1500)
            await this.saveLayerButtonIsDisplayed();
            await this.timeout(2500)
            await this.driver.executeScript("document.getElementsByClassName('primary-btn')[2].click()");

            //await this.click(SAVE_LAYER_BUTTON);
            await this.timeout(1500)
        }

        async addStageLocationOnMap(){
            await this.sentKeys(TITLE_INPUT, "Concert Stage");
            await this.click(CATEGORY_SELECT);
            await this.timeout(500)
            await this.categoryOptionsAreDisplayed();
            await this.timeout(500)
            await this.driver.executeScript("document.getElementsByClassName('opt')[10].click()");
            await this.timeout(1500)
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Best Concert Here")
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\stage.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.timeout(1000)
            await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.timeout(1000)
            await this.takeScreenshot("performance")
            await this.click(SAVE_LAYER_BUTTON);
            await this.timeout(1000)
        }

        async addFootballPlaygroundLocationOnMap(){
            await this.sentKeys(TITLE_INPUT, "Football Stadium");
            await this.click(CATEGORY_SELECT);
            await this.timeout(500)
            await this.categoryOptionsAreDisplayed();
            await this.timeout(500)
            await this.driver.executeScript("document.getElementsByClassName('opt')[12].click()");
            await this.timeout(1500)
            await this.sentKeys(DESCRIPTION_TEXTAREA,"Vikings vs Eagles");
            await this.clickElementReturnedFromAnArray(LOCATION_OFFERING_SELECT,1);
            await this.timeout(1000)
            await this.clickElementReturnedFromAnArray(LOCATION_OFFERING_ACTIVITIES_OPTION,1);
            await this.driver.executeScript("document.getElementsByClassName('file-upload-input')[0].style.visibility='visible'");
            await this.sentKeys(UPLOAD_PHOTO_INPUT,"D:\\Upped\\static\\eagles-vs-vikings.jpg");
            await this.isDisplayed(SET_IMAGE_BUTTON,5000);
            await this.click(ZOOM_OUT_BUTTON);
            await this.timeout(500)
            await this.click(ZOOM_OUT_BUTTON);
            await this.timeout(500)
            await this.click(ZOOM_OUT_BUTTON);
            await this.timeout(500)
            await this.click(ZOOM_OUT_BUTTON);
            await this.timeout(500)
            await this.click(SET_IMAGE_BUTTON);
            await this.timeout(500)
            //await this.click(SET_IMAGE_BUTTON);
            await this.saveLayerButtonIsDisplayed();
            await this.timeout(2500)
            await this.click(SAVE_LAYER_BUTTON);
            await this.timeout(1000);
        }
    }
    module.exports = AddLayerOnMapModal;