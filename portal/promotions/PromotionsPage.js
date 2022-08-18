    const BasePage = require('../../BasePage');
    const assert = require('assert');
    const TableComponent = require('../portalComponents/TableComponent');
    const DateTimePickerModal = require('../portalModals/DateTimePickerModal');
    const AddNewPromotionModal = require('../portalModals/AddNewPromotionModal')
    const PROMOTIONS_HEADER = { xpath: "//*[text()='Promotions']"}
    const ADD_PROMOTION_BUTTON = { xpath: "//*[text()='Add']"}
    const DEACTIVATED_PROMOTION_TOGGLE = {className: 'lc_off' }
    const ACTIVATED_PROMOTION_TOGGLE = {className: 'lc_on' }
    const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
    const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
    const PROMOTION_NAME = { xpath: "//td[contains(@class, 'column-name')]//span" };
    const PROMOTION_DESCRIPTION = { xpath: "//td[contains(@class, 'column-name')]//p" };
    const PROMOTION_TICKET = { xpath: "//td[contains(@class, 'column-ticketname')]//span" };
    const PROMOTION_QUANTITY = { xpath: "//td[contains(@class, 'column-quantity')]//span" };
    const PROMOTION_ORIGINAL_PRICE = { xpath: "//td[contains(@class, 'column-ticketprice')]//span" };
    const PROMOTION_NEW_PRICE = { xpath: "//td[contains(@class, 'column-discountedprice')]//span" };
    const PROMOTION_START_DATE = { xpath: "//td[contains(@class, 'column-startdate')]" };
    const PROMOTION_END_DATE = { xpath: "//td[contains(@class, 'column-enddate')]" };
    const EDIT_AND_EXPORT_TICKETS_BUTTONS = { className: 'text-second'} //list
    const NO_RECORDS = { xpath: "//div[contains(@class, 'data-empty')]//h5" };



    class PromotionsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async promotionsHeaderIsVisible(){
            await this.isDisplayed(PROMOTIONS_HEADER,5000)
        }
        async clickAddPromotionButton(){
            await this.timeout(500);
            await this.click(ADD_PROMOTION_BUTTON)
        }
        async addPromotionButtonIsVisible(){
            await this.timeout(500);
            await this.isDisplayed(ADD_PROMOTION_BUTTON, 5000);
            await this.timeout(2000);
        }

        async assertElementsOnPromotionsPageWhenNoPromotions(){
            let noPromotionMessage = await this.getElementText(NO_RECORDS);
            assert.equal(noPromotionMessage,"No record available");
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1, "Name");
            await table.assertColumnNamesByIndex(2, "Ticket Name");
            await table.assertColumnNamesByIndex(3, "Quantity");
            await table.assertColumnNamesByIndex(4, "Original Price");
            await table.assertColumnNamesByIndex(5, "New Price");
            await table.assertColumnNamesByIndex(6, "From");
            await table.assertColumnNamesByIndex(7, "Until");
            await table.assertColumnNamesByIndex(8, "Active/Inactive");

        }

        async assertElementsOnCreateNewPromotionModal(ticketOneName){
            await this.clickAddPromotionButton();
            let newPromotion = new AddNewPromotionModal(this.driver);
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertElementsOnNewPromotionsScreen(ticketOneName)

        }

        async createNew$ValuePromotionAndAssertData(){

        }

    }
    module.exports = PromotionsPage;
