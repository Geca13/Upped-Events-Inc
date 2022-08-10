    const { Builder, By } = require('selenium-webdriver');
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
    const Wordpress = require('../embed/embedPages/Wordpress')
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

    describe('Should do everything', function () {
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


        let base = 765607 // Math.floor(100000 + Math.random() * 900000);
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
            //driver.execute("document.body.style.zoom='80%'")

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
            //await photo.assertEventPhotosTabImageIsAMatch(src);
            //await photo.assertGalleryImagesAreAMatch(src);

        });

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

        //EMBED
        it('should get no tickets available message on embed when tickets are not activated ',async function () {

            main = new EmbedMainPage(driver);

            await main.openEmbedPage();
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertNoTicketsMessageIsDisplayed()

        });

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

        it('should check for elements , validations and alerts on login modal',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.verifyElementsOnSignInModal();
            await login.verifyValidationsAndAlerts();

        });

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
            await tickets.sendKeysToQtyInput(0,3);
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
            await embedTickets.sentKeysToTicketInput(0, 2);
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
            await embedTickets.sentKeysToTicketInput(0, 2);
            let ticketsTotal = await summary.getTicketsTotal();
            let ticketsSubtotal = await summary.getSubtotalValue();
            let taxes = await summary.getTaxesValue();
            let fees = await summary.getFeesValue();
            let total = await summary.getTotalValue();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
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
            await embedTickets.sentKeysToTicketInput(0, 2);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await addMoney.addMoneyComponentIsDisplayed();
            await addMoney.assertAddMoneyComponentElements();

        });

        //EMBED
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
            await embedTickets.sentKeysToTicketInput(0, 2);
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
            await embedTickets.sentKeysToTicketInput(0, 2);
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
            await orderDetails.clickEditPaymentLinkAndAssertItIsOnPaymentPage();
            await main.clickNextPageButton();
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
            await embedTickets.sentKeysToTicketInput(0, 2);
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
        it('should get Sold out message when there are no tickets available in embed', async function () {
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
        it('should get Sold out message when there are no tickets available in microsites', async function () {
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

        it('should create three more tickets and assert data in tickets table ',async function () {

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
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketFourName,ticketFourPrice,ticketFourQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketFourName);
            await ticketsNav.clickActivateTicketToggle(ticketFourName);
            //await driver.sleep(2000);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketOneName,ticketOnePrice,embedTicketQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketTwoName,ticketTwoPrice,ticketTwoQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketThreeName,ticketThreePrice,ticketThreeQuantity);
            await ticketsNav.assertTicketNamePriceAndQuantity(ticketFourName,ticketFourPrice,ticketFourQuantity);

        });

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
            await ticketing.assertNavButtonToBeActiveByIndexAndAssertName(0, "Tickets")();

        });

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

        // EMBED MOBILE
        it('should create new account on embed with mobile view login and get success login message', async function () {
            let email = "embed" + base + "@embed.com" ;
            let firstName = base + "embed";
            let lastName = "embed" + base;
            let password = base + "P@ss";
            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedCreate = new CreateAccountPage(driver);
            inbox = new Inbox(driver);
            originalWindow = inbox.getOriginalWindow();

            await main.openEmbedPage();
            driver.manage().window().setRect({width: 414, height: 896 });
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.clickRegisterLink();
            await embedCreate.createAccountOnEmbed(firstName, lastName, email, password);
            await inbox.loadInbox();
            await inbox.elementIsDisplayedInInbox('<'+email+'>');
            await inbox.findAndClickTheEmailForNewAccount('<'+email+'>');
            await inbox.switchToInboxIFrame();
            await inbox.verifyEmailButtonIsDisplayed();
            await inbox.verifyEmail();
            await driver.switchTo().defaultContent();
            await main.getNewlyOpenedTab(originalWindow);
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(email, password);
            await driver.sleep(4000);

            console.log( " Completed Successfully ")

        });



/*





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


                    await portalLogin.loadPortalUrl();
                    await portalLogin.isAtPortalLoginPage();
                    await driver.sleep(1000);
                    await portalLogin.enterValidCredentialsAndLogin();
                    await dashboard.isAtDashboardPage();


                    await dashboard.clickCreateEventButton();
                    await createEvent.createEventModalIsDisplayed();
                    await createEvent.fillFormWithValidDataAndSave(eventName,shortName);

                    /!*await dashboard.clickMyEventsTab();
                    await myEvents.eventsTableIsDisplayed();
                    await myEvents.createdEventIsInTheTable(eventName);
                    await myEvents.clickTheNewCreatedEventInTheTable(eventName);
                    await eventOptionTabs.ticketingTabIsDisplayed();*!/

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
                    await createTicket.createNewTicket(ticketOneName,"1.0",ticketOneQuantity);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.createdTicketIsInTheTable(ticketOneName);
                    await ticketsNav.clickActivateTicketToggle(ticketOneName);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.clickAddTicketButton();
                    await createTicket.ticketNameInputIsDisplayed();
                    await createTicket.createNewTicket(ticketTwoName,"1.2",ticketOneQuantity);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
                    await ticketsNav.clickActivateTicketToggle(ticketTwoName);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.clickAddTicketButton();
                    await createTicket.ticketNameInputIsDisplayed();
                    await createTicket.createNewTicket(ticketThreeName,"0.75",ticketOneQuantity);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
                    await ticketsNav.clickActivateTicketToggle(ticketThreeName);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.clickAddTicketButton();
                    await createTicket.ticketNameInputIsDisplayed();
                    await createTicket.createNewTicket(ticketFourName,"0.25",ticketOneQuantity);
                    await ticketsNav.addTicketButtonIsDisplayed();
                    await ticketsNav.createdTicketIsInTheTable(ticketFourName);
                    await ticketsNav.clickActivateTicketToggle(ticketFourName);
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
                    await promotions.addPromotionButtonIsVisible();
                    await promotions.clickAddPromotionButton();
                    await newPromotion.addPromotionModalIsDisplayed();
                    await newPromotion.createPromotionWith100discountForAllTickets(ticketOneName, promoFiveName, promoCodeFive);
                    await promotions.promotionsHeaderIsVisible();
                    await eventOptionTabs.ticketingTabIsDisplayed();
                    /!*await eventOptionTabs.clickTicketingTab();
                    await ticketsNav.clickAddTicketButton();
                    await createTicket.ticketNameInputIsDisplayed();
                    await createTicket.createStaffTicket(staffTicket,"3");
                    await ticketsNav.createdTicketIsInTheTable(staffTicket);
                    await ticketsNav.clickActivateTicketToggle(staffTicket);
                    await ticketsNav.activateTicketModalIsDisplayed();
                    await ticketsNav.confirmActivationButton();
                    await eventOptionTabs.ticketingTabIsDisplayed();*!/


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

        it('should make purchase with promotion for one ticket',async function () {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            /!*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*!/

            await ticketing.nextButtonPresent();
            await tickets.clickFirstIncreaseButton();
            await driver.sleep(2000)
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
            userWalletPurchasesTotal = userWalletPurchasesTotal + parseFloat(await confirm.getPurchaseTotalAmount());
            await ticketing.clickCloseTicketingPopupButton();


        });

        it('should make purchase with limitation on tickets promotions for one ticket',async function () {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await driver.sleep(10000);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            /!*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*!/

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
            await pay.clickPayWithWalletOption();
            await pay.payWithWalletButtonIsDisplayed();
            await pay.clickPayWithWalletButton();
            await confirm.isOnConfirmTab();
            userWalletPurchasesTotal = userWalletPurchasesTotal + await confirm.getPurchaseTotalAmount();
            await ticketing.clickCloseTicketingPopupButton();

        });

        it('should make purchase with saved card ',async function () {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            /!*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*!/

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
            userTotalPurchases = userWalletPurchasesTotal + await confirm.getPurchaseTotalAmount();
            await ticketing.clickCloseTicketingPopupButton();

        });

        it('should make purchase with new card',async function () {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(0);
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.clickPayWithNewCardTab();
            await newCardComponent.isAtNewCardTab();
            await newCardComponent.fillNewCardWithValidData();
            await newCardComponent.clickSaveCardCheckbox();
            await pay.payWithCardButtonIsDisplayed();
            await pay.clickPayWithCardButton();
            await confirm.isOnConfirmTab();
            userTotalPurchases = userTotalPurchases + await confirm.getPurchaseTotalAmount();
            await ticketing.clickCloseTicketingPopupButton();
        });

        it('should throw invalid promotion when promotion is for staff',async function () {
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
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(0);
            await ticketing.clickNextButton();
            await extras.addMoneyTabIsDisplayed();
            await ticketing.clickNextButton();
            await pay.savedCardsHeaderIsPresent();
            await pay.enterPromotionCode(promoCodeTwo);
            await pay.clickApplyDiscountButton();
            await pay.promotionForStaffErrorMessageIsDisplayed();
            await driver.sleep(2000);

        });

        it('Should check balance equals original minus transactions totals',async function () {
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            myWallet = new MyWalletTab(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword);
            await events.goToWalletPage();
            await myWallet.myWalletScreenIsDisplayed();
            userBalance = userBalance - userWalletPurchasesTotal;
            console.log(userBalance);
            await myWallet.calculateBalanceAfterPurchases(userBalance);
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

        it('Should check for tickets table columns and make changes', async function () {

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
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickTicketingTab();
            await ticketsNav.checkForTableColumnsTexts();
            await ticketsNav.manipulateColumnsFromTable();
            await driver.sleep(5000);
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
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            myWallet = new MyWalletTab(driver);
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate(customerEmail, customerPassword)
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
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
            userBalance = userBalance - await confirm.getPurchaseTotalAmount();
            userTotalPurchases = userTotalPurchases + await confirm.getPurchaseTotalAmount();
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
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            let refundedAmount = await eventOrders.makeFullRefundWithReinstateTicket();
            userBalance = userBalance + parseFloat(refundedAmount);
            userTotalPurchases = userTotalPurchases - parseFloat(refundedAmount);
            await events.load();
            await driver.sleep(5000);
            await events.goToWalletPage();
            await myWallet.myWalletScreenIsDisplayed();
            await myWallet.calculateBalanceAfterRefunds(userBalance);

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
            await ticketsNav.successTicketGroupBannerIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupTwo);
            await ticketsNav.clickGroupTabByIndex(2);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketTwoName,"10",ticketOneQuantity);
            await driver.sleep(5000);
            await ticketsNav.addTicketButtonIsDisplayed();
            await driver.sleep(5000);
            await ticketsNav.createdTicketIsInTheTable(ticketTwoName);
            await driver.sleep(5000);
            await ticketsNav.clickActivateTicketToggle(ticketTwoName);
           // await ticketsNav.activateTicketModalIsDisplayed();
           // await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createTicketsGroup(ticketGroupThree);
            await ticketsNav.clickGroupTabByIndex(3);
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createNewTicket(ticketThreeName,"15",ticketOneQuantity);
            await ticketsNav.addTicketButtonIsDisplayed();
            await ticketsNav.createdTicketIsInTheTable(ticketThreeName);
            await ticketsNav.clickActivateTicketToggle(ticketThreeName);
           // await ticketsNav.activateTicketModalIsDisplayed();
           // await ticketsNav.confirmActivationButton();
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
            //await ticketsNav.activateTicketModalIsDisplayed();
           // await ticketsNav.confirmActivationButton();
            await ticketsNav.addTicketButtonIsDisplayed();
            await events.load();
            await events.clickSignInButton();
            await login.waitPopupToBeLoaded();
            await login.authenticate("parma55555@parma.it", "Pero1234")
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
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
             await events.clickNewEvent(shortName);
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
            let tax2value = await taxesAndFees.getTaxOrFeeValueByIndex(2,1);
            let fee1value = await taxesAndFees.getTaxOrFeeValueByIndex(5,1);
            let fee2value = await taxesAndFees.getTaxOrFeeValueByIndex(6,1);
            let fee1NameSubstring = fee1.substring(0,5)
            let fee2NameSubstring = fee2.substring(0,5)
            await events.load();
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
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
            await partnersPage.inviteVendorToEvent(vendorEmail, vendorFirstName, vendorLastName);
            await inbox.acceptVendorInvitation(vendorEmail);
            await driver.switchTo().defaultContent();
            await newVendor.getNewlyOpenedTab(originalWindow);
            await newVendor.verifyEnteredData(vendorEmail, vendorFirstName, vendorLastName);
            await newVendor.completeRegistration(base);

        });

        it('New vendor should login and create bar menu', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            myMenus = new MyMenusPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.vendorLoginWithEmailAndPassword(vendorEmail,base);
            await dashboard.isAtDashboardPage();
            await eventOptionTabs.clickMenusTab();
            await myMenus.isOnMyMenusPage();
            await myMenus.createNewMenuAndSetNewName(base);
            await myMenus.createNewSection("Alcoholic Drinks", 0, 1);
            await myMenus.createNewSection("Meat & Snacks", 1, 2);
            await myMenus.createNewSection("Desserts", 2, 3);
            await myMenus.createBeerStoutMenuItem();
            await myMenus.dragMenuItemToMenuSection();
            await driver.sleep(2500)

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
            await login.authenticate("parma55555@parma.it", "Pero1234")
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.nextButtonPresent();
            await tickets.sendKeysToQtyInput(0,5);
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
            await tickets.sendKeysToQtyInput(1,7);
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
            await tickets.sendKeysToQtyInput(2,6);
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
            await tickets.sendKeysToQtyInput(1,4);
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
            await tickets.sendKeysToQtyInput(0,5);
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

        /!*it('Should assert proper color and values', async function () {
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
        });*!/

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
            await questions.createSimpleYesNoQuestion(base);
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

        it('Should check for first two ticket questions responces', async function () {

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
            await attendees.checkForTicketQuestionsResponsesForTheFirstTwoPurchases(base);

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

        it('Should check for the update ticket questions responces', async function () {

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

        it('Should assert correct sort by id column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.assertOrderIdsAreShownInDescendingOrder();
            await eventOrders.assertOrderIdsAreShownInAscendingOrder();

        });

        it('Should assert correct sort by price column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.assertPricesAreShownInDescendingOrder();
            await eventOrders.assertPricesAreShownInAscendingOrder();

        });

        it('Should assert correct sort by items purchased column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.assertItemsAreShownInDescendingOrder();
            await eventOrders.assertItemsAreShownInAscendingOrder();

        });

        it('Should filter by id column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByOrderId();

        });

        it('Should filter by minimum price in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByPriceMinAndAssertValues();

        });

        it('Should filter by maximum price in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByPriceMaxAndAssertValues();

        });

        it('Should filter by price range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByPriceRangeAndAssertValues();

        });

        it('Should filter by minimum purchased items in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByMinPurchasedItemsAndAssertValues();

        });

        it('Should filter by maximum purchased items in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByMaxPurchasedItemsAndAssertValues();

        });

        it('Should filter by purchased items range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByPurchasedItemsRangeAndAssertValues();

        });

        it('Should filter by full user in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByFullUserAndAssertValues(base);

        });

        it('Should filter by string as user in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByPartialUserNameAndAssertValues();

        });

        it('Should filter by full user and price range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByFullUserPriceRangeAndAssertValues(base);

        });

        it('Should filter by status with all available status options in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            eventOrders = new EventOrders(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTransactionCenterTab();
            await eventOrders.isAtTransactionCenterPage();
            await eventOrders.filterByAllStatusOptionsAndAssertValues();

        });
*/
    });


