const BasePage = require('../../BasePage');
const OrderDetailsModal = require('../portalModals/OrderDetailsModal');
const PaginationComponent = require('../portalComponents/PaginationComponent');
const Filters = require('../portalModals/Filters');
const assert = require('assert');
const { expect } = require('chai');
const TableComponent = require("../portalComponents/TableComponent");
const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
const ORDERS_IDS = { xpath: "//td[contains(@class , 'column-id')]//a[contains(@class , 'table-ticket-name')]//span" }


class TicketsTransactions extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async isAtTicketsTransactionsPage(){
        await this.isDisplayed(FILTER_BUTTON,5000);
    }

    async openTicketsNavInEventOrdersDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/orders/tickets")
        await this.isAtTicketsTransactionsPage();
    }

    async assertTicketsTransactionsTableHeadersNames(){
        await this.isAtTicketsTransactionsPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Order Id");
        await table.assertColumnNamesByIndex(2 ,"Order Type");
        await table.assertColumnNamesByIndex(3 ,"User");
        await table.assertColumnNamesByIndex(4 ,"Items");
        await table.assertColumnNamesByIndex(5,"Price");
        await table.assertColumnNamesByIndex(6 ,"Payment Mode");
        await table.assertColumnNamesByIndex(7 ,"Seller");
        await table.assertColumnNamesByIndex(8,"Order Date");
        await table.assertColumnNamesByIndex(9,"Status");

    }

    async orderIdsAreDisplayed() {
        await this.isDisplayed(ORDERS_IDS, 5000);
    }
}
module.exports = TicketsTransactions;