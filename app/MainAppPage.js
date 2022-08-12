const BasePage = require('../BasePage')
const CREATE_ACCOUNT_BUTTON = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[2]/android.widget.Button"}
const LOGIN_BUTTON = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View[1]/android.widget.Button"}

class MainAppPage extends BasePage{
    constructor(driver) {
        super(driver);
    }

    async mainPageIsLoaded(){
        await this.isDisplayed(LOGIN_BUTTON);
        await this.timeout(5000)

    }
    async clickLoginButton(){
        await this.click(LOGIN_BUTTON);
        await this.timeout(5000)
    }
}
module.exports = MainAppPage