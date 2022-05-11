    const { Builder, By } = require('selenium-webdriver');
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard');
    const CreateEventModal = require('../portal/portalModals/CreateEventModal');
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal');
    const MyEventsPage = require('../portal/dashboard/MyEventsTab');
    const EventOptionTabs = require('../portal/eventOverview/EventOptionTabs');
    const CreateTicketModal = require('../portal/portalModals/CreateTicketModal');
    const TicketsTab = require('../portal/ticketing/TicketsTab');
    const GeneralDetailsTab = require('../portal/eventOverview/GeneralDetailsTab');
    const PromotionsPage = require('../portal/promotions/PromotionsPage');
    const AddNewPromotionModal = require('../portal/portalModals/AddNewPromotionModal');


    describe('should login to portal create new event and tickets', function () {
        this.timeout(60000);
        let driver;
        let login;
        let dashboard;
        let createEvent;
        let myEvents;
        let dateTime;
        let eventOptionTabs;
        let createTicket;
        let ticketsTab;
        let eventDetails;
        let promotions;
        let newPromotion;

        let today = new Date();
        let eventName = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let ticketOneName = Math.floor(100000 + Math.random() * 900000);
        let ticketTwoName = Math.floor(100000 + Math.random() * 900000);
        let ticketThreeName = Math.floor(100000 + Math.random() * 900000);
        let ticketFourName = Math.floor(100000 + Math.random() * 900000);
        let promoOneName = Math.floor(100000 + Math.random() * 900000);
        let promoTwoName = Math.floor(100000 + Math.random() * 900000);
        let promoCodeOne = Math.floor(100000 + Math.random() * 900000);
        let promoCodeTwo = Math.floor(100000 + Math.random() * 900000);

        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            login = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            dateTime = new DateTimePickerModal(driver);
            eventOptionTabs = new EventOptionTabs(driver);
            createTicket = new CreateTicketModal(driver);
            ticketsTab = new TicketsTab(driver);
            eventDetails = new GeneralDetailsTab(driver);
            promotions = new PromotionsPage(driver);
            newPromotion = new AddNewPromotionModal(driver);

            await login.loadPortalUrl();
            await login.isAtPortalLoginPage();
            await login.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();


        });

        afterEach(async function(){
            await driver.quit()
        })

        it('Should create new event', async function () {

            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName);
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);

         });

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
        });

        it('Should publish the event', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventDetails.publishButtonIsDisplayed();
            await eventDetails.clickPublishButton();
            await eventDetails.unpublishButtonIsDisplayed();

        });

        it('Should make promotion for the first ticket', async function () {
            await dashboard.clickMyEventsTab();
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.ticketingTabIsDisplayed();
            await eventOptionTabs.clickPromotionsTab();
            await promotions.promotionsHeaderIsVisible();
            await promotions.clickAddPromotionButton();
            await newPromotion.addPromotionModalIsDisplayed();

        });
        /*
        it('Should create fourth ticket', async function () {


                });*/

    });