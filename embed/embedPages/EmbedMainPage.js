   /* const { Builder, By, until } = require('selenium-webdriver'); */
   const BasePage = require('../../BasePage');
   const Alerts = require('../../Validations&Alerts/Alerts')
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
   const NO_TICKETS_MESSAGE = { xpath: "//p[contains(@class, 'pt-5')]" }


   class EmbedMainPage extends BasePage {
      constructor(driver) {
         super(driver);
      }

      async openEmbedPage(){
         await this.visit('https://www.uppedevents.com/embed-testing-direct/');

      }
      async switchToIframe(){
         await this.isDisplayed(IFRAME , 20000)
         await this.switchToAnIframe(IFRAME);
      }

      async getNewlyOpenedTab(originalWindow){
           await this.switchToNewlyOpenedWindowOrTab(originalWindow);
        }

      async isInFrame(eventName){
         await this.driver.executeScript("document.body.style.transform='scale(0.8, 0.8)'");
         await this.timeout(5000);
         await this.isDisplayed(EVENT_NAME,5000);
         let extractedEventName = await this.getElementText(EVENT_NAME);
         assert.equal(eventName,extractedEventName)

      }

      async assertNoTicketsMessageIsDisplayed(){
         await this.isDisplayed(NO_TICKETS_MESSAGE,5000);
         let message = await this.getElementText(NO_TICKETS_MESSAGE);
         assert.equal(message, "No tickets are currently available for this event");
      }

      async clickTicketTermsCheckbox(){
         await this.isDisplayed(TERMS_CHECKBOX, 5000);
         await this.click(TERMS_CHECKBOX)
      }


      async nextButtonIsVisible(){
         await this.isDisplayed(NEXT_BUTTON,5000);
         await this.timeout(500);

      }
      async clickNextPageButton(){
        await this.click(NEXT_BUTTON)
         await this.timeout(500);
      }
      async limitInfoMessageIsDisplayed(number){
        let info = new Alerts(this.driver);
        await info.correctInfoMessageIsDisplayed("You have exceeded maximum (" + number + ") limit to buy tickets");
      }

      async successLoginMessageIsDisplayed(){
         let alert = new Alerts(this.driver);
         await alert.successAlertIsDisplayed("Successfully logged in")
      }


   }
   module.exports = EmbedMainPage;

