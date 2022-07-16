    const BasePage = require('../../BasePage');
    const OrderDetailsModal = require('../portalModals/OrderDetailsModal');
    const PaginationComponent = require('../portalComponents/PaginationComponent');
    const assert = require('assert');
    const { expect } = require('chai');
    const ALL_NAV = { xpath: "//*[text()='All']"}
    const TICKETS_NAV = { xpath: "//*[text()='Tickets']"}
    const ITEMS_NAV = { xpath: "//*[text()=' Items ']"}
    const ALL_TAB = { xpath: "//*[text()=' All ']"}
    const IN_PROCESS_TAB = { xpath: "//*[text()=' In Process ']"}
    const COMPLETED_TAB = { xpath: "//*[text()=' Completed ']"}
    const REFUNDED_TAB = { xpath: "//*[text()=' Refunded ']"}
    const TRANSACTIONS_VIEW_TAB = { xpath: "//*[text()=' Transaction View ']"}
    const DETAILED_VIEW_TAB = { xpath: "//*[text()=' Detailed View ']"}
    const ORDER_DETAILS_MENU = { className: 'tbl-drpdwn'} //list
    const DETAILS_MENU_OPTION = { xpath: "//*[text()=' Details ']"}
    const ORDER_DETAILS_MODAL = { tagName: 'order-details-popup'}
    const ORDER_TOTAL_IN_EVENT_ORDERS = { className: 'column-totalamount' }
    const ADD_TABLE_COLUMN_BUTTON = { xpath: "//a[contains(@class, 'addcolumn_btn')]//span" };
    const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
    const TABLE_ROWS = {  className: "bg-light" } //list
    const TABLE_HEADS = {  xpath: "//th[contains(@class , 'sorting')]" } //list
    const ORDERS_IDS = { xpath: "//td[contains(@class , 'column-id')]//a[contains(@class , 'table-ticket-name')]//span" }




    class EventOrders extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async isAtTransactionCenterPage(){
            await this.isDisplayed(TRANSACTIONS_VIEW_TAB,5000);
        }
        async makeFullRefundWithReinstateTicket(){
            await this.isAtTransactionCenterPage();
            await this.driver.sleep(2000);
            await this.clickElementReturnedFromAnArray(ORDER_DETAILS_MENU,0);
            await this.isDisplayed(DETAILS_MENU_OPTION,5000);
            await this.click(DETAILS_MENU_OPTION);
            let orderDetails = new OrderDetailsModal(this.driver);
            await orderDetails.orderDetailsModalIsDisplayed();
            let before = await orderDetails.getOrderTotalBeforeRefunds();
            await orderDetails.makeRefundOnAllTicketQuantity();
            let after = await orderDetails.getOrderTotalAfterRefunds();
            await orderDetails.closeOrderTotalModal();
            await this.isAtTransactionCenterPage();
            await this.driver.sleep(500)/*
            let total = await this.getChildByIndex(ORDER_TOTAL_IN_EVENT_ORDERS,0,0)
            console.log(total);*/
            await this.driver.sleep(5000);
            let total = before - after
            return total.toFixed(2);
        }

        async returnTotalTransactionsMade(){
            await this.isAtTransactionCenterPage();
            let pagination = new PaginationComponent(this.driver);
            await pagination.selectXRowsPerPage(50);
            await this.takeScreenshot("bg-light")
            await this.isDisplayed(TABLE_ROWS,5000);
            let rows = await this.returnElementsCount(TABLE_ROWS);
            return rows;
        }

        async assertOrderIdsAreShownInDescendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.isDisplayed(ORDERS_IDS,5000);
            expect(await this.assertNumberedArrayIsSortedDescending(ORDERS_IDS)).to.be.true;
        }

        async assertOrderIdsAreShownInAscendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.isDisplayed(ORDERS_IDS,5000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "sorted")).to.be.false;
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "desc")).to.be.true;
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,0);
            await this.timeout(1000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "sorted")).to.be.true;
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,0);
            await this.timeout(1000);
            expect(await this.assertNumberedArrayIsSortedAscending(ORDERS_IDS)).to.be.true;
            await this.timeout(1000);
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "desc")).to.be.true;
        }

    }
    module.exports = EventOrders;