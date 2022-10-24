const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent')
const ADD_BUTTON = { xpath: "//a[text()='Add']" }

class LoyaltyProgram extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async openLoyaltyProgramPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/eventSettings/loyalty-program")
        await this.isOnLoyaltyPage();
    }
    
    async isOnLoyaltyPage(){
        await this.isDisplayed(ADD_BUTTON, 5000);
    }
    
    async assertLoyaltyProgramTableHeaders(){
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0, "Percentage");
        await table.assertColumnNamesByIndex(1, "Active");
        await table.assertColumnNamesByIndex(2, "Valid From");
        await table.assertColumnNamesByIndex(3, "Valid Until");
       
    }
    
    

}
module.exports = LoyaltyProgram;