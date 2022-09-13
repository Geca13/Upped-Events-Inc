    const BasePage = require('../../BasePage');
    const MAP_AND_AGENDA_HEADER = { xpath: "//*[text()='Map and Agenda']"}
    const EVENT_MAP_NAV = { xpath: "//*[text()='Event Map']"}
    const SCHEDULE_NAV = { xpath: "//*[text()='Schedule']"}
    const PERFORMANCES_NAV = { xpath: "//*[text()='Performances']"}
    const ACTIVITIES_NAV = { xpath: "//*[text()='Activities']"}


    class MapAndAgendaNavs extends BasePage {
        constructor(driver) {
            super(driver);
        }
        async mapAndAgendaHeaderIsDisplayed(){
            await this.isDisplayed(MAP_AND_AGENDA_HEADER,5000)
        }
        async eventMapNavIsDisplayed(){
            await this.isDisplayed(EVENT_MAP_NAV,5000)
        }
        async scheduleNavIsDisplayed(){
            await this.isDisplayed(SCHEDULE_NAV,5000)
        }
        async performancesNavIsDisplayed(){
            await this.isDisplayed(PERFORMANCES_NAV,5000)
        }
        async activitiesNavIsDisplayed(){
            await this.isDisplayed(ACTIVITIES_NAV,5000)
        }
        async clickEventMapNav(){
            await this.click(EVENT_MAP_NAV)
        }
        async clickScheduleNav(){
            await this.click(SCHEDULE_NAV)
        }
        async clickPerformancesNav(){
            await this.click(PERFORMANCES_NAV)
        }
        async clickActivitiesNav(){
            await this.click(ACTIVITIES_NAV)
        }



    }
    module.exports = MapAndAgendaNavs;