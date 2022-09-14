    const { Builder, By, Key} = require('selenium-webdriver');
    const assert = require('assert')
    const Inbox = require("../Inbox/Inbox")
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard');
    const AttendeesTab = require('../portal/eventOverview/AttendeesTab')
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
    const AddMoneyComponent = require("../microsites/micrositesComponents/AddMoneyComponent")
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
    const EmbedMainPage = require("../embed/embedPages/EmbedMainPage");
    const TicketsComponent = require("../embed/embedComponents/TicketsComponent");
    const SummaryComponent = require("../embed/embedComponents/SummaryComponent");
    const LoginPage = require("../embed/embedPages/LoginPage");
    const ExtrasPage = require("../embed/embedPages/ExtrasPage");
    const PaymentPage = require("../embed/embedPages/PaymentPage");
    const EmbedOrderDetailsPage = require("../embed/embedPages/EmbedOrderDetailsPage");
    const DonationComponent = require("../microsites/micrositesComponents/DonationComponent");
    const ConfirmPage = require("../embed/embedPages/ConfirmPage");
    const CreateAccountModal = require("../microsites/micrositesComponents/CreateAccountModal");
    const MyWalletTab = require('../microsites/account/MyWalletTab');
    const UserDetailsModal = require('../portal/portalModals/userDetailsModal/UserDetailsModal');
    const EventCapacitySubNav = require('../portal/ticketing/SettingsNav/EventCapacitySubNav');
    const PhotosTab = require('../microsites/micrositesComponents/PhotosTab');
    const DetailsTab = require('../microsites/micrositesComponents/DetailsTab');
    const AccountPage = require('../microsites/account/AccountPage');
    const ForgotPasswordModal = require("../microsites/micrositesComponents/ForgotPasswordModal");
    const ResetPasswordPage = require("../microsites/micrositesPages/ResetPasswordPage");
    const LoginTab = require("../microsites/micrositesComponents/LoginTab")
    const CreateAccountPage = require("../embed/embedPages/CreateAccountPage");
    const EmbeddingPage = require("../portal/eventOverview/DesignNav/EmbeddingPage");
    const EmbedTicketTermsModal = require('../embed/embedComponents/EmbedTicketTermsModal');
    const DonationPage = require('../portal/eventOverview/SettingsNav/DonationsPage');
    const EmbedDonateComponent = require('../embed/embedComponents/EmbedDonateComponent')
    const Files = require('../dummy/Files')

    describe('Should do box office related tests', function () {
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
        let attendees;
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
        let donate;
        let main;
        let embedTickets;
        let summary;
        let embedLogin;
        let embedExtras;
        let payment;
        let orderDetails;
        let embedConfirm;
        let myWallet;
        let createAccount;
        let userDetails;
        let capacity;
        let photo;
        let detailsTab;
        let account;
        let forgotPassword;
        let resetPassword;
        let loginTab;
        let embedCreate;
        let addMoney;
        let embedding;
        let files;
        let termsModal;
        let donation;
        let embedDonate;


        let base = Math.floor(100000 + Math.random() * 900000);
        let eventName =  base.toString() + " FullEventName";
        let shortName = base.toString();
        let ticketOneName = base.toString() +"T1";
        let ticketOneQuantity = 2;
        let ticketOnePrice = "1";
        let ticketTwoName = base.toString() +"T2";
        let ticketTwoQuantity = 888;
        let ticketTwoPrice = "1.2";
        let ticketThreeName = base.toString() +"T3";
        let ticketThreeQuantity = 777;
        let ticketThreePrice = "0.75";
        let ticketFourName = base.toString() +"T4";
        let ticketFourQuantity = 666;
        let ticketFourPrice = "0.5";
        let staffTicket = base.toString() +"staff";
        let ticketStaffQuantity = 5;
        let ticketStaffPrice = "0.25";
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
        let customerFirstName = 'cfn'+base.toString();
        let customerLastName = 'cln'+base.toString();
        let customerEmail = customerFirstName + '@' + customerLastName+'.com';
        let customerPassword = base.toString() + 'Password';




        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);

        });

        afterEach(async function(){
            await driver.quit()
        })

        //PORTAL
        it('should create new event',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName,shortName);
        });

        it('should verify box-office table headers and no tickets message', async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.assertTableHeaders();
            await bosTickets.assertNoTicketMessage();

        });

        //PORTAL
        it('should create first ticket and assert data in box-office table',async function () {

            createTicket = new CreateTicketModal(driver);

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
            await eventDetails.publishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.createNewTicket(ticketOneName,ticketOnePrice, ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickActivateTicketToggle(ticketOneName);
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.assertTicketDataByTicketName(ticketOneName,ticketOnePrice, ticketOneQuantity);

        });

        it('should get red error message when tickets are not selected and user clicks on the save button',async function () {
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.assertWhenSelectedTicketQtyEqualZeroErrorMessageIsReturned();
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


        it('Should make purchases , make refund and check balance after', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);


        });

        it('should make checks in attendees page and user details modal', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);
            userDetails = new UserDetailsModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(2000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickAttendeesNav();
            await attendees.checkForCustomerFullNameByIndex(0, customerFirstName, customerLastName);
            await attendees.clickOnCustomerByIndexToOpenUserDetailsModal(0);
            await userDetails.assertUserInfoLabels(customerEmail);
            await userDetails.clickTransactionsNav();
            await userDetails.assertFirstTransactionsData(userTotalPurchases);

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
            await ticketsNav.createTicketsGroup(ticketGroupTwo);
            await ticketsNav.clickGroupTabByIndex(2);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"10",ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await ticketsNav.clickActivateTicketToggle(ticketTwoName);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupThree);
            await ticketsNav.clickGroupTabByIndex(3);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketThreeName,"15",ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
            await ticketsNav.clickActivateTicketToggle(ticketThreeName);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketFourName,"20",ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketFourName);
            await ticketsNav.createTicketsGroup(ticketGroupFour);
            await ticketsNav.clickGroupTabByIndex(4);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(staffTicket,"25","5");
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(staffTicket);
            await ticketsNav.clickActivateTicketToggle(staffTicket);
            await ticketsNav.addTicketButtonIsDisplayed();


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
            let tax2value = await taxesAndFees.getTaxOrFeeValueByIndex(2,1);
            let fee1value = await taxesAndFees.getTaxOrFeeValueByIndex(5,1);
            let fee2value = await taxesAndFees.getTaxOrFeeValueByIndex(6,1);
            let fee1NameSubstring = fee1.substring(0,5)
            let fee2NameSubstring = fee2.substring(0,5)


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

        it('Should add quantity and set new price', async function () {
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

        /*it('Should assert proper color and values', async function () {
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
            //await bosTickets.isOnBoxOfficePage();
            await bosTickets.assertNewPriceAndQuantity();
        });*/

        it('Should make purchase with promotion in box-ofice', async function () {
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
            await bosDetails.addPromotionToTickets(promoCodeFour);
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);

        });

        it('Should make purchase with 100 percent promotion in box-office', async function () {
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
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            questions = new TicketQuestionsPage(driver);
            questionsModal = new TicketQuestionsModal(driver);
            tickets = new TicketsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.createSimpleYesNoQuestionAndAssertSavedDataAndElements(base, ticketOneName, ticketThreeName);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma55555@parma.it", "Pero1234");
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await extras.clickDonateTab();
            await extras.donateTabIsDisplayed();
            await extras.make$20Donation();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickFirstCard();
            await pay.clickPayWithCardButton();
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
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
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
            await login.authenticate("parma55555@parma.it", "Pero1234");
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
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
            settingsNav = new SettingsNav(driver);
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
            await eventDetails.unpublishButtonIsDisplayed();
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
            await bosDetails.checkForOptionsLabelByIndex(0, base + " FANTA");
            await bosDetails.checkForOptionsLabelByIndex(1, base + " COCA COLA")
            await bosDetails.checkForOptionsLabelByIndex(2, base + " Under 18");
            await bosDetails.checkForOptionsLabelByIndex(3, base + " 18 and Over");
            await bosDetails.answerFirstScenario();
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);

        });

        it('Should check for first two ticket questions responses', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickAttendeesNav();
            await attendees.checkForTicketQuestionsResponsesForTheFirstTwoPurchases(base,2);

        });

        it('Should update first ticket question with asked input text', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
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
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.updateFirstQuestionToIncludeInputAndForEachTicket(base);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma15@parma.it", "Pero1234");
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(0,2);
            await tickets.sendKeysToQtyInput(2,1);
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
            await questionsModal.assertFormAndInputAndOption(base,ticketOneName, ticketThreeName)
            await questionsModal.answerTicketQuestionWithPerTicketQuestions();
            await confirm.isOnConfirmTab();
        });

        it('Should check for the update ticket questions responses', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickAttendeesNav();
            await attendees.checkForTicketQuestionsResponsesForTheUpdated(base,3);

        });

        it('should check ticket questions in embed make a purchase and check for answers', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            newCardComponent = new NewCardComponent(driver);
            donate = new DonationComponent(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);
            originalWindow =  driver.getWindowHandle();

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2)
            await embedTickets.sentKeysToTicketInput(2, 1)
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await driver.sleep(1000);
            await embedLogin.completeSwitchTo();
            await embedLogin.isAtFacebookPage();
            await driver.sleep(10000);
            await embedLogin.completeSignInWithFacebook();
            await driver.switchTo().window(originalWindow);
            await driver.sleep(7000);
            await main.switchToIframe();
            await main.nextButtonIsVisible();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            //await payment.clickConfirmPaymentButton(); remove the two lines bellow after fix
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.assertFormAndInputAndOption(base,ticketOneName, ticketThreeName)
            await questionsModal.answerTicketQuestionWithPerTicketQuestions();
            await embedConfirm.isAtConfirmPage();
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickAttendeesNav();
            await attendees.checkForTicketQuestionsResponsesForTheUpdated(base,3);


        });

        it('should check that when new card is saved only one transaction is made',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            settingsNav = new SettingsNav(driver);
            questions = new TicketQuestionsPage(driver);
            eventOrders = new EventOrders(driver);
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            newCardComponent = new NewCardComponent(driver);
            donate = new DonationComponent(driver);
            embedConfirm = new ConfirmPage(driver);

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
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.isOnTicketQuestionsPage();
            await questions.clickDeactivateQuestionButton(1);
            await questions.clickDeactivateQuestionButton(0);
            await eventOptionTabs.clickTransactionCenterTab();
            let transactions = await eventOrders.returnTotalTransactionsMade();
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2)
            await embedTickets.sentKeysToTicketInput(2, 1)
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await driver.sleep(1000);
            await embedLogin.loginWithEmailAndPassword(customerEmail, customerPassword);
            await embedLogin.clickAgreeButton();
            await main.nextButtonIsVisible();
            await driver.sleep(5000);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.clickNewCardTab();
            await payment.fillValidDataOnCardOnTheEmbed(customerFirstName,customerLastName);
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await portalLogin.loadPortalUrl();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTransactionCenterTab();
            let afterTransactions = await eventOrders.returnTotalTransactionsMade();
            assert.equal(transactions + 1, afterTransactions)
        });

        it('should set limitation on tickets per account and pass payment in box office',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            capacity = new EventCapacitySubNav(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            settingsNav = new SettingsNav(driver);
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
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickEventCapacity();
            await capacity.setLimitPerAccount("26");
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTicketByIndexAndSendQuantity(0, "5");
            await bosExtras.add20$ToOrderOnExtrasPage();
            await bosDetails.continueToPayment();
            await bosReview.makePayment(base);
        });

        it('should check ticket limitations exist in embed and microsites', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 6)
            await embedTickets.sentKeysToTicketInput(2, 6)
            await embedTickets.sentKeysToTicketInput(1, 6)
            await embedTickets.sentKeysToTicketInput(3, 15);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await driver.sleep(1000);
            await embedLogin.loginWithEmailAndPassword("parma15@parma.it", "Pero1234");
            await main.nextButtonIsVisible();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await main.limitInfoMessageIsDisplayed("23");
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(1,8);
            await tickets.sendKeysToQtyInput(2,10);
            await tickets.sendKeysToQtyInput(3,10);
            await ticketing.clickNextButton();
            await ticketing.limitInfoMessageIsDisplayed("23");
            await driver.sleep(1000);

        });

        it('should remove limitation on tickets per account and make payments on embed and microsites with larger quantity',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            capacity = new EventCapacitySubNav(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            settingsNav = new SettingsNav(driver);

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);

            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            myWallet = new MyWalletTab(driver);

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
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickEventCapacity();
            await capacity.removeLimit();
            await driver.sleep(2000);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 6)
            await embedTickets.sentKeysToTicketInput(2, 6)
            await embedTickets.sentKeysToTicketInput(1, 6)
            await embedTickets.sentKeysToTicketInput(3, 15);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await driver.sleep(1000);
            await embedLogin.loginWithEmailAndPassword("parma15@parma.it", "Pero1234");
            await main.nextButtonIsVisible();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            //await payment.clickConfirmPaymentButton(); remove the two lines bellow after fix
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(1,8);
            await tickets.sendKeysToQtyInput(2,10);
            await tickets.sendKeysToQtyInput(3,10);
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickPayWithWalletOption();
            await pay.payWithWalletButtonIsDisplayed();
            await pay.clickPayWithWalletButton();
            await confirm.isOnConfirmTab();

        });

        //PORTAL
        it('should assert maximum allowed promotion tickets when multiple tickets are selected in one promotion', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            promotions = new PromotionsPage(driver);
            newPromotion = new AddNewPromotionModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            let ticketOneAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketOneName);
            let ticketTwoAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketTwoName);
            let ticketThreeAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketThreeName);
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertTooltipDisplaysCorrectAvailableMultipleTicketsAndEnteringLargerWillSetMaximumNumber(ticketOneName, ticketOneAvailableQty, ticketTwoName, ticketTwoAvailableQty, ticketThreeName, ticketThreeAvailableQty);
        });


    });