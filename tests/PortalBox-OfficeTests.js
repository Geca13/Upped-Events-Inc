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
        let eventId = "1605"


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
            let splited = [];
            createEvent = new CreateEventModal(driver);

            await portalLogin.loadPortalUrl();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName,shortName);
            let urlToSplit = await driver.getCurrentUrl();
            splited = await urlToSplit.split('/')
            eventId = splited[splited.length - 2]
        });

        it('should verify box-office table headers and no tickets message', async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.assertTableHeaders();
            await bosTickets.assertNoTicketMessage();

        });

        //PORTAL
        it('should create first ticket and assert data in box-office table',async function () {

            createTicket = new CreateTicketModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
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

        it('should assert box-office navigation steps names',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.assertNavigationButtonsCountAndText();

        });

        it('should get red error message when tickets are not selected and user clicks on the save button',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.clickSaveButtonWhenTicketsNotSelectedAssertErrorMessage();

        });

        it('should get red error message when tickets are not selected and user clicks on the Add Extras Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.clickAddExtrasNavButtonWhenTicketsNotSelectedAssertErrorMessage();

        });

        it('should land on Extras page when user selects tickets and click on Save button',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexAndSendQuantity(0, 2);
            await bosExtras.isOnExtrasScreen();

        });

        it('should land on Extras page when user selects tickets and click on Extras Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexAndSendQuantity(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(1);
            await bosExtras.isOnExtrasScreen();

        });

        it('should land on Details page when user selects tickets and click on Details Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexAndSendQuantity(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.isOnDetailsPage();

        });

        it('should land on Payment page when user selects tickets and click on Review Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexAndSendQuantity(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(3);
            await bosReview.isOnReviewPage();

        });

        it('should set and assert new price and its font color', async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.addNewQuantityAndSetNewPrice();

        });

        it('should navigate to Extras page and assert elements',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexAndSendQuantity(0, 2);
            await bosExtras.assertElementsOnExtrasPage();

        });





    });