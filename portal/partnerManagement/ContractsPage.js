    const BasePage = require('../../BasePage');
    const TableComponent = require("../portalComponents/TableComponent");
    const TABLE = { id:"dataTable" }


    class ContractsPage extends BasePage{
       constructor(driver) {
          super(driver);
       }

        async isOnContractsPage(){
            await this.isDisplayed(TABLE,5000);
        }

        async openPartnersContactsPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/partners/contracts")
            await this.isOnContractsPage();
        }

        async assertPartnersContractsTableHeadersNames(){
            await this.isOnContractsPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Name");
            await table.assertColumnNamesByIndex(2 ,"Type");
            await table.assertColumnNamesByIndex(3 ,"Status");
            await table.assertColumnNamesByIndex(4 ,"Create");
            await table.assertColumnNamesByIndex(5,"Send");
        }
    }
    module.exports = ContractsPage;