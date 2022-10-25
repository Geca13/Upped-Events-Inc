    const BasePage = require('../../BasePage');
    const AddPartnerModal = require('../portalModals/AddPartnerModal');
    const TableComponent = require("../portalComponents/TableComponent");
    const ADD_BUTTON = { xpath:"//*[text()='Add']"}

    class PartnersPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnPartnersPage(){
            await this.isDisplayed(ADD_BUTTON,5000);
        }

        async openPartnersPageDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/partners")
            await this.isOnPartnersPage();
        }

        async assertPartnersTableHeadersNames(){
            await this.isOnPartnersPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Name");
            await table.assertColumnNamesByIndex(2 ,"Type");
            await table.assertColumnNamesByIndex(3 ,"Email");
            await table.assertColumnNamesByIndex(4 ,"Last Completed");
            await table.assertColumnNamesByIndex(5,"Milestone Completed");
            await table.assertColumnNamesByIndex(6 ,"Next Action");
            await table.assertColumnNamesByIndex(7 ,"By");
            await table.assertColumnNamesByIndex(8,"Attention Needed?");
        }
        async clickAddPartnerButton(){
            await this.click(ADD_BUTTON);
        }

        async inviteVendorToEvent(email, firstName, lastName){
            await this.clickAddPartnerButton();
            let newVendorModal = new AddPartnerModal(this.driver);
            await newVendorModal.inviteVendorWithEmail(email, firstName, lastName);

        }
    }
    module.exports = PartnersPage;