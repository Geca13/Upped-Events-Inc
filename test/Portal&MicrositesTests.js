    const { Builder } = require('selenium-webdriver');
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
    const AllTransactions = require('../portal/transactionCentar/AllTransactions');
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
    const SetupNewVendorPage = require('../portal/portalPages/SetupNewVendorPage');
    const MyMenusPage = require('../portal/eventModules/Menus/MyMenusPage');
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
    const LoginTab = require("../microsites/micrositesComponents/LoginTab");
    const CreateAccountPage = require("../embed/embedPages/CreateAccountPage");
    const EmbeddingPage = require("../portal/eventOverview/DesignNav/EmbeddingPage");
    const EmbedTicketTermsModal = require('../embed/embedComponents/EmbedTicketTermsModal');
    const DonationPage = require('../portal/eventOverview/SettingsNav/DonationsPage');
    const EmbedDonateComponent = require('../embed/embedComponents/EmbedDonateComponent');
    const StepsComponent = require('../embed/embedComponents/StepsComponent');
    const ReceiptPopup = require('../microsites/micrositesComponents/ReceiptPopup');
    const Files = require('../dummy/Files')

    describe('Should do microsites tests', function () {
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
        let allTransactions;
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
        let receipt;
        let steps;

        let base =  Math.floor(100000 + Math.random() * 900000);
        let eventName =  base.toString() + " FullEventName";
        let shortName = base.toString();
        let ticketOneName = base.toString() +"T1";
        let embedTicketQuantity = 2;
        let ticketOneQuantity = 999;
        let ticketOnePrice = "1";
        let ticketTwoName = base.toString() +"T2";
        let ticketTwoQuantity = 888;
        let ticketTwoPrice = "1.2";
        let ticketThreeName = base.toString() +"T3";
        let ticketThreeQuantity = 777;
        let ticketThreePrice = "0.75";
        let ticketFourName = base.toString() +"T4";
        let ticketFourQuantity = 666;
        let ticketFourPrice = "0.25";
        let staffTicket = base.toString() +"staff";
        let ticketStaffQuantity = 2;
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
        let vendorFirstName = 'vfn'+base.toString();
        let vendorLastName = 'vln'+base.toString();
        let vendorEmail = vendorFirstName + '@' + vendorLastName+'.com';
        let customerFirstName = 'cfn'+base.toString();
        let customerLastName = 'cln'+base.toString();
        let customerEmail = customerFirstName + '@' + customerLastName+'.com';
        let customerPassword = base.toString() + 'Password';
        let userBalance = 0.00;
        let userWalletPurchasesTotal = 0.00;
        let userTotalPurchases = 0.00;



        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();

        });

        afterEach(async function(){
            await driver.quit()
        })



        it('should create new account on microsites with username and password, verify and login', async function() {
            events = new EventsPage(driver);
            createAccount = new CreateAccountModal(driver);
            inbox = new Inbox(driver);
            login = new LoginComponent(driver);
            originalWindow = inbox.getOriginalWindow();

            await events.load();
            await events.clickSignUpButton();
            await createAccount.firstCreateAccountModalIsDisplayed();
            await createAccount.clickSignUpWithEmailButton();
            await createAccount.secondCreateAccountModalIsDisplayed();
            await createAccount.fillRandomButValidDataAndCreateAccount(customerFirstName,customerLastName,customerEmail,customerPassword);
            await inbox.loadInbox();
            await inbox.elementIsDisplayedInInbox('<'+customerEmail+'>');
            await inbox.findAndClickTheEmailForNewAccount('<'+customerEmail+'>');
            await inbox.switchToInboxIFrame();
            await inbox.verifyEmailButtonIsDisplayed();
            await inbox.verifyEmail();
            await driver.switchTo().defaultContent();
            await login.getNewlyOpenedTab(originalWindow);
            await login.waitPopupToBeLoaded();
            await login.loginAfterVerifyingAccount(customerPassword);

        });


        it('should create new event and verify data in events page and General Details',async function () {
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

        it('should check event published/unpublished',async function () {
            events = new EventsPage(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);

            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsNotVisible(shortName);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.publishEventAndAssertLabelBeforeAndAfter();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsVisible(shortName);
            await portalLogin.loadPortalUrl();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.unPublishEventAndAssertLabelBeforeAndAfter();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsNotVisible(eventName);

        });

        //PORTAL -> MICROSITES
        it('should check event image placeholder when main image is not set and when is set',async function () {
            events = new EventsPage(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDesignNavs = new DesignNavs(driver);
            eventCardDesignPage = new EventCardDesignPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsVisible(shortName);
            await events.assertPlaceholderImageIsSetWhenImageIsNotSet(shortName);
            await portalLogin.loadPortalUrl();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickDesignNav();
            await eventDesignNavs.clickEventCardDesignSubNav();
            await eventCardDesignPage.uploadPhotoInputIsDisplayed();
            await eventCardDesignPage.uploadImage();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsVisible(shortName);
            await events.assertPlaceholderImageIsRemovedWhenImageIsSet(shortName);
        });

        //PORTAL -> MICROSITES
        it('should check event image is in card, event info and galery',async function () {

            events = new EventsPage(driver);
            info = new EventInfo(driver);
            photo = new PhotosTab(this.driver);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.assertEventIsVisible(shortName);
            let src = await events.returnImageSrc(shortName);
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertEventInfoPageImageIsAMatch(src);
            await info.clickPhotosTab();
            await photo.photosTabIsSelected();
            await photo.assertEventPhotosTabImageIsAMatch(src);
            await photo.assertGalleryImagesAreAMatch(src);

        });

        //PORTAL -> MICROSITES
        it('should check messages when tickets are not created',async function () {

            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            await events.load();
            await driver.sleep(1000);

            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertNoTicketsAvailableButtonText();
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.assertNoTicketsMessageText();
        });

        //PORTAL
        it('should create first ticket and check data in tickets table and update modal ',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.createFirstTicketAndAssertDataOnTicketsAndUpdate(ticketOneName,ticketOnePrice,embedTicketQuantity);

        });

        //PORTAL -> EMBED
        it('should make embed view for event', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            embedding = new EmbeddingPage(driver);
            files = new Files(driver);
            main = new EmbedMainPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickDesignNav();
            await embedding.isOnEmbeddingTab();
            await embedding.setEmbedViewForEvent();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickGeneralDetailsNav();
            await eventDetails.unpublishButtonIsDisplayed();
            let text = await eventDetails.getEmbedScriptVariable();
            await files.openDummyPage();
            await files.loginToDummy();
            await files.clickIndexHtmlLink();
            await files.editCode(text);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);

        });

        //EMBED
        it('should get no tickets available message on embed when tickets are not activated ',async function () {

            main = new EmbedMainPage(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertNoTicketsMessageIsDisplayed()

        });

        //PORTAL -> MICROSITES
        it('should check button text and when tickets are activated/deactivated ',async function () {

            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertNoTicketsAvailableButtonText();
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
            await ticketsNav.clickActivateTicketToggle(ticketOneName);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertBuyTicketsButtonText()
        });

        //PORTAL -> MICROSITES
        it('should check button text when tickets are in the future ',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            dateTime = new DateTimePickerModal(driver);

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
            await ticketsNav.clickEditTicketButton(0);
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.clickStartDateTimeInput();
            await dateTime.datePickerIsVisible();
            await dateTime.updateTimeToXMinLater(3);
            let date = await dateTime.getSelectedFullDateFromPicker();
            await dateTime.clickSetButton();
            await createTicket.clickEndDateTimeInput();
            await dateTime.datePickerIsVisible();
            await dateTime.updateHourByOne();
            await createTicket.clickSaveTicketButton();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertTicketsDateAvailableButtonText(date);
        });

        //EMBED
        it('should check ticket name , price, and availability in embed when tickets are in the future ',async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.assertNumberOfTickets(1);
            await embedTickets.assertTicketNotAvailableMessageIsDisplayed();
            await embedTickets.assertFullTicketNameDisplay(ticketOneName, ticketOnePrice);
        });

        //MICROSITES
        it('Should check Account dropdown options',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.checkAccountDropdownTextOptions();
            await events.checkAccountDropdownIconsOptions();

        });

        //PORTAL - > MICROSITES
        it('should check correct date and time from portal events and microsites eventInfo pages',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            let startDate = await myEvents.getEventStartDate(eventName);
            let endDate = await myEvents.getEventEndDate(eventName);
            let startTime = await myEvents.getEventStartTime(eventName);
            let endTime = await myEvents.getEventEndTime(eventName);
            let portalDateAndTime = startDate + ' - ' + endDate + ' | ' + startTime + ' - ' + endTime + ' EDT';
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertDateAndTimeOnEventInfo(portalDateAndTime);
        });

        //PORTAL -> MICROSITES
        it('should get location, description and names from event details and assert on event info ',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            detailsTab = new DetailsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            let location = await eventDetails.getCityAndState();
            let description = await eventDetails.getEventDescription();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.assertLocationNamesAndDescriptionOnEventInfo(location,eventName,shortName,description);

        });

        //MICROSITES
        it('Should check for proper validation messages on create an account modal', async function() {
            events = new EventsPage(driver);
            createAccount = new CreateAccountModal(driver);
            await events.load();
            await events.clickSignUpButton();
            await createAccount.firstCreateAccountModalIsDisplayed();
            await createAccount.clickSignUpWithEmailButton();
            await createAccount.secondCreateAccountModalIsDisplayed();
            await createAccount.allValidationsAreShown()
        });

        // MICROSITES
        it('should check for elements , validations and alerts on login modal',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.verifyElementsOnSignInModal();
            await login.verifyValidationsAndAlerts();

        });

        //MICROSITES
        it('should login and verify the data is correct in my profile page',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            myWallet = new MyWalletTab(driver);
            account = new AccountPage(driver)
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.goToWalletPage();
            await myWallet.myWalletScreenIsDisplayed();
            await account.verifyDataAfterSignUp(customerFirstName, customerLastName, customerEmail);

        });

        //MICROSITES
        it('should login and update user gender, phone and location in edit profile',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            myWallet = new MyWalletTab(driver);
            account = new AccountPage(driver)
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.goToWalletPage();
            await myWallet.myWalletScreenIsDisplayed();
            await account.updateUserProfile(base);

        });

        //MICROSITES
        it('Should display correct validation errors and finaly complete forgot password scenario', async function() {
            events = new EventsPage(driver);
            forgotPassword = new ForgotPasswordModal(driver);
            login = new LoginComponent(driver);
            resetPassword = new ResetPasswordPage(driver);
            inbox = new Inbox(driver);
            let password = "Pass" + Math.floor(100000 + Math.random() * 900000);
            let email = 'parma100@parma.it';
            originalWindow = inbox.getOriginalWindow();
            await events.load();
            await events.clickSignInButton();
            await forgotPassword.forgetPasswordScenarioWithValidations();
            await inbox.loadInbox();
            await inbox.elementIsDisplayedInInbox('<'+email+'>');
            await inbox.findAndClickTheEmailForNewAccount('<'+email+'>');
            await inbox.switchToInboxIFrame();
            await inbox.resetPasswordButtonIsDisplayed();
            await inbox.clickResetPasswordButton();
            await driver.switchTo().defaultContent();
            await login.getNewlyOpenedTab(originalWindow);
            await resetPassword.completeResetPasswordScenarioWithValidations(password);
            await events.signInButtonIsDisplayed();
            await driver.sleep(5000)
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.loginWithNewPassword(email,password)
            await events.accountDropdownIsDisplayed();

        });

        it('should check ticket info in portal and microsites match',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);

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
            let index = await ticketsNav.getTicketIndexByTicketName(ticketOneName);
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.ticketNameInputIsDisplayed();
            let ticketName = await createTicket.getTicketNameValue();
            let ticketDescription = await createTicket.getTicketDescriptionValue();
            let ticketPrice = await createTicket.getTicketPriceValue();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await tickets.assertFirstTicketInfoEqualsInPortalUpdateModalAndMicrosites(index, ticketName, ticketPrice, ticketDescription);
        });

        it('should check ticket price equals subtotal and total when no taxes and fees ',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            ticketing = new TicketingPage(driver);

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
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.assertTaxesAndFeesAreNotCreated();

            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await ticketing.assertWhenTicketsAreNotSelectedSubtotalAndTotalAre0();
            let ticketPrice = await tickets.getFirstTicketStringWith$Price();
            await tickets.clickFirstIncreaseButton();
            await ticketing.assertWhenTicketIsSelectedButNoTaxesAndFeesSubtotalAndTotalEqualTicketPrice(ticketPrice);

        });
        //PORTAL
        it('should add excluded tax and check if bayer total is updated in ticket update modal', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            eventTickets = new EventTickets(driver)

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
            let index = await ticketsNav.getTicketIndexByTicketName(ticketOneName);
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.assertTicketPriceEqualsBuyerTotalPriceWhenNoTaxesOrFees();
            await createTicket.closeCreateUpdateTicketModal();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.addOneTaxForTickets();
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            await eventTickets.clickTicketsTab();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.assertBuyerTotalEqualsTicketPriceMultipliedByTaxPercentage(savedTaxValue);

        });
        //PORTAL -> MICROSITES
        it('should check when excluded taxes subtotal equals ticket price and buyer total equals grand total ', async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);
            ticketing = new TicketingPage(driver);

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
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.ticketNameInputIsDisplayed();
            let ticketBuyerPrice = await createTicket.getTicketBuyerPriceValue();
            let ticketPrice = await createTicket.getTicketPriceValue();
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await tickets.clickFirstIncreaseButton();
            await ticketing.assertTicketPriceEqualsSubtotalAndBuyerTotalEqualsGrandTotal( ticketPrice, ticketBuyerPrice);
        });
        //PORTAL
        it('should remove tax and add $ value fee', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            eventTickets = new EventTickets(driver)

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
            await eventTickets.clickSettingsTab();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.clickRemoveTaxOrFeeButtonByIndex(0);
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            await eventTickets.clickTicketsTab();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.assertTicketPriceEqualsBuyerTotalPriceWhenNoTaxesOrFees();
            await createTicket.closeCreateUpdateTicketModal();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickSettingsTab();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.set$FeeForTickets("Check $ Fee", ".17");
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(1);
            await eventTickets.clickTicketsTab();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.assertBuyerTotalEqualsTicketPricePlus$Fee(saved$FeeValue);

        });

        it('should add excluded tax again and check if bayer total is updated in ticket update modal', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            tickets = new TicketsTab(driver);
            createTicket = new CreateTicketModal(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            eventTickets = new EventTickets(driver)

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
            await eventTickets.clickSettingsTab();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.addOneTaxForTickets();
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(2);
            await eventTickets.clickTicketsTab();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.assertBuyerTotalEqualsTicketPriceMultipliedByTaxPercentageAndAdded$Fee(savedTaxValue, saved$FeeValue);

        });

        it('should calculate subtotal and total on one ticket quantity 3 with tax and fee', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            eventTickets = new EventTickets(driver)
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);

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
            await eventTickets.clickSettingsTab();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.includeExcludeIsVisible();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(2);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await tickets.sendKeysToQtyInput(1,2);
            await ticketing.assertTicketsSubtotalMultipliedByTaxesAndFeesForEachTicketEqualsGrandTotal( savedTaxValue, saved$FeeValue);


        });

        //EMBED
        it('should calculate subtotal and total on one ticket quantity 2 with tax and fee in embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await summary.calculateSubtotalAndTotalBeforeDonationIsAdded();
        });

        //EMBED
        it('should check if subtotal equals before and after login on embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            let ticketsTotal = await summary.getTicketsTotal();
            let ticketsSubtotal = await summary.getSubtotalValue();
            let taxes = await summary.getTaxesValue();
            let fees = await summary.getFeesValue();
            let total = await summary.getTotalValue();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedLogin.clickAgreeButton();
            await embedTickets.ticketListIsDisplayed();
            await summary.assertSummaryEqualsBeforeSignIn( ticketsTotal, ticketsSubtotal, taxes, fees, total);

        });

        //EMBED
        it('should assert elements on Add Money component in embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await addMoney.assertAddMoneyComponentElements();

        });

        //EMBED 32
        it('should assert elements on Payment screen component in embed when user has no cards', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.confirmElementsOnPayWithCardOrServiceTab();
            await payment.clickNewCardTab();
            await payment.isOnPayWithNewCardTab();
            await payment.confirmElementsOnPayWithNewCardTab();

        });

        it('Should set payment card in customer profile',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            myWallet = new MyWalletTab(driver);

            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.goToWalletPage();
            await myWallet.myWalletScreenIsDisplayed();
            userBalance = userBalance + await myWallet.returnBalanceState();
            await myWallet.assertUserBalance('200.00');
            await myWallet.setNewCardInProfile(customerFirstName, customerLastName);
            await myWallet.checkCardHolderName(customerFirstName, customerLastName);
            await myWallet.checkCardBrand("Visa");
            await myWallet.checkDisplayedCardNumber("1111");
        });


        //EMBED
        it('should assert elements on Order Details screen when payment with wallet', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.assertElementsWhenOneTicketIsSelected(ticketOneName);

        });

        //EMBED
        it('should click payment info edit link on Order Details and assert landing on Payment screen', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickEditPaymentLinkAndAssertItIsOnPaymentPage();

        });

        //EMBED
        it('should assert when wallet was selected on then edited to card , the card info is in Order Details', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.walletOptionIsDisplayedAndAssertText();
            await orderDetails.clickEditPaymentLinkAndAssertItIsOnPaymentPage();
            await payment.clickSavedCardByIndex(0);
            let cardData = await payment.getSelectedCardData();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.assertSelectedCardIsDisplayedAndAssertData(cardData);

        });

        //EMBED
        it('should click ticket edit link on Order Details and assert landing on Ticketing screen', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickEditLinkOnDisplayedTicketAssertIsOnTicketsPage(embedTickets);

        });

        //EMBED
        it('should make payment with wallet and assert elements on Confirmation page', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.assertElementsOnConfirmPage();

        });

        //PORTAL -> EMBED
        it('should get Sold out message when there is no qty available for selected ticket in embed', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            main = new EmbedMainPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.assertQuantityEqualsSoldColumnByTicket(ticketOneName);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertSoldOutMessageIsDisplayed();

        });

        //PORTAL -> MICROSITES
        it('should get Sold out message when there is no qty available for selected ticket in microsites', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.assertQuantityEqualsSoldColumnByTicket(ticketOneName);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.assertSoldOutMessageIsDisplayedInMicroByTicket(ticketOneName);

        });

        //EMBED
        it('should check that if available tickets are less then 100 the tickets dropdown in embed is the same that number', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.updateTicketQuantity("50");
            await ticketsNav.addTicketButtonIsDisplayed();
            let availableTickets = await ticketsNav.calculateAvailableTicketsByTicket(ticketOneName);
            await driver.sleep(70000);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await driver.sleep(7000);
            await embedTickets.assertDropDownElementsEqualsAvailableTickets(availableTickets)

        });

        //EMBED
        it('should update ticket quantity and check that if available tickets are more then 100 the tickets dropdown in embed is limited to 100', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
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
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickEditTicketButtonByTicketName(ticketOneName);
            await createTicket.updateTicketQuantity(ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.assertDropDownElementsEquals("100");

        });

        //PORTAL
        it('should create three more tickets and ticket groups, then assert data in tickets table ',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);

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
            await ticketsNav.createTicketsGroup(ticketGroupOne);
            await ticketsNav.successTicketGroupBannerIsDisplayed();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupTwo);
            await ticketsNav.clickGroupTabByIndex(2);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,ticketTwoPrice,ticketTwoQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await ticketsNav.clickActivateTicketToggle(ticketTwoName);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketThreeName,ticketThreePrice,ticketThreeQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
            await ticketsNav.clickActivateTicketToggle(ticketThreeName);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupThree);
            await ticketsNav.clickGroupTabByIndex(3);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketFourName,ticketFourPrice,ticketFourQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketFourName);
            await ticketsNav.clickActivateTicketToggle(ticketFourName);
            await ticketsNav.clickGroupTabByIndex(0);
            await ticketsNav.assertTicketGroupNames(ticketGroupOne, ticketGroupTwo, ticketGroupThree);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketOneName,ticketOnePrice,ticketOneQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketTwoName,ticketTwoPrice,ticketTwoQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketThreeName,ticketThreePrice,ticketThreeQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketFourName,ticketFourPrice,ticketFourQuantity);

        });

        //PORTAL
        it('should assert tickets by groups in portal',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);

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
            await ticketsNav.assertTicketsByGroupsAndClassIsAppliedWhenClicked(base, "active")

        });

        //EMBED
        it('should assert tickets groups', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertGroupNamesAndCount(ticketGroupOne, ticketGroupTwo, ticketGroupThree);

        });

        //EMBED
        it('should assert tickets by groups and active class is applied when clicked on embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertTicketsByGroupsAndClassIsAppliedWhenClickedOnFullEmbed(base, "active");

        });


        //EMBED
        it('should limit the tickets per account and check if all dropdowns are at that maximum in the embed', async function () {

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
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickEventCapacity();
            await capacity.setLimitPerAccount("26");
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.assertDropDownElementsEquals("26");
        });

        // PORTAL -> EMBED
        it('should get exceeding limitation message when user have already purchased tickets and asks for more then limit', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickAttendeesNav();
            await attendees.isOnAttendeesTab();
            let purchasedTickets = await attendees.getAlreadyPurchasedByCustomerFullName(customerFirstName, customerLastName);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(1, 28);
            let accountAvailable = 26-parseInt(purchasedTickets);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await main.limitInfoMessageIsDisplayed(accountAvailable);
            await embedTickets.sentKeysToTicketInput(0, accountAvailable);
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
        });

        //PORTAL
        it('should remove limitation on tickets per account ',async function () {
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

        });

        // PORTAL -> EMBED
        it('should assert that ticket terms elements in embed are not displayed when not created in portal', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver);
            ticketTerms = new TicketTermsPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab()
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickSettingsTab();
            await ticketTerms.termsPageIsDisplayed();
            await ticketTerms.assertTicketTermsIsEmpty();
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.ticketTermsCheckBoxAndLabelAreNotDisplayed();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.ticketTermsCheckBoxAndLabelAreNotDisplayed()

        });

        // PORTAL
        it('should set ticket terms in the portal and assert entered tags and text', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver);
            ticketTerms = new TicketTermsPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab()
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickSettingsTab();
            await ticketTerms.termsPageIsDisplayed();
            await ticketTerms.saveTerms();
            await ticketTerms.assertElementsInTheTermsBoxAfterSavingTerms();
        });

        // EMBED
        it('should assert that ticket terms are displayed only when user is logged in', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.ticketTermsCheckBoxAndLabelAreNotDisplayed();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.ticketTermsCheckBoxAndLabelAreDisplayed();

        });

        // EMBED
        it('should assert correct ticket terms behaviour and image placeholder', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            termsModal = new EmbedTicketTermsModal(driver);
            addMoney = new AddMoneyComponent(driver)
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.ticketTermsLabelIsDisplayedAndAssertText();
            await main.assertLabelColorChangedToRedAfterClickNextAndNoTicketsSelected();
            await main.clickTermsLabel();
            await termsModal.checkFirstTicketTermsScenarioElementsAndClose();
            await main.clickTermsCheckboxAndAssertFontColorIsBlack();
            await main.clickTermsLabel();
            await termsModal.termsModalIsDisplayed();
            await main.clickTermsLabel();
            await termsModal.termsModalIsNotDisplayed();
            await embedTickets.sentKeysToTicketInput(0, 2);
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();

        });

        // PORTAL
        it('should set event banner in the portal', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.setBannerImageInThePortalAndAssertElements();

        });

        // PORTAL -> EMBED
        it('should assert event banner image is present in the ticket terms modal', async function () {
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            termsModal = new EmbedTicketTermsModal(driver);
            addMoney = new AddMoneyComponent(driver)
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            let src = await eventDetails.getBannerImageSrc();
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickTermsLabel();
            await termsModal.assertTicketTermsImageSrcMatchBannerImageSrc(src);

        });

        // PORTAL
        it('should remove event banner in the portal', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventDetails.removeBannerImageAndAssertPreviewAndAlertAreNotDisplayed();

        });

        // EMBED
        it('should assert terms image placeholder is returned after banner is removed in the portal', async function () {
            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            termsModal = new EmbedTicketTermsModal(driver);
            embedTickets = new TicketsComponent(driver);
            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.ticketTermsLabelIsDisplayedAndAssertText();
            await main.assertLabelColorChangedToRedAfterClickNextAndNoTicketsSelected();
            await main.clickTermsLabel();
            await termsModal.assertImagePlaceholderIsDisplayedInTheModal("https://events.dev.uppedevents.com/assets/images/placeholder2.png");

        });

        //PORTAL
        it('should assert elements on donation page in portal and enable donations',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            donation = new DonationPage(driver);

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
            await eventOptionTabs.clickSettingsNav();
            await eventSettingsNav.donationsSubNavIsDisplayed();
            await donation.assertElementsOnDonationPageOnStart();
            await donation.clickCheckboxAndAssertNewElements();
            await donation.enterDonationMessageAndSaveDonation();

        });

        //EMBED
        it('should assert add / reset buttons disabled scenarios',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver)

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.checkWhenInputValue0AddDonationButtonIsDisabledAndResetEnabled();
            await embedDonate.clickOneDonationValueButton(2)
            await embedDonate.checkWhenInputValueNot0AddDonationButtonIsEnabledAndResetDisabled();

        });


        //PORTAL
        it('should assert table headers on promotions page and elements on add new promotion modal ',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.assertElementsOnPromotionsPageWhenNoPromotions();
            await promotions.assertElementsOnCreateNewPromotionModal(ticketOneName);

        });

        //PORTAL
        it('should check that all created tickets are listed in promotions ticket type dropdown in portal', async function () {

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
            let tickets = await ticketsNav.getAllTicketsNames();
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertAllTicketsAreListedInTicketTypeDropdown(tickets);
        });

        //PORTAL
        it('should check that when single ticket is selected in dropdown the price is shown next to the promotion value inputs', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertCorrectPriceIsDisplayedWhenTickedIsSelectedInDropdown(ticketOnePrice);

        });

        //PORTAL
        it('should check that when multiple tickets are selected in dropdown the price is not shown next to the promotion value inputs', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertPriceIsNotDisplayedWhenMoreTicketsAreSelected(ticketOneName, ticketTwoName);

        });

        //PORTAL
        it('should assert that when multiple tickets selected for limitation the same tickets are displayed in limit dropdown', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertTicketsOptionsInLimitDropdownEqualsPreviouslySelected(ticketOneName, ticketTwoName);

        });

        //PORTAL
        it('should assert that when all option selected for limitation the same all tickets displayed in limit dropdown', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertAllTicketsDisplayedInLimitDropdownWhenAllOptionSelectedInTickets();

        });

        //PORTAL
        it('should assert that the $ value promotion input does not accept number bigger then the ticket price', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assert$ValuePromotionCanNotAcceptLargerValueThenTicketPrice(ticketOnePrice);

        });

        //PORTAL
        it('should assert that the new $ value promotion when entered is displayed as discounted price', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertWhen$ValuePromotionIsEnteredIsDisplayedNextToOriginalPrice(ticketOnePrice, "0.33");

        });

        //PORTAL
        it('should assert that the new ticket discounted price is displayed when promotion is percentage value', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertWhenPercentageValuePromotionIsEnteredIsDisplayedNextToOriginalPrice(ticketOnePrice, 70);

        });

        //PORTAL
        it('should check the available ticket quantity is displayed in tooltip and is max allowed portal', async function () {

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
            let ticketOneAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketOneName)
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertTooltipDisplaysCorrectAvailableTicketsAndEnteringLargerWillSetMaximumNumber(ticketOneName, ticketOneAvailableQty);
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

        //PORTAL
        it('should assert lower case letters are transfered to uppercase and symbols are allowed in promocode input field', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertAllowedCharactersInPromoCodeInputAndMaximumLength();

        });

        //PORTAL
        it('should create first promotion with $ value and assert data on promotions page and update promotion modal', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            let promotion = await newPromotion.createPromotionForOneTicketWith$Value(ticketTwoName, promoOneName, promoCodeOne);
            await promotions.assertThe$PromotionIsSavedCorrectOnPromotionsPage(promotion);
            await promotions.findPromotionByNameAndClickUpdateButton(promotion[0]);
            await newPromotion.assertDataFromCreateEqualsUpdateData(promotion)
        });



        //PORTAL
        it('should create promotion for 3 tickets and limit qty on two', async function () {

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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.newPromotionForThreeWithLimitOnTwo(ticketTwoName, ticketThreeName, ticketFourName, promoThreeName, promoCodeThree);
            await promotions.assertDataForPromotionWithThreeTicketsAndLimitOnTwoWithoutDateTime(promoThreeName, ticketTwoName,ticketTwoPrice);
            await promotions.findPromotionByNameAndClickUpdateButton(promoThreeName);
            await newPromotion.assertDataOnUpdateModalForPromotionWithThreeTicketsAndLimit(ticketTwoName, ticketThreeName, ticketFourName, promoThreeName, promoCodeThree)

        });

        //PORTAL
        it('should get promocode error validation when promotion code exists for current event', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
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
            await eventOptionTabs.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.errorValidationIsReturnedWhenExistingCodeIsEnteredAsPromoCodeForNewPromotion(promoCodeThree);

        });

        //PORTAL
        it('Should create staff ticket in portal', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);

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
            await ticketsNav.clickAddTicketButton();
            await createTicket.createStaffTicket(staffTicket, ticketStaffPrice ,ticketStaffQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(staffTicket, ticketStaffPrice, ticketStaffQuantity);
            await ticketsNav.clickActivateTicketToggle(staffTicket);

        });

        //PORTAL
        it('should assert elements on event tickets questions page and create ticket question modal', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            questions = new TicketQuestionsPage(driver);
            questionsModal = new TicketQuestionsModal(driver);

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
            await questions.isOnTicketQuestionsPage();
            await questions.assertElementsOnEventTicketsQuestionsPage();
            await questions.assertTicketsQuestionsTableHeaders();
            await questions.assertElementsOnCreateTicketQuestionModal();

        });

        //PORTAL
        it('Should set ticket Simple Yes No question and assert saved data on questions table in portal', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            questions = new TicketQuestionsPage(driver);

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

        });


        //PORTAL
        it('Should set ticket question with asked input text', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            settingsNav = new SettingsNav(driver);
            questions = new TicketQuestionsPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
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

        });



        //PORTAL
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
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await eventOptionTabs.clickSettingsNav();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.clickActivateQuestionButton(0);
            await questions.updateFirstQuestionToIncludeInputAndForEachTicket(base);

        });



        //PORTAL -> MICRO
        it('should calculate subtotal and total on multiple tickets with multiple quantity on each with tax and fee', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            settingsNav = new SettingsNav(driver);
            taxesAndFees = new TaxesAndFeesPage(driver);
            eventTickets = new EventTickets(driver)
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);

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
            await eventTickets.clickSettingsTab();
            await settingsNav.taxesAndFeesSubTabIsDisplayed();
            await settingsNav.clickTaxesAndFeesSubNav();
            await taxesAndFees.includeExcludeIsVisible();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(2);
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await tickets.sendKeysToQtyInput(0,4);
            await tickets.sendKeysToQtyInput(1,3);
            await tickets.sendKeysToQtyInput(2,2);
            await tickets.sendKeysToQtyInput(3,1);
            await ticketing.assertTicketsSubtotalMultipliedByTaxesAndFeesForEachTicketEqualsGrandTotalForMultipleTicketsAndQty( savedTaxValue, saved$FeeValue);

        });

        //MICRO
        it('should check that when logged in the login page on ticketing path is not displayed',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            login = new LoginComponent(driver);
            ticketing = new TicketingPage(driver);

            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma15@parma.it", "Pero1234");
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await ticketing.navButtonsCount(4);
            await ticketing.navButtonNameByIndex(0, "Tickets");
            await ticketing.navButtonNameByIndex(1, "Extras");
            await ticketing.navButtonNameByIndex(2, "Pay");
            await ticketing.navButtonNameByIndex(3, "Confirm");

        });

        //MICRO
        it('should check that when not logged in login page is displayed on ticketing path and assert data',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);
            loginTab = new LoginTab(driver);

            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await ticketing.navButtonsCount(5);
            await ticketing.navButtonNameByIndex(1, "Login");
            await ticketing.navButtonStyleWhenNotActive(1);
            await tickets.clickFirstIncreaseButton();
            await ticketing.clickNextButton();
            await ticketing.notLoggedInErrorMessageIsDisplayed();
            await ticketing.assertLoginTabStyleOnTicketingLoginPage();
            await loginTab.assertSectionTitlesAndSubtitlesNames();
            await loginTab.assertButtonsNamesAndInputPlaceholders();
            await loginTab.assertButtonsFontAndBackgroundColors();

        });
        //MICRO
        it('should login on ticketing path and confirm login / logout link presence',async function () {
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);
            loginTab = new LoginTab(driver);

            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await ticketing.assertLoginLinkIsDisplayedAndText();
            await ticketing.navButtonNameByIndex(1, "Login");
            await ticketing.clickLoginLinkAndAssertLoginTabStyle();
            await loginTab.loginWithEmailAndPasswordOnLoginTab(customerEmail,customerPassword);
            await ticketing.assertCorrectBehaviorAfterSuccessfulLogin();
            await ticketing.navButtonNameByIndex(1, "Extras");
            await ticketing.assertNavButtonToBeActiveByIndexAndAssertName(0, "Tickets");

        });

        //MICRO
        it('should select tickets then login and after the ticket quantitis should be selected', async function () {
            let qtyOne = 3;
            let qtyTwo = 5;
            let qtyThree = 9;
            let qtyFour = 2;
            events = new EventsPage(driver);
            info = new EventInfo(driver);
            tickets = new TicketsTab(driver);
            ticketing = new TicketingPage(driver);
            loginTab = new LoginTab(driver);

            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.wishListButtonIsDisplayed();
            await info.clickBuyTicketsButton();
            await tickets.sendKeysToQtyInput(0,qtyFour);
            await tickets.sendKeysToQtyInput(1,qtyTwo);
            await tickets.sendKeysToQtyInput(2,qtyOne);
            await tickets.sendKeysToQtyInput(3,qtyThree);
            await ticketing.clickNextButton();
            await loginTab.isAtLoginTab();
            await loginTab.loginWithEmailAndPasswordOnLoginTab(customerEmail, customerPassword);
            await tickets.assertThatPreviouslyAddedQuantitiesAreStillAppliedAfterLoggingIn(qtyFour,qtyTwo,qtyOne,qtyThree);
        });


    });


