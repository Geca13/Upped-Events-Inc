    const BasePage = require("../../BasePage");
    const assert = require("assert");
    const DetailsTab = require('../micrositesComponents/DetailsTab')
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
    const SHORTNAME = { xpath: "//div[@class='col-md-12']//div[@class='shortname']"};
    const FULLNAME = { xpath: "//div[@class='col-md-12']//div[@class='full-event-name']"}
    const EVENT_INFO = { xpath: "//div[@class='col-md-12']//div[@ng-reflect-ng-class='template1Text']//div[@class='detail-text']" }
    const EVENT_INFO_BUTTONS = { xpath: "//button[@ng-reflect-ng-class='template1ReadMore']" }//list


    class EventInfo extends BasePage{
    constructor(driver) {
        super(driver);

    }

    async lineupTabIsDisplayed(){
        await this.isDisplayed(LINEUP_TAB,5000, "microLineUp");
    }
    async clickLineupTab(){
        await this.click(LINEUP_TAB);
    }

    async activitiesTabTabIsDisplayed(){
        await this.isDisplayed(ACTIVITIES_TAB,5000, "microActivitiesTab");
    }
    async clickActivitiesTab(){
        await this.click(ACTIVITIES_TAB);
    }


    async clickBuyTicketsButton(){
        await this.click(BUY_TICKETS_BUTTON);
    }

    async buyTicketsButtonPresent() {
        return await this.isDisplayed(BUY_TICKETS_BUTTON,5000, "buyTicketsBtn");
    }

    async wishListButtonIsDisplayed(){
        await this.isDisplayed(WISHLIST_BUTTON, 5000, "wishListBtn");
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

    async assertLocationNamesAndDescriptionOnEventInfo(location,eventName,shortName,description){
        await this.timeout(1500);
        let extractedLocation = await this.getElementTextFromAnArrayByIndex(EVENT_INFO,1);
        let extractedShortName = await this.getElementText(SHORTNAME);
        let extractedFullName = await this.getElementText(FULLNAME);
        assert.equal(extractedLocation, location);
        assert.equal(extractedShortName, shortName);
        assert.equal(extractedFullName, eventName);
        let details = new DetailsTab(this.driver)
        let detailsTabEventFullName = await details.getEventFullName();
        let detailsTabEventDescription = await details.getEventDescription();
        assert.equal(detailsTabEventFullName, eventName);
        assert.equal(detailsTabEventDescription, description);
        console.log("Completed");
    }

}

  module.exports = EventInfo