    const BasePage = require('../../BasePage');
    const AddLayerOnMap = require('../portalModals/AddLayerOnMapModal')
    const MAP = { tagName: 'event-map' }
    const MAP_BUTTONS = { className: 'leaflet-buttons-control-button'}//list




    class EventMapPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventMapIsDisplayed(){
            await this.isDisplayed(MAP_BUTTONS,35000);
        }

        async addPerformanceLocationOnMap(){
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
