    const BasePage = require('../../BasePage');
    const FACEBOOK_SIGN_IN_BUTTON = { className: "facebook-login"}
    const FACEBOOK_EMAIL_INPUT = { id: 'email' }
    const FACEBOOK_PASSWORD_INPUT = { id: 'pass' }
    const FACEBOOK_LOGIN_BUTTON = { name: 'login' }
    const FACEBOOK_CONTENT = { id: 'content' }


    class LoginPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtLoginPage(){
            await this.isDisplayed(FACEBOOK_SIGN_IN_BUTTON, 5000);
        }
        async isAtFacebookPage(){
            await this.isDisplayed(FACEBOOK_CONTENT, 5000);
        }


        async completeSignInWithFacebook(){
            await this.loginWithFacebookEmailAndPassword(FACEBOOK_EMAIL_INPUT, "javageca@gmail.com",FACEBOOK_PASSWORD_INPUT,"Vardar13Negotino",FACEBOOK_LOGIN_BUTTON);
        }


        async completeSwitchTo(){
           await this.switchToFacebookWindow(FACEBOOK_SIGN_IN_BUTTON);
        }





    }
    module.exports = LoginPage;