    const { Builder, By } = require('selenium-webdriver');
    const assert = require('assert')
    const Inbox = require("../Inbox/Inbox")
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
    const TicketQuestionsPage = require('../portal/ticketing/SettingsNav/TicketQuestionsPage')
    const TicketTermsPage = require('../portal/ticketing/SettingsNav/TicketTermsPage');
    const EventsPage = require('../microsites/micrositesPages/EventsPage');
    const LoginComponent = require('../microsites/micrositesComponents/LoginComponent');
    const EventInfo = require('../microsites/micrositesPages/EventInfo');
    const TicketingPage = require('../microsites/micrositesPages/TicketingPage');
    const TicketsTab = require('../microsites/micrositesComponents/TicketsTab');
    const ExtrasTab = require('../microsites/micrositesComponents/ExtrasTab');
    const TicketQuestionsModal = require('../microsites/micrositesComponents/TicketQuestionsModal')
    const PayTab = require('../microsites/micrositesComponents/PayTab');
    const ConfirmTab = require('../microsites/micrositesComponents/ConfirmTab');
    const NewCardComponent = require('../microsites/micrositesComponents/NewCardComponent');
    const TicketTermsModal = require('../microsites/micrositesComponents/TicketTermsModal');
    const EventOrders = require('../portal/transactionCentar/EventOrders');
    const MapAndAgendaNavs = require('../portal/mapAndAgenda/MapAndAgendaNavs');
    const EventMapPage = require('../portal/mapAndAgenda/EventMapPage');
    const PerformancesPage = require('../portal/mapAndAgenda/PerformancesPage');
    const ActivitiesPage = require('../portal/mapAndAgenda/ActivitiesPage');
    const LineupTab = require('../microsites/micrositesComponents/LineupTab');
    const ActivityTab = require('../microsites/micrositesComponents/ActivitiesTab');
    const ShopsNavs = require('../portal/shopManagement/ShopsNavs');
    const ShopCategoriesPage = require('../portal/shopManagement/ShopCategoriesPage');
    const ShopsPage = require('../portal/shopManagement/ShopsPage');
    const PartnersPage = require('../portal/partnerManagement/PartnersPage');
    const SetupNewVendorPage = require('../portal/partnerManagement/SetupNewVendorPage');
    const MyMenusPage = require('../portal/eventModules/MyMenusPage');
    const EventTickets = require('../portal/ticketing/EventTickets');
    const BOSelectTickets = require('../portal/ticketing/BoxOffice/BOSelectTickets');
    const BOAddExtras = require('../portal/ticketing/BoxOffice/BOAddExtras');
    const BOAddDetails = require('../portal/ticketing/BoxOffice/BOAddDetails');
    const BOReviewAndPay = require('../portal/ticketing/BoxOffice/BOReviewAndPay');
    const Wordpress = require('../embed/embedPages/Wordpress')


    describe('Should login to portal create new event and tickets', function () {
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
        let eventTickets;
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
        let lineup;
        let activity;
        let activityTab;
        let shopsNavs;
        let shopsCat;
        let shopsPage;
        let partnersPage;
        let inbox;
        let originalWindow;
        let newVendor;
        let myMenus;
        let bosTickets;
        let bosExtras;
        let bosDetails;
        let bosReview;
        let questions;
        let wordpress;
        let questionsModal;

        let today = new Date();
        let eventName =  (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let base = Math.floor(100000 + Math.random() * 900000);
        //let base = 932033;
        let ticketOneName = base.toString() +"T1";
        let ticketTwoName = base.toString() +"T2";
        let ticketThreeName = base.toString() +"T3";
        let ticketFourName = base.toString() +"T4";
        let staffTicket = base.toString() +"staff";
        let promoOneName = base.toString() +"PN1";
        let promoTwoName = base.toString() +"PN2";
        let promoThreeName = base.toString() +"PN3";
        let promoFourName = base.toString() +"PNBOX";
        let promoFiveName = base.toString() +"PN100";
        let promoCodeOne = base.toString() +"PC1";
        let promoCodeTwo = base.toString() +"PC2";
        let promoCodeThree = base.toString() +"PC3";
        let promoCodeFour = base.toString() +"PCBOX";
        let promoCodeFive = base.toString() +"PC100";
        let ticketGroupOne = base.toString() +"TG1";
        let ticketGroupTwo = base.toString() +"TG2";
        let ticketGroupThree = base.toString() +"TG3";
        let ticketGroupFour = base.toString() +"TG4";
        let firstName = 'fn'+base;
        let lastName = 'ln'+base;
        let email = firstName + '@' + lastName+'.com'


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
            await createTicket.createNewTicket(ticketOneName,"1.0");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketOneName);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            //await createTicket.createNewTicket(ticketTwoName,"10");
            await createTicket.createNewTicket(ticketTwoName,"1.2");
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
            await promotions.addPromotionButtonIsVisible()
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionForMultipleTicketsWithLimitationsWithPercentValue(ticketOneName, promoFourName, promoCodeFour);
            await promotions.promotionsHeaderIsVisible();
            await promotions.addPromotionButtonIsVisible()
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.createPromotionWith100discountForAllTickets(ticketOneName, promoFiveName, promoCodeFive);
            await promotions.promotionsHeaderIsVisible();
            await eventOptionTabs.ticketingTabIsDisplayed();
            /*await eventOptionTabs.clickTicketingTab();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createStaffTicket(staffTicket,"3");
            await ticketsNav.createdTicketIsInTheTable(staffTicket);
            await ticketsNav.clickActivateTicketToggle(4);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await eventOptionTabs.ticketingTabIsDisplayed();*/
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await driver.sleep(75000);
            await events.eventCardIsAvailableToClick();
            //await driver.sleep(10000);
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

        });

        it('Should check for sold tickets', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.checkForSoldTicketsAfterFirstTest();

        });

        it('Should add shop categories', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsCat = new ShopCategoriesPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.clickShopManagementTab();
            await shopsNavs.shopCategoriesNavIsDisplayed();
            await shopsNavs.clickCategoriesNav();
            await shopsCat.move6CategoriesFromPotentialToOrdered();
            await driver.sleep(3000);
        });

        it('Should create ticket groups and tickets', async function() {
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
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupOne);
            await ticketsNav.successTicketGroupBannerIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupTwo);
            await ticketsNav.clickGroupTabByIndex(2);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"10");
            await driver.sleep(5000);
            await ticketsNav.addTicketButtonIsDisplayed();
            await driver.sleep(5000);
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await driver.sleep(5000);
            await ticketsNav.clickActivateTicketToggle(0);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupThree);
            await ticketsNav.clickGroupTabByIndex(3);
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
            await ticketsNav.createTicketsGroup(ticketGroupFour);
            await ticketsNav.clickGroupTabByIndex(4);
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
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(15000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.allTicketsGroupButtonIsDisplayed();
            await tickets.ticketGroupOrNameIsDisplayed(ticketGroupOne);
            await tickets.ticketGroupOrNameIsDisplayed(ticketGroupTwo);
            await tickets.ticketGroupOrNameIsDisplayed(ticketGroupThree);
            await tickets.ticketGroupOrNameIsDisplayed(ticketGroupFour);
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await tickets.clickGroupTabs(ticketGroupOne);
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.clickGroupTabs(ticketGroupTwo);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.clickGroupTabs(ticketGroupThree);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.clickGroupTabs(ticketGroupFour);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await tickets.clickAllTicketsGroupButton();
            await tickets.ticketGroupOrNameIsDisplayed(ticketOneName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketTwoName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketThreeName);
            await tickets.ticketGroupOrNameIsDisplayed(ticketFourName);
            await tickets.ticketGroupOrNameIsDisplayed(staffTicket);
            await driver.sleep(1000);

        });

        it('Should make event managed ticketing shop ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            agendaNavs = new MapAndAgendaNavs(driver);
            eventMap = new EventMapPage(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsPage = new ShopsPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await driver.sleep(500);
            await eventOptionTabs.clickMapAndAgendaTab();
            await eventMap.addTicketingLocationOnMap(base);
            await eventOptionTabs.clickShopManagementTab();
            await shopsPage.createNewShopForTickets(base);
            await driver.sleep(2000);
            await shopsPage.createMenuFromShopsManagementPageForTickets(eventName,base,"Tickets", 0, 1);

        });

        it('Should add activity and performance', async function () {

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
             lineup = new LineupTab(driver);
             activity = new ActivitiesPage(driver);
             activityTab = new ActivityTab(driver);

             await portalLogin.loadPortalUrl();
             await portalLogin.isAtPortalLoginPage();
             await portalLogin.enterValidCredentialsAndLogin();
             await dashboard.isAtDashboardPage();
             await dashboard.clickMyEventsTab();
             await myEvents.eventsTableIsDisplayed();
             await driver.sleep(1000);
             await myEvents.createdEventIsInTheTable(eventName);
             await myEvents.clickTheNewCreatedEventInTheTable(eventName);
             await driver.sleep(2000);
             await eventDetails.unpublishButtonIsDisplayed();
             await driver.sleep(2000);
             await eventOptionTabs.clickMapAndAgendaTab();
             await eventMap.addPerformanceLocationOnMap();
             await driver.sleep(2000);
             await agendaNavs.performancesNavIsDisplayed();
             await agendaNavs.clickPerformancesNav();
             await performance.clickAddPerformancesButton();
             await agendaNavs.clickEventMapNav();
             await eventMap.eventMapIsDisplayed();
             await eventMap.addFootballLocationOnMap();
             await agendaNavs.clickActivitiesNav();
             await activity.isOnActivitiesPage();
             await activity.createFootballActivity();
             await events.load();
             await events.eventCardIsAvailableToClick();
             await driver.sleep(10000);
             await events.clickNewEvent(eventName);
             await info.lineupTabIsDisplayed();
             await info.clickLineupTab()
             await lineup.checkLineupForPerformances();
             await info.activitiesTabTabIsDisplayed();
             await info.clickActivitiesTab();
             await activityTab.verifyElementsOnActivitiesTab();
         });



        it('Should check for taxes and fees names and values in portal and microsites', async function (){

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(10000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.includeExcludeIsVisible();
            let tax1 = await taxesAndFees.getTaxOrFeeNameByIndex(0);
            let tax2 = await taxesAndFees.getTaxOrFeeNameByIndex(1);
            let fee1 = await taxesAndFees.getTaxOrFeeNameByIndex(5);
            let fee2 = await taxesAndFees.getTaxOrFeeNameByIndex(6);
            let tax1value = await taxesAndFees.getTaxOrFeeValueByIndex(1,1);
            console.log(tax1value);
            let tax2value = await taxesAndFees.getTaxOrFeeValueByIndex(2,1);
            let fee1value = await taxesAndFees.getTaxOrFeeValueByIndex(5,1);
            let fee2value = await taxesAndFees.getTaxOrFeeValueByIndex(6,1);
            let fee1NameSubstring = fee1.substring(0,5)
            let fee2NameSubstring = fee2.substring(0,5)
            await events.load();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(15000);
            await events.clickNewEvent(eventName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await ticketing.moveToTaxesInfoIcon();
            let firstTaxLabel = await ticketing.getMiniTotalValuesByParentAndChildIndex(2, 0)
            let secondTaxLabel = await ticketing.getMiniTotalValuesByParentAndChildIndex(3, 0)
            assert.equal(firstTaxLabel,tax1 + ' ('+tax1value+')')
            assert.equal(secondTaxLabel,tax2 + ' ('+tax2value+')')
            await ticketing.moveToFeesInfoIcon();
            let firstFeeLabel = await ticketing.getMiniTotalValuesByParentAndChildIndex(3, 0)
            let secondFeeLabel = await ticketing.getMiniTotalValuesByParentAndChildIndex(4, 0)
            console.log(firstFeeLabel);
            console.log(secondFeeLabel);
            //assert.equal(firstFeeLabel,fee1NameSubstring + ' ('+fee1value+')')  the $ value doesnt appear on hover when qty is 0
            assert.equal(secondFeeLabel,fee2NameSubstring + ' ('+fee2value+')')

        });

        it('Should invite vendor ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            partnersPage = new PartnersPage(driver);
            newVendor = new SetupNewVendorPage(driver);
            inbox = new Inbox(driver);
            originalWindow = inbox.getOriginalWindow();

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.clickPartnerManagementTab();
            await partnersPage.isOnPartnersPage();
            await partnersPage.inviteVendorToEvent(email, firstName, lastName);
            await inbox.acceptVendorInvitation(email);
            await driver.switchTo().defaultContent();
            await newVendor.getNewlyOpenedTab(originalWindow);
            await newVendor.verifyEnteredData(email, firstName, lastName);
            await newVendor.completeRegistration(base);

        });

        it('New vendor should login and create bar menu', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            myMenus = new MyMenusPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.vendorLoginWithEmailAndPassword(email,base);
            await dashboard.isAtDashboardPage();
            await eventOptionTabs.clickMenusTab();
            await myMenus.isOnMyMenusPage();
            await myMenus.createNewMenuAndSetNewName(base);
            await myMenus.createNewSection("Alcoholic Drinks", 0, 1);
            /*await myMenus.createNewSection("Meat & Snacks", 1, 2);
            await myMenus.createNewSection("Desserts", 2, 3);*/
            await myMenus.createBeerStoutMenuItem();

        });

        it('Should make shop for vendor', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            agendaNavs = new MapAndAgendaNavs(driver);
            eventMap = new EventMapPage(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsPage = new ShopsPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await driver.sleep(2000);
            await eventOptionTabs.clickMapAndAgendaTab();
            await eventMap.addVendorLocationOnMap(base);
            await eventOptionTabs.clickShopManagementTab();
            await driver.sleep(2000);
            await shopsPage.addShopForVendor(base);

        });

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
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.moveToEventNavs();
            await eventOptionTabs.clickSettingsNav();
            await eventSettingsNav.donationsSubNavIsDisplayed();
            await eventSettingsNav.makeDonationActive();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(10000);
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

        it('Should make purchases and make refund', async function() {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(20000);
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
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.clickUnpublishButton();
            await eventDetails.publishButtonIsDisplayed();
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.makeFullRefundWithReinstateTicket();

        });

        it('Should make purchase in box office', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTwoTickets();
            await bosExtras.add20$ToOrderOnExtrasPage();
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);

        });

        it('Should check for box office purchases in inbox', async function () {
            inbox = new Inbox(driver);
            await inbox.loadInbox();
            await inbox.inboxIsOpened();
            await inbox.checkAccountEmailIsSend(base);
            await inbox.checkAdditionalEmailIsSend(base);
        });

        /*it('Should add quantity and set new price', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.addNewQuantityAndSetNewPrice();
        });

        it('Should assert proper color and values', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.assertNewPriceAndQuantity();
        });*/

        it('Should make purchase with promotion', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select18Tickets();
            await bosExtras.add50$ToOrderOnExtrasPage();
            await bosDetails.addPromotionToTickets(promoFourName);
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);

        });

        it('Should make purchase with 100 percent promotion', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select18Tickets();
            await bosExtras.clickNextButton();
            await bosDetails.confirmAllValuesAreZeroesAfter100PercentPromotionAndConfirmCompletion(promoCodeFive);
            await bosDetails.continueToPayment();
            await bosReview.paymentWith100DiscountAndDisabledForm(base);
            await driver.sleep(3000);

        });

        it('Should get invalid promocode message and then make purchase with valid promocode',  async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select3Tickets();
            await bosExtras.addCustom$ToOrderOnExtrasPage();
            await bosDetails.addWrongPromoCode();
            await bosDetails.addPromotionToTickets(promoFourName);
            await bosDetails.continueToPayment()
            await bosReview.makePayment(base);
        });

        it('Should check calculation on subtotal and total and check if tickets are displayed', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.getSelectedTicketsNames(ticketOneName,ticketTwoName,ticketThreeName,ticketFourName);
            await bosTickets.selectFourIndividualTickets();
            await bosExtras.clickNextButton();
            await bosDetails.checkTicketsNamesInOrderDetails(ticketOneName,ticketTwoName,ticketThreeName,ticketFourName);
            await bosDetails.checkTicketPricesInOrderDetails();
            await bosDetails.calculateTicketsSubTotal();
            await bosDetails.calculateTicketsTotal()

        });

        it('Should set ticket Simple Yes No question', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            questions = new TicketQuestionsPage(driver);
            questionsModal = new TicketQuestionsModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(10000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.createSimpleYesNoQuestion(base);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(10000);
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
            // here goes checking the ticket questions
            await questionsModal.answerSimpleYesNo(base,ticketOneName);
            await confirm.isOnConfirmTab();
        });

        it('Should set ticket question with asked input text', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            questions = new TicketQuestionsPage(driver);
            questionsModal = new TicketQuestionsModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(10000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.createQuestionWithInput(base);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma5555@parma.it", "Pero1234")
            await events.successMessagePresent();
            await events.eventCardIsAvailableToClick();
            await driver.sleep(10000);
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
            // here goes checking the ticket questions
            await questionsModal.answerTicketQuestionWithTextInput(base,ticketOneName);
            await confirm.isOnConfirmTab();
        });

        it('Should make purchase in box office and answer ticket questions', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            questions = new TicketQuestionsPage(driver);
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.isOnTicketQuestionsPage();
            await questions.clickActivateQuestionButton(0);
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTicketByIndexAndSendQuantity(0, "1");
            await bosExtras.add20$ToOrderOnExtrasPage();
            await bosDetails.checkQuestionForm(4, 2, 2, 2, 4);
            await bosDetails.checkForTitleNameByIndex(0, base + " Yes & No question");
            await bosDetails.checkForTitleNameByIndex(1, base + " Attendee Age");
            await bosDetails.checkForQuestionByIndex(1, base + " What is your Age?");
            await bosDetails.checkForQuestionByIndex(0, base + " What do you prefer?");
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);

        });

        /*it('should something', async function () {
            wordpress = new Wordpress(driver);
            await wordpress.openWordpressPage();
            await wordpress.loginToWordpress();
        });*/




    });