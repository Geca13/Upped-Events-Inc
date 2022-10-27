const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent')
const ADD_BUTTON = { xpath: "//*[text()='Add']" }

class ShopTickets extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async openShopsTicketsDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/shops/settings/shopTickets")
        await this.addButtonDisplayed();
    }

    async assertShopTicketsTableHeadersNames(){
        await this.addButtonDisplayed();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Shop");
        await table.assertColumnNamesByIndex(2 ,"Item Type");
        await table.assertColumnNamesByIndex(3 ,"Sold Via");
        await table.assertColumnNamesByIndex(4 ,"Total Sales");
        await table.assertColumnNamesByIndex(5,"Item Name");
    }

    async addButtonDisplayed(){
        await this.isDisplayed(ADD_BUTTON,5000);
    }
    
}
module.exports = ShopTickets;