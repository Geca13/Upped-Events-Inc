    const BasePage = require('../../BasePage');
    const OrderDetailsModal = require('../portalModals/OrderDetailsModal');
    const PaginationComponent = require('../portalComponents/PaginationComponent');
    const Filters = require('../portalModals/Filters');
    const assert = require('assert');
    const { expect } = require('chai');
    const TableComponent = require("../portalComponents/TableComponent");
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
    const USERS = { xpath: "//td[contains(@class , 'column-username')]//a[contains(@class , 'table-ticket-name')]//span" }
    const ORDERS_AMOUNTS = { xpath: "//td[contains(@class , 'column-totalamount')]//span" }
    const ORDERS_ITEMS = { xpath: "//td[contains(@class , 'column-items')]//span" }
    const ORDERS_STATUS = { xpath: "//td[contains(@class , 'column-statusname')]//span" }




    class AllTransactionsPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async isAtTransactionCenterPage(){
            await this.isDisplayed(FILTER_BUTTON,5000);
        }

        async openTransactionViewInEventOrdersDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/orders")
            await this.isAtTransactionCenterPage();
        }

        async openDetailedViewInEventOrdersDirectly(eventId){
            await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/orders/detailed")
            await this.isAtTransactionCenterPage();
        }

        async assertTransactionViewTableHeadersNames(){
            await this.isAtTransactionCenterPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Order Id");
            await table.assertColumnNamesByIndex(2 ,"Order Type");
            await table.assertColumnNamesByIndex(3 ,"User");
            await table.assertColumnNamesByIndex(4 ,"Items");
            await table.assertColumnNamesByIndex(5,"Price");
            await table.assertColumnNamesByIndex(6 ,"Payment Mode");
            await table.assertColumnNamesByIndex(7 ,"Seller");
            await table.assertColumnNamesByIndex(8,"Order Time");
            await table.assertColumnNamesByIndex(9,"Status");
            
        }

        async assertDetailedViewTableHeadersNames(){
            await this.isAtTransactionCenterPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(1 ,"Order Id");
            await table.assertColumnNamesByIndex(2 ,"Order Type");
            await table.assertColumnNamesByIndex(3 ,"User");
            await table.assertColumnNamesByIndex(4 ,"Item Name");
            await table.assertColumnNamesByIndex(5 ,"Items");
            await table.assertColumnNamesByIndex(6 ,"Fees");
            await table.assertColumnNamesByIndex(7 ,"Tax");
            await table.assertColumnNamesByIndex(8 ,"Price");
            await table.assertColumnNamesByIndex(9 ,"Total");
            await table.assertColumnNamesByIndex(10 ,"Payment Mode");
            await table.assertColumnNamesByIndex(11 ,"Seller");
            await table.assertColumnNamesByIndex(12 ,"Order Time");
            await table.assertColumnNamesByIndex(13 ,"Status");
            
        }
        
        async makeFullRefundWithReinstateTicket(){
            await this.isAtTransactionCenterPage();
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(ORDER_DETAILS_MENU,0);
            await this.click(DETAILS_MENU_OPTION);
            let orderDetails = new OrderDetailsModal(this.driver);
            await orderDetails.orderDetailsModalIsDisplayed();
            let before = await orderDetails.getOrderTotalBeforeRefunds();
            await orderDetails.makeRefundOnAllTicketQuantity();
            let after = await orderDetails.getOrderTotalAfterRefunds();
            await orderDetails.closeOrderTotalModal();
            await this.isAtTransactionCenterPage();
            await this.timeout(1000);
            let total = before - after
            return total.toFixed(2);
        }

        async returnTotalTransactionsMade(){
            await this.isAtTransactionCenterPage();
            let pagination = new PaginationComponent(this.driver);
            await pagination.selectXRowsPerPage(50);
            await this.takeScreenshot("bg-light")
            await this.isDisplayed(TABLE_ROWS,5000);
            return await this.returnElementsCount(TABLE_ROWS);
        }

        async assertOrderIdsAreShownInDescendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            expect(await this.assertNumberedArrayIsSortedDescending(ORDERS_IDS)).to.be.true;
        }

        async assertOrderIdsAreShownInAscendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
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

        async assertPricesAreShownInDescendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "sorted")).to.be.false;
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,4);
            await this.timeout(4000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "sorted")).to.be.true;
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "desc")).to.be.true;
            await this.timeout(1000);
            expect(await this.assertNumberedArrayIsSortedDescending(ORDERS_AMOUNTS)).to.be.true;
            await this.timeout(1000);
        }
        async assertPricesAreShownInAscendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,4);
            await this.timeout(1000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "sorted")).to.be.true;
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "asc")).to.be.true;
            await this.timeout(1000);
            expect(await this.assertNumberedArrayIsSortedAscending(ORDERS_AMOUNTS)).to.be.true;
            await this.timeout(1000);
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "desc")).to.be.true;
        }

        async assertItemsAreShownInDescendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 3, "sorted")).to.be.false;
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,3);
            await this.timeout(4000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 3, "sorted")).to.be.true;
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 4, "desc")).to.be.true;
            await this.timeout(1000);
            expect(await this.assertNumberedArrayIsSortedDescending(ORDERS_ITEMS)).to.be.true;
            await this.timeout(1000);
        }
        async assertItemsAreShownInAscendingOrder(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.clickElementReturnedFromAnArray(TABLE_HEADS,3);
            await this.timeout(1000);
            expect(await this.checkIfClassIsApplied(TABLE_HEADS, 3, "sorted")).to.be.true;
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 3, "asc")).to.be.true;
            await this.timeout(1000);
            expect(await this.assertNumberedArrayIsSortedAscending(ORDERS_ITEMS)).to.be.true;
            await this.timeout(1000);
            //expect(await this.checkIfClassIsApplied(TABLE_HEADS, 0, "desc")).to.be.true;
        }

        async filterByOrderId(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(orderIds, 1);
            let id = await this.getElementTextFromAnArrayByIndex(ORDERS_IDS, 4);
            let user = await this.getElementTextFromAnArrayByIndex(USERS, 4);
            let amount = await this.getElementTextFromAnArrayByIndex(ORDERS_AMOUNTS, 4);
            let items = await this.getElementTextFromAnArrayByIndex(ORDERS_ITEMS, 4);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByIdInTransactionCenter(id);
            await this.timeout(2000)
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.equal(filteredOrderIds, 1);
            let filteredId = await this.getElementTextFromAnArrayByIndex(ORDERS_IDS, 0);
            let filteredUser = await this.getElementTextFromAnArrayByIndex(USERS, 0);
            let filteredAmount = await this.getElementTextFromAnArrayByIndex(ORDERS_AMOUNTS, 0);
            let filteredItems = await this.getElementTextFromAnArrayByIndex(ORDERS_ITEMS, 0);
            assert.equal(id, filteredId);
            assert.equal(user, filteredUser);
            assert.equal(amount, filteredAmount);
            assert.equal(items, filteredItems);
        }

        async filterByPriceMinAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByMinimumPriceInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_AMOUNTS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.greaterThan(29.99)
            }
        }

        async filterByPriceMaxAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByMaximumPriceInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_AMOUNTS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.lessThan(25.01)
            }
        }

        async filterByPriceRangeAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByPriceRangeInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_AMOUNTS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.within(19.99, 25.01)
            }
        }

        async filterByMinPurchasedItemsAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByMinimumItemsInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_ITEMS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.greaterThan(1.99)
            }
        }

        async filterByMaxPurchasedItemsAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByMaximumItemsInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_ITEMS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.lessThan(2.01)
            }
        }

        async filterByPurchasedItemsRangeAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByItemsRangeInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_ITEMS);
            for (let i = 0; i < amounts.length ; i++){
                expect(amounts[i]).to.be.within(2.99, 5.01)
            }
        }
        async filterByFullUserAndAssertValues(base){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByUserInTransactionCenter(base);
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let users = await this.returnArrayOfStrings(USERS);

            for (let i = 0; i < users.length ; i++){
                assert.equal(users[i], base + ' ' + base);
            }
        }

        async filterByPartialUserNameAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByPartialNameInTransactionCenter();
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let users = await this.returnArrayOfStrings(USERS);
            for (let i = 0; i < users.length ; i++){
                expect(users[i]).to.include('Laz');
            }
        }

        async filterByFullUserPriceRangeAndAssertValues(base){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            await this.click(FILTER_BUTTON);
            let filter = new Filters(this.driver)
            await filter.filterByUserAndPriceRangeInTransactionCenter(base);
            let filteredOrderIds = await this.returnElementsCount(ORDERS_IDS);
            assert.notEqual(filteredOrderIds, orderIds);
            let users = await this.returnArrayOfStrings(USERS);
            let amounts = await this.convertStringArrayToNumberWithLocator(ORDERS_AMOUNTS);
            for (let i = 0; i < users.length ; i++){
                assert.equal(users[i], base + ' ' + base);
                expect(amounts[i]).to.be.within(19.99, 25.01)
            }
        }

        async filterByAllStatusOptionsAndAssertValues(){
            await this.isAtTransactionCenterPage();
            await this.orderIdsAreDisplayed();
            await this.timeout(500);
            let filter = new Filters(this.driver)
            let pagination = new PaginationComponent(this.driver);
            await pagination.selectXRowsPerPage(50);
            let orderIds = await this.returnElementsCount(ORDERS_IDS);
            let allStatuses = await this.returnUniqueStringValues(ORDERS_STATUS);
            for(let i = 0; i < allStatuses.length; i++){
               await this.click(FILTER_BUTTON);
               await filter.filterByStatusInTransactionCenter(i);
               let selected = await filter.returnOptionName(i);
               await filter.selectOptionFromDropdown(i);
               let filteredStatuses = await this.returnArrayOfStrings(ORDERS_STATUS);
               await this.timeout(3000)
               for (let y = 0; y < filteredStatuses.length ; y++) {
                   assert.equal(filteredStatuses[y], selected);
               }
            }
        }

        async orderIdsAreDisplayed() {
            await this.isDisplayed(ORDERS_IDS, 5000);
        }
    }
    module.exports = AllTransactionsPage;