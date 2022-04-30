    const BasePage = require("../../BasePage");
    const SECTIONS_TITLES = { className: 'title' }; //list
    const GOOGLE_SIGN_IN_BUTTON = { className: 'google-login' };
    const FACEBOOK_SIGN_IN_BUTTON = { className: 'facebook-login' };
    const SECTION_SUBTITLES = { className: 'subtitle' }; //list
    const ROWS = { className: 'row' }; //list
    const LOGIN_SECTIONS = { className: 'mt-3' };
    const LOGIN_BUTTON = { className: 'login-btn' };
    const FORGOT_PASS_BUTTON = { className: 'forgot-btn' };
    const SIGN_UP_BUTTON = { className: 'signup-btn' };
    const EMAIL_INPUT = { css: "input[formControlName=email]"};
    const PASSWORD_INPUT = { xpath: "//input[@type='password']"};
    const PLEASE_LOGIN_TITLE = { xpath: "//*[text()='Please Login to Continue']"};


    class LoginTab extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }

    module.exports = LoginTab;