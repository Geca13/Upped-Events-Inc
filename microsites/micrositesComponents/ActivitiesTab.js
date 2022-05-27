    const BasePage = require('../../BasePage');
    const GAMES_TAB = { xpath: "//*[text()='Games']"}
    const OVERVIEW_TAB = { xpath: "//*[text()='Overview']"}//list
    const ACTIVITY_CONTAINER = { className: 'activity-container' } //list
    const TAGS_CONTAINER = { id: 'tagsContainer' }//list
    const TAG_LIST = { className: 'tag' }
    const TAGS_LEFT_CHEVRON = { className: 'fa-chevron-left' } //list index 4
    const TAGS_RIGHT_CHEVRON = { className: 'fa-chevron-right' } //list index 4

    const ACTIVITIES_DETAILS_CONTAINER = { className: 'activity-details' } //list
    const ACTIVITY_NAME = { className: 'activity-title' } //list
    const ACTIVITY_TIME_AND_WHERE_LABELS = { className: 'activity-detail-item-label' } //list
    const ACTIVITY_TIME_AND_WHERE_VALUES = { className: 'activity-detail-item' } //list


    class ActivitiesTab extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtActivitiesTab(){
            await this.isDisplayed(GAMES_TAB,5000)
        }
    }
    module.exports = ActivitiesTab;