const BasePage = require('../../../BasePage');
let assert = require('assert')
const SAVE_BUTTON = { xpath:"//*[text()='Save ']"}
const TABLE_COLUMN_NAMES = { xpath: "//table[@id='dataTable']//tr/th" } //starts from index 2
const VENDOR_SETTINGS_SUBNAVS = { xpath: "//event-vendor-settings//ul//li/a" }

class VendorSpecificSettingsPage extends BasePage{
    constructor(driver) {
        super(driver);
    }

    async openVendorSettingsPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/partners/vendorsettings")
        await this.timeout(2000)
    }
    
    async clickOnVendorSpecificSettings(){
        await this.clickElementReturnedFromAnArray(VENDOR_SETTINGS_SUBNAVS, 1)
    }
    
    async isOnVendorSettingsPage(){
        await this.isDisplayed(VENDOR_SETTINGS_SUBNAVS, 5000);
    }

    async assertVendorsSettingsTableHeadersNames(){
        await this.isOnVendorSettingsPage();
        await this.timeout(2000)
        let first = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, 2);
        let second = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, 3)
        let third = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, 4)
        let fourth = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, 5)
        let fifth = await this.getElementTextFromAnArrayByIndex(TABLE_COLUMN_NAMES, 6);
        
        assert.equal(first ,"Vendor Name");
        assert.equal(second ,"Staff Mgmt Needed?");
        assert.equal(third ,"Vendor Code");
        assert.equal(fourth ,"Refunds Allowed?");
        assert.equal(fifth ,"Charge Throughs Allowed?");
    }
    
}
module.exports = VendorSpecificSettingsPage;