    const BasePage = require('../../BasePage');
    const assert = require('assert');
    const Alerts = require('../../Validations&Alerts/Alerts')
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
    const EDIT_PROMO_BUTTON = { xpath: "//a[@class='text-second']//span[@class='icon-edit']"}
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
            await this.isDisplayed(ADD_PROMOTION_BUTTON,5000)
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

        async assertThePromotionIsSavedCorrectOnPromotionsPage(promotion){
            await this.isDisplayed(PROMOTION_NAME,5000);
            let i = await this.returnIndexWhenTextIsKnown(PROMOTION_NAME,promotion[0]);
            await this.timeout(500);
            let namePromo = await this.getElementTextFromAnArrayByIndex(PROMOTION_NAME,i);
            let extDescription = await this.getElementTextFromAnArrayByIndex(PROMOTION_DESCRIPTION,i);
            let nameTicket = await this.getElementTextFromAnArrayByIndex(PROMOTION_TICKET, i);
            let promoQty = await this.getElementTextFromAnArrayByIndex(PROMOTION_QUANTITY, i);
            let orPrice = await this.getElementTextFromAnArrayByIndex(PROMOTION_ORIGINAL_PRICE, i);
            let priceNew = await this.getElementTextFromAnArrayByIndex(PROMOTION_NEW_PRICE, i);
            let start = await this.getElementTextFromAnArrayByIndex(PROMOTION_START_DATE, i);
            let end = await this.getElementTextFromAnArrayByIndex(PROMOTION_END_DATE, i);
            assert.equal(namePromo, promotion[0]);
            assert.equal(extDescription, "Single general promo code");
            assert.equal(nameTicket, promotion[2]);
            assert.equal(promoQty, promotion[3]);
            //assert.equal(orPrice, promotion[4]);
            //assert.equal(priceNew, promotion[5]);
            assert.equal(start, promotion[6]);
            assert.equal(end, promotion[7]);
        }

        async findPromotionByNameAndClickUpdateButton(promoName){
            let i = await this.returnIndexWhenTextIsKnown(PROMOTION_NAME,promoName);
            await this.clickElementReturnedFromAnArray(EDIT_PROMO_BUTTON, i);
        }

        async disablePromotionByPromoName(promoName){
            let i = await this.returnIndexWhenTextIsKnown(PROMOTION_NAME,promoName);
            await this.clickElementReturnedFromAnArray(ACTIVATED_PROMOTION_TOGGLE, i);
            let alert = new Alerts(this.driver);
            await alert.updatedSuccessMessageIsShown("Promotion updated successfully!");
            await this.timeout(500);
        }

        async enablePromotionByPromoName(promoName){
            let i = await this.returnIndexWhenTextIsKnown(PROMOTION_NAME,promoName);
            await this.clickElementReturnedFromAnArray(DEACTIVATED_PROMOTION_TOGGLE, i);
            let alert = new Alerts(this.driver);
            await alert.updatedSuccessMessageIsShown("Promotion updated successfully!");
            await this.timeout(500);
        }

    }
    module.exports = PromotionsPage;
