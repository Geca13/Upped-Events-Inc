    const BasePage = require("../../BasePage");
    const assert = require("assert");
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
    const EVENT_INFO = { xpath: "//div[@class='col-md-12']//div[@ng-reflect-ng-class='template1Text']//div[@class='detail-text']" }
    const EVENT_INFO_BUTTONS = { xpath: "//button[@ng-reflect-ng-class='template1ReadMore']" }//list


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

    async wishListButtonIsDisplayed(){
        await this.isDisplayed(WISHLIST_BUTTON, 5000);
        await this.timeout(500);
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
    async assertEventInfoPageImageIsAMatch(src){
        let infoSrc = await this.returnImgSrcAttribute(FEATURED_IMAGE);
        assert.equal(infoSrc,src);
    }

    async assertNoTicketsAvailableButtonText(){
        let ticketsButton = await this.getElementTextFromAnArrayByIndex(EVENT_INFO_BUTTONS,1);
        assert.equal(ticketsButton, "No tickets available for sale")
        await this.timeout(500);
    }

    async assertBuyTicketsButtonText(){
        let ticketsButton = await this.getElementTextFromAnArrayByIndex(EVENT_INFO_BUTTONS,1);
        assert.equal(ticketsButton, "Buy Tickets")
        await this.timeout(500);
    }
    async assertTicketsDateAvailableButtonText(date){
        let ticketsButton = await this.getElementTextFromAnArrayByIndex(EVENT_INFO_BUTTONS,1);
        assert.equal(ticketsButton, "Tickets will be available From " + date);
        await this.timeout(500);
    }
    async assertDateAndTimeOnEventInfo(portalDateAndTime){
        await this.timeout(1500);
        let dateAndTime = await this.getElementTextFromAnArrayByIndex(EVENT_INFO,0);
        let formattedDateAndTime = dateAndTime.substring(0, 19) + " " + dateAndTime.substring(20, 21) + " " + dateAndTime.substring(22);
        assert.equal(formattedDateAndTime, portalDateAndTime);
        await this.timeout(500);
    }

}

  module.exports = EventInfo