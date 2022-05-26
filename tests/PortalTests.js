    const { Builder, By } = require('selenium-webdriver');
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard');
    const CreateEventModal = require('../portal/portalModals/CreateEventModal');
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal');
    const MyEventsPage = require('../portal/dashboard/MyEventsTab');
    const EventOptionTabs = require('../portal/eventOverview/EventOptionTabs');
    const DesignNavs = require('../portal/eventOverview/DesignNav/DesignNavs');
    const EventCardDesignPage = require('../portal/eventOverview/DesignNav/EventCardDesignPage');
    const CreateTicketModal = require('../portal/portalModals/CreateTicketModal');
    const TicketsNav = require('../portal/ticketing/TicketsNav');
    const GeneralDetailsTab = require('../portal/eventOverview/GeneralDetailsTab');
    const PromotionsPage = require('../portal/promotions/PromotionsPage');
    const AddNewPromotionModal = require('../portal/portalModals/AddNewPromotionModal');
    const SettingsNav = require('../portal/ticketing/SettingsNav/SetingsNav');
    const EventSettingsNav = require('../portal/eventOverview/SettingsNav/SettingsNavs');
    const TaxesAndFeesPage = require('../portal/ticketing/SettingsNav/TaxesAndFeesPage');
    const TicketTermsPage = require('../portal/ticketing/SettingsNav/TicketTermsPage');
    const EventsPage = require('../microsites/micrositesPages/EventsPage');
    const LoginComponent = require('../microsites/micrositesComponents/LoginComponent');
    const EventInfo = require('../microsites/micrositesPages/EventInfo');
    const TicketingPage = require('../microsites/micrositesPages/TicketingPage');
    const TicketsTab = require('../microsites/micrositesComponents/TicketsTab');
    const ExtrasTab = require('../microsites/micrositesComponents/ExtrasTab');
    const PayTab = require('../microsites/micrositesComponents/PayTab');
    const ConfirmTab = require('../microsites/micrositesComponents/ConfirmTab');
    const NewCardComponent = require('../microsites/micrositesComponents/NewCardComponent');
    const TicketTermsModal = require('../microsites/micrositesComponents/TicketTermsModal');
    const EventOrders = require('../portal/transactionCentar/EventOrders');
    const MapAndAgendaNavs = require('../portal/mapAndAgenda/MapAndAgendaNavs');
    const EventMapPage = require('../portal/mapAndAgenda/EventMapPage');
    const PerformancesPage = require('../portal/mapAndAgenda/PerformancesPage')


    describe('should login to portal create new event and tickets', function () {
        this.timeout(500000);
        let driver;
        let portalLogin;
        let dashboard;
        let createEvent;
        let myEvents;
        let dateTime;
        let eventOptionTabs;
        let createTicket;
        let ticketsNav;
        let eventDetails;
        let promotions;
        let newPromotion;
        let settingsNav;
        let taxesAndFees;
        let ticketTerms;
        let eventDesignNavs;
        let eventCardDesignPage;
        let events;
        let info;
        let ticketing;
        let tickets;
        let extras;
        let pay;
        let login;
        let confirm;
        let newCardComponent;
        let terms;
        let eventOrders;
        let eventSettingsNav;
        let agendaNavs;
        let eventMap;
        let performance;

        let today = new Date();
        let eventName = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //let eventName = "Push 05/23/22";
        let base = Math.floor(100000 + Math.random() * 900000);
        let ticketOneName = base.toString() +"T1";
        let ticketTwoName = base.toString() +"T2";
        let ticketThreeName = base.toString() +"T3";
        let ticketFourName = base.toString() +"T4";
        let staffTicket = base.toString() +"staff";
        let promoOneName = base.toString() +"PN1";
        let promoTwoName = base.toString() +"PN2";
        let promoThreeName = base.toString() +"PN3";
        let promoCodeOne = base.toString() +"PC1";
        let promoCodeTwo = base.toString() +"PC2";
        let promoCodeThree = base.toString() +"PC3";

        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
        });

        afterEach(async function(){
            await driver.quit()
        })

        it('Should create new event,tickets,promotions and make purchases', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            dateTime = new DateTimePickerModal(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            createTicket = new CreateTicketModal(driver);
            ticketsNav = new TicketsNav(driver);
            eventDetails = new GeneralDetailsTab(driver);
            promotions = new PromotionsPage(driver);
            newPromotion = new AddNewPromotionModal(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            ticketTerms = new TicketTermsPage(driver);
            eventCardDesignPage = new EventCardDesignPage(driver);
            eventDesignNavs = new DesignNavs(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            newCardComponent = new NewCardComponent(driver);
            terms = new TicketTermsModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName);
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickDesignNav();
            await eventDesignNavs.clickEventCardDesignSubNav();
            await eventCardDesignPage.uploadPhotoInputIsDisplayed();
            await eventCardDesignPage.uploadImage();
            await eventOptionTabs.clickGeneralDetailsNav();
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            //await createTicket.createNewTicket(ticketOneName,"5");
            await createTicket.createNewTicket(ticketOneName,"0.5");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketOneName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            //await createTicket.createNewTicket(ticketTwoName,"10");
            await createTicket.createNewTicket(ticketTwoName,"1.0");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await ticketsNav.clickActivateTicketToggle(1);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            //await createTicket.createNewTicket(ticketThreeName,"15");
            await createTicket.createNewTicket(ticketThreeName,"0.75");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
            await ticketsNav.clickActivateTicketToggle(2);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            //await createTicket.createNewTicket(ticketFourName,"20");
            await createTicket.createNewTicket(ticketFourName,"0.25");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketFourName);
            await ticketsNav.clickActivateTicketToggle(3);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await eventOptionTabs.clickSettingsNav();
            await ticketTerms.termsPageIsDisplayed();
            await ticketTerms.saveTerms();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.createTaxesAndFeesForEventTickets();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickPromotionsTab();
            await promotions.promotionsHeaderIsVisible();
            await promotions.addPromotionButtonIsVisible()
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionForOneTicketWith$Value(ticketOneName, promoOneName, promoCodeOne);
            await promotions.promotionsHeaderIsVisible();
            await promotions.addPromotionButtonIsVisible()
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionForMembersWithPercentValue(ticketTwoName, promoTwoName, promoCodeTwo);
            await promotions.promotionsHeaderIsVisible();
            await promotions.addPromotionButtonIsVisible()
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionForMultipleTicketsWithLimitationsWithPercentValue(ticketOneName, promoThreeName, promoCodeThree);
            await promotions.promotionsHeaderIsVisible();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createStaffTicket(staffTicket,"3");
            await ticketsNav.createdTicketIsInTheTable(staffTicket);
            await ticketsNav.clickActivateTicketToggle(4);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma99@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(3000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            /*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*/

            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            let ticketPrice = await tickets.getTicketPrice();
            console.log(ticketPrice);
            let subtotal = await ticketing.getSubtotalText();
            console.log(subtotal);
            let price = await ticketing.getSummaryPriceText();
            console.log(parseFloat(price) + parseFloat(price));
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeOne);
            await pay.clickApplyDiscountButton();
            await ticketing.removeDiscountIconIsDisplayed();
            await pay.clickPayWithWalletOption();
            await pay.payWithWalletButtonIsDisplayed();
            await pay.clickPayWithWalletButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(0,"3");
            await tickets.sendKeysToQtyInput(1,"4");
            await tickets.sendKeysToQtyInput(2,"4");
            await tickets.sendKeysToQtyInput(3,"5");
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeThree);
            await pay.clickApplyDiscountButton();
            await ticketing.removeDiscountIconIsDisplayed();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(1);
            await tickets.clickIncreaseQtyButtonByIndex(2);
            //await for exceeding staff ticket
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(0);
            //await tickets.clickIncreaseQtyButtonByIndex(4);
            //await for exceeding staff ticket
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeTwo);
            await pay.clickApplyDiscountButton();
            await driver.sleep(2000);
            await pay.clickPayWithNewCardTab();
            await newCardComponent.isAtNewCardTab();
            await newCardComponent.fillNewCardWithValidData();
            await newCardComponent.clickSaveCardCheckbox();
            await pay.payWithCardButtonIsDisplayed();
       /*     await pay.clickFirstCard();*/
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            await portalLogin.loadPortalUrl();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.clickUnublishButton();
            await eventDetails.publishButtonIsDisplayed();
        });

        /* it('Should add activity and performance', async function () {

                    portalLogin = new PortalLoginPage(driver);
                    dashboard = new DashboardPage(driver);
                    myEvents = new MyEventsPage(driver);
                    eventOptionTabs = new EventOptionTabs(driver);
                    eventDetails = new GeneralDetailsTab(driver);
                    eventSettingsNav = new EventSettingsNav(driver);
                    agendaNavs = new MapAndAgendaNavs(driver);
                    eventMap = new EventMapPage(driver);
                    performance = new PerformancesPage(driver);
                    events = new EventsPage(driver);
                    info = new EventInfo(driver);

                    await portalLogin.loadPortalUrl();
                    await portalLogin.isAtPortalLoginPage();
                    await portalLogin.enterValidCredentialsAndLogin();
                    await dashboard.isAtDashboardPage();
                    await dashboard.clickMyEventsTab();
                    await myEvents.eventsTableIsDisplayed();
                    await driver.sleep(1000);
                    await driver.findElement(By.xpath("//!*[text()='5-25-14:59:37']")).click();
                    await myEvents.createdEventIsInTheTable('5-25-14:59:37');
                    await myEvents.clickTheNewCreatedEventInTheTable('5-25-14:59:37');
                    await driver.sleep(2000);
                    await eventDetails.publishButtonIsDisplayed();
                    await eventDetails.clickPublishButton();
                    await eventDetails.unpublishButtonIsDisplayed();
                    await driver.sleep(2000);
                    await eventOptionTabs.clickMapAndAgendaTab();
                    await eventMap.addLocationsOnMap();
                    await driver.sleep(2000);
                    await agendaNavs.performancesNavIsDisplayed();
                    await agendaNavs.clickPerformancesNav();
                    await performance.clickAddPerformancesButton();
                    await events.load();
                    await events.eventCardIsAvailableToClick();
                    await driver.sleep(3000);
                    await events.clickNewEvent(eventName);
                    await info.buyTicketsButtonPresent();
                    await info.lineupTabIsDisplayed();
                    await info.clickLineupTab()


                })*/

        it('Should add donation option and make a donation', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            settingsNav = new SettingsNav(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventSettingsNav = new EventSettingsNav(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            //await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            //await driver.sleep(1000);
            await dashboard.clickMyEventsTab();
            //await driver.sleep(1000);
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//*[text()='"+eventName+"']")).click();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            //await myEvents.clickEventInTableByName();
            await driver.sleep(5000);
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.moveToEventNavs();
            await eventOptionTabs.clickSettingsNav();
            await eventSettingsNav.donationsSubNavIsDisplayed();
            await eventSettingsNav.makeDonationActive();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma99@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(3000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.make$20Donation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.make$35Donation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.make$50Donation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.make$100Donation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.makeCustomDonation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();


        });

        it('Should create event make purchases and make refund', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName);
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketOneName,"1");
            await ticketsNav.createdTicketIsInTheTable(ticketOneName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"1.2");
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await driver.sleep(1000);
            await ticketsNav.clickActivateTicketToggle(1);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma99@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(3000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(0,"3");
            await tickets.sendKeysToQtyInput(1,"4");
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickPayWithWalletOption();
            await pay.payWithWalletButtonIsDisplayed();
            await pay.clickPayWithWalletButton();
            await confirm.isOnConfirmTab();
            await portalLogin.loadPortalUrl();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.clickUnublishButton();
            await eventDetails.publishButtonIsDisplayed();
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.makeFullRefundWithReinstateTicket();

        })

        it('Should create event, tickets and ticket groups', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName);
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(promoOneName);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketOneName,"5");
            await ticketsNav.createdTicketIsInTheTable(ticketOneName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(promoTwoName);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"10");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(promoCodeOne);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketThreeName,"15");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketFourName,"20");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketFourName);
            await ticketsNav.clickActivateTicketToggle(1);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.createTicketsGroup(promoCodeTwo);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(staffTicket,"25");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(staffTicket);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma99@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(3000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.allTicketsGroupButtonIsDisplayed();
            await tickets.ticketGroupOrNameIsDisplayed(promoOneName);
            await tickets.ticketGroupOrNameIsDisplayed(promoTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(promoCodeOne);
            await tickets.ticketGroupOrNameIsDisplayed(promoCodeTwo);
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await tickets.clickGroupTabs(promoOneName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.clickGroupTabs(promoTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.clickGroupTabs(promoCodeOne);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.clickGroupTabs(promoCodeTwo);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await tickets.clickAllTicketsGroupButton();
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await portalLogin.loadPortalUrl();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.clickUnublishButton();
            await eventDetails.publishButtonIsDisplayed();
        });

       /* it("should make purchases", async function() {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            newCardComponent = new NewCardComponent(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma15@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(3000);
            await events.clickNewEvent('5-15-17:11:43');
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
            let ticketPrice = await tickets.getTicketPrice();
            console.log(ticketPrice);
            let subtotal = await ticketing.getSubtotalText();
            console.log(subtotal);
            let price = await ticketing.getSummaryPriceText();
            console.log(parseFloat(price) + parseFloat(price));
            await ticketing.clickNextButton();
            await extras.balanceIsPresent();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeOne);
            await pay.clickApplyDiscountButton();
            await ticketing.removeDiscountIconIsDisplayed();
            await pay.clickPayWithWalletOption();
            await pay.payWithWalletButtonIsDisplayed();
            await pay.clickPayWithWalletButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(0,"3");
            await tickets.sendKeysToQtyInput(1,"4");
            await tickets.sendKeysToQtyInput(2,"4");
            await tickets.sendKeysToQtyInput(3,"5");
            await ticketing.clickNextButton();
            await extras.balanceIsPresent();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeThree);
            await pay.clickApplyDiscountButton();
            await ticketing.removeDiscountIconIsDisplayed();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(4);
            await tickets.clickIncreaseQtyButtonByIndex(4);
            //await for exceeding staff ticket
            await ticketing.clickNextButton();
            await extras.balanceIsPresent();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            // assertForTotal
            await ticketing.clickBackToEventInfoButton();
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(4);
            await tickets.clickIncreaseQtyButtonByIndex(4);
            //await for exceeding staff ticket
            await ticketing.clickNextButton();
            await extras.balanceIsPresent();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeTwo);
            await pay.clickApplyDiscountButton();
            await driver.sleep(2000);
            await pay.clickPayWithNewCardTab();
            await newCardComponent.isAtNewCardTab();
            await newCardComponent.fillNewCardWithValidData();
            await newCardComponent.clickSaveCardCheckbox();
            await pay.payWithCardButtonIsDisplayed();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
        })*/
/*
        it('Should open the new event and create 4 tickets', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsTab.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketOneName,"5");
            await ticketsTab.addTicketButtonIsDisplayed();
            await ticketsTab.createdTicketIsInTheTable(ticketOneName);
            await ticketsTab.clickActivateTicketToggle(0);
            await ticketsTab.activateTicketModalIsDisplayed();
            await ticketsTab.confirmActivationButton();
            await ticketsTab.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"10");
            await ticketsTab.addTicketButtonIsDisplayed();
            await ticketsTab.createdTicketIsInTheTable(ticketTwoName);
            await ticketsTab.clickActivateTicketToggle(1);
            await ticketsTab.activateTicketModalIsDisplayed();
            await ticketsTab.confirmActivationButton();
            await ticketsTab.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketThreeName,"15");
            await ticketsTab.addTicketButtonIsDisplayed();
            await ticketsTab.createdTicketIsInTheTable(ticketThreeName);
            await ticketsTab.clickActivateTicketToggle(2);
            await ticketsTab.activateTicketModalIsDisplayed();
            await ticketsTab.confirmActivationButton();
            await ticketsTab.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketFourName,"20");
            await ticketsTab.addTicketButtonIsDisplayed();
            await ticketsTab.createdTicketIsInTheTable(ticketFourName);
            await ticketsTab.clickActivateTicketToggle(3);
            await ticketsTab.activateTicketModalIsDisplayed();
            await ticketsTab.confirmActivationButton();
        });*/

       /* it('Should set tickets taxes', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsTab.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.createTaxesAndFeesForEventTickets();

        });*/

        /*it('Should set ticket terms', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsTab.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await ticketTerms.termsPageIsDisplayed();
            await ticketTerms.saveTerms();

        });*/

        /*it('Should publish the event', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();

        });*/

        /*it('Should make promotion for the first ticket', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickPromotionsTab();
            await promotions.promotionsHeaderIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionForOneTicketWith$Value(ticketOneName, promoOneName, promoCodeOne);
            await promotions.promotionsHeaderIsVisible();
        });*/
        /*
        it('Should create fourth ticket', async function () {


                });*/

    });