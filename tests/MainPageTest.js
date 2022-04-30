    const { Builder } = require('selenium-webdriver');
    const assert = require('assert');
    const EventsPage = require('../microsites/micrositesPages/EventsPage');
    const LoginComponent = require('../microsites/micrositesComponents/LoginComponent');
    const EventInfo = require('../microsites/micrositesPages/EventInfo');
    const TicketingPage = require('../microsites/micrositesPages/TicketingPage');
    const TicketsTab = require('../microsites/micrositesComponents/TicketsTab');
    const ExtrasTab = require('../microsites/micrositesComponents/ExtrasTab');
    const PayTab = require('../microsites/micrositesComponents/PayTab');

    describe('Login', function (){
        this.timeout(30000);
        let driver;
        let events;
        let login;
        let info;
        let ticketing;
        let tickets;
        let extras;
        let pay;


        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            await events.load();
        });

        afterEach(async function(){
            await driver.quit()
        })

        it('should display the login modal after click on the sign in button', async function () {
          await events.clickSignInButton();
          await login.waitPopupToBeLoaded();
          await login.authenticate("parma15@parma.it", "Pero1234")
          await events.successMessagePresent()

          /*await driver.sleep(1000)
          //await events.hover()
          //let returned_success_message = await events.successMessageText();

         // let expected_success_message = "Successfully logged in";
         // console.log(returned_success_message)
         // assert.strictEqual(returned_success_message, expected_success_message);*/
            await events.eventIsAvailableToClick()
            await events.clickEvent();

            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await ticketing.clickNextButton();
            await extras.balanceIsPresent();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await driver.sleep(7000);
        });
    });