    const BasePage = require('../../BasePage');
    const DateTimePickerModal = require("./DateTimePickerModal");
    const SetImageModal = require('../portalModals/SetImageModal')
    const SHOP_NAME_INPUT = { xpath: "//input[@formcontrolname='shopName']" };
    const DESCRIPTION_INPUT = { xpath: "//input[@formcontrolname='description']" };
    const MAKE_FEATURED_CHECKBOX = { xpath: "//label[@class='custom-checkbox']" }; //this is a list without index is featured checkbox
                                                                             // the rest is for category and associated shops dropdown
    const DROPDOWNS = { xpath: "//button[@type='button']"} //list by index - category:1, associated:2,
    const CATEGORY_DROPDOWN = { id: 'category' }
    const CATEGORY_ASSOCIATED_OPTIONS = { className: 'pl-1' } //list
    const ASSOCIATED_SHOPS_DROPDOWN = { id: 'associatedShops'}
    const START_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='startDate']" };
    const END_DATE_TIME_PICKER = { xpath: "//input[@formcontrolname='endDate']" };
    const UPLOAD_PHOTO_INPUT = { xpath: "//input[@type='file']" };
    const TAGS_INPUT = { id: 'tags'}
    const ADD_SHOP_BUTTON = { className: 'primary-btn'} // index 2
    const CANCEL_BUTTON = { xpath: "//button[@type='reset']"}
    const SELECT_PARTNER_DROPDOWN = { xpath: "//select-picker[@name='PartnerOptions']" };
    const PARTNER_MANAGEMENT_LIST_OPTION = { xpath: "//*[text()='Source from Partner Management list']"}
    const EVENT_MANAGE_OPTION = { xpath: "//*[text()='Event Manage Shop']"}
    const VENDOR_CHECKBOX_SPAN = { xpath: '//tbody//tr//td[2]//label//span' }
    const VENDOR_EMAIL = { className: 'column-email' }
    const VIRTUAL_SHOP_OPTION = { xpath: "//*[text()='Virtual Shop']"}
    const CALENDAR_ICON = { className: 'icon-event' };
    const SELECTS = { tagName: 'select-picker' }
    const CHECKBOX = { className: "myRipple2" }


    class CreateShopModal extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async createVendorShop(base) {
            await this.isDisplayed(SHOP_NAME_INPUT);
            await this.driver.sleep(2000);
            await this.sentKeys(SHOP_NAME_INPUT, base + " shops name");
            await this.click(MAKE_FEATURED_CHECKBOX)
            await this.sentKeys(DESCRIPTION_INPUT, base + " shops description");
            await this.click(CATEGORY_DROPDOWN);
            await this.driver.sleep(500);
            await this.clickElementReturnedFromAnArray(CATEGORY_ASSOCIATED_OPTIONS, 1);
            await this.driver.sleep(1000);
            await this.clickElementReturnedFromAnArray(CALENDAR_ICON, 3)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.select13Day();
            await startDatePicker.clickSetButton();
            //await startDatePicker.clickSetButton();
            await this.driver.sleep(2000);
            await this.clickElementReturnedFromAnArray(CALENDAR_ICON, 4);
            let endDatePicker = new DateTimePickerModal(this.driver);
            await endDatePicker.datePickerIsVisible();
            await endDatePicker.select13Day();
            await endDatePicker.clickSetButton();
            //await endDatePicker.clickSetButton();
            await this.driver.sleep(2000)
            await this.clickElementReturnedFromAnArray(SELECTS, 1);
            await this.isDisplayed(VIRTUAL_SHOP_OPTION);
            await this.clickElementByText(base + " Bar");
            await this.isDisplayed(SELECT_PARTNER_DROPDOWN, 5000);
            await this.click(SELECT_PARTNER_DROPDOWN);
            await this.isDisplayed(PARTNER_MANAGEMENT_LIST_OPTION, 5000);
            await this.click(PARTNER_MANAGEMENT_LIST_OPTION);
            await this.isDisplayed(VENDOR_EMAIL);
            await this.driver.sleep(2500)
            await this.clickLastElementReturnedFromAnArray(CHECKBOX)
            //await this.driver.executeScript("document.getElementsByClassName('myRipple2')[3].click()");
            //await this.driver.sleep(2000)
            await this.sentKeys(UPLOAD_PHOTO_INPUT, "D:\\Upped-Events-Inc\\static\\bar.jpg");
            await this.driver.sleep(2000)
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await imager.clickSetButton();
            await this.isDisplayed(TAGS_INPUT, 5000);
            await this.sentKeys(TAGS_INPUT, base + ' tag');
            await this.clickEnterKey(TAGS_INPUT);
            await this.driver.sleep(500)
            await this.clickElementReturnedFromAnArray(ADD_SHOP_BUTTON, 2)
            await this.driver.sleep(2000);

        }

        async addShopForTickets(base) {
            await this.isDisplayed(SHOP_NAME_INPUT);
            await this.driver.sleep(2000);
            await this.sentKeys(SHOP_NAME_INPUT, base + " tickets shop name");
            await this.click(MAKE_FEATURED_CHECKBOX)
            await this.sentKeys(DESCRIPTION_INPUT, "Tickets for cash ");
            await this.click(CATEGORY_DROPDOWN);
            await this.driver.sleep(500);
            await this.clickElementReturnedFromAnArray(CATEGORY_ASSOCIATED_OPTIONS, 1);
            await this.driver.sleep(1500);
            await this.clickElementReturnedFromAnArray(CALENDAR_ICON, 3)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.select13Day();
            await startDatePicker.clickSetButton();
            //await startDatePicker.clickSetButton();
            await this.driver.sleep(2000);
            await this.clickElementReturnedFromAnArray(CALENDAR_ICON, 4);
            let endDatePicker = new DateTimePickerModal(this.driver);
            await endDatePicker.datePickerIsVisible();
            await endDatePicker.select13Day();
            await endDatePicker.clickSetButton();
            //await endDatePicker.clickSetButton();
            await this.driver.sleep(2000)
            await this.clickElementReturnedFromAnArray(SELECTS, 1);
            await this.driver.sleep(2000)
            await this.isDisplayed(VIRTUAL_SHOP_OPTION);
            await this.driver.sleep(2000)
            await this.clickElementByText(base + " Tickets");
            await this.isDisplayed(SELECT_PARTNER_DROPDOWN, 5000);
            await this.click(SELECT_PARTNER_DROPDOWN);
            await this.isDisplayed(EVENT_MANAGE_OPTION, 5000);
            await this.click(EVENT_MANAGE_OPTION);
            await this.sentKeys(UPLOAD_PHOTO_INPUT, "D:\\Upped-Events-Inc\\static\\tickets.jpg");
            await this.driver.sleep(2000)
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await imager.clickSetButton();
            await this.isDisplayed(TAGS_INPUT, 5000);
            await this.sentKeys(TAGS_INPUT, base + ' ticketing tag');
            await this.clickEnterKey(TAGS_INPUT);
            await this.driver.sleep(500)
            await this.clickElementReturnedFromAnArray(ADD_SHOP_BUTTON, 2)
            await this.driver.sleep(2000);
        }
    }
    module.exports = CreateShopModal;