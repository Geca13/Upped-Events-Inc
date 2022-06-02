    const BasePage = require('../../BasePage');
    const DROPDOWNS = { xpath: "//button[@type='button']"} // list index 1:Partner, 2:InviteMethod 3: businessType
    const PARTNER_TYPE_DROPDOWN = { xpath: "//select[@title='Select Partner Type']"}
    const VENDOR_MERCHANT_OPTION = { xpath:"//*[text()='Vendor/Merchant']"}
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
    const ADD_BUTTON = { xpath:"//*[text()='Add']"}
    const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
    const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='contactFirstName']" };
    const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='contactLastName']" };
    const MESSAGE_TEXTAREA = { xpath: "//textarea[@formcontrolname='message']" };
    const SAVE_FOR_LATER_BUTTON = { xpath: "//*[text()='Save for Later']"};
    const SEND_INVITE_BUTTON = { xpath: "//*[text()='Send Invite']"};
    const CANCEL_PROMOTION_BUTTON = { xpath: "//*[text()='Cancel']"};


    class AddPartnerModal extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnNewPartnerModal(){
            await this.isDisplayed(PARTNER_TYPE_DROPDOWN,5000);
        }

        async clickPartnerTypeDropdown(){
            await this.click(PARTNER_TYPE_DROPDOWN)
        }
        async inviteVendorWithEmail(prefix){
            await this.isOnNewPartnerModal();
            await this.clickPartnerTypeDropdown();
            await this.isDisplayed(VENDOR_MERCHANT_OPTION,5000);
            await this.click(VENDOR_MERCHANT_OPTION);
            await this.isDisplayed(INVITE_METHOD_DROPDOWN,5000);
            await this.click(INVITE_METHOD_DROPDOWN);
            await this.isDisplayed(INVITE_EMAIL_OPTION,5000);
            await this.click(INVITE_EMAIL_OPTION);
            await this.isDisplayed(BUSINESS_TYPE_DROPDOWN,5000);
            await this.click(BUSINESS_TYPE_DROPDOWN);
            await this.isDisplayed(INDIVIDUAL_OPTION,5000);
            await this.click(INDIVIDUAL_OPTION);
            await this.driver.sleep(500);
            await this.sentKeys(EMAIL_INPUT,prefix+'email@email.email');
            await this.sentKeys(FIRST_NAME_INPUT,'Geca');
            await this.sentKeys(LAST_NAME_INPUT,'Gecov');
            await this.sentKeys(MESSAGE_TEXTAREA,'Come work in our event');
            await this.click(SEND_INVITE_BUTTON);
            await this.driver.sleep(1500);
        }
    }
    module.exports = AddPartnerModal;