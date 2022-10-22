    const BasePage = require('../../BasePage');
    const AddLayerOnMap = require('../portalModals/AddLayerOnMapModal')
    const MAP = { tagName: 'event-map' }
    const MAP_BUTTONS = { className: 'leaflet-buttons-control-button'}//list
    const SAVED_LAYERS = { xpath: "//li[contains(@class , 'form-group ')]" }
    const SAVED_LAYER_DATA_INPUTS = { xpath: "//li[contains(@class , 'form-group ')]//input[@type='text']"}




    class EventMapPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventMapIsDisplayed(){
            await this.isDisplayed(MAP_BUTTONS,35000);
        }
        

        async addPinOnMapForPerformance(){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.timeout(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,0);
            pin.click();
            await this.timeout(2000);
            await this.moveAwayFromElement(MAP_BUTTONS, 150,0);
            await modal.modalIsLoaded();
            await modal.addStageLocationOnMap();
            await this.timeout(2000);

        }
        
        async assertLayerDataIsSavedCorrectlyByIndex(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer){
            await this.isDisplayed(SAVED_LAYER_DATA_INPUTS, 5000);
            let firstInputData = await this.getEnteredTextInTheInputByIndex(SAVED_LAYER_DATA_INPUTS, 0)
            let secondInputData
            let thirdInputData
            let fourthInputData
            let fifthInputData
        }

        async addFootballLocationOnMap(){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.timeout(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,1);
            pin.click();
            await this.moveAwayFromElement(MAP_BUTTONS, 300,0);
            await this.moveAwayFromElement(MAP_BUTTONS, 400,0);
            await this.moveAwayFromElement(MAP_BUTTONS, 350,50);
            await this.moveAwayFromElement(MAP_BUTTONS, 300,0);
            await modal.modalIsLoaded();
            await modal.addFootballPlaygroundLocationOnMap();
            await this.timeout(2000);

        }

        async addVendorLocationOnMap(base){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.timeout(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,3);
            pin.click();
            await this.moveAwayFromElement(MAP_BUTTONS, 180,0);
            await this.driver.sleep(1500);
            await this.moveAwayFromElement(MAP_BUTTONS, 210,30);
            await modal.modalIsLoaded();
            await modal.addVendorBarLocationOnMap(base);
            await this.timeout(2000);

        }

        async addTicketingLocationOnMap(base){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.timeout(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,2);
            pin.click();
            await this.moveAwayFromElement(MAP_BUTTONS, 180,100);
            await this.driver.sleep(500);
            await this.moveAwayFromElement(MAP_BUTTONS, 230,100);
            await modal.modalIsLoaded();
            await modal.addTicketingLocationOnMap(base);
            await this.timeout(5000);
        }
    }
    module.exports = EventMapPage;
