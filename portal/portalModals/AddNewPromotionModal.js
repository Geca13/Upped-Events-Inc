    const BasePage = require('../../BasePage');
    const {By} = require("selenium-webdriver");
    const assert = require('assert');
    const DateTimePickerModal = require("./DateTimePickerModal");
    const ADD_NEW_PROMOTION_HEADER = { xpath: "//*[text()='Add New Promotion']"}
    const PROMOTION_TITLE_INPUT = { xpath: "//div[@class='fields']/input[@name='name']" };
    const PROMOTION_DESCRIPTION_INPUT = { name: "description" };
    const SELECT_TICKET_DROPDOWN = { id: "tickets" };
    const PROMOTION_STATUS_DROPDOWN = { name: "status" };
    const PROMOTION_DISTRIBUTION_DROPDOWN = { name: "codeDistributionType" };
    const PROMOTION_DISTRIBUTION_DROPDOWN_OPTIONS = { xpath: "//select-picker[@name='codeDistributionType']//a[@role='option']//span" };
    const PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS = { xpath: "//button[@aria-haspopup='listbox']" }; //LIST
    const ENABLED_STATUS_OPTION = { xpath: "//*[text()='Enabled']"}
    const DISABLED_STATUS_OPTION = { xpath: "//*[text()='Disabled']"}
    const MEMBERS_ONLY_LIMIT_CHECKBOX = { css: "input[name='membersLimit'" };
    const PROMO_LIMIT_QUANTITY_INPUT = { name: "quantity" };
    const PROMO_$_VALUE_INPUT = { name: "price" };
    const PROMO_PERCENT_VALUE_INPUT = { name: "percentage" };
    const ACCOUNT_LIMIT_QUANTITY_CHECKBOX = { name: "accountLimit" };
    const PROMO_CODE_NAME_INPUT = { name: "promoCode" };
    const PROMO_PER_ACCOUNT_LIMIT_INPUT = { name: "accountUseLimit" };
    const SELECT_LIMIT_TICKETS_DROPDOWN = { id: "accountTickets" };
    const GENERATE_MULTIPLE_CODES_BUTTON = { xpath: "//*[text()='Generate Multiple Unique Codes']"}
    const GENERATE_SINGLE_CODE_BUTTON = { xpath: "//*[text()='Generate Single Code']"}
    const QUANTITY_OF_CODES_INPUT = { name: "quantityOfCodes" };
    const CODE_USE_LIMIT_INPUT = { name: "useLimit" };
    const SAVE_PROMOTION_BUTTON = { xpath: "//*[text()=' Save ']"};
    const CANCEL_PROMOTION_BUTTON = { xpath: "//*[text()='Cancel']"};
    const TICKET_START_DATE_INPUT = { name: "startDate" };
    const TICKET_END_DATE_INPUT = { name: "endDate" };
    const SIBLING_OF_LIMIT_CHECKBOX = { xpath: "//*[text()='Limit offer to members only']"}
    const MODAL_TITLE = { xpath: "//div[@class='column_title']//h4"}
    const TITLE_INPUT_LABEL = { xpath: "//input[@name='name']/following-sibling::label"}
    const DESCRIPTION_TEXTAREA_LABEL = { xpath: "//textarea[@name='description']/following-sibling::label"}
    const SELECT_TICKETS_DROPDOWN_LABEL = { xpath: "//label[@for='tickets']"}
    const CHECKBOXES_LABELS = { xpath: "//span[contains(@class, 'colr-dark')]"} //list of three
    const DESCRIPTION_QUESTIONS = { xpath: "//div[contains(@class, 'colr-dark')]//p"} //list of FOUR
    const STATUS_LABEL = { xpath: "//select-picker[@name='status']/following-sibling::label"}
    const PRICE_LABEL = { xpath: "//input[@name='price']/following-sibling::label"}
    const GENERATED_QTY_CODES_LABEL = { xpath: "//input[@name='quantityOfCodes']/following-sibling::label"}
    const CODE_USE_LIMIT_LABEL = { xpath: "//input[@name='useLimit']/following-sibling::label"}
    const PERCENTAGE_LABEL = { xpath: "//input[@name='percentage']/following-sibling::label"}
    const PROMO_CODE_LABEL = { xpath: "//input[@name='promoCode']/following-sibling::label"}
    const DISTRIBUTION_TYPE_LABEL = { xpath: "//select-picker[@name='codeDistributionType']/following-sibling::label"}
    const START_DATE_LABEL = { xpath: "//input[@name='startDate']/following-sibling::label"}
    const END_DATE_LABEL = { xpath: "//input[@name='endDate']/following-sibling::label"}







    class AddNewPromotionModal extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async addPromotionModalIsDisplayed(){
            await this.isDisplayed(PROMOTION_TITLE_INPUT,10000)
        }

        async startDateInputIsDisplayed(){
            await this.isDisplayed(TICKET_START_DATE_INPUT,10000)
        }
        async ticketsAreDisplayedInTheList(ticketName){
            await this.isDisplayed(By.xpath("//*[text()='"+ticketName+"']"),5000);
        }
        async clickTicketInTheList(ticketName){
            let ticket = await this.driver.findElement(By.xpath("//label/span[text()='"+ticketName+"']"));
           await ticket.click();
        }

        async assertElementsOnNewPromotionsScreen(ticketOneName){
            await this.isDisplayed(PROMOTION_DESCRIPTION_INPUT,5000);
            await this.timeout(1000)
            let titleLabel = await this.getElementText(TITLE_INPUT_LABEL);
            assert.equal(titleLabel, "PROMOTION TITLE");
            let descriptionLabel = await this.getElementText(DESCRIPTION_TEXTAREA_LABEL);
            assert.equal(descriptionLabel, "PROMOTIONS DESCRIPTION / NOTES");
            let ticketsLabel = await this.getElementText(SELECT_TICKETS_DROPDOWN_LABEL);
            assert.equal(ticketsLabel, "SELECT TICKET TYPE");
            let limitMembersLabel = await this.getElementTextFromAnArrayByIndex(CHECKBOXES_LABELS,0);
            assert.equal(limitMembersLabel, "Limit offer to members only");
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketOneName);
            await this.clickTicketInTheList(ticketOneName);
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            await this.timeout(1000)
            let statusLabel = await this.getElementText(STATUS_LABEL);
            assert.equal(statusLabel, "STATUS");
            await this.click(PROMOTION_STATUS_DROPDOWN);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000);
            await this.isDisplayed(DISABLED_STATUS_OPTION,5000);
            await this.click(PROMOTION_STATUS_DROPDOWN);
            await this.scrollUpOrDown(200);
            let discountQuantity = await this.getElementTextFromAnArrayByIndex(CHECKBOXES_LABELS,1);
            assert.equal(discountQuantity, "Discount on purchase quantity");
            let priceLabel = await this.getElementText(PRICE_LABEL);
            assert.equal(priceLabel, "PRICE");
            let percentageLabel = await this.getElementText(PERCENTAGE_LABEL);
            assert.equal(percentageLabel, "PERCENTAGE");
            let promoCodeLabel = await this.getElementText(PROMO_CODE_LABEL);
            assert.equal(promoCodeLabel, "PROMO CODE");
            let limitByAccount = await this.getElementTextFromAnArrayByIndex(CHECKBOXES_LABELS,2);
            assert.equal(limitByAccount, "Limit how many times this promo code can be used by a single account.");
            await this.scrollUpOrDown(200)
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            await this.isDisplayed(GENERATE_MULTIPLE_CODES_BUTTON,5000);
            await this.click(GENERATE_MULTIPLE_CODES_BUTTON);
            await this.isDisplayed(QUANTITY_OF_CODES_INPUT,5000);
            await this.isDisplayed(GENERATE_SINGLE_CODE_BUTTON,5000);
            await this.isDisplayed(DESCRIPTION_QUESTIONS,5000);
            await this.timeout(500);
            let uniqueCodesQuestion = await this.getElementTextFromAnArrayByIndex(DESCRIPTION_QUESTIONS,0);
            assert.equal(uniqueCodesQuestion, "How many unique codes would you like generated?");
            let qtyOfCodes = await this.getElementText(GENERATED_QTY_CODES_LABEL);
            assert.equal(qtyOfCodes, "QUANTITY OF CODES");
            let codeLimitQuestion = await this.getElementTextFromAnArrayByIndex(DESCRIPTION_QUESTIONS,1);
            assert.equal(codeLimitQuestion, "How many tickets should each unique code holder be able to purchase with a single code?");
            let codeLimitLabel = await this.getElementText(CODE_USE_LIMIT_LABEL);
            assert.equal(codeLimitLabel, "CODE USE LIMIT");
            await this.sentKeys(QUANTITY_OF_CODES_INPUT,"5");
            await this.isDisplayed(PROMOTION_DESCRIPTION_INPUT,5000);
            await this.timeout(1000);
            let distributionQuestion = await this.getElementTextFromAnArrayByIndex(DESCRIPTION_QUESTIONS,2);
            assert.equal(distributionQuestion, "How should these codes be distributed?");
            let distributionLabel = await this.getElementText(DISTRIBUTION_TYPE_LABEL);
            assert.equal(distributionLabel, "SELECT DISTRIBUTION TYPE");
            let durationQuestion = await this.getElementTextFromAnArrayByIndex(DESCRIPTION_QUESTIONS,3);
            assert.equal(durationQuestion, "When should the discount be active?");
            let startDateLabel = await this.getElementText(START_DATE_LABEL);
            assert.equal(startDateLabel, "START DAY & TIME");
            let endDateLabel = await this.getElementText(END_DATE_LABEL);
            assert.equal(endDateLabel, "END DAY & TIME");


        }

        async createPromotionForOneTicketWith$Value(ticketName, promoName, promoCode){
            await this.sentKeys(PROMOTION_TITLE_INPUT, promoName);
            await this.sentKeys(PROMOTION_DESCRIPTION_INPUT, promoName + ' description');
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketName);
            await this.clickTicketInTheList(ticketName);
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            await this.clickElementReturnedFromAnArray(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS,0);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000)
            await this.click(ENABLED_STATUS_OPTION);
            await this.sentKeys(PROMO_LIMIT_QUANTITY_INPUT,"5");
            await this.sentKeys(PROMO_$_VALUE_INPUT,"0.1");
            await this.sentKeys(PROMO_CODE_NAME_INPUT,promoCode);
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            //await this.driver.executeScript("document.body.style.zoom = '80%'")
            await this.startDateInputIsDisplayed(PROMO_PER_ACCOUNT_LIMIT_INPUT, 5000);
            await this.timeout(1500)
            await this.click(TICKET_START_DATE_INPUT)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton();
            await this.timeout(500)
            await startDatePicker.clickSetButton();
            await this.timeout(500)
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='visible'");
            await this.isDisplayed(SAVE_PROMOTION_BUTTON)
            await this.timeout(500)
            await this.click(SAVE_PROMOTION_BUTTON);
            await this.timeout(1500)
        }

        async createPromotionForMembersWithPercentValue(ticketName, promoName, promoCode){
            await this.sentKeys(PROMOTION_TITLE_INPUT, promoName);
            await this.sentKeys(PROMOTION_DESCRIPTION_INPUT, promoName + ' description');
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketName);
            await this.clickTicketInTheList(ticketName);
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            await this.clickElementReturnedFromAnArray(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS,0);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000)
            await this.click(ENABLED_STATUS_OPTION);
            await this.timeout(1000)
            await this.driver.executeScript("document.getElementsByName('membersLimit')[0].click()");
            await this.sentKeys(PROMO_LIMIT_QUANTITY_INPUT,"10");
            await this.sentKeys(PROMO_PERCENT_VALUE_INPUT,"85");
            await this.sentKeys(PROMO_CODE_NAME_INPUT,promoCode);
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            await this.startDateInputIsDisplayed();
            await this.timeout(1000)
            await this.click(TICKET_START_DATE_INPUT)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton();
            await this.timeout(2000)
            await startDatePicker.clickSetButton();
            await this.timeout(1000)
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='visible'");
            await this.isDisplayed(SAVE_PROMOTION_BUTTON)
            await this.timeout(1000)
            await this.click(SAVE_PROMOTION_BUTTON);
            await this.timeout(1500)
        }

        async createPromotionForMultipleTicketsWithLimitationsWithPercentValue(ticketNameOne, promoName, promoCode){
            await this.sentKeys(PROMOTION_TITLE_INPUT, promoName);
            await this.sentKeys(PROMOTION_DESCRIPTION_INPUT, promoName + ' description');
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketNameOne);
            await this.clickTicketInTheList("All");
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            await this.clickElementReturnedFromAnArray(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS,0);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000)
            await this.click(ENABLED_STATUS_OPTION);
            await this.sentKeys(PROMO_LIMIT_QUANTITY_INPUT,"15");
            await this.sentKeys(PROMO_PERCENT_VALUE_INPUT,"70");
            await this.sentKeys(PROMO_CODE_NAME_INPUT,promoCode);
            await this.driver.executeScript("document.getElementsByName('accountLimit')[0].click()");
            await this.moveToElement(TICKET_START_DATE_INPUT);
            await this.isDisplayed(PROMO_PER_ACCOUNT_LIMIT_INPUT,1000);
            await this.sentKeys(PROMO_PER_ACCOUNT_LIMIT_INPUT, "10")
            await this.click(SELECT_LIMIT_TICKETS_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketNameOne);
            await this.driver.executeScript("document.getElementsByClassName('pl-4')[6].click()");
            await this.driver.executeScript("document.getElementsByClassName('pl-4')[7].click()");
            await this.driver.executeScript("document.getElementsByClassName('pl-4')[8].click()");
            await this.click(SELECT_LIMIT_TICKETS_DROPDOWN);
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            //await this.driver.executeScript("document.body.style.zoom = '80%'")
            await this.startDateInputIsDisplayed();
            await this.timeout(1000)
            await this.click(TICKET_START_DATE_INPUT)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton()
            await this.timeout(1000)
            await startDatePicker.clickSetButton();
            await this.timeout(1000)
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='visible'");
            await this.isDisplayed(SAVE_PROMOTION_BUTTON)
            await this.timeout(1000)
            await this.click(SAVE_PROMOTION_BUTTON);
            await this.timeout(1500)
        }

        async createPromotionWith100discountForAllTickets(ticketNameOne, promoName, promoCode){
            await this.sentKeys(PROMOTION_TITLE_INPUT, promoName);
            await this.sentKeys(PROMOTION_DESCRIPTION_INPUT, promoName + ' description');
            await this.click(SELECT_TICKET_DROPDOWN);
            await this.ticketsAreDisplayedInTheList(ticketNameOne);
            await this.clickTicketInTheList("All");
            await this.click(PROMOTION_DESCRIPTION_INPUT);
            await this.clickElementReturnedFromAnArray(PROMOTION_STATUS_AND_DISTRIBUTION_SELECTS,0);
            await this.isDisplayed(ENABLED_STATUS_OPTION,5000)
            await this.click(ENABLED_STATUS_OPTION);
            await this.sentKeys(PROMO_LIMIT_QUANTITY_INPUT,"50");
            await this.sentKeys(PROMO_PERCENT_VALUE_INPUT,"100");
            await this.sentKeys(PROMO_CODE_NAME_INPUT,promoCode);
            await this.moveToElement(TICKET_START_DATE_INPUT);
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='hidden'");
            //await this.driver.executeScript("document.body.style.zoom = '80%'")
            await this.startDateInputIsDisplayed();
            await this.timeout(1000)
            await this.click(TICKET_START_DATE_INPUT)
            let startDatePicker = new DateTimePickerModal(this.driver);
            await startDatePicker.datePickerIsVisible();
            await startDatePicker.enterTimeNow();
            //await startDatePicker.clickPMButton();
            await this.timeout(1000)
            await startDatePicker.clickSetButton();
            await this.timeout(1000)
            await this.driver.executeScript("document.getElementsByClassName('btn-sticky')[0].style.visibility='visible'");
            await this.isDisplayed(SAVE_PROMOTION_BUTTON)
            await this.timeout(1000)
            await this.click(SAVE_PROMOTION_BUTTON);
            await this.timeout(1500)
        }




    }
    module.exports = AddNewPromotionModal;