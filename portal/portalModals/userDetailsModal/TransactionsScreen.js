    const BasePage = require('../../../BasePage');
    const assert = require("assert");
    const TOP_CARDS_DATA = { xpath: "//div[contains(@class, 'card-header')]//h4[contains(@class, 'font-weight-bolder')]" } //list
    const TOP_CARDS_DESCRIPTIONS = { xpath: "//div[contains(@class, 'card-header')]//p[contains(@class, 'card-text')]" } //list
    const ORDERS_IDS = { xpath: "//td[contains(@class, 'column-orderid')]//a[contains(@class, 'table-ticket-name')]//span" } //list
    const EVENTS_NAMES = { xpath: "//td[contains(@class, 'column-event-name')]//span" } //list
    const ORDERS_TYPES = { xpath: "//td[contains(@class, 'column-ordertype')]//span" } //list
    const ORDER_ITEMS_COUNT = { xpath: "//td[contains(@class, 'column-totalitems')]//span" } //list
    const ORDERS_TOTALS = { xpath: "//td[contains(@class, 'column-total-price')]//span" } //list
    const ORDERS_DATES = { xpath: "//td[contains(@class, 'column-created-at')]" } //list
    const ORDER_ID_COLUMN_HEADER = { xpath: "//span[text()='Order ID']"}
    const EVENT_NAME_COLUMN_HEADER = { xpath: "//span[text()='Event Name']"}
    const TYPE_COLUMN_HEADER = { xpath: "//span[text()='Type']"}
    const ITEMS_COLUMN_HEADER = { xpath: "//span[text()='Items']"}
    const AMOUNT_COLUMN_HEADER = { xpath: "//span[text()='Amount']"}
    const DATE_COLUMN_HEADER = { xpath: "//span[text()='Date']"}

    class TransactionsScreen extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnTransactionScreen(){
            await this.isDisplayed(TOP_CARDS_DATA,5000);
        }
        async assertCardsDescriptions(){
            await this.isOnTransactionScreen();
            let totalSpend = await this.getElementTextFromAnArrayByIndex(TOP_CARDS_DESCRIPTIONS,0);
            assert.equal(totalSpend ,"Total Spend");
            let avgSpendTrans = await this.getElementTextFromAnArrayByIndex(TOP_CARDS_DESCRIPTIONS,1);
            assert.equal(avgSpendTrans ,"Avg. Spend per Transaction");
            let avgSpendEvent = await this.getElementTextFromAnArrayByIndex(TOP_CARDS_DESCRIPTIONS,2);
            assert.equal(avgSpendEvent ,"Avg. Spend per Event");
        }
        async assertThatAllOrderIdsHaveHashOnFront(){
            await this.isOnTransactionScreen();
            let ids = await this.findAll(ORDERS_IDS);
            for (let i = 0; i < ids.length; i++) {
                 let id = await this.getElementTextFromAnArrayByIndex(ORDERS_IDS, i);
                 let hash = id.substring(0,1);
                 assert.equal(hash ,"#");
            }
        }
        async assertCardTotalEqualsOrdersTotal(){
            await this.isOnTransactionScreen();
            let calculated = await this.calculateNumbersFromArray(ORDERS_TOTALS);
            let convertedCalculated = parseFloat(calculated);
            let cardTotal = await this.getElementTextFromAnArrayByIndex(TOP_CARDS_DATA,0);
            let substring = cardTotal.substring(1);
            let converted = parseFloat(substring);
            assert.equal(convertedCalculated ,converted);
        }
        async assertTotalFromTransactionsOnTransactionsScreenTotal(total){
            let cardTotal = await this.getElementTextFromAnArrayByIndex(TOP_CARDS_DATA,0);
            let cardTotalSubstring = cardTotal.substring(1);
            let convertedCardTotal = parseFloat(cardTotalSubstring);
            let fixedTotal = parseFloat(total.toFixed(2));
            assert.equal(fixedTotal ,convertedCardTotal);
        }

    }
    module.exports = TransactionsScreen;