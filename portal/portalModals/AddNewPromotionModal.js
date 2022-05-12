    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const DateTimePickerModal = require("./DateTimePickerModal");
    const ADD_NEW_PROMOTION_HEADER = { xpath: "//*[text()='Add New Promotion']"}
    const PROMOTION_TITLE_INPUT = { xpath: "//div[@class='fields']/input[@name='name']" };
    const PROMOTION_DESCRIPTION_INPUT = { name: "description" };
    const SELECT_TICKET_DROPDOWN = { id: "tickets" };
    const PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS = { xpath: "//button[@aria-haspopup='listbox']" }; //LIST
    const ENABLED_STATUS_OPTION = { xpath: "//*[text()='Enabled']"}
    const DISABLED_STATUS_OPTION = { xpath: "//*[text()='Disabled']"}
    const MEMBERS_ONLY_LIMIT_CHECKBOX = { name: "membersLimit" };
    const PROMO_LIMIT_QUANTITY_INPUT = { name: "quantity" };
    const PROMO_$_VALUE_INPUT = { name: "price" };
    const PROMO_PERCENT_VALUE_INPUT = { name: "percentage" };
    const ACCOUNT_LIMIT_QUANTITY_CHECKBOX = { name: "accountLimit" };
    const PROMO_CODE_NAME_INPUT = { name: "promoCode" };
    const GENERATE_MULTIPLE_CODES_BUTTON = { xpath: "//*[text()='Generate Multiple Unique Codes']"}
    const GENERATE_SINGLE_CODE_BUTTON = { xpath: "//*[text()='Generate Single Code']"}
    const QUANTITY_OF_CODES_INPUT = { name: "quantityOfCodes" };
    const CODE_USE_LIMIT_INPUT = { name: "useLimit" };
    const PROVIDE_CODES_TO_EO = { xpath: "//*[text()='Please provide me each discount code']"}
    const EMAIL_UNIQUE_CODES_OPTION = { xpath: "//*[text()='Email unique codes to recipients']"}
    const SAVE_PROMOTION_BUTTON = { xpath: "//*[text()=' Save ']"};
    const CANCEL_PROMOTION_BUTTON = { xpath: "//*[text()='Cancel']"};
    const TICKET_START_DATE_INPUT = { xpath: "/html/body/lint-modal-window/div/div/create-promotion/div/div/form/div[5]/div[4]/div[3]/div[1]/div/div/input" }





    class AddNewPromotionModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async addPromotionModalIsDisplayed(){
            await this.isDisplayed(ADD_NEW_PROMOTION_HEADER,5000)
        }

        async ticketsAreDisplayedInTheList(ticketName){
            await this.isDisplayed(By.xpath("//*[text()='"+ticketName+"']"),5000);
        }
        async clickTicketInTheList(ticketName){
           let ticket = await this.driver.findElement(By.xpath("//*[text()='"+ticketName+"']"));
           await ticket.click();
        }

        async createPromotionForOneTicketWith$Value(ticketName, promoName, promoCode){
            await this.sentKeys(PROMOTION_TITLE_INPUT, promoName);
            await this.sentKeys(PROMOTION_DESCRIPTION_INPUT, promoName + ' description');
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketName);
            await this.clickTicketInTheList(ticketName);
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            //await this.isDisplayed(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS, 5000);
            await this.clickElementReturnedFromAnArray(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS,0);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000)
            await this.click(ENABLED_STATUS_OPTION);
            await this.sentKeys(PROMO_LIMIT_QUANTITY_INPUT,"5");
            await this.sentKeys(PROMO_$_VALUE_INPUT,"5.5")
            await this.sentKeys(PROMO_CODE_NAME_INPUT,promoCode);
            await this.driver.sleep(10000);
            await this.moveToElement(TICKET_START_DATE_INPUT);
            await this.driver.sleep(10000);
            await this.click(TICKET_START_DATE_INPUT)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            await this.driver.sleep(1500);
            await startDatePicker.clickSetButton();
            await this.driver.sleep(1500);
            await this.saveTicketButtonIsVisible();
            await this.click(SAVE_PROMOTION_BUTTON);
        }

    }
    module.exports = AddNewPromotionModal;