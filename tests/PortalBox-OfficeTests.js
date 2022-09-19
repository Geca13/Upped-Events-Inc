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
        let eventId = "1617"


        let base = 137260 // Math.floor(100000 + Math.random() * 900000);
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
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.isOnExtrasScreen();

        });

        it('should land on Extras page when user selects tickets and click on Extras Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(1);
            await bosExtras.isOnExtrasScreen();

        });

        it('should land on Details page when user selects tickets and click on Details Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.isOnDetailsPage();

        });

        it('should land on Payment page when user selects tickets and click on Review Step Nav',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
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
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.assertElementsOnExtrasPage();

        });

        it('should get blue donation not enabled when clicked donation option and donation not enabled in portal',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickDonationOptionAndReceiveDonationNotEnabledMessage();

        });

        it('should enable donation in portal and assert donation component is displayed and assert elements',async function () {

            eventSettingsNav = new EventSettingsNav(driver)
            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.publishButtonIsDisplayed();
            await eventOptionTabs.moveToEventNavs();
            await eventOptionTabs.clickSettingsNav();
            await eventSettingsNav.donationsSubNavIsDisplayed();
            await eventSettingsNav.makeDonationActive();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickOnDonationOptionAndAssertElements(eventName)

        });

        it('should assert when donation value button is clicked the value is displayed in input',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickDonationOptionAndAssertWhenDonationButtonClickedValueAddedToInput();

        });

        it('should enter custom decimal amount, assert the input shows the digits only  ',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickDonationOptionAddCustomDecimalDonationAndAssertOnlyFullNumberIsDisplayed();

        });

        it('should enter custom amount, click add to order button and assert green added donation message',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickDonationOptionAddCustomDonationAndAssertAddedDonationMessage();

        });

        it('should add custom donation add to order, open the modal and check if value is still in input',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.checkDonationAmountIsSavedInDonationModal();

        });

        it('should click Select Tickets nav from Extras page to go back to Tickets page and assert previously selected ticket value is still selected',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickNavButtonByIndexWhenOnExtrasPage(0);
            await bosTickets.assertSelectedQtyByIndex(0, 2);

        });

        it('should click Add Details nav from Extras page to go to Details tab',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickNavButtonByIndexWhenOnExtrasPage(2);
            await bosDetails.isOnDetailsPage();

        });

        it('should click Review and Pay nav from Extras page to go to Review page',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosExtras.clickNavButtonByIndexWhenOnExtrasPage(3);
            await bosReview.isOnReviewPage();

        });

        it('should assert elements on Order Details page when only 1 ticket selected and no taxes , fees, donation, promotion and ticket questions',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 1);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.assertElementsOnOrderDetailsWithOnlyBasicTicket(ticketOneName);

        });

        it('should assert elements on Review and Pay page when only 1 ticket selected and no taxes , fees, donation or promotion',async function () {

            await portalLogin.loadPortalUrl();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 1);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(3);
            await bosReview.assertElementsOnReviewAndPayPageWhenOneTicketSelected(ticketOneName);

        });

        it('should add excluded tax and check if bayer total is updated in ticket update modal', async function () {

            taxesAndFees = new TaxesAndFeesPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await taxesAndFees.openTaxesAndFeesDirectly(eventId);
            await taxesAndFees.addOneTaxForTickets();
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.assertTaxValueAndTicketTotalMultipliedByTaxEqualsTotal(savedTaxValue);

        });

        //PORTAL
        it('should remove tax and add $ value fee and assert price in order total', async function () {

            taxesAndFees = new TaxesAndFeesPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await taxesAndFees.openTaxesAndFeesDirectly(eventId);
            await taxesAndFees.clickRemoveTaxOrFeeButtonByIndex(0);
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            await taxesAndFees.set$FeeForTickets("Check $ Fee", ".17");
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(1);
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.assertFeeValueThenTicketTotalPlusFeeTimesTicketQtyEqualsTotal(saved$FeeValue);

        });

        it('should add excluded tax again and check correct calculation for total', async function () {

            taxesAndFees = new TaxesAndFeesPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await taxesAndFees.openTaxesAndFeesDirectly(eventId);
            await taxesAndFees.addOneTaxForTickets();
            await taxesAndFees.clickSaveTaxesAndFeesButton();
            let savedTaxValue = await taxesAndFees.getFloatNumberForTaxOrFee(1,1);
            let saved$FeeValue = await taxesAndFees.get$FeeFromInputByIndex(2);
            let cleanedFee = saved$FeeValue.substring(1)
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, 2);
            await bosTickets.clickNavButtonByIndexWhenTicketsSelected(2);
            await bosDetails.assertFeeAndTaxValuesThenAssertTicketTotalPlusFeesAndTaxesEqualsTotal(savedTaxValue, cleanedFee);

        });










    });