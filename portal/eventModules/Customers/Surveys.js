const BasePage = require('../../../BasePage');
const ADD_FORM_BUTTON = { xpath: "//app-event-partner-application//button"}


class Surveys extends BasePage{
    constructor(driver) {
        super(driver);
    }
    async isOnSurveysPage(){
        await this.isDisplayed(ADD_FORM_BUTTON, 5000)
    }
    
}
module.exports = Surveys;