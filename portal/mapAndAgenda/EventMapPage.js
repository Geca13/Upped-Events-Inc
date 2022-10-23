    const BasePage = require('../../BasePage');
    const { expect }= require('chai');
    const AddLayerOnMap = require('../portalModals/AddLayerOnMapModal')
    const MAP = { tagName: 'event-map' }
    const MAP_BUTTONS = { className: 'leaflet-buttons-control-button'}//list
    const SAVED_LAYERS = { xpath: "//li[contains(@class , 'form-group ')]" }
    const SAVED_CATEGORY_INPUT = { xpath: "//div[@id='category-heading']//input" }
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
            await this.isDisplayed(SAVED_LAYER_DATA_INPUTS,5000);

        }
        
        async getSavedLayerIndex(text){
            let categoryInputs = await this.findAll(SAVED_CATEGORY_INPUT);
            for(let i = 0; i < categoryInputs.length; i++){
                let category = await this.getEnteredTextInTheInputByIndex(SAVED_CATEGORY_INPUT, i);
                if(category === text){
                    return i;
                }
            }
        }
        
        
        async assertLayerDataIsSavedCorrectlyByIndex(category, title, content, storeType, locationType, clas){
            await this.isDisplayed(SAVED_LAYER_DATA_INPUTS, 5000);
            await this.timeout(2000);
            let i = await this.getSavedLayerIndex(category);
            let savedCategory = await this.getEnteredTextInTheInputByIndex({xpath: `//li[@id='feature-${i}']//input`}, 0);
            let savedTitle = await this.getEnteredTextInTheInputByIndex({xpath: `//li[@id='feature-${i}']//input`}, 1);
            let savedContent = await this.getEnteredTextInTheInputByIndex({xpath: `//li[@id='feature-${i}']//input`}, 2);
            let savedStoreType = await this.getEnteredTextInTheInputByIndex({xpath: `//li[@id='feature-${i}']//input`}, 3);
            let savedLocationType = await this.getEnteredTextInTheInputByIndex({xpath: `//li[@id='feature-${i}']//input`}, 4);
            let savedMapForm = await this.checkIfClassIsApplied({xpath: `//li[@id='feature-${i}']//span//span`}, 0, clas)
            expect(savedCategory).to.equal(category);
            expect(savedTitle).to.equal(title);
            expect(savedContent).to.equal(content);
            expect(savedStoreType).to.equal(storeType);
            expect(savedLocationType).to.equal(locationType);
            expect(savedMapForm).to.be.true;
            
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
