    const BasePage = require('../../BasePage');
    const TableComponent = require('../portalComponents/TableComponent')
    const AddNewActivityModal = require('../portalModals/AddNewActivityModal');
    const ADD_ACTIVITY_BUTTON = { xpath: "//*[text()='Add']"}
    const ACTIVITIES_TABLE = { tagName: 'table' }


    class ActivitiesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async openActivitiesPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/schedules/activities")
            await this.isOnActivitiesPage();
        }
        
        async isOnActivitiesPage(){
            await this.isDisplayed(ADD_ACTIVITY_BUTTON,5000);
        }
        
        async createFootballActivity(){
            let newActivity = new AddNewActivityModal(this.driver);
            await this.isOnActivitiesPage();
            await this.click(ADD_ACTIVITY_BUTTON);
            await newActivity.createFootballGame();
            await this.isOnActivitiesPage();
        }

        async assertActivitiesTableHeaders(){
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1, "Name");
            await table.assertColumnNamesByIndex(2, "Location");
            await table.assertColumnNamesByIndex(3, "Start Date/Time");
            await table.assertColumnNamesByIndex(4, "End Date/Time");
            await table.assertColumnNamesByIndex(5, "Confirmed");
            
        }
    }
    module.exports = ActivitiesPage;