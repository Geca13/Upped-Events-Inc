    const BasePage = require('../../../BasePage');
    const UserInfoScreen = require('../userDetailsModal/UserInfoScreen');
    const TransactionsScreen = require('../userDetailsModal/TransactionsScreen');
    const TagsScreen = require('../userDetailsModal/TagsScreen');
    const EventsScreen = require('../userDetailsModal/EventsScreen');
    const assert = require('assert')
    const USER_INFO_NAV = { xpath: "//a[text()='User Info']"}
    const TRANSACTIONS_NAV = { xpath: "//a[text()='Transactions']"}
    const TAGS_NAV = { xpath: "//a[text()='Tags']"}
    const EVENTS_NAV = { xpath: "//a[text()='Events']"}

    class UserDetailsModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
    async userInfoNavIsDisplayed(){
        await this.isDisplayed(USER_INFO_NAV,5000);
    }
    async clickUserInfoNav(){
            await this.click(USER_INFO_NAV);
    }
    async clickTransactionsNav(){
            await this.click(TRANSACTIONS_NAV);
    }
    async clickTagsNav(){
            await this.click(TAGS_NAV);
    }
    async clickEventsNav(){
            await this.click(EVENTS_NAV);
    }
    async assertUserInfoLabels(customerEmail){
            let userInfo = new UserInfoScreen(this.driver);
            await userInfo.isOnUserInfoScreen();
            await userInfo.assertUserInfoLabelsAndEmailData(customerEmail)
    }
    async assertFirstTransactionsData(total){
            let transactions = new TransactionsScreen(this.driver);
            await transactions.assertCardsDescriptions();
            await transactions.assertThatAllOrderIdsHaveHashOnFront();
            await transactions.assertCardTotalEqualsOrdersTotal();
            await transactions.assertTotalFromTransactionsOnTransactionsScreenTotal(total);
    }

    }
    module.exports = UserDetailsModal;