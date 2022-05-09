    const { Builder, By } = require('selenium-webdriver');
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard')
    const CreateEventModal = require('../portal/portalModals/CreateEventModal')
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal')
    const MyEventsPage = require('../portal/dashboard/MyEventsTab')
    const EventOptionTabs = require('../portal/eventOverview/EventOptionTabs')


    describe('should login to portal create new event and tickets', function () {
        this.timeout(30000);
        let driver;
        let login;
        let dashboard;
        let createEvent;
        let myEvents;
        let dateTime;
        let eventOptionTabs;
        let today = new Date();
        let eventName = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            login = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            dateTime = new DateTimePickerModal(driver);
            eventOptionTabs = new EventOptionTabs(driver);

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

        it('Should open the new event and create ticket', async function () {
            await myEvents.clickMyEventsTab();
            await myEvents.clickTheNewCreatedEventInTheTable(eventName);
            await eventOptionTabs.clickTicketingTab();
        });

    });