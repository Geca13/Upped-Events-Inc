    const { Builder, By } = require('selenium-webdriver');
    const EventsPage = require("../microsites/micrositesPages/EventsPage");
    const CreateAccountModal = require("../microsites/micrositesComponents/CreateAccountModal");
    const Inbox = require("../Inbox/Inbox")
    const LoginComponent = require("../microsites/micrositesComponents/LoginComponent")
    const ForgotPasswordModal = require("../microsites/micrositesComponents/ForgotPasswordModal")
    const ResetPasswordPage = require("../microsites/micrositesPages/ResetPasswordPage")


   describe('Account', function() {
       this.timeout(500000);
       let driver;
       let events;
       let createAccount;
       let inbox;
       let name;
       let lastName;
       let email;
       let password ;
       let loginCom;
       let forgotPassword;
       let resetPassword;
       let originalWindow;

       beforeEach(async function(){
           driver = await new Builder().forBrowser('chrome').build();
           await driver.manage().window().maximize();
       });

       afterEach(async function(){
           await driver.quit()
       })

       it('should create new account on microsites with username and password, verify and login', async function() {
           events = new EventsPage(driver);
           createAccount = new CreateAccountModal(driver);

           inbox = new Inbox(driver);
           loginCom = new LoginComponent(driver);
           name = await createAccount.createSixNumbersString();
           lastName = await createAccount.createSixNumbersString();
           password = await createAccount.createSixNumbersString() + 'Password';
           email = name + '@' + lastName + '.com';
           originalWindow = inbox.getOriginalWindow();

           await events.load();
           await events.clickSignUpButton();
           await createAccount.firstCreateAccountModalIsDisplayed();
           await createAccount.clickSignUpWithEmailButton();
           await createAccount.secondCreateAccountModalIsDisplayed();
           await createAccount.fillRandomButValidDataAndCreateAccount(name,lastName,email,password);
           await inbox.loadInbox();
           await inbox.elementIsDisplayedInInbox('<'+email+'>');
           await driver.sleep(1000)
           await inbox.findAndClickTheEmailForNewAccount('<'+email+'>');
           await inbox.switchToInboxIFrame();
           await inbox.verifyEmailButtonIsDisplayed();
           await inbox.verifyEmail();
           await driver.sleep(1000)
           await driver.switchTo().defaultContent();
           await loginCom.getNewlyOpenedTab(originalWindow);
           await loginCom.waitPopupToBeLoaded();
           await loginCom.loginAfterVerifyingAccount(password);

        })

       it('Should check for proper validation messages', async function() {
           events = new EventsPage(driver);
           createAccount = new CreateAccountModal(driver);
           await events.load();
           await events.clickSignUpButton();
           await createAccount.firstCreateAccountModalIsDisplayed();
           await createAccount.clickSignUpWithEmailButton();
           await createAccount.secondCreateAccountModalIsDisplayed();
           await createAccount.allValidationsAreShown()
       })

       it('Should display correct validation errors and finally complete forgot password scenario', async function() {
           events = new EventsPage(driver);
           forgotPassword = new ForgotPasswordModal(driver);
           loginCom = new LoginComponent(driver);
           resetPassword = new ResetPasswordPage(driver);
           inbox = new Inbox(driver);
           let email = 'parma100@parma.it';
           originalWindow = inbox.getOriginalWindow();
           await events.load();
           await events.clickSignInButton();
           await forgotPassword.forgetPasswordScenarioWithValidations();
           await inbox.loadInbox();
           await inbox.elementIsDisplayedInInbox('<'+email+'>');
           await driver.sleep(1000);
           await inbox.findAndClickTheEmailForNewAccount('<'+email+'>');
           await inbox.switchToInboxIFrame();
           await inbox.resetPasswordButtonIsDisplayed();
           await inbox.clickResetPasswordButton();
           await driver.sleep(1000);
           await driver.switchTo().defaultContent();
           await loginCom.getNewlyOpenedTab(originalWindow);
           await resetPassword.completeResetPasswordScenarioWithValidations();
       })
   })