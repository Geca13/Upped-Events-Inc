    const { Builder, By } = require('selenium-webdriver');
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard')
    const CreateEventModal = require('../portal/portalModals/CreateEventModal')
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal')
    const MyEventsPage = require('../portal/dashboard/MyEventsTab')


    describe('Login', function () {
        this.timeout(30000);
        let driver;
        let login;
        let dashboard;
        let createEvent;
        let myEvents;
        let dateTime;
        let today = new Date();
        let eventName = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            login = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
            myEvents = new MyEventsPage(driver);
            dateTime = new DateTimePickerModal(driver);

            await login.loadPortalUrl();
            await login.isAtPortalLoginPage();
            await login.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();


        });

        afterEach(async function(){
            await driver.quit()
        })

        it('should login to portal and create new event', async function () {
            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName);
            await myEvents.eventsTableIsDisplayed();
            await myEvents.createdEventIsInTheTable(eventName);
        });

    });