    const BasePage = require('../BasePage')
    const assert = require('assert')
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
    const VALIDATION_MESSAGES_HOLDER = { xpath: "//div[contains(@class, 'error-block')]"};
    const PASSWORDS_MUST_BE_SAME = { xpath: "//*[text()=' Passwords must be the same ']" };
    const FIRST_NAME_VALIDATION = 'First name is required';
    const LAST_NAME_VALIDATION = 'Last name is required'
    const EMAIL_VALIDATION = 'Email is required';
    const EMAIL_INVALID_VALIDATION = 'Email is invalid';
    const INVALID_EMAIL_VALIDATION = 'Invalid email';
    const GENDER_VALIDATION = 'Gender is required';
    const DOB_VALIDATION = 'Date of birth is required';
    const PASSWORD_VALIDATION = 'Password is required';
    const VERIFY_PASSWORD_VALIDATION = 'Verify password is required';
    const PASSWORD_LENGTH_VALIDATION = 'Password must have at least 6 characters';
    const PASSWORD_REQUIRED_CHARS_VALIDATION = 'Password must have one small one capital letter and one number';


    class MicrositesValidations extends BasePage {

    constructor(driver){
        super(driver);

        }



        async assertValidationMessagesTexts(){
            let firstName = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,0);
            let lastName = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,1);
            let email = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,2);
            let gender = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,3);
            let birth = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,4);
            let password = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,5);
            let confirm = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,6);
            assert.equal(firstName,FIRST_NAME_VALIDATION);
            assert.equal(lastName,"Last name is required");
            assert.equal(email,"Email is required");
            assert.equal(gender,"Gender is required");
            assert.equal(birth,"Date of birth is required");
            assert.equal(password,"Password is required");
            assert.equal(confirm,"Verify password is required");
        }

        async passwordsNotSameIsDisplayed(){
            await this.isDisplayed(PASSWORDS_MUST_BE_SAME,5000)
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
            await this.timeout(500);
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

        async getValidationErrorText(){
            return await this.getElementText(VALIDATION_MESSAGES_HOLDER);
        }

        async passwordAndEmailValidationsAreShownOnSignInModal(){
            await this.isDisplayed(VALIDATION_MESSAGES_HOLDER,5000);
            await this.timeout(500);
            let email = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,0);
            let pass = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,1);
            assert.equal(email,EMAIL_VALIDATION);
            assert.equal(pass,PASSWORD_VALIDATION);
        }

        async invalidEmailShownOnSignInModal(){
            await this.isDisplayed(VALIDATION_MESSAGES_HOLDER,5000);
            await this.timeout(500);
            let email = await this.getElementTextFromAnArrayByIndex(VALIDATION_MESSAGES_HOLDER,0);
            assert.equal(email,INVALID_EMAIL_VALIDATION);
        }


    }
    module.exports = MicrositesValidations;