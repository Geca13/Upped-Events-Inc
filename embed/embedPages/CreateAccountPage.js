    const BasePage = require("../../BasePage");
    const Alerts = require("../../Validations&Alerts/Alerts");
    const FIRST_NAME_INPUT = { id: 'firstName'}
    const LAST_NAME_INPUT = { id: 'lastName'}
    const EMAIL_INPUT = { id: 'email'}
    const GENDER_SELECT = { id: 'gender'}
    const GENDER_MALE_OPTION = { xpath: "//option[@value='Male']"}
    const GENDER_FEMALE_OPTION = { xpath: "//option[@value='Female']"}
    const DOB_INPUT = { id: 'dob'}
    const PASSWORD_INPUT = { id: 'password'}
    const VERIFY_PASSWORD_INPUT = { name:'confirmPassword'}
    const AGREE_TERMS_CHECKBOX = { id: "termsCheckbox" }
    const CREATE_ACCOUNT_BUTTON = { xpath: "//*[text()=' Create Account ']"}
    const EMAIL_IS_INVALID_MESSAGE = {  xpath: "//*[text()=' Email is invalid ']" }



    class CreateAccountPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isOnCreateAccountEmbedPage(){
            await this.isDisplayed(FIRST_NAME_INPUT, 5000);
            await this.timeout(500);
        }

        async createAccountOnEmbed(firstName,lastName,email,password){
            await this.isOnCreateAccountEmbedPage();
            await this.sentKeys(FIRST_NAME_INPUT, firstName);
            await this.sentKeys(LAST_NAME_INPUT, lastName);
            await this.sentKeys(EMAIL_INPUT, email);
            await this.click(GENDER_SELECT);
            await this.timeout(500)
            await this.click(GENDER_MALE_OPTION);
            await this.sentKeys(DOB_INPUT, '11112000');
            await this.sentKeys(PASSWORD_INPUT, password);
            await this.sentKeys(VERIFY_PASSWORD_INPUT, password);
            await this.click(AGREE_TERMS_CHECKBOX);
            await this.timeout(1500);
            await this.click(CREATE_ACCOUNT_BUTTON);
            await this.timeout(1500);
            //let alert = new Alerts(this.driver);
            //await alert.successAlertIsDisplayed("Thank you for creating your account. A verification email has been sent to your email address. Please check your spam folder!")

        }
    }
    module.exports = CreateAccountPage;