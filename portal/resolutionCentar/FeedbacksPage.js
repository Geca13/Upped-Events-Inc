const BasePage = require('../../BasePage');
const TableComponent = require('../portalComponents/TableComponent');
const FILTER_BUTTON = { xpath: "//div[contains(@class, 'filter-list-icon')]//i[contains(@class, 'icon-filter')]" }
const CATEGORY_COLUMN = { className: "column-category" }
const DESCRIPTION_COLUMN = { className: "column-description" }
const RATING_COLUMN = { className: "column-rating" }
const ADDED_DATE_COLUMN = { className: "column-added-on" }


class FeedbacksPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async isOnFeedbackPage(){
        await this.isDisplayed(FILTER_BUTTON, 5000)
    }

    async openFeedbackPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/resolution/feedbacks")
        await this.isOnFeedbackPage();
    }

    async assertFeedbackPageTableHeadersNames(){
        await this.isOnFeedbackPage();
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(1 ,"Category");
        await table.assertColumnNamesByIndex(2 ,"Description");
        await table.assertColumnNamesByIndex(3 ,"Rating");
        await table.assertColumnNamesByIndex(4 ,"Added Date");

    }

}
module.exports = FeedbacksPage;