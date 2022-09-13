    const BasePage = require('../../BasePage');
    const AddPartnerModal = require('../portalModals/AddPartnerModal');
    const ADD_BUTTON = { xpath:"//*[text()='Add']"}




    class PartnersPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnPartnersPage(){
            await this.isDisplayed(ADD_BUTTON,5000);
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