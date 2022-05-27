    const BasePage = require('../../BasePage');
    const AddLayerOnMap = require('../portalModals/AddLayerOnMapModal')
    const MAP = { tagName: 'event-map' }
    const MAP_BUTTONS = { className: 'leaflet-buttons-control-button'}//list




    class EventMapPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async eventMapIsDisplayed(){
            await this.isDisplayed(MAP,5000);
        }



        async addPerformanceLocationOnMap(){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.driver.sleep(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,0);
            pin.click();
            await this.driver.sleep(2000);
            await this.driver.executeScript("el = document.elementFromPoint(710, 570); el.click();");
            await modal.modalIsLoaded();
            await modal.addStageLocationOnMap();

            await this.driver.sleep(5000);

        }

        async addFootballLocationOnMap(){
            let modal = new AddLayerOnMap(this.driver)
            await this.eventMapIsDisplayed();
            await this.driver.sleep(2000);
            let pin = await this.getElementFromAnArrayByIndex(MAP_BUTTONS,0);
            pin.click();
            await this.driver.sleep(2000);
            await this.driver.executeScript("el = document.elementFromPoint(610, 670); el.click();");
            await this.driver.executeScript("el = document.elementFromPoint(570, 670); el.click();");
            await this.driver.executeScript("el = document.elementFromPoint(570, 630); el.click();");
            await this.driver.executeScript("el = document.elementFromPoint(610, 630); el.click();");
            await this.driver.executeScript("el = document.elementFromPoint(610, 670); el.click();");
            await modal.modalIsLoaded();
            await modal.addFootballPlaygroundLocationOnMap();

            await this.driver.sleep(5000);

        }
    }
    module.exports = EventMapPage;
