    const { Builder } = require('selenium-webdriver');
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/portalPages/DashboardPage')
    const CreateEventModal = require('../portal/portalModals/CreateEventModal')
    const DateTimePickerModal = require('../portal/portalModals/DateTimePickerModal')


    describe('Login', function () {
        this.timeout(30000);
        let driver;
        let login;
        let dashboard;
        let createEvent;
        let dateTime;
        let date = new Date();
        let eventName = date.now().toString();


        beforeEach(async function(){
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize();
            login = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            createEvent = new CreateEventModal(driver);
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
            await createEvent.fillFormWithValidData();


        });

    });