    const { Builder, By, Key} = require('selenium-webdriver');
    const assert = require('assert')
    const chrome = require("selenium-webdriver/chrome");
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
    const LoginTab = require("../microsites/micrositesComponents/LoginTab")
    const CreateAccountPage = require("../embed/embedPages/CreateAccountPage");
    const EmbeddingPage = require("../portal/eventOverview/DesignNav/EmbeddingPage");
    const EmbedTicketTermsModal = require('../embed/embedComponents/EmbedTicketTermsModal');
    const DonationPage = require('../portal/eventOverview/SettingsNav/DonationsPage');
    const EmbedDonateComponent = require('../embed/embedComponents/EmbedDonateComponent')
    const SideMenu = require('../portal/portalComponents/SideMenu');
    const SectionsNavs = require('../portal/portalComponents/SectionsNavs');
    const Files = require('../dummy/Files')

    describe('Should do old tests', function () {
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
        let sideMenu;
        let sectionsNavs;
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
        


        let base =  Math.floor(100000 + Math.random() * 900000);
        let eventName =  base.toString() + " FullEventName";
        let shortName = base.toString();
        let ticketOneName = base.toString() +"T1";
        let embedTicketQuantity = 2;
        let ticketOneQuantity = 999;
        let ticketOnePrice = "1.00";
        let ticketTwoName = base.toString() +"T2";
        let ticketTwoQuantity = 888;
        let ticketTwoPrice = "1.20";
        let ticketThreeName = base.toString() +"T3";
        let ticketThreeQuantity = 777;
        let ticketThreePrice = "0.75";
        let ticketFourName = base.toString() +"T4";
        let ticketFourQuantity = 666;
        let ticketFourPrice = "0.40";
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
            //await driver.manage().window().maximize();
           // driver = new Builder().forBrowser('chrome')
           //     .setChromeOptions(new chrome.Options().addArguments('--headless'))
           //     .build();
            await driver.manage().window().setRect({width: 1920, height: 1080});

        });

        afterEach(async function(){
            try {
                await driver.quit();
            } catch(e) {
                console.log('Failed to close webdriver due: ' + e.message);
            }
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

        it('Should create new event,tickets,promotions and make purchases', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            dateTime = new DateTimePickerModal(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver)
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

            /*await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();*/

            await sideMenu.ticketingTabIsDisplayed();
            await sectionsNavs.moveToEventNavs();
            await sectionsNavs.clickNavByText("Design");
            await eventDesignNavs.clickEventCardDesignSubNav();
            await eventCardDesignPage.uploadPhotoInputIsDisplayed();
            await eventCardDesignPage.uploadImage();
            await sectionsNavs.clickNavByText("General Details");
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();
            //await sideMenu.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
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
            await sectionsNavs.clickNavByText("Settings");
            await ticketTerms.termsPageIsDisplayed();
            await ticketTerms.saveTerms();
            await sectionsNavs.clickNavByText("Taxes & Fees")
            await taxesAndFees.createTaxesAndFeesForEventTickets();
            await sideMenu.clickPromotionsTab();
            await promotions.promotionsHeaderIsVisible();
            await promotions.addPromotionButtonIsVisible();
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
            await sideMenu.clickTicketingTab();
            await ticketsNav.clickAddTicketButton();
            await createTicket.ticketNameInputIsDisplayed();
            await createTicket.createStaffTicket(staffTicket,"3", 50);
            await ticketsNav.createdTicketIsInTheTable(staffTicket);
            await ticketsNav.clickActivateTicketToggle(staffTicket);
            await ticketsNav.activateTicketModalIsDisplayed();
            await ticketsNav.confirmActivationButton();
            await eventOptionTabs.ticketingTabIsDisplayed();

        });


        //PORTAL -> EMBED
        it('should make embed view for event', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver)
            eventOptionTabs = new EventOptionTabs(driver);
            embedding = new EmbeddingPage(driver);
            files = new Files(driver);
            main = new EmbedMainPage(driver);
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await driver.sleep(1000);
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sectionsNavs.clickNavByIndex(1);
            await embedding.isOnEmbeddingTab();
            await embedding.setEmbedViewForEvent();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickEventFullNameTab();
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
            console.log(userBalance)
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
            /*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*/

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
            await driver.sleep(5000);
            await events.eventCardIsAvailableToClick();
            await events.clickNewEvent(shortName);
            await info.buyTicketsButtonPresent();
            await info.clickBuyTicketsButton();
            await ticketing.termsButtonPresent();
            /*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*/

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
            /*await ticketing.clickTermsButton();
            await terms.ticketTermsModalIsDisplayed();
            await terms.clickCloseTermsModalButton();*/

            await ticketing.nextButtonPresent();
            await tickets.clickIncreaseQtyButtonByIndex(1);
            await tickets.clickIncreaseQtyButtonByIndex(2);
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver)
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.checkForSoldTicketsAfterFirstTest();

        });


        it('Should check for tickets table columns and make changes', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            sideMenu = new SideMenu(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.assertTicketsNavTableHeader();
            await ticketsNav.manipulateColumnsFromTable();
            await driver.sleep(5000);
        });

        it('Should make purchases , make refund and check balance after', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            extras = new ExtrasTab(driver);
            pay = new PayTab(driver);
            confirm = new ConfirmTab(driver);
            myWallet = new MyWalletTab(driver);
            sectionsNavs = new SectionsNavs(driver)
            
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
            console.log(userBalance)
            userTotalPurchases = userTotalPurchases + await confirm.getPurchaseTotalAmount();
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            let refundedAmount = await allTransactions.makeFullRefundWithReinstateTicket();
            userBalance = userBalance + parseFloat(refundedAmount);
            console.log(refundedAmount)
            console.log(userBalance)
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver)
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);
            userDetails = new UserDetailsModal(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(2000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await sideMenu.ticketingTabIsDisplayed();
            await sectionsNavs.clickNavByText("Attendees");
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
            sideMenu = new SideMenu(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            events = new EventsPage(driver);
            login = new LoginComponent(driver);
            info = new EventInfo(driver);
            ticketing = new TicketingPage(driver);
            tickets = new TicketsTab(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTicketingTab();
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
            sideMenu = new SideMenu(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsCat = new ShopCategoriesPage(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickShopManagementTab();
            await shopsNavs.shopCategoriesNavIsDisplayed();
            await shopsNavs.clickCategoriesNav();
            await shopsCat.move2CategoriesFromPotentialToOrdered();
            await driver.sleep(3000);
        });

        it('Should make event managed ticketing shop ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            agendaNavs = new MapAndAgendaNavs(driver);
            eventMap = new EventMapPage(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsPage = new ShopsPage(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await driver.sleep(500);
            await sideMenu.clickMapAndAgendaTab();
            await eventMap.addTicketingLocationOnMap(base);
            await sideMenu.clickShopManagementTab();
            await shopsPage.createNewShopForTickets(base);
            await driver.sleep(2000);
            await sideMenu.clickTheSecondOptionFromActiveSideMenuDropdown();
            await shopsPage.createMenuFromShopsManagementPageForTickets(eventName,base,"Tickets", 0, 1);

        });

        it('Should add activity and performance', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
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
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await driver.sleep(2000);
            await sideMenu.clickMapAndAgendaTab();
            await eventMap.addPinOnMapForPerformance();
            await eventMap.assertLayerDataIsSavedCorrectlyByIndex("Stage", "Concert Stage", "Best Concert Here", "Activities", "Interactive", "leaflet-pm-icon-marker");
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
            await driver.sleep(2000);
            await sideMenu.clickMapAndAgendaTab();
            await eventMap.assertLayerDataIsSavedCorrectlyByIndex("Activity", "Football Stadium", "Vikings vs Eagles", "Activities", "Interactive", "leaflet-pm-icon-polygon");
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(10000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.clickNavByText("Taxes & Fees")
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
            sideMenu = new SideMenu(driver);
            eventDetails = new GeneralDetailsTab(driver);
            partnersPage = new PartnersPage(driver);
            newVendor = new SetupNewVendorPage(driver);
            sectionsNavs = new SectionsNavs(driver)
            inbox = new Inbox(driver);
            originalWindow = inbox.getOriginalWindow();

           /* await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickPartnerManagementTab();
            await partnersPage.isOnPartnersPage();
            await partnersPage.inviteVendorToEvent(vendorEmail, vendorFirstName, vendorLastName);*/
            await inbox.acceptVendorInvitation(vendorEmail);
            await driver.switchTo().defaultContent();
            await newVendor.getNewlyOpenedTab(originalWindow);
            await newVendor.verifyEnteredData(vendorEmail, vendorFirstName, vendorLastName);
            await newVendor.completeRegistration(base);

        });

        it('Should make shop for vendor', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
            eventDetails = new GeneralDetailsTab(driver);
            eventSettingsNav = new EventSettingsNav(driver);
            agendaNavs = new MapAndAgendaNavs(driver);
            eventMap = new EventMapPage(driver);
            shopsNavs = new ShopsNavs(driver);
            shopsPage = new ShopsPage(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await driver.sleep(2000);
            await sideMenu.clickMapAndAgendaTab();
            await eventMap.addVendorLocationOnMap(base);
            await sideMenu.clickShopManagementTab();
            await driver.sleep(2000);
            await shopsPage.addShopForVendor(base);
            await driver.sleep(3500)

        });

        it('New vendor should login and create bar menu', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            sideMenu = new SideMenu(driver);
            myMenus = new MyMenusPage(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.vendorLoginWithEmailAndPassword(vendorEmail,base);
            await dashboard.isAtDashboardPage();
            await sideMenu.clickMenusTab();
            await myMenus.isOnMyMenusPage();
            await myMenus.createNewMenuAndSetNewName(base);
            await myMenus.createNewSection("Alcoholic Drinks", 0, 1);
            await myMenus.createNewSection("Meat & Snacks", 1, 2);
            await myMenus.createNewSection("Desserts", 2, 3);
            await myMenus.createBeerStoutMenuItem();
            await myMenus.createRedWineMenuItem();
            await myMenus.createWhiskeyMenuItem();
            //await myMenus.assertAlcoholDataIsSavedCorrectly();
            await myMenus.createBurgerMenuItem();
            await myMenus.createRibsMenuItem();
            //await myMenus.assertFoodDataIsSavedCorrectly();
            await myMenus.createPancakesMenuItem();
            await myMenus.createIceCreamMenuItem();
            //await myMenus.assertDesertsDataIsSavedCorrectly();
            await driver.sleep(2500)

        });

        it('Should add donation option and make a donation', async function() {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            await sectionsNavs.moveToEventNavs();
            await sectionsNavs.clickNavByText("Settings");
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
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTwoTickets();
            await bosExtras.add20$ToOrderOnExtrasPage();
            await bosDetails.continueToPayment();
            await bosReview.makePaymentWithCard(base);

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
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await sideMenu.clickTicketingTab();
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
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
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

        it('Should make purchase with promotion in box-office', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            sectionsNavs = new SectionsNavs(driver);
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select18Tickets();
            await bosExtras.add50$ToOrderOnExtrasPage();
            await bosDetails.addPromotionToTickets(promoCodeFour);
            await bosDetails.continueToPayment();
            await bosReview.makePaymentWithCard(base);

        });

        it('Should make purchase with 100 percent promotion in box-office', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select18Tickets();
            await bosExtras.clickNextButton();
            await bosDetails.confirmAllValuesAreZeroesAfter100PercentPromotionAndConfirmCompletion(promoCodeFive);
            await bosDetails.continueToPayment();
            await bosReview.paymentWith100DiscountAndPaymentCard(base);
            await driver.sleep(3000);

        });

        it('Should get invalid promocode message and then make purchase with valid promocode',  async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.select3Tickets();
            await bosExtras.addCustom$ToOrderOnExtrasPage();
            await bosDetails.addWrongPromoCodeAssertErrorValidation();
            await bosDetails.addPromotionToTickets(promoCodeFour);
            await bosDetails.continueToPayment()
            await bosReview.makePaymentWithCard(base);

        });

        it('Should check calculation on subtotal and total and check if tickets are displayed', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            bosTickets = new BOSelectTickets(driver);
            bosExtras = new BOAddExtras(driver);
            bosDetails = new BOAddDetails(driver);
            bosReview = new BOReviewAndPay(driver);
            sectionsNavs = new SectionsNavs(driver)
            
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await sideMenu.clickTicketingTab();
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(5000);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.clickDeactivateQuestionButton(0);
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.isOnTicketQuestionsPage();
            await questions.clickActivateQuestionButton(0);
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, "1");
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
            await bosReview.makePaymentWithCard(base);

        });

        it('Should check for first two ticket questions responses', async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await sideMenu.ticketingTabIsDisplayed();
            await sectionsNavs.clickNavByText("Attendees");
            await attendees.checkForTicketQuestionsResponsesForTheFirstTwoPurchases(base,2);

        });

        it('Should update first ticket question with asked input text', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            myEvents = new MyEventsPage(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(5000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTicketingTab();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            eventDetails = new GeneralDetailsTab(driver);
            ticketsNav = new TicketsNav(driver);
            attendees = new AttendeesTab(driver);

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await sideMenu.ticketingTabIsDisplayed();
            await sectionsNavs.clickNavByText("Attendees");
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            await sideMenu.ticketingTabIsDisplayed();
            await sectionsNavs.clickNavByText("Attendees");
            await attendees.checkForTicketQuestionsResponsesForTheUpdated(base,3);

        });

        it('should check that when new card is saved only one transaction is made',async function () {

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            eventTickets = new EventTickets(driver)
            settingsNav = new SettingsNav(driver);
            questions = new TicketQuestionsPage(driver);
            allTransactions = new AllTransactions(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
            await settingsNav.clickTicketQuestions();
            await questions.isOnTicketQuestionsPage();
            await questions.clickDeactivateQuestionButton(1);
            await questions.clickDeactivateQuestionButton(0);
            await sideMenu.clickTransactionCenterTab();
            let transactions = await allTransactions.returnTotalTransactionsMade();
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(500);
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTransactionCenterTab();
            let afterTransactions = await allTransactions.returnTotalTransactionsMade();
            assert.equal(transactions + 1, afterTransactions)
        });

        it('should set limitation on tickets per account and pass payment in box office',async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
            await settingsNav.clickEventCapacity();
            await capacity.setLimitPerAccount("26");
            await eventTickets.clickBoxOfficeNav();
            await bosTickets.isOnBoxOfficePage();
            await bosTickets.selectTicketByIndexSendQuantityAndSave(0, "5");
            await bosExtras.add20$ToOrderOnExtrasPage();
            await bosDetails.continueToPayment();
            await bosReview.makePaymentWithCard(base);
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
            sideMenu = new SideMenu(driver);
            sectionsNavs = new SectionsNavs(driver);
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
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await driver.sleep(1000);
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await driver.sleep(2000);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            await sectionsNavs.clickNavByText("Settings");
            await sectionsNavs.taxesAndFeesNavIsDisplayed();
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
            sideMenu = new SideMenu(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            promotions = new PromotionsPage(driver);
            newPromotion = new AddNewPromotionModal(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventDetails.unpublishButtonIsDisplayed();
            //await eventOptionTabs.ticketingTabIsDisplayed();
            await sideMenu.clickTicketingTab();
            await ticketsNav.addTicketButtonIsDisplayed();
            let ticketOneAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketOneName);
            let ticketTwoAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketTwoName);
            let ticketThreeAvailableQty = await ticketsNav.calculateAvailableTicketsByTicket(ticketThreeName);
            await sideMenu.clickPromotionsTab();
            await promotions.addPromotionButtonIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();
            await newPromotion.assertTooltipDisplaysCorrectAvailableMultipleTicketsAndEnteringLargerWillSetMaximumNumber(ticketOneName, ticketOneAvailableQty, ticketTwoName, ticketTwoAvailableQty, ticketThreeName, ticketThreeAvailableQty);
        });

        it('Should assert correct sort by id column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.assertOrderIdsAreShownInDescendingOrder();
            await allTransactions.assertOrderIdsAreShownInAscendingOrder();

        });

        it('Should assert correct sort by price column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.assertPricesAreShownInDescendingOrder();
            await allTransactions.assertPricesAreShownInAscendingOrder();

        });

        it('Should assert correct sort by items purchased column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.assertItemsAreShownInDescendingOrder();
            await allTransactions.assertItemsAreShownInAscendingOrder();

        });

        it('Should filter by id column in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByOrderId();

        });

        it('Should filter by minimum price in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByPriceMinAndAssertValues();

        });

        it('Should filter by maximum price in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByPriceMaxAndAssertValues();

        });

        it('Should filter by price range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByPriceRangeAndAssertValues();

        });

        it('Should filter by minimum purchased items in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByMinPurchasedItemsAndAssertValues();

        });

        it('Should filter by maximum purchased items in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByMaxPurchasedItemsAndAssertValues();

        });

        it('Should filter by purchased items range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByPurchasedItemsRangeAndAssertValues();

        });

        it('Should filter by full user in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByFullUserAndAssertValues(base);

        });

        it('Should filter by string as user in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByPartialUserNameAndAssertValues();

        });

        it('Should filter by full user and price range in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByFullUserPriceRangeAndAssertValues(base);

        });

        it('Should filter by status with all available status options in transaction center ', async function () {
            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            eventDetails = new GeneralDetailsTab(driver);
            sideMenu = new SideMenu(driver);
            ticketsNav = new TicketsNav(driver);
            createTicket = new CreateTicketModal(driver);
            allTransactions = new AllTransactions(driver);
            sectionsNavs = new SectionsNavs(driver)

            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await driver.sleep(1000);
            await dashboard.isAtDashboardPage();
            await sectionsNavs.clickNavByText("My Events");
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await sideMenu.clickTransactionCenterTab();
            await allTransactions.isAtTransactionCenterPage();
            await allTransactions.filterByAllStatusOptionsAndAssertValues();

        });

    });