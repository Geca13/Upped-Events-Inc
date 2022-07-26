    const BasePage = require('../../BasePage');
    let Alerts = require('../../Validations&Alerts/Alerts')
    const assert = require("assert");
    const FIRST_NAME_INPUT = { xpath: "//input[@formcontrolname='first_name']" };
    const LAST_NAME_INPUT = { xpath: "//input[@formcontrolname='last_name']" };
    const EMAIL_INPUT = { xpath: "//input[@formcontrolname='email']" };
    const PASSWORD_INPUT = { xpath: "//input[@formcontrolname='password']" };
    const PHONE_INPUT = { xpath: "//input[@formcontrolname='phone_number']" };
    const ADDRESS_INPUT = { xpath: "//input[@formcontrolname='address']" };
    const ZIP_CODE_INPUT = { xpath: "//input[@formcontrolname='zipcode']" };
    const DOB_INPUT = { xpath: "//input[@formcontrolname='date_of_birth']" };
    const GENDER_SELECT = { xpath: "//select[@formcontrolname='gender']" };
    const GENDER_OPTIONS = { xpath: "//select[@formcontrolname='gender']//option" };
    const COUNTRY_SELECT = { xpath: "//select[@formcontrolname='country_code']" };
    const COUNTRY_OPTIONS = { xpath: "//select[@formcontrolname='country_code']//option" };
    const STATE_SELECT = { xpath: "//select[@formcontrolname='state']" };
    const STATE_OPTIONS = { xpath: "//select[@formcontrolname='state']//option" };
    const CITY_SELECT = { xpath: "//select[@formcontrolname='city']" };
    const CITY_OPTION = { xpath: "//select[@formcontrolname='city']//option" };
    const INPUT_LABELS = { className: "form-label"}
    const SAVE_BUTTON = { xpath: "//button[@type='submit']" }



    class EditProfilePage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnEditProfilePage(){
            await this.isDisplayed(SAVE_BUTTON,5000);
            await this.timeout(500);
        }

        async verifyLabelsOnEditForm(){
            await this.isOnEditProfilePage();
            let firstNameLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 0);
            let lastNameLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 1);
            let emailLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 2);
            let passwordLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 3);
            let genderLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 4);
            let birthLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 5);
            let phoneLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 6);
            let addressLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 7);
            let countryLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 8);
            let stateLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 9);
            let cityLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 10);
            let zipCodeLabel = await this.getElementTextFromAnArrayByIndex(INPUT_LABELS, 11);
            assert.equal(firstNameLabel,'First Name');
            assert.equal(lastNameLabel,'Last Name');
            assert.equal(emailLabel,"Email Address");
            assert.equal(passwordLabel,"Password");
            assert.equal(genderLabel,"Gender");
            assert.equal(birthLabel,'DOB');
            assert.equal(phoneLabel,'Phone');
            assert.equal(addressLabel,'Address');
            assert.equal(countryLabel,'Country');
            assert.equal(stateLabel,'State');
            assert.equal(cityLabel,'City');
            assert.equal(zipCodeLabel,'Zipcode');
        }

        async verifyDataOnEditAccountComponentAfterCreatingAccount(firstName, lastName, email){
            await this.isOnEditProfilePage();
            await this.timeout(3000);
            let firstNameInput = await this.getEnteredTextInTheInput(FIRST_NAME_INPUT);
            let lastNameInput = await this.getEnteredTextInTheInput(LAST_NAME_INPUT);
            let emailInput = await this.getEnteredTextInTheInput(EMAIL_INPUT);
            let passwordInput = await this.getEnteredTextInTheInput(PASSWORD_INPUT);
            let genderInput = await this.getEnteredTextInTheInput(GENDER_SELECT);
            let birthInput = await this.getEnteredTextInTheInput(DOB_INPUT);
            let phoneInput = await this.getEnteredTextInTheInput(PHONE_INPUT);
            let addressInput = await this.getEnteredTextInTheInput(ADDRESS_INPUT);
            let countryInput = await this.getEnteredTextInTheInput(COUNTRY_SELECT);
            let stateInput = await this.getEnteredTextInTheInput(STATE_SELECT);
            let cityInput = await this.getEnteredTextInTheInput(CITY_SELECT);
            let zipCodeInput = await this.getEnteredTextInTheInput(ZIP_CODE_INPUT);
            assert.equal(firstNameInput,firstName);
            assert.equal(lastNameInput,lastName);
            assert.equal(emailInput,email);
            assert.equal(passwordInput,"");
            assert.equal(genderInput,"Male");
            assert.equal(birthInput,'2000-11-11');
            assert.equal(phoneInput,'');
            assert.equal(addressInput,'');
            assert.equal(countryInput,'231');
            assert.equal(stateInput,'');
            assert.equal(cityInput,'');
            assert.equal(zipCodeInput,'');
        }
        async updateUserProfileWithValidData(base){
            await this.timeout(500);
            await this.sentKeys(PHONE_INPUT, base.toString() + '1234')
            await this.timeout(500);
            await this.sentKeys(ADDRESS_INPUT, base.toString() + 'Main Street');
            await this.timeout(500);
            await this.sentKeys(ZIP_CODE_INPUT, base.toString());
            await this.timeout(500);
            await this.click(GENDER_SELECT);
            await this.isDisplayed(GENDER_OPTIONS,5000);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(GENDER_OPTIONS,1);
            await this.timeout(500);
            await this.click(COUNTRY_SELECT)
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(COUNTRY_OPTIONS,2);
            await this.timeout(1000);
            await this.click(COUNTRY_SELECT)
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(COUNTRY_OPTIONS,0);
            await this.timeout(1500);
            await this.click(STATE_SELECT);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(STATE_OPTIONS,4);
            await this.timeout(2500);
            await this.click(CITY_SELECT);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(CITY_OPTION,5);
            await this.click(SAVE_BUTTON);
            let alerts = new Alerts(this.driver);
            await alerts.successAlertIsDisplayed("Profile saved successfully!")
            await this.timeout(1000);

        }

        async assertMadeChangesAreSavedCorrectly(base){
            await this.isDisplayed(GENDER_SELECT,5000);
            await this.timeout(500);
            let genderInput = await this.getEnteredTextInTheInput(GENDER_SELECT);
            let phoneInput = await this.getEnteredTextInTheInput(PHONE_INPUT);
            let addressInput = await this.getEnteredTextInTheInput(ADDRESS_INPUT);
            let stateInput = await this.getEnteredTextInTheInput(STATE_SELECT);
            let cityInput = await this.getEnteredTextInTheInput(CITY_SELECT);
            let zipCodeInput = await this.getEnteredTextInTheInput(ZIP_CODE_INPUT);
            assert.equal(genderInput,"Female");
            assert.equal(phoneInput,base.toString()+'1234');
            assert.equal(addressInput,base.toString() + 'Main Street');
            assert.equal(stateInput,'3924');
            assert.equal(cityInput,'42803');
            assert.equal(zipCodeInput,base.toString());
        }
    }
    module.exports = EditProfilePage;