const { Builder } = require('selenium-webdriver');
const EmbedMainPage = require('../embed/embedPages/EmbedMainPage');
const TicketsComponent = require('../embed/embedComponents/TicketsComponent');
const SummaryComponent = require('../embed/embedComponents/SummaryComponent');
const LoginPage = require('../embed/embedPages/LoginPage');
const ExtrasPage = require('../embed/embedPages/ExtrasPage');
const PaymentPage = require('../embed/embedPages/PaymentPage');
const EmbedOrderDetailsPage = require('../embed/embedPages/EmbedOrderDetailsPage')
const ConfirmPage = require('../embed/embedPages/ConfirmPage');
const NewCardComponent = require('../microsites/micrositesComponents/NewCardComponent')
const DonationComponent = require('../microsites/micrositesComponents/DonationComponent')

describe('Embed', function (){

    this.timeout(30000);
    let driver;
    let main;
    let tickets;
    let summary;
    let login;
    let extras;
    let payment;
    let orderDetails;
    let newCardComponent;
    let confirm;
    let originalWindow;
    let eventName = "7-13-4:59:25"
    let base = "491116"
    let donate;

    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        main = new EmbedMainPage(driver);
        tickets = new TicketsComponent(driver);
        summary = new SummaryComponent(driver);
        login = new LoginPage(driver);
        extras = new ExtrasPage(driver);
        payment = new PaymentPage(driver);
        orderDetails = new EmbedOrderDetailsPage(driver);
        newCardComponent = new NewCardComponent(driver);
        donate = new DonationComponent(driver);
        confirm = new ConfirmPage(driver);
        await main.openEmbedPage();
        originalWindow =  driver.getWindowHandle();

        await main.switchToIframe();
        await main.isInFrame(eventName);
    });

    afterEach(async function(){
        await driver.quit()
    })

    it('Should login with facebook and make a purchase with saved card', async function (){
       await tickets.sentKeysToTicketInput(1, 2)
       await tickets.sentKeysToTicketInput(2, 2)
       await main.nextButtonIsVisible();
       await main.clickNextPageButton();
       await login.isAtLoginPage();
       await driver.sleep(1000);
       await login.completeSwitchTo()
       await login.isAtFacebookPage();
       await login.completeSignInWithFacebook();
       await driver.switchTo().window(originalWindow);
       await driver.sleep(7000);
       await main.switchToIframe();
       await main.nextButtonIsVisible();
       await main.clickTicketTermsCheckbox();
       await main.clickNextPageButton();
       await extras.isAtExtrasPage();
       await main.clickNextPageButton();
       await payment.isAtPaymentPage();
       await payment.clickSavedCardByIndex(0);
       await payment.clickConfirmPaymentButton();
       //await newCardComponent.isAtNewCardTab();
       //await newCardComponent.fillNewCardWithValidData();
       //await payment.clickPayWithCardButton();
       await orderDetails.isOnOrderDetailsPage();
       await orderDetails.clickPlaceOrderButton();
       await confirm.isAtConfirmPage();
       await confirm.goBackToStartPage();
       await main.nextButtonIsVisible();
       await driver.sleep(5000);
    });

    it('Should login with facebook and make a donation and purchase with saved card', async function (){
        await tickets.sentKeysToTicketInput(1, 1)
        await tickets.sentKeysToTicketInput(2, 2)
        await main.nextButtonIsVisible();
        await main.clickNextPageButton();
        await login.isAtLoginPage();
        await driver.sleep(1000);
        await login.completeSwitchTo()
        await login.isAtFacebookPage();
        await login.completeSignInWithFacebook();
        await driver.switchTo().window(originalWindow);
        await driver.sleep(7000);
        await main.switchToIframe();
        await main.nextButtonIsVisible();
        //await tickets.confirmEnteredValuesBeforeLogin();
        await main.clickTicketTermsCheckbox();
        await main.clickNextPageButton();
        await extras.isAtExtrasPage();
        await summary.calculateSubtotalAndTotalBeforeDonationIsAdded();
        await donate.click$35DonationButton();
        await donate.clickAddDonationToOrderButton();
        await summary.donationIsDisplayed();
        await summary.calculateSubtotalAndTotalAfterDonationIsAdded();
        await main.clickNextPageButton();
        await payment.isAtPaymentPage();
        await payment.clickSavedCardByIndex(0);
        await payment.clickConfirmPaymentButton();
        await orderDetails.isOnOrderDetailsPage();
        await orderDetails.clickPlaceOrderButton();
        await confirm.isAtConfirmPage();
        await confirm.goBackToStartPage();
        await main.nextButtonIsVisible();
        await driver.sleep(5000);
    });
})