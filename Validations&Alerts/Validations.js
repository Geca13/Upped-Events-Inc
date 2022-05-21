    const BasePage = require('../BasePage')
    const FIRST_NAME_VALIDATION_MESSAGE = { xpath: "//*[text()=' First name is required ']"}
    const LAST_NAME_VALIDATION_MESSAGE = { xpath: "//*[text()=' Last name is required ']"}
    const EMAIL_VALIDATION_MESSAGE = { xpath: "//*[text()=' Email is required ']"}
    const EMAIL_INVALID_VALIDATION_MESSAGE = { xpath: "//*[text()=' Email is invalid ']"}
    const GENDER_VALIDATION_MESSAGE = { xpath: "//*[text()=' Gender is required ']"}
    const DOB_VALIDATION_MESSAGE = { xpath: "//*[text()=' Date of birth is required ']"}
    const PASSWORD_VALIDATION_MESSAGE = { xpath: "//*[text()=' Password is required ']"}
    const VERIFY_PASSWORD_VALIDATION_MESSAGE = { xpath: "//*[text()=' Verify password is required ']"}
    const PASSWORD_LENGTH_VALIDATION_MESSAGE = { xpath: "//*[text()=' Password must have at least 6 characters ']"}
    const PASSWORD_REQUIRED_CHARS_VALIDATION_MESSAGE = { xpath: "//*[text()=' Password must have one small one capital letter and one number ']"}
    const VALIDATION_MESSAGES_HOLDER = { className: 'error-block'};

    class Validations extends BasePage {

    constructor(driver){
        super(driver);
         }

         async firstNameInputValidationIsDisplayed(){
            await this.isDisplayed(FIRST_NAME_VALIDATION_MESSAGE,5000)
         }

        async lastNameInputValidationIsDisplayed(){
            await this.isDisplayed(LAST_NAME_VALIDATION_MESSAGE,5000)
        }

        async emailInputValidationIsDisplayed(){
            await this.isDisplayed(EMAIL_VALIDATION_MESSAGE,5000)
        }

        async emailInvalidValidationIsDisplayed(){
            await this.isDisplayed(EMAIL_INVALID_VALIDATION_MESSAGE,5000)
        }

        async genderSelectValidationIsDisplayed(){
            await this.isDisplayed(GENDER_VALIDATION_MESSAGE,5000)
        }

        async dateOfBirthInputValidationIsDisplayed(){
            await this.isDisplayed(DOB_VALIDATION_MESSAGE,5000)
        }

        async passwordInputValidationIsDisplayed(){
            await this.isDisplayed(PASSWORD_VALIDATION_MESSAGE,5000)
        }

        async verifyPasswordInputValidationIsDisplayed(){
            await this.isDisplayed(VERIFY_PASSWORD_VALIDATION_MESSAGE,5000)
        }

        async passwordInputLengthValidationIsDisplayed(){
            await this.isDisplayed(PASSWORD_LENGTH_VALIDATION_MESSAGE,5000)
        }

        async passwordInputRegexValidationIsDisplayed(){
            await this.isDisplayed(PASSWORD_REQUIRED_CHARS_VALIDATION_MESSAGE,5000)
        }

        async allValidationsAreDisplayed(){
            await this.firstNameInputValidationIsDisplayed();
            await this.lastNameInputValidationIsDisplayed();
            await this.emailInputValidationIsDisplayed();
            await this.genderSelectValidationIsDisplayed();
            await this.dateOfBirthInputValidationIsDisplayed();
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreDisplayedExceptFirstName(){
            await this.lastNameInputValidationIsDisplayed();
            await this.emailInputValidationIsDisplayed();
            await this.genderSelectValidationIsDisplayed();
            await this.dateOfBirthInputValidationIsDisplayed();
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreDisplayedExceptFirstNameAndLastName(){
            await this.emailInputValidationIsDisplayed();
            await this.genderSelectValidationIsDisplayed();
            await this.dateOfBirthInputValidationIsDisplayed();
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreDisplayedExceptFirstLastNameAndEmail(){
            await this.genderSelectValidationIsDisplayed();
            await this.dateOfBirthInputValidationIsDisplayed();
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreNotDisplayedExceptDobPasswordAndVerifyPassword(){
            await this.dateOfBirthInputValidationIsDisplayed();
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreNotDisplayedExceptPasswordAndVerifyPassword(){
            await this.passwordInputValidationIsDisplayed();
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async allValidationsAreNotDisplayedExceptVerifyPassword(){
            await this.verifyPasswordInputValidationIsDisplayed()
        }
        async validationMessagesCount(){
           let messages = await this.findAll(VALIDATION_MESSAGES_HOLDER);
           return messages.length
        }

    }
    module.exports = Validations;