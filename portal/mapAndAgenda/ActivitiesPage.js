    const BasePage = require('../../BasePage');
    const AddNewActivityModal = require('../portalModals/AddNewActivityModal');
    const ADD_ACTIVITY_BUTTON = { xpath: "//*[text()='Add']"}
    const ACTIVITIES_TABLE = { tagName: 'table' }


    class ActivitiesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async isOnActivitiesPage(){
            await this.isDisplayed(ADD_ACTIVITY_BUTTON,5000, "addActivityBtn");
        }
        async createFootballActivity(){
            let newActivity = new AddNewActivityModal(this.driver);
            await this.isOnActivitiesPage();
            await this.click(ADD_ACTIVITY_BUTTON);
            await newActivity.createFootballGame();
            await this.isOnActivitiesPage();
        }
    }
    module.exports = ActivitiesPage;