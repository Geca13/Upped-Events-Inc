    const { Builder } = require('selenium-webdriver');
    const chrome = require("selenium-webdriver/chrome");
    const PortalLoginPage = require('../portal/portalPages/PortalLoginPage');
    const DashboardPage = require('../portal/dashboard/Dashboard');
    const AttendeesTab = require('../portal/eventOverview/AttendeesTab')
    const CreateEventModal = require('../portal/portalModals/CreateEventModal');
    const MyEventsPage = require('../portal/dashboard/MyEventsTab');
    const FindEventsPage = require('../portal/dashboard/FindEventsPage');
    const TicketsNav = require('../portal/ticketing/TicketsNav');
    const GeneralDetailsTab = require('../portal/eventOverview/GeneralDetailsTab');
    const PromotionsPage = require('../portal/promotions/PromotionsPage');
    const TicketQuestionsPage = require('../portal/ticketing/SettingsNav/TicketQuestionsPage');
    const AllTransactions = require('../portal/transactionCentar/AllTransactions');
    const ItemsTransactions = require('../portal/transactionCentar/ItemsTransaction');
    const TicketsTransactions = require('../portal/transactionCentar/TicketsTransactions');
    const PerformancesPage = require('../portal/mapAndAgenda/PerformancesPage');
    const ActivitiesPage = require('../portal/mapAndAgenda/ActivitiesPage');
    const ShopsPage = require('../portal/shopManagement/ShopsPage');
    const PartnersPage = require('../portal/partnerManagement/PartnersPage');
    const BOSelectTickets = require('../portal/ticketing/BoxOffice/BOSelectTickets');
    const SectionsNavs = require("../portal/portalComponents/SectionsNavs");
    const LoyaltyProgram = require('../portal/eventOverview/SettingsNav/LoyaltyProgram');
    const AnalyticsReportsPage = require('../portal/eventOverview/AnalyticsNav/AnalyticsReportsPage');
    const TeamMembersPage = require('../portal/eventOverview/EventTeamNav/TeamMembersPage');
    const AnalyticsTab = require('../portal/ticketing/AnalyticsTab');
    const ContractsPage = require('../portal/partnerManagement/ContractsPage');
    const VendorSpecificSettingsPage = require('../portal/partnerManagement/PartnersSettings/VendorSpecificSettingsPage');
    const StaffPage = require('../portal/staffManagement/StaffPage');
    const ShiftsPage = require('../portal/staffManagement/ShiftsPage');
    const EmailMarketingPage = require('../portal/eventMarketing/EmailMarketingPage');
    const NotificationPage = require('../portal/customerEngagements/NotificationPage');
    const FeedbacksPage = require('../portal/resolutionCentar/FeedbacksPage');
    const PendingDisputesPage = require('../portal/resolutionCentar/PendingDisputesPage');
    const SettledDisputesPage = require('../portal/resolutionCentar/SettledDisputesPage');
    const SupportTicketsPage = require('../portal/uppedSupport/SupportTicketsPage');
    const FeatureRequestPage = require('../portal/uppedSupport/FeatureRequestPage');
    const ProfessionalServicePage = require('../portal/uppedSupport/ProfessionalServicePage');
    const TableComponent = require('../portal/portalComponents/TableComponent')
    const FilteringOptions = require('../portal/portalComponents/FilteringOptions')
    const ShopTickets = require('../portal/shopManagement/ShopsSettings/ShopTickets')
    


    describe('Should do portal related tests', function () {
        this.timeout(500000);
        let driver;
        let portalLogin;
        let dashboard;
        let createEvent;
        let myEvents;
        let ticketsNav;
        let attendees;
        let eventDetails;
        let promotions;
        let allTransactions;
        let itemsTransactions;
        let ticketsTransactions;
        let performance;
        let activity;
        let shopsPage;
        let partnersPage;
        let bosTickets;
        let questions;
        let sectionNavs;
        let findEvents;
        let loyalty;
        let analyticsReports;
        let teamMembers;
        let ticketsAnalytics;
        let contractsPage;
        let vendorSettings;
        let staffPage;
        let shiftsPage;
        let emailMarketing;
        let notification;
        let feedbacks;
        let pendingDisputes;
        let settledDisputes;
        let supportTickets;
        let featureRequests;
        let professionalService;
        let table;
        let options;
        let shopTickets;
        let base =  Math.floor(100000 + Math.random() * 900000);
        let eventName =  base.toString() + " FullEventName";
        let shortName = base.toString();
        let eventId ;

        
        beforeEach(async function(){
            //driver = await new Builder().forBrowser('chrome').build();
            //await driver.manage().window().maximize();
            driver = new Builder().forBrowser('chrome')
                .setChromeOptions(new chrome.Options().addArguments('--headless'))
                .build();
            await driver.manage().window().setRect({width: 1920, height: 1080});

            portalLogin = new PortalLoginPage(driver);
            dashboard = new DashboardPage(driver);
            await portalLogin.loadPortalUrl();
            await portalLogin.isAtPortalLoginPage();
            await portalLogin.enterValidCredentialsAndLogin();
            await dashboard.isAtDashboardPage();

        });

        afterEach(async function(){
            try {
                await driver.quit();
            } catch(e) {
                console.log('Failed to close webdriver due: ' + e.message);
            }
        })
        
        //PORTAL
        it('N.1 should create new event',async function () {
            let splited = [];
            createEvent = new CreateEventModal(driver);

            await dashboard.clickCreateEventButton();
            await createEvent.createEventModalIsDisplayed();
            await createEvent.fillFormWithValidDataAndSave(eventName,shortName);
            let urlToSplit = await driver.getCurrentUrl();
            splited = await urlToSplit.split('/')
            eventId = splited[splited.length - 2]
        });
        
         

        //PORTAL
        it('N.2 should assert table headers on my events page',async function () {
            myEvents = new MyEventsPage(driver);
            sectionNavs = new SectionsNavs(driver);
            await sectionNavs.clickNavByText("My Events");
            await myEvents.assertTableHeadersOnMyEventsPage();
            
        });

        //PORTAL
        it('N.3 should assert table columns order change on My Events page',async function () {
            options = new FilteringOptions(driver)
            sectionNavs = new SectionsNavs(driver);
            table = new TableComponent(driver)
            await sectionNavs.clickNavByText("My Events");
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(4,2);

        });

        //PORTAL
        it('should remove column and assert table columns change on My Events page',async function () {

            options = new FilteringOptions(driver)
            sectionNavs = new SectionsNavs(driver);
            table = new TableComponent(driver)
            await sectionNavs.clickNavByText("My Events");
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on My Events page',async function () {

            options = new FilteringOptions(driver);
            table = new TableComponent(driver)
            sectionNavs = new SectionsNavs(driver);
            await sectionNavs.clickNavByText("My Events");
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Location");

        });

        //PORTAL
        it('should assert table headers on find events page',async function () {
            findEvents = new FindEventsPage(driver);
            sectionNavs = new SectionsNavs(driver);
            await sectionNavs.clickNavByText("Find Events");
            await findEvents.assertFindEventsTableHeadersNames();
        });

        //PORTAL
        it('should assert table columns order change on Find Events page',async function () {
            options = new FilteringOptions(driver)
            sectionNavs = new SectionsNavs(driver);
            table = new TableComponent(driver)
            await sectionNavs.clickNavByText("Find Events");
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(4,2);

        });

        //PORTAL
        it('should remove column and assert table columns change on Find Events page',async function () {

            options = new FilteringOptions(driver)
            sectionNavs = new SectionsNavs(driver);
            table = new TableComponent(driver)
            await sectionNavs.clickNavByText("Find Events");
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Find Events page',async function () {

            options = new FilteringOptions(driver);
            table = new TableComponent(driver)
            sectionNavs = new SectionsNavs(driver);
            await sectionNavs.clickNavByText("Find Events");
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Location");

        });

        //PORTAL
        it('should assert nav links on Dashboard page',async function () {
            
            sectionNavs = new SectionsNavs(driver);
            await sectionNavs.assertNavLinksCount(3);
            await sectionNavs.assertNavLinkTextByIndex('Welcome' , 0);
            await sectionNavs.assertNavLinkTextByIndex('My Events' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Find Events' , 2);
            
        });

        //PORTAL
        it('should assert nav links on Event Overview page',async function () {

            sectionNavs = new SectionsNavs(driver);
            eventDetails = new GeneralDetailsTab(driver)
            await eventDetails.openEventGeneralDetailsPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(7);
            await sectionNavs.assertNavLinkTextByIndex('General Details' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Design' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Event Team' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Settings' , 3);
            await sectionNavs.assertNavLinkTextByIndex('Attendees' , 4);
            await sectionNavs.assertNavLinkTextByIndex('Logs' , 5);
            await sectionNavs.assertNavLinkTextByIndex('Analytics' , 6);

        });

        //PORTAL
        it('should assert sub-nav links on Event Overview -> Design page',async function () {

            sectionNavs = new SectionsNavs(driver);
            eventDetails = new GeneralDetailsTab(driver)
            await eventDetails.openEventGeneralDetailsPageDirectly(eventId);
            await sectionNavs.clickNavByText("Design");
            await sectionNavs.assertSectionSubNavsCount(6);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Card Design' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('App Design' , 1);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Site' , 2);
            await sectionNavs.assertSubNavLinkTextByIndex('Sponsorship' , 3);
            await sectionNavs.assertSubNavLinkTextByIndex('Embedding' , 4);
            await sectionNavs.assertSubNavLinkTextByIndex('Ticket Design' , 5);

        });

        //PORTAL
        it('should assert sub-nav links on Event Overview -> Event Team page',async function () {

            sectionNavs = new SectionsNavs(driver);
            eventDetails = new GeneralDetailsTab(driver)
            await eventDetails.openEventGeneralDetailsPageDirectly(eventId);
            await sectionNavs.clickNavByText("Event Team");
            await sectionNavs.assertSectionSubNavsCount(2);
            await sectionNavs.assertSubNavLinkTextByIndex('Team members' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Primary Contact' , 1);

        });

        //PORTAL
        it('should assert sub-nav links on Event Overview -> Settings page',async function () {

            sectionNavs = new SectionsNavs(driver);
            eventDetails = new GeneralDetailsTab(driver)
            await eventDetails.openEventGeneralDetailsPageDirectly(eventId);
            await sectionNavs.clickNavByText("Settings");
            await sectionNavs.assertSectionSubNavsCount(5);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Security' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Payments' , 1);
            await sectionNavs.assertSubNavLinkTextByIndex('Notifications' , 2);
            await sectionNavs.assertSubNavLinkTextByIndex('Donations' , 3);
            await sectionNavs.assertSubNavLinkTextByIndex('Loyalty Program' , 4);

        });

        //PORTAL
        it('should assert sub-nav links on Event Overview -> Analytics page',async function () {

            sectionNavs = new SectionsNavs(driver);
            eventDetails = new GeneralDetailsTab(driver)
            await eventDetails.openEventGeneralDetailsPageDirectly(eventId);
            await sectionNavs.clickNavByText("Analytics");
            await sectionNavs.assertSectionSubNavsCount(2);
            await sectionNavs.assertSubNavLinkTextByIndex('Dashboard' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Reports' , 1);

        });

        //PORTAL
        it('should assert table headers on Attendees page',async function () {

            attendees = new AttendeesTab(driver)
            await attendees.openAttendeesPageDirectly(eventId);
            await attendees.assertAttendeesTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Attendees page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            attendees = new AttendeesTab(driver)
            await attendees.openAttendeesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(5,2);

        });

        //PORTAL
        it('should remove column and assert table columns change on Attendees page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            attendees = new AttendeesTab(driver)
            await attendees.openAttendeesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Attendees page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            attendees = new AttendeesTab(driver)
            await attendees.openAttendeesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Gender");

        });

        //PORTAL
        it('should assert table headers on Loyalty Program page',async function () {

            loyalty = new LoyaltyProgram(driver)
            await loyalty.openLoyaltyProgramPageDirectly(eventId);
            await loyalty.assertLoyaltyProgramTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Loyalty Program page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            loyalty = new LoyaltyProgram(driver)
            await loyalty.openLoyaltyProgramPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Loyalty Program page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            loyalty = new LoyaltyProgram(driver)
            await loyalty.openLoyaltyProgramPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Loyalty Program page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            loyalty = new LoyaltyProgram(driver)
            await loyalty.openLoyaltyProgramPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Active");

        });

        //PORTAL
        it('should assert table headers on Analytics Report page',async function () {

            analyticsReports = new AnalyticsReportsPage(driver)
            await analyticsReports.openAnalyticsReportsPageDirectly(eventId);
            await analyticsReports.assertAnalyticsReportsTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Analytics Report page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            analyticsReports = new AnalyticsReportsPage(driver)
            await analyticsReports.openAnalyticsReportsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Analytics Report page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            analyticsReports = new AnalyticsReportsPage(driver)
            await analyticsReports.openAnalyticsReportsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Analytics Report page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            analyticsReports = new AnalyticsReportsPage(driver)
            await analyticsReports.openAnalyticsReportsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Active");

        });

        //PORTAL
        it('should assert table headers on Team Members page',async function () {

            teamMembers = new TeamMembersPage(driver)
            await teamMembers.openTeamMembersPageDirectly(eventId);
            await teamMembers.assertTeamMembersTableHeaders();

        });
        
        //PORTAL
        it('should assert table headers on Activities page',async function () {

            activity = new ActivitiesPage(driver)
            await activity.openActivitiesPageDirectly(eventId);
            await activity.assertActivitiesTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Activities page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            activity = new ActivitiesPage(driver)
            await activity.openActivitiesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Activities page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            activity = new ActivitiesPage(driver)
            await activity.openActivitiesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Activities page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            activity = new ActivitiesPage(driver)
            await activity.openActivitiesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Location");

        });

        //PORTAL
        it('should assert table headers on Performances page',async function () {

            performance = new PerformancesPage(driver)
            await performance.openPerformancesPageDirectly(eventId);
            await performance.assertPerformancesTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Performances page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            performance = new PerformancesPage(driver)
            await performance.openPerformancesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Performances page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            performance = new PerformancesPage(driver)
            await performance.openPerformancesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Performances page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            performance = new PerformancesPage(driver)
            await performance.openPerformancesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Location");

        });

        //PORTAL
        it('should assert link navs on Map And Agenda page',async function () {

            activity = new ActivitiesPage(driver);
            sectionNavs = new SectionsNavs(driver);
            await activity.openActivitiesPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(5);
            await sectionNavs.assertNavLinkTextByIndex('Event Map' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Schedule' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Performances' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Activities' , 3);
            await sectionNavs.assertNavLinkTextByIndex('Parameters' , 4);

        });

        //PORTAL
        it('should assert table headers on Tickets page',async function () {

            ticketsNav = new TicketsNav(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await ticketsNav.assertTicketsNavTableHeader();

        });

        //PORTAL
        it('should assert table column names on Tickets page equal column options',async function () {

            ticketsNav = new TicketsNav(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await ticketsNav.assertColumnNamesEqualsColumnOptionsModal();

        });

        //PORTAL
        it('should assert table columns order change on Tickets page',async function () {
            options = new FilteringOptions(driver)
            ticketsNav = new TicketsNav(driver);
            table = new TableComponent(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(5,2);

        });

        //PORTAL
        it('should remove column and assert table columns change on Tickets page',async function () {

            options = new FilteringOptions(driver)
            ticketsNav = new TicketsNav(driver);
            table = new TableComponent(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Tickets page',async function () {

            options = new FilteringOptions(driver)
            ticketsNav = new TicketsNav(driver);
            table = new TableComponent(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Start Date/Time");

        });
        
        //PORTAL
        it('should assert table headers on Tickets Analytics page',async function () {

            ticketsAnalytics = new AnalyticsTab(driver)
            await ticketsAnalytics.openTicketsAnalyticsDirectly(eventId);
            await ticketsAnalytics.assertTicketsAnalyticsTableHeader();

        });

        //PORTAL
        it('should assert table columns order change on Tickets Analytics page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsAnalytics = new AnalyticsTab(driver)
            await ticketsAnalytics.openTicketsAnalyticsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Tickets Analytics page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsAnalytics = new AnalyticsTab(driver)
            await ticketsAnalytics.openTicketsAnalyticsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Tickets Analytics page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsAnalytics = new AnalyticsTab(driver)
            await ticketsAnalytics.openTicketsAnalyticsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Ticket Solds #");

        });

        //PORTAL
        it('should assert table headers on Tickets Questions page',async function () {

            questions = new TicketQuestionsPage(driver)
            await questions.openTicketsQuestionsPageDirectly(eventId);
            await questions.assertTicketsQuestionsTableHeaders();

        });

        //PORTAL
        it('should assert table columns order change on Tickets Questions page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            questions = new TicketQuestionsPage(driver)
            await questions.openTicketsQuestionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Tickets Questions page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            questions = new TicketQuestionsPage(driver)
            await questions.openTicketsQuestionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Tickets Questions page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            questions = new TicketQuestionsPage(driver)
            await questions.openTicketsQuestionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Mandatory (Y/N)");

        });

        //PORTAL
        it('should assert table headers on Tickets page in box office',async function () {

            bosTickets = new BOSelectTickets(driver)
            await bosTickets.openBoxOfficeDirectly(eventId);
            await bosTickets.assertBoxOfficeTicketsTableHeaders();

        });

        //PORTAL
        it('should assert nav links on Event Tickets page',async function () {
           
            sectionNavs = new SectionsNavs(driver);
            ticketsNav = new TicketsNav(driver)
            await ticketsNav.openTicketsNavDirectly(eventId);
            await sectionNavs.assertNavLinksCount(5);
            await sectionNavs.assertNavLinkTextByIndex('Tickets' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Seating Plan' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Analytics' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Settings' , 3);
            await sectionNavs.assertNavLinkTextByIndex('Box Office' , 4);

        });

        //PORTAL
        it('should assert sub nav links on Event Tickets -> Settings page',async function () {

            sectionNavs = new SectionsNavs(driver);
            questions = new TicketQuestionsPage(driver)
            await questions.openTicketsQuestionsPageDirectly(eventId);
            await sectionNavs.assertSectionSubNavsCount(7);
            await sectionNavs.assertSubNavLinkTextByIndex('General Settings' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Refund Rules' , 1);
            await sectionNavs.assertSubNavLinkTextByIndex('Ticket Terms' , 2);
            await sectionNavs.assertSubNavLinkTextByIndex('Taxes & Fees' , 3);
            await sectionNavs.assertSubNavLinkTextByIndex('Ticket Questions' , 4);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Capacity' , 5);
            await sectionNavs.assertSubNavLinkTextByIndex('Ticket Permissions' , 6);

        });

        //PORTAL
        it('should assert table headers on Event orders page for transaction view',async function () {

            allTransactions = new AllTransactions(driver)
            await allTransactions.openTransactionViewInEventOrdersDirectly(eventId);
            await allTransactions.assertTransactionViewTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Event orders page for transaction view',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openTransactionViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Event orders page for transaction view',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openTransactionViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Event orders page for transaction view',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openTransactionViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Order Type");

        });

        //PORTAL
        it('should assert table headers on Event orders tickets nav page',async function () {

            ticketsTransactions = new TicketsTransactions(driver)
            await ticketsTransactions.openTicketsNavInEventOrdersDirectly(eventId);
            await ticketsTransactions.assertTicketsTransactionsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Event orders tickets nav page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsTransactions = new TicketsTransactions(driver)
            await ticketsTransactions.openTicketsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Event orders tickets nav page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsTransactions = new TicketsTransactions(driver)
            await ticketsTransactions.openTicketsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Event orders tickets nav page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            ticketsTransactions = new TicketsTransactions(driver)
            await ticketsTransactions.openTicketsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Order Type");

        });

        //PORTAL
        it('should assert table headers on Event orders items nav page',async function () {

            itemsTransactions = new ItemsTransactions(driver)
            await itemsTransactions.openItemsNavInEventOrdersDirectly(eventId);
            await itemsTransactions.assertItemsTransactionsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Event orders items nav page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            itemsTransactions = new ItemsTransactions(driver)
            await itemsTransactions.openItemsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Event orders items nav page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            itemsTransactions = new ItemsTransactions(driver)
            await itemsTransactions.openItemsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Event orders items nav page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            itemsTransactions = new ItemsTransactions(driver)
            await itemsTransactions.openItemsNavInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Order Type");

        });

        //PORTAL
        it('should assert table headers on Event orders for detailed view',async function () {

            allTransactions = new AllTransactions(driver)
            await allTransactions.openDetailedViewInEventOrdersDirectly(eventId);
            await allTransactions.assertDetailedViewTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Event orders page for detailed view',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openDetailedViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Event orders page for detailed view',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openDetailedViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Event orders page for detailed view',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            allTransactions = new AllTransactions(driver)
            await allTransactions.openDetailedViewInEventOrdersDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Order Type");

        });

        //PORTAL
        it('should assert nav links on Event Orders page',async function () {

            sectionNavs = new SectionsNavs(driver);
            allTransactions = new AllTransactions(driver)
            await allTransactions.openDetailedViewInEventOrdersDirectly(eventId);
            await sectionNavs.assertNavLinksCount(3);
            await sectionNavs.assertNavLinkTextByIndex('All' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Tickets' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Items' , 2);

        });

        it('should assert table headers on Shops page',async function () {

            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await shopsPage.assertShopsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Shops page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Shops page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Shops page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Vendor/Merchant");

        });

        //PORTAL
        it('should assert nav links on Shops Management page',async function () {

            sectionNavs = new SectionsNavs(driver);
            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(6);
            await sectionNavs.assertNavLinkTextByIndex('Shops' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Applications' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Vendor SignUp Form' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Shops Settings' , 3);
            await sectionNavs.assertNavLinkTextByIndex('Shop Categories' , 4);
            await sectionNavs.assertNavLinkTextByIndex('Taxes & Fees' , 5);

        });

        //PORTAL
        it('should assert sub nav links on Shops Management -> Shops Settings page',async function () {

            sectionNavs = new SectionsNavs(driver);
            shopsPage = new ShopsPage(driver)
            await shopsPage.openShopsPageDirectly(eventId);
            await sectionNavs.clickNavByText("Shops Settings");
            await sectionNavs.assertSectionSubNavsCount(2);
            await sectionNavs.assertSubNavLinkTextByIndex('Taxes & Fees' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Shop Tickets' , 1);

        });

        //PORTAL
        it('should assert table headers on Shop Tickets page',async function () {

            shopTickets = new ShopTickets(driver)
            await shopTickets.openShopsTicketsDirectly(eventId);
            await shopTickets.assertShopTicketsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Shop Tickets page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopTickets = new ShopTickets(driver)
            await shopTickets.openShopsTicketsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Shop Tickets page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopTickets = new ShopTickets(driver)
            await shopTickets.openShopsTicketsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Shop Tickets page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shopTickets = new ShopTickets(driver)
            await shopTickets.openShopsTicketsDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Item Type");

        });

        it('should assert table headers on Partners page',async function () {

            partnersPage = new PartnersPage(driver)
            await partnersPage.openPartnersPageDirectly(eventId);
            await partnersPage.assertPartnersTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Partners page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            partnersPage = new PartnersPage(driver)
            await partnersPage.openPartnersPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Partners page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            partnersPage = new PartnersPage(driver)
            await partnersPage.openPartnersPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Partners page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            partnersPage = new PartnersPage(driver)
            await partnersPage.openPartnersPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Type");

        });

        it('should assert table headers on Partners contracts page',async function () {

            contractsPage = new ContractsPage(driver);
            await contractsPage.openPartnersContactsPageDirectly(eventId);
            await contractsPage.assertPartnersContractsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Partners contracts page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            contractsPage = new ContractsPage(driver);
            await contractsPage.openPartnersContactsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Partners contracts page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            contractsPage = new ContractsPage(driver);
            await contractsPage.openPartnersContactsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Partners contracts page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            contractsPage = new ContractsPage(driver);
            await contractsPage.openPartnersContactsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Type");

        });

        it('should assert table headers on Vendors Settings page',async function () {
            vendorSettings = new VendorSpecificSettingsPage(driver);
            await vendorSettings.openVendorSettingsPageDirectly(eventId);
            await vendorSettings.clickOnVendorSpecificSettings();
            await vendorSettings.assertVendorsSettingsTableHeadersNames();

        });

        //PORTAL
        it('should assert nav links on Partners Management page',async function () {

            sectionNavs = new SectionsNavs(driver);
            partnersPage = new PartnersPage(driver)
            await partnersPage.openPartnersPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(4);
            await sectionNavs.assertNavLinkTextByIndex('Partners' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Contracts' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Application' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Settings' , 3);

        });

        //PORTAL
        it('should assert sub nav links on Partners Management -> Shops Settings page',async function () {

            sectionNavs = new SectionsNavs(driver);
            vendorSettings = new VendorSpecificSettingsPage(driver);
            await vendorSettings.openVendorSettingsPageDirectly(eventId);
            await sectionNavs.assertSectionSubNavsCount(2);
            await sectionNavs.assertSubNavLinkTextByIndex('General Settings' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Vendor Specific Settings' , 1);

        });

        it('should assert table headers on Staff page',async function () {

            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await staffPage.assertStaffTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Staff page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Staff page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Staff page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Email");

        });

        it('should assert table headers on Shifts page',async function () {

            shiftsPage = new ShiftsPage(driver);
            await shiftsPage.openShiftsPageDirectly(eventId);
            await shiftsPage.assertShiftsTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Shifts page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shiftsPage = new ShiftsPage(driver);
            await shiftsPage.openShiftsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Shifts page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shiftsPage = new ShiftsPage(driver);
            await shiftsPage.openShiftsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Shifts page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            shiftsPage = new ShiftsPage(driver);
            await shiftsPage.openShiftsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Positions");

        });

        //PORTAL
        it('should assert nav links on Staff Management page',async function () {

            sectionNavs = new SectionsNavs(driver);
            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(5);
            await sectionNavs.assertNavLinkTextByIndex('Staff' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Shifts' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Calendar' , 2);
            await sectionNavs.assertNavLinkTextByIndex('Applications' , 3);
            await sectionNavs.assertNavLinkTextByIndex('Settings' , 4);

        });

        //PORTAL
        it('should assert sub nav links on Staff Management -> Settings page',async function () {

            sectionNavs = new SectionsNavs(driver);
            staffPage = new StaffPage(driver);
            await staffPage.openStaffPageDirectly(eventId);
            await sectionNavs.clickNavByText("Settings");
            await sectionNavs.assertSectionSubNavsCount(6);
            await sectionNavs.assertSubNavLinkTextByIndex('Staff Sourcing Settings' , 0);
            await sectionNavs.assertSubNavLinkTextByIndex('Staff Management Settings' , 1);
            await sectionNavs.assertSubNavLinkTextByIndex('Roles & Levels' , 2);
            await sectionNavs.assertSubNavLinkTextByIndex('Sign-Up Settings' , 3);
            await sectionNavs.assertSubNavLinkTextByIndex('Applications' , 4);
            await sectionNavs.assertSubNavLinkTextByIndex('Event Access' , 5);

        });

        it('should assert table headers on Event Marketing(email) page',async function () {

            emailMarketing = new EmailMarketingPage(driver);
            await emailMarketing.openEmailMarketingPageDirectly(eventId);
            await emailMarketing.assertEmailMarketingPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Event Marketing(email) page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            emailMarketing = new EmailMarketingPage(driver);
            await emailMarketing.openEmailMarketingPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Event Marketing(email) page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            emailMarketing = new EmailMarketingPage(driver);
            await emailMarketing.openEmailMarketingPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Event Marketing(email) page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            emailMarketing = new EmailMarketingPage(driver);
            await emailMarketing.openEmailMarketingPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Sent");

        });
        

        //PORTAL
        it('should assert nav links on Event Marketing Activity (Email) page',async function () {

            sectionNavs = new SectionsNavs(driver);
            emailMarketing = new EmailMarketingPage(driver);
            await emailMarketing.openEmailMarketingPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(1);
            await sectionNavs.assertNavLinkTextByIndex('Email' , 0);

        });

        it('should assert table headers on Customer Engagement (Notification) page',async function () {

            notification = new NotificationPage(driver);
            await notification.openNotificationPageDirectly(eventId);
            await notification.assertNotificationPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Customer Engagement (Notification) page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            notification = new NotificationPage(driver);
            await notification.openNotificationPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Customer Engagement (Notification) page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            notification = new NotificationPage(driver);
            await notification.openNotificationPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Customer Engagement (Notification) page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            notification = new NotificationPage(driver);
            await notification.openNotificationPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Type");

        });

        //PORTAL
        it('should assert nav links on Customer Engagement Activity (Notification) page',async function () {

            sectionNavs = new SectionsNavs(driver);
            notification = new NotificationPage(driver);
            await notification.openNotificationPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(1);
            await sectionNavs.assertNavLinkTextByIndex('Notification' , 0);

        });

        it('should assert table headers on Feedbacks page',async function () {

            feedbacks = new FeedbacksPage(driver);
            await feedbacks.openFeedbackPageDirectly(eventId);
            await feedbacks.assertFeedbackPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Feedbacks page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            feedbacks = new FeedbacksPage(driver);
            await feedbacks.openFeedbackPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Feedbacks page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            feedbacks = new FeedbacksPage(driver);
            await feedbacks.openFeedbackPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Feedbacks page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            feedbacks = new FeedbacksPage(driver);
            await feedbacks.openFeedbackPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Description");

        });

        it('should assert table headers on Pending Disputes page',async function () {

            pendingDisputes = new PendingDisputesPage(driver);
            await pendingDisputes.openPendingDisputesPageDirectly(eventId);
            await pendingDisputes.assertPendingDisputesPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Pending Disputes page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            pendingDisputes = new PendingDisputesPage(driver);
            await pendingDisputes.openPendingDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Pending Disputes page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            pendingDisputes = new PendingDisputesPage(driver);
            await pendingDisputes.openPendingDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Pending Disputes page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            pendingDisputes = new PendingDisputesPage(driver);
            await pendingDisputes.openPendingDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Raised By");

        });

        it('should assert table headers on Settled Disputes page',async function () {

            settledDisputes = new SettledDisputesPage(driver);
            await settledDisputes.openSettledDisputesPageDirectly(eventId);
            await settledDisputes.assertSettledDisputesPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Settled Disputes page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            settledDisputes = new SettledDisputesPage(driver);
            await settledDisputes.openSettledDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Settled Disputes page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            settledDisputes = new SettledDisputesPage(driver);
            await settledDisputes.openSettledDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Settled Disputes page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            settledDisputes = new SettledDisputesPage(driver);
            await settledDisputes.openSettledDisputesPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Raised By");

        });

        //PORTAL
        it('should assert nav links on Resolution Center page',async function () {

            sectionNavs = new SectionsNavs(driver);
            feedbacks = new FeedbacksPage(driver);
            await feedbacks.openFeedbackPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(3);
            await sectionNavs.assertNavLinkTextByIndex('Feedbacks' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Pending Disputes' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Settled Disputes' , 2);

        });

        it('should assert table headers on Support Tickets page',async function () {

            supportTickets = new SupportTicketsPage(driver);
            await supportTickets.openSupportTicketsPageDirectly(eventId);
            await supportTickets.assertSupportTicketsPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Support Tickets page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            supportTickets = new SupportTicketsPage(driver);
            await supportTickets.openSupportTicketsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Support Tickets page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            supportTickets = new SupportTicketsPage(driver);
            await supportTickets.openSupportTicketsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Support Tickets page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            supportTickets = new SupportTicketsPage(driver);
            await supportTickets.openSupportTicketsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Submitted Date");

        });

        it('should assert table headers on Feature Requests page',async function () {

            featureRequests = new FeatureRequestPage(driver);
            await featureRequests.openFeatureRequestPageDirectly(eventId);
            await featureRequests.assertFeatureRequestPageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Feature Requests page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            featureRequests = new FeatureRequestPage(driver);
            await featureRequests.openFeatureRequestPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Feature Requests page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            featureRequests = new FeatureRequestPage(driver);
            await featureRequests.openFeatureRequestPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Feature Requests page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            featureRequests = new FeatureRequestPage(driver);
            await featureRequests.openFeatureRequestPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Submitted Date");

        });

        it('should assert table headers on Professional Services page',async function () {

            professionalService = new ProfessionalServicePage(driver);
            await professionalService.openProfessionalServicePageDirectly(eventId);
            await professionalService.assertProfessionalServicePageTableHeadersNames();

        });

        //PORTAL
        it('should assert table columns order change on Professional Services page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            professionalService = new ProfessionalServicePage(driver);
            await professionalService.openProfessionalServicePageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Professional Services page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            professionalService = new ProfessionalServicePage(driver);
            await professionalService.openProfessionalServicePageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Professional Services page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            professionalService = new ProfessionalServicePage(driver);
            await professionalService.openProfessionalServicePageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Service Name");

        });

        //PORTAL
        it('should assert nav links on Upped Support page',async function () {

            sectionNavs = new SectionsNavs(driver);
            supportTickets = new SupportTicketsPage(driver);
            await supportTickets.openSupportTicketsPageDirectly(eventId);
            await sectionNavs.assertNavLinksCount(3);
            await sectionNavs.assertNavLinkTextByIndex('Support Tickets' , 0);
            await sectionNavs.assertNavLinkTextByIndex('Feature Requests' , 1);
            await sectionNavs.assertNavLinkTextByIndex('Professional Service' , 2);

        });

        it('should assert table headers on Promotions page',async function () {

            promotions = new PromotionsPage(driver);
            await promotions.openPromotionsPageDirectly(eventId);
            await promotions.assertElementsOnPromotionsPageWhenNoPromotions();

        });

        //PORTAL
        it('should assert table columns order change on Promotions page',async function () {
            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            promotions = new PromotionsPage(driver);
            await promotions.openPromotionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.returnColumnOptionsHeadersAfterOrderChange(3,1);

        });

        //PORTAL
        it('should remove column and assert table columns change on Promotions page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            promotions = new PromotionsPage(driver);
            await promotions.openPromotionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(3);

        });

        //PORTAL
        it('should remove and return column and assert table columns change on Promotions page',async function () {

            options = new FilteringOptions(driver)
            table = new TableComponent(driver)
            promotions = new PromotionsPage(driver);
            await promotions.openPromotionsPageDirectly(eventId);
            await options.clickAddColumnButton();
            await table.assertColumnIsRemoved(1);
            await options.clickAddColumnButton();
            await table.returnTheRemovedColumnAndAssertChange("Ticket Name");

        });

        
    });

    
