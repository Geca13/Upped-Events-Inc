    const BasePage = require("../../BasePage");
    const PAGE_TITLE = { className: 'information-title' }
    const BUY_TICKETS_BUTTON = { xpath: "//*[text()=' Buy Tickets ']"}
    const WISHLIST_BUTTON = { xpath: "//*[text()=' Add to Wishlist ']"}
    const DETAILS_TAB = { xpath: "//*[text()=' Details ']"}
    const PHOTOS_TAB = { xpath: "//*[text()=' Photos ']"}
    const SHOPS_TAB = { xpath: "//*[text()=' Shops ']"}
    const LINEUP_TAB = { xpath: "//*[text()=' Lineup ']"}
    const LOCATION_TAB = { xpath: "//*[text()=' Location ']"}
    const ACTIVITIES_TAB = { xpath: "//*[text()=' Activities ']"}
    const FEATURED_IMAGE = { className: 'featured-image' }
    const SHORT_TAGS = { className: 'eventTags' }
    const VERTICAL_LINE = { className: 'line-straight' }
    const EVENT_INFO = { className: 'event-info' }

    class EventInfo extends BasePage{
    constructor(driver) {
        super(driver);

    }

    async lineupTabIsDisplayed(){
        await this.isDisplayed(LINEUP_TAB,5000);
    }
    async clickLineupTab(){
        await this.click(LINEUP_TAB);
    }

    async activitiesTabTabIsDisplayed(){
        await this.isDisplayed(ACTIVITIES_TAB,5000);
    }
    async clickActivitiesTab(){
        await this.click(ACTIVITIES_TAB);
    }


    async clickBuyTicketsButton(){
        await this.click(BUY_TICKETS_BUTTON);
    }

    async buyTicketsButtonPresent() {
        return await this.isDisplayed(BUY_TICKETS_BUTTON,5000);
    }

    async clickWishlistButton(){
        await this.click(WISHLIST_BUTTON);
    }
    async clickDetailsTab(){
        await this.click(DETAILS_TAB);
    }
    async clickPhotosTab(){
        await this.click(PHOTOS_TAB);
    }
    async clickShopsTab(){
        await this.click(SHOPS_TAB);
    }
    async clickLocationTab(){
        await this.click(LOCATION_TAB);
    }


}

  module.exports = EventInfo