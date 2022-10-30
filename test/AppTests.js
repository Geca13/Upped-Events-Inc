    const { Builder } = require('selenium-webdriver');
    const MainAppPage = require('../app/MainAppPage');
    const AppLogin = require('../app/AppLogin');
    const AllowLocationModal = require('../app/appModals/AllowLocationModal')

    describe('App', function (){
    this.timeout(120000);
    let driver;
    const desiredCaps = {
        "deviceName": "sdk_gphone64_x86_64",
        "udid": "emulator-5554",
        "platformName": "Android",
        "platformVersion": "12",
        "appPackage": "com.upped.test",
        "appActivity": "com.upped.test.MainActivity",
        "appium:connectHardwareKeyboard":true,
        "browserName": '',

    };

    beforeEach(async function(){
         driver = await new Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    });

    afterEach(async function(){
        await driver.quit()
    })

    it('Should login with email and password on the app', async function (){
        let main = new MainAppPage(driver);
        let appLogin = new AppLogin(driver);
        let allowLocation = new AllowLocationModal(driver);
        await main.mainPageIsLoaded();
        await main.clickLoginButton();
        await appLogin.loginToApp();
        await allowLocation.clickWhileUsingAppOption();
        await allowLocation.clickOn5secondsIfButtonIsStillPresent();

    });

    /*it('Should login with facebook and make a donation and purchase with saved card', async function (){

    });*/
})