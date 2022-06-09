    const BasePage = require('../../BasePage');
    const SET_IMAGE_BUTTON = { xpath: "//*[text()=' Set ']"}
    const CLOSE_MODAL_BUTTON = { xpath: "//*[text()='Cancel']"}
    const ZOOM_IN_BUTTON = { xpath: "//*[text()=' Zoom In ']"}
    const ZOOM_OUT_BUTTON = { xpath: "//*[text()=' Zoom Out ']"}
    const ROTATE_LEFT_BUTTON = { xpath: "//*[text()=' Rotate Left ']"}
    const ROTATE_RIGHT_BUTTON = { xpath: "//*[text()=' Rotate Right ']"}
    const RESET_BUTTON = { xpath: "//*[text()='Reset']"}
    const MOVE_BLOCK = { className: 'move' }
    const TOP_RIGHT_DOT = { className: 'topright' }
    const TOP_LEFT_DOT = { className: 'topleft' }
    const BOTTOM_RIGHT_DOT = { className: 'bottomright' }
    const BOTTOM_LEFT_DOT = { className: 'bottomleft' }



    class SetImageModal extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async setImageModalIsDisplayed(){
            await this.isDisplayed(SET_IMAGE_BUTTON);
        }
        async clickSetButton(){
            await this.click(SET_IMAGE_BUTTON);
        }
        async setHeinekenImageToCenter(){
            await this.click(ZOOM_OUT_BUTTON);
            await this.dragAndDropElementByOffset(MOVE_BLOCK, 0,90);
        }
    }
    module.exports = SetImageModal;