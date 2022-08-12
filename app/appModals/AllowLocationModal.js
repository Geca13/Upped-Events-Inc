    const BasePage = require('../../BasePage')

    const MODAL_HEADER_ICON = { id: "com.android.permissioncontroller:id/permission_icon"}
    const MODAL_HEADER = { id: "com.android.permissioncontroller:id/permission_message"}
    const MAP = { id: "com.android.permissioncontroller:id/permission_location_accuracy_coarse_only"}
    const WHILE_USING = { id: "com.android.permissioncontroller:id/permission_allow_foreground_only_button"}
    const ONLY_ONCE = { id: "com.android.permissioncontroller:id/permission_allow_one_time_button"}
    const DONT_ALLOW = { id: "com.android.permissioncontroller:id/permission_deny_button"};
    const ENABLE_LOCATIONS_BUTTON = { xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.Button" }


    class AllowLocationModal extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async clickWhileUsingAppOption(){
            await this.click(WHILE_USING);
            await this.timeout(5000)
        }

        async clickOn5secondsIfButtonIsStillPresent(){
            let locationButton = await this.findAll(ENABLE_LOCATIONS_BUTTON);
            if(locationButton.length > 0 ){
                await this.click(ENABLE_LOCATIONS_BUTTON);
                await this.timeout(1000);
                await this.clickOn5secondsIfButtonIsStillPresent();
                await this.timeout(1000);
            }
        }

    }
    module.exports = AllowLocationModal