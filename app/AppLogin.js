    const BasePage = require('../BasePage')
    const AllowLocationModal = require('../app/appModals/AllowLocationModal')
    const EMAIL_INPUT = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText"}
    const PASSWORD_INPUT = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText"}
    const LOGIN_BUTTON = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View[4]/android.widget.Button"}

    class AppLogin extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async loginToApp(){
            await this.timeout(2000);
            await this.click(EMAIL_INPUT)
            await this.sentKeys(EMAIL_INPUT, "parma15@parma.it");
            await this.timeout(500);
            await this.click(PASSWORD_INPUT)
            await this.timeout(500);
            await this.sentKeys(PASSWORD_INPUT, "Pero1234");
            await this.timeout(500);
            await this.click(LOGIN_BUTTON);
            await this.timeout(5000);
        }
    }
    module.exports = AppLogin