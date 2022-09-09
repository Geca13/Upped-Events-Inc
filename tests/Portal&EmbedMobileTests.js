    const { Builder } = require('selenium-webdriver');
    const Inbox = require("../Inbox/Inbox")
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard');
    const AttendeesTab = require('../portal/eventOverview/AttendeesTab')
    const CreateEventModal = require('../portal/portalModals/CreateEventModal');
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal');
    const MyEventsPage = require('../portal/dashboard/MyEventsTab');
    const EventOptionTabs = require('../portal/eventOverview/EventOptionTabs');
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
    const EventTickets = require('../portal/ticketing/EventTickets');
    const EmbedMainPage = require("../embed/embedPages/EmbedMainPage");
    const TicketsComponent = require("../embed/embedComponents/TicketsComponent");
    const SummaryComponent = require("../embed/embedComponents/SummaryComponent");
    const LoginPage = require("../embed/embedPages/LoginPage");
    const ExtrasPage = require("../embed/embedPages/ExtrasPage");
    const PaymentPage = require("../embed/embedPages/PaymentPage");
    const EmbedOrderDetailsPage = require("../embed/embedPages/EmbedOrderDetailsPage");
    const ConfirmPage = require("../embed/embedPages/ConfirmPage");
    const EventCapacitySubNav = require('../portal/ticketing/SettingsNav/EventCapacitySubNav');
    const CreateAccountPage = require("../embed/embedPages/CreateAccountPage");
    const EmbeddingPage = require("../portal/eventOverview/DesignNav/EmbeddingPage");
    const EmbedTicketTermsModal = require('../embed/embedComponents/EmbedTicketTermsModal');
    const DonationPage = require('../portal/eventOverview/SettingsNav/DonationsPage');
    const EmbedDonateComponent = require('../embed/embedComponents/EmbedDonateComponent');
    const ReceiptPopup = require('../microsites/micrositesComponents/ReceiptPopup');
    const Files = require('../dummy/Files')

    describe('Should do tests on mobile embed', function () {

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
        let eventSettingsNav;
        let inbox;
        let originalWindow;
        let questions;
        let questionsModal;
        let main;
        let embedTickets;
        let summary;
        let embedLogin;
        let embedExtras;
        let payment;
        let orderDetails;
        let embedConfirm;
        let capacity;
        let embedCreate;
        let addMoney;
        let embedding;
        let files;
        let termsModal;
        let donation;
        let embedDonate;
        let receipt;

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
        let promoCodeOne = base.toString() +"PC1";
        let promoCodeTwo = base.toString() +"PC2";
        let promoCodeThree = base.toString() +"PC3";
        let ticketGroupOne = base.toString() +"TG1";
        let ticketGroupTwo = base.toString() +"TG2";
        let ticketGroupThree = base.toString() +"TG3";
        let customerFirstName = 'cfn'+base.toString();
        let customerLastName = 'cln'+base.toString();
        let customerEmail = customerFirstName + '@' + customerLastName+'.com';
        let customerPassword = base.toString() + 'Password';



        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();

        });

        afterEach(async function(){
            await driver.quit()
        })

        //PORTAL
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
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
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
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);


        });

        //EMBED
        it('should get no tickets available message on embed when tickets are not activated ',async function () {

            main = new EmbedMainPage(driver);
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertNoTicketsMessageIsDisplayed()

        });

        //PORTAL
        it('should activate first ticket and make it 1 min in future',async function () {

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
            await ticketsNav.clickActivateTicketToggle(ticketOneName);
            await ticketsNav.clickEditTicketButton(0);
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.clickStartDateTimeInput();
            await dateTime.datePickerIsVisible();
            await dateTime.updateTimeToXMinLater(2);
            await dateTime.clickSetButton();
            await createTicket.clickEndDateTimeInput();
            await dateTime.datePickerIsVisible();
            await dateTime.updateHourByOne();
            await createTicket.clickSaveTicketButton();

        });

        //EMBED
        it('should check ticket name , price, and availability in embed when tickets are in the future ',async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.assertNumberOfTickets(1);
            await embedTickets.assertTicketNotAvailableMessageIsDisplayed();
            await embedTickets.assertFullTicketNameDisplay(ticketOneName, ticketOnePrice);
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

        // EMBED
        it('should assert create account button is disabled on create account modal in embed until fields are empty', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedCreate = new CreateAccountPage(driver);
            inbox = new Inbox(driver);
            originalWindow = inbox.getOriginalWindow();

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.clickRegisterLink();
            await embedCreate.assertCreateAccountButtonIsDisabledUntilFieldsArePopulated();

        });

        // EMBED MOBILE
        it('should create new account on embed with mobile view login and get success login message', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedCreate = new CreateAccountPage(driver);
            inbox = new Inbox(driver);
            originalWindow = inbox.getOriginalWindow();

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.clickRegisterLink();
            await embedCreate.createAccountOnEmbed(customerFirstName,customerLastName,customerEmail,customerPassword);
            await inbox.loadInbox();
            await inbox.elementIsDisplayedInInbox('<'+customerEmail+'>');
            await inbox.findAndClickTheEmailForNewAccount('<'+customerEmail+'>');
            await inbox.switchToInboxIFrame();
            await inbox.verifyEmailButtonIsDisplayed();
            await inbox.verifyEmail();
            await driver.switchTo().defaultContent();
            await main.getNewlyOpenedTab(originalWindow);
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerEmail);
            await driver.sleep(4000);

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

        //PORTAL
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

        //EMBED
        it('should calculate subtotal and total on one ticket quantity 2 with tax and fee in embed', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)
            payment = new PaymentPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton()
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateSubtotalAndTotalBeforeDonationIsAdded();

        });


        //EMBED
        it('should assert elements on Add Money component in embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            addMoney = new AddMoneyComponent(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await payment.confirmElementsOnPayWithCardOrServiceTab();
            await payment.clickNewCardTab();
            await payment.isOnPayWithNewCardTab();
            await payment.confirmElementsOnPayWithNewCardTab();

        });

        //EMBED
        it('should make payment with new card in embed and assert card is saved',async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            newCardComponent = new NewCardComponent(driver);
            embedConfirm = new ConfirmPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2)
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithEmailAndPassword(customerEmail, customerPassword);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.clickNewCardTab();
            await payment.fillValidDataOnCardOnTheEmbed(customerFirstName,customerLastName);
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.assertSelectedCardIsDisplayedAndAssertData("Visa XXXX 1111")
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();

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
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertSoldOutMessageIsDisplayed();

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
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
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
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.assertDropDownElementsEquals("100");

        });

        //PORTAL -> EMBED
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 28);
            let accountAvailable = 26-parseInt(purchasedTickets);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await driver.sleep(5000);
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

        //EMBED
        it('should assert elements on Order Details screen when payment with wallet', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await orderDetails.openOrderDetailsOnMobile();
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await orderDetails.openOrderDetailsOnMobile();
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.clickEditLinkOnDisplayedTicketAssertIsOnTicketsPage(embedTickets);

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
        it('should assert ticket groups are displayed on wider screen, dropdown contains extra groups on width below 510px', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 554, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertGroupNamesAndCount(ticketGroupOne, ticketGroupTwo, ticketGroupThree);
            await driver.manage().window().setRect({width: 414, height: 1000});
            await embedTickets.ticketGroupsDropDownAppearedAssertNameAndTicketGroup(ticketGroupThree)

        });

        //EMBED
        it('should assert tickets by groups and active class is applied when clicked on mobile embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertTicketsByGroupsAndClassIsAppliedWhenClickedOnMobileEmbed(base, "active");

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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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
            await driver.manage().window().setRect({width: 414, height: 1000});
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

        //PORTAL - > EMBED
        it('should assert elements on donation page in the embed',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            donation = new DonationPage(driver);
            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver)
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
            let donationMessage = await donation.getDonationMessage();
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.assertElementsOnDonateTab(eventName, donationMessage);

        });

        //EMBED
        it('should assert when donation button is clicked the amount is visible in donation input in the embed',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.assertCorrectValuesInInputAfterDonationButtonIsClicked(0);
            await embedDonate.assertCorrectValuesInInputAfterDonationButtonIsClicked(1);
            await embedDonate.assertCorrectValuesInInputAfterDonationButtonIsClicked(2);
            await embedDonate.assertCorrectValuesInInputAfterDonationButtonIsClicked(3);

        });

        //EMBED 55
        it('should assert when donation is added to order the amount is visible in Order Details in the embed',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            payment = new PaymentPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.clickOneDonationValueButton(0);
            await embedDonate.clickAddDonationButton();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.getAndAssertDonationValueEqualsSelected("20.00")
            await main.clickPreviousPageButton();
            await payment.isAtPaymentPage()
            await main.clickPreviousPageButton();
            await embedDonate.clickResetDonationButtonAndAssertInputIsReset();
            await embedDonate.clickOneDonationValueButton(2);
            await embedDonate.clickAddDonationButton();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.getAndAssertDonationValueEqualsSelected("50.00");

        });

        //EMBED
        it('should assert when custom donation is added to order the amount is visible in Order Details in the embed',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver)
            orderDetails = new EmbedOrderDetailsPage(driver);
            payment = new PaymentPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            let customDonation = await embedDonate.addCustomDonation();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.getAndAssertDonationValueEqualsSelected(customDonation);

        });

        //EMBED
        it('should assert when donation is added to order calculates correctly in Order Details in the embed',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            summary = new SummaryComponent(driver);
            payment = new PaymentPage(driver)


            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.clickOneDonationValueButton(0);
            await embedDonate.clickAddDonationButton();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await summary.calculateSubtotalAndTotalAfterDonationIsAdded();

        });

        //EMBED
        it('should assert add / reset buttons disabled scenarios',async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedDonate = new EmbedDonateComponent(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
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

        //EMBED
        it('should click donation edit link on Order Details and assert landing on extras screen', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedDonate = new EmbedDonateComponent(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedDonate.clickOneDonationValueButton(2);
            await embedDonate.clickAddDonationButton();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.clickEditDonationLinkAndAssertItIsOnExtrasPage(embedDonate);

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

        //PORTAL -> EMBED
        it('should disable promotion and check for error message on embed', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            promotions = new PromotionsPage(driver);
            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);

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
            await promotions.disablePromotionByPromoName(promoOneName);
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInput(0, 2);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.enterPromoCode(promoCodeOne);
            await payment.clickApplyDiscountButton();
            await payment.invalidCodeMessagesAreShown("The entered promotion code does not exist.")

        });

        //PORTAL -> EMBED
        it('should enable promotion and check promotion is applied and input is hidden', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            promotions = new PromotionsPage(driver);
            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);

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
            await promotions.enablePromotionByPromoName(promoOneName);
            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.successfulPromoCodeApplied();
            await payment.assertDiscountFormIsNotDisplayed();

        });

        //EMBED 75
        it('should add promo code and assert discount value + new price equals original ticket price in summary', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            summary = new SummaryComponent(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '1');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.successfulPromoCodeApplied();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.assertNewPricePlusDiscountEqualTicketPrice(ticketTwoPrice);

        });

        //EMBED
        it('should add promo code and assert new price and original price are displayed on tickets page next to ticket name', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '1');
            let originalPrice = await embedTickets.getTicketPriceByTicketName(ticketTwoName);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.successfulPromoCodeApplied();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            let discountedPrice = await summary.getTicketsTotal();
            await main.clickPreviousPageButton();
            await payment.isAtPaymentPage();
            await main.clickPreviousPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickPreviousPageButton();
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertTheNewTicketPriceEqualsDiscountedPrice(ticketTwoName, discountedPrice);
            await embedTickets.assertNewTicketNamePricesLayout(ticketTwoName, originalPrice, discountedPrice);
            await embedTickets.assertFontColorAndStrikeOnOriginalPrice(ticketOneName);

        });

        //EMBED
        it('should assert when three different tickets selected three ticket edit links on Order details', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '2');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.assertNumberOfEditTicketsLinks(3);

        });

        //EMBED
        it('should assert when three different tickets selected all three tickets displayed in Order details', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '2');
            //await embedTickets.sentKeysToTicketInput(3, 1);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            let tickets = await embedTickets.getListOfTicketsWhereQuantityIsBiggerThen0();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.assertSelectedTicketsAreDisplayedInOrderDetails(tickets);

        });

        //EMBED
        it('should assert when three different tickets selected for each ticket total equals selected quantity times price', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, 2);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 1);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, 3);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            let ticketThreeTotal = await embedTickets.selectedTicketTotal(ticketThreeName);
            let ticketTwoTotal = await embedTickets.selectedTicketTotal(ticketTwoName);
            let ticketFourTotal = await embedTickets.selectedTicketTotal(ticketFourName);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.assertTicketTotalByTicketName(ticketThreeName, ticketThreeTotal);
            await orderDetails.assertTicketTotalByTicketName(ticketTwoName, ticketTwoTotal);
            await orderDetails.assertTicketTotalByTicketName(ticketFourName, ticketFourTotal);

        });

        //EMBED
        it('should assert selected ticket quantity is displayed in the Order Total correctly', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);


            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '3');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '4');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.assertTicketCountInOrderTotalInOrderDetails(9);

        });

        //EMBED
        it('should assert when order details tickets sum equals order total tickets value & summary tickets and subtotal', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            summary = new SummaryComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '3');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '1');
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.confirmEnteredValuesBeforeLogin();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.assertTicketsSumEqualsSubtotalAndOrderTotalTicketsAndSubtotalValuesOnMobile(summary);

        });


        //EMBED
        it('should make regular purchase with three different tickets and quantities and assert tickets on receipt', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, 2);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 1);
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, 3);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.clickViewReceiptButton();
            await receipt.receiptPopupIsVisible();
            await receipt.assertTicketsOnReceipt(ticketTwoName,ticketThreeName,ticketFourName);

        });

        //EMBED
        it('should make regular purchase and check event name and date of purchase', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 2);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            let timeDate = await orderDetails.getTransactionTimeDate();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.clickViewReceiptButton();
            await receipt.receiptPopupIsVisible();
            await receipt.timeDateAndEventName(timeDate, eventName);

        });

        //EMBED
        it('should assert text on navbar on all pages', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.assertNavbarText(eventName + " Ticketing");
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await main.assertNavbarText("Upped Login");
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.assertNavbarText(eventName + " Ticketing");
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 2);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.assertNavbarText("Extras");
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await main.assertNavbarText("Payment");
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await main.assertNavbarText("Double check your order details");
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await main.assertNavbarText("Confirmation");

        });

        //EMBED
        it('should assert previous page button text', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 2);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.assertPreviousPageButtonText("Back to Event Info");
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await main.assertPreviousPageButtonText("Back to Extras");
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await main.assertPreviousPageButtonText("Back to Payment");

        });

        //EMBED
        it('when not logged in navigate to the login page with no tickets selected , when logged in alert select ticket should appear', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await main.assertAlertVisibleAndText("Please select a ticket first");

        });

        //EMBED
        it('should get alert danger when next button clicked and payment method not selected', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, 2);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await main.clickNextPageButton();
            await main.assertAlertVisibleAndText("Please select a payment method!");

        });

        //EMBED
        it('should make purchase for two tickets of same type with donation and promotion and assert data on the receipt', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            embedDonate = new EmbedDonateComponent(driver)
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '2');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await embedDonate.clickOneDonationValueButton(2);
            await embedDonate.clickAddDonationButton();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            let tickets = await summary.getTicketsTotal();
            let donations = await summary.getDonationValue();
            let subtotal = await summary.getSubtotalValue();
            let taxes = await summary.getTaxesValue();
            let fees = await summary.getFeesValue();
            let discount = await summary.getDiscountValue();
            let total = await summary.getTotalValue();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.clickViewReceiptButton();
            await receipt.receiptPopupIsVisible();
            await receipt.assertDataFromSummaryEqualReceiptValues(tickets,donations,subtotal,taxes,fees,discount,total)

        });

        //EMBED -> fails because the value of the ticket that is out of promotion limit is not displayed separately
        it('should select four tickets exceeding the limit of promotion assert tickets in Order Details and promoted ticket shown twice with two prices', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            let originalPrice = await embedTickets.getCleanTicketPriceFromPriceWithBrackets(ticketTwoName);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await main.clickPreviousPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickPreviousPageButton();
            await embedTickets.ticketListIsDisplayed();
            let promotedPrice = await embedTickets.getCleanTicketPriceFromPriceWithBrackets(ticketTwoName);
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await orderDetails.assertPromotedAndRegularTotalAreDisplayed(originalPrice, promotedPrice);

        });

        it('should make purchase with four tickets exceeding the limit of promotion assert promotion applied to only 3 tickets', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            let originalPrice = await embedTickets.getCleanTicketPriceFromPriceWithBrackets(ticketTwoName);
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await main.clickPreviousPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickPreviousPageButton();
            await embedTickets.ticketListIsDisplayed();
            let promotedPrice = await embedTickets.getCleanTicketPriceFromPriceWithBrackets(ticketTwoName);
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.assertTotalEqualsThreePromotedPlusOneRegularTicketPrice(originalPrice, promotedPrice);
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();

        });

        //EMBED -> fails because when promotion qty is over we should get promotion finished error
        it('should apply the promotion code when promotion qty is finished and get promo error message and assert input field still visible', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeOne);
            await payment.invalidCodeMessagesAreShown("The message when fixed");

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

        //EMBED
        it('should assert that percentage taxes are recalculated and dollar value fees are same when promotion is applied', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '6');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            let fees = await summary.getFeesValue();
            let taxes = await summary.getTaxesValue();
            await main.clickPreviousPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.openOrderDetailsOnMobile();
            await summary.assertTaxesAndFeesAreRefactoredToMatchNewPrice(fees,taxes);

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
        //EMBED
        it('should select account limit quantity for all tickets that have promotion in promotion with limit then add promo code and assert only highest price ticket gets discount when subtotal calculated in order total', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '10');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '10');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals10PromotedTicketsForOriginalHighestPriceAnd10RegularForLowerPriced(ticketTwoPrice, ticketFourPrice);

        });

        //EMBED
        it('should select total of account limit quantity for limited tickets that have promotion in promotion with limit then add promo code and assert subtotal equals tickets discounted prices times quantity', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '6');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals10PromotedTicketsByEachTicketPromotedPrice(ticketTwoPrice, ticketFourPrice);

        });

        //EMBED
        it('should select more then total of account limit quantity for limited tickets that have promotion in promotion with limit then add promo code and ' +
            'assert subtotal equals tickets discounted prices times quantity + regular price for cheaper ticket times exceeding limit qty + assert exceeding promo message', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '9');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals10PromotedTicketsByEachTicketPromotedPricePlusExceedingTicketsByRegularPrice(ticketTwoPrice, ticketFourPrice);

        });

        //EMBED
        it('should select more then total of account limit quantity for not limited ticket that have promotion ' +
            'in promotion with limit then add promo code and assert subtotal equals tickets discounted prices times quantity ', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '15');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsNotDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals15PromotedTicketsForNotLimitedTicket(ticketThreePrice);

        });

        //EMBED
        it('should select more then promotion available qty for not limited ticket that have promotion in promotion with limit then add promo code and' +
            ' assert subtotal equals available promotion tickets qty discounted price + regular price for exceeding qty and get exceeding info message ', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '25');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals20PromotedTicketsPlus5RegularPriceForNotLimitedTicket(ticketThreePrice);

        });

        //EMBED
        it('should select 25 tickets, 11 for limited 14 for not limited, top of limited priced and 13 of not limited should get discount, limited as cheapest will not ', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)
            summary = new SummaryComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '7');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '14');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '4');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals20PromotedTicketsByEachTicketPromotedPricePlusExceeding5TicketsByRegularPrice(ticketTwoPrice, ticketThreePrice, ticketFourPrice);

        });

        //EMBED
        it('should select 30 tickets, 10 for each, should get discount on total 20 - top priced from limited * 10 and not limited *10 , second limited regular price ', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '10');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '10');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '10');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals20PromotedTicketsTopPrice10NotLimited10(ticketTwoPrice, ticketThreePrice, ticketFourPrice);

        });

        //EMBED
        it('should select 30 tickets, 12 for top priced in limited, 12 for not limited, 6 for lower priced limited should get discount' +
            ' on total 20 - top priced from limited * 10 and not limited *10 , second limited regular price, 2 tickets from discounted on regular ', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            summary = new SummaryComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '12');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '12');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '6');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickPayWithWalletButton();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await summary.calculateAndAssertTotalEquals20PromotedTicketsTopPrice10NotLimited10RestOnRegular(ticketTwoPrice, ticketThreePrice, ticketFourPrice);

        });

        //EMBED
        it('should make purchase for 9 tickets with promotion with limits and assert total discounted value per ticket is displayed', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            embedDonate = new EmbedDonateComponent(driver)
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '3');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '3');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '3');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.clickViewReceiptButton();
            await receipt.receiptPopupIsVisible();
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketTwoName, 0);
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketThreeName, 0);
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketFourName, 0);

        });

        //EMBED
        it('should make purchase for 16 tickets exceeding account limit and promotion limit and assert exceeding message and discount is applied only for quantity inside limits', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            embedDonate = new EmbedDonateComponent(driver)
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '5');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '10');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '1');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.exceedingPromotionQuantityAlertIsDisplayed();
            await payment.clickSavedCardByIndex(0);
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await embedConfirm.isAtConfirmPage();
            await embedConfirm.clickViewReceiptButton();
            await receipt.receiptPopupIsVisible();
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketTwoName, 1);
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketThreeName, 3);
            await receipt.calculateAndAssertOriginalTicketPriceAndDiscountIsCalculatedAndDisplayedCorrectlyNextToEachTicketByTicketName(ticketFourName, 1);

        });

        //EMBED
        it('should try to make purchase for 12 tickets when promo quantity is completed and receive promo no longer valid', async function () {

            main = new EmbedMainPage(driver);
            embedLogin = new LoginPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedExtras = new ExtrasPage(driver);
            embedDonate = new EmbedDonateComponent(driver)
            payment = new PaymentPage(driver);
            summary = new SummaryComponent(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            receipt = new ReceiptPopup(driver)

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketTwoName, '4');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketThreeName, '4');
            await embedTickets.sentKeysToTicketInputByTicketName(ticketFourName, '4');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.applyPromotion(promoCodeThree);
            await payment.promotionNoLongerValidDangerMessageIsVisible();

        });

        //EMBED
        it('should assert on staff ticket only one ticket can be selected', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.assertTicketSelectValueByName(staffTicket, "0");
            await embedTickets.sentKeysToTicketInputByTicketName(staffTicket, 5);
            await embedTickets.assertTicketSelectValueByName(staffTicket, "0");
            await embedTickets.sentKeysToTicketInputByTicketName(staffTicket, 1);
            await embedTickets.assertTicketSelectValueByName(staffTicket, "1");

        });

        //EMBED
        it('should check staff modal elements and submit fully filled form', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(staffTicket, '1');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.assertElementsOnStaffModal(staffTicket);
            await questionsModal.shouldAnswerStaffFormWithRandomButValidData(base);
            await embedConfirm.isAtConfirmPage()

        });

        //EMBED
        it('should try to purchase second staff ticket and should get error message', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(staffTicket, '1');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.assertElementsOnStaffModal(staffTicket);
            await questionsModal.shouldAnswerStaffFormWithRandomButValidData(base);
            await main.assertAlertVisibleAndText("The order was not completed, You cannot buy more then 1 ticket that will add you as a staff member");
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
            await questions.assertTableHeadersNames();
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

        //EMBED
        it('should check ticket questions modal for Yes/No question and submit answers in embed', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);
            originalWindow =  driver.getWindowHandle();

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await embedTickets.ticketListIsDisplayed();
            await embedTickets.sentKeysToTicketInputByTicketName(ticketOneName, '1');
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.answerSimpleYesNo(base,ticketOneName);;
            await embedConfirm.isAtConfirmPage();

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

        //EMBED
        it('should answer ticket questions for question with input', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);
            originalWindow =  driver.getWindowHandle();

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 1)
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await embedLogin.isAtLoginPage();
            await driver.sleep(1000);
            await embedLogin.loginWithVerifiedAccount(customerEmail, customerPassword);
            await main.nextButtonIsVisible();
            await main.clickTicketTermsCheckbox();
            await main.clickNextPageButton();
            await embedExtras.isAtExtrasPage();
            await main.clickNextPageButton();
            await payment.isAtPaymentPage();
            await payment.clickSavedCardByIndex(0);
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.answerTicketQuestionWithTextInput(base,ticketOneName);
            await embedConfirm.isAtConfirmPage();

        });

        it('Should check for first two ticket questions responses made in embed mobile', async function () {

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
            await attendees.checkForTicketQuestionsResponsesForTheFirstTwoPurchases(base,0);

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

        //EMBED
        it('should login with facebook assert updated ticket questions for first question , answer and submit answers', async function () {

            main = new EmbedMainPage(driver);
            embedTickets = new TicketsComponent(driver);
            embedLogin = new LoginPage(driver);
            embedExtras = new ExtrasPage(driver);
            payment = new PaymentPage(driver);
            orderDetails = new EmbedOrderDetailsPage(driver);
            embedConfirm = new ConfirmPage(driver);
            questionsModal = new TicketQuestionsModal(driver);
            originalWindow =  driver.getWindowHandle();

            await main.openEmbedPage();
            await driver.manage().window().setRect({width: 414, height: 1000});
            await main.switchToIframe();
            await main.isInFrame(eventName);
            await embedTickets.sentKeysToTicketInput(0, 2);
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
            await main.nextButtonIsVisible();
            await main.clickNextPageButton();
            await orderDetails.isOnOrderDetailsPage();
            await orderDetails.clickPlaceOrderButton();
            await questionsModal.assertFormAndInputAndOption(base,ticketOneName, ticketThreeName)
            await questionsModal.answerTicketQuestionWithPerTicketQuestions();
            await embedConfirm.isAtConfirmPage();

        });

        it('Should check for first two ticket questions responses made in embed mobile', async function () {

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
            await attendees.checkForTicketQuestionsResponsesForTheUpdated(base,1);

        });

    });