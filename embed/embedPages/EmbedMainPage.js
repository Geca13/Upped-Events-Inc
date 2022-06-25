   /* const { Builder, By, until } = require('selenium-webdriver'); */
   const BasePage = require('../../BasePage');
   const assert = require('assert')
   const IFRAME = { id: "uwWidget"}
   const TERMS_CHECKBOX = { xpath: "//input[@type='checkbox']"}
   const NEXT_BUTTON = { xpath: "//*[text()='Next']"}
   const PREVIOUS_BUTTON = { xpath: "//*[text()=' Previous']"}
   const TICKETS_TERMS_BUTTON = { className: "terms-btn"}
   const LOGIN_INFO_MESSAGE = { className: 'message-text' }
   const LOGIN_LINK = { className: 'login-link' }
   const CHANGE_LOGIN_MESSAGE = { className: 'change-account' }
   const CHANGE_LOGIN_LINK = { className: 'change' }
   const EVENT_INFO_BANNER = { className: 'event-info' }
   const EVENT_NAME = { className: 'event-title' }


   class EmbedMainPage extends BasePage {
      constructor(driver) {
         super(driver);
      }

      async openEmbedPage(){
         await this.visit('https://www.uppedevents.com/embed-testing-direct/');

      }
      async switchToIframe(){
         await this.switchToAnIframe(IFRAME);
      }

      async isInFrame(eventName){
         await this.driver.executeScript("document.body.style.transform='scale(0.8, 0.8)'");
         await this.isDisplayed(EVENT_NAME,5000);
         let extractedEventName = await this.getElementText(EVENT_NAME);
         assert.equal(eventName,extractedEventName)

      }

      async clickTicketTermsCheckbox(){
         await this.click(TERMS_CHECKBOX)
      }


      async nextButtonIsVisible(){
         await this.isDisplayed(EVENT_NAME,5000);
      }
      async clickNextPageButton(){
        await this.click(NEXT_BUTTON)
      }


   }
   module.exports = EmbedMainPage;

