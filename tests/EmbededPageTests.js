const { Builder } = require('selenium-webdriver');
const EmbedMainPage = require('../embed/embedPages/EmbedMainPage')
const TicketsComponent = require('../embed/embedComponents/TicketsComponent')
const LoginPage = require('../embed/embedPages/LoginPage');
const ExtrasPage = require('../embed/embedPages/ExtrasPage');
const PaymentPage = require('../embed/embedPages/PaymentPage');
const ConfirmPage = require('../embed/embedPages/ConfirmPage');
const NewCardComponent = require('../microsites/micrositesComponents/NewCardComponent')

describe('Embed', function (){

    this.timeout(60000);
    let driver;
    let main;
    let tickets;
    let login;
    let extras;
    let payment;
    let newCardComponent;
    let confirm;
    let originalWindow;

    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        main = new EmbedMainPage(driver);
        tickets = new TicketsComponent(driver);
        login = new LoginPage(driver);
        extras = new ExtrasPage(driver);
        payment = new PaymentPage(driver);
        newCardComponent = new NewCardComponent(driver);
        confirm = new ConfirmPage(driver);
        await main.openEmbedPage();
        originalWindow =  driver.getWindowHandle();
        await main.switchToIframe();
        await main.isInFrame();
    });

    afterEach(async function(){
        await driver.quit()
    })

    it('opens embed component and makes a switch', async function (){
       await tickets.sentKeysToTicketInput(1, 2)
       await tickets.sentKeysToTicketInput(2, 2)
       await main.clickNextPageButton();
       await login.isAtLoginPage();
       await driver.sleep(1000);
       await login.completeSwitchTo()
       await login.isAtFacebookPage();
       await login.completeSignInWithFacebook();
       await driver.switchTo().window(originalWindow);
       await driver.sleep(5000);
       await main.switchToIframe();
       await main.nextButtonIsVisible();
       await main.clickNextPageButton();
       await extras.isAtExtrasPage();
       await main.clickNextPageButton();
       await payment.isAtPaymentPage();
       await payment.clickNewCardTab();
       await newCardComponent.isAtNewCardTab();
       await newCardComponent.fillNewCardWithValidData();
       await newCardComponent.clickSaveCardCheckbox();
       await payment.clickPayWithCardButton();
       await confirm.isAtConfirmPage();


       await driver.sleep(5000);
    })
})