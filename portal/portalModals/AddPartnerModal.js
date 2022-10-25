    const BasePage = require('../../BasePage');
    const ADD_PARTNER_HEADER = { xpath:"//*[text()=' Add Partner']"}
    const DROPDOWNS = { xpath: "//button[@type='button']"} // list index 1:Partner, 2:InviteMethod 3: businessType
    const PARTNER_TYPE_DROPDOWN = { xpath: "//select[@title='Select Partner Type']"}
    const VENDOR_MERCHANT_OPTION = { id: "bs-select-2-2"}
    const SPONSOR_OPTION = { xpath:"//*[text()='Sponsor']"}
    const SPEAKER_OPTION = { xpath:"//*[text()='Speaker']"}
    const CONTRACTOR_OPTION = { xpath:"//*[text()='Contractor']"}
    const INVITE_METHOD_DROPDOWN = { xpath: "//button[@title='Select Option']"}
    const INVITE_EMAIL_OPTION = { xpath:"//*[text()='Invite by email']"}
    const IMPORT_CSV_OPTION = { xpath:"//*[text()='Import by CSV']"}
    const UPPED_LIST_OPTION = { xpath:"//*[text()='Source from Upped’s List']"}
    const BUSINESS_TYPE_DROPDOWN = { xpath: "//button[@title='Select Business Type']"}
    const INDIVIDUAL_OPTION = { xpath:"//*[text()='Individual / Sole Proprietorship']"}
    const ORGANIZATION_OPTION = { xpath:"//*[text()='Organization']"}
    const BUSINESS_NAME = { xpath: "//input[@formcontrolname='businessName']" };
    const ADD_BUTTON = { xpath:"//*[text()='Add']"}
    const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
    const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='contactFirstName']" };
    const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='contactLastName']" };
    const MESSAGE_TEXTAREA = { xpath: "//textarea[@formcontrolname='message']" };
    const SAVE_FOR_LATER_BUTTON = { xpath: "//*[text()='Save for Later']"};
    const SEND_INVITE_BUTTON = { xpath: "//*[text()='Send Invite']"};
    const CANCEL_BUTTON = { xpath: "//*[text()='Cancel']"};


    class AddPartnerModal extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnNewPartnerModal(){
            await this.isDisplayed(ADD_PARTNER_HEADER,5000);
        }

        async clickPartnerTypeDropdown(){
            await this.clickElementReturnedFromAnArray(DROPDOWNS,1);
        }
        async inviteVendorWithEmail(email, firstName, lastName){
            await this.isOnNewPartnerModal();
            await this.clickPartnerTypeDropdown();
            await this.isDisplayed(VENDOR_MERCHANT_OPTION,5000);
            await this.click(VENDOR_MERCHANT_OPTION);
            await this.clickElementReturnedFromAnArray(DROPDOWNS,2);
            await this.click(INVITE_EMAIL_OPTION);
            await this.clickElementReturnedFromAnArray(DROPDOWNS,3);
            await this.isDisplayed(INDIVIDUAL_OPTION, 5000);
            await this.click(INDIVIDUAL_OPTION);
            await this.timeout(500);
            await this.sentKeys(BUSINESS_NAME,firstName+" business");
            await this.sentKeys(EMAIL_INPUT,email);
            await this.sentKeys(FIRST_NAME_INPUT,firstName);
            await this.sentKeys(LAST_NAME_INPUT,lastName);
            await this.sentKeys(MESSAGE_TEXTAREA,'Come work in our event');
            await this.click(SEND_INVITE_BUTTON);
            await this.timeout(4500);
        }

    }
    module.exports = AddPartnerModal;