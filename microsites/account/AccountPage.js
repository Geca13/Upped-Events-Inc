    const BasePage = require('../../BasePage');
    const assert = require("assert");
    const EditProfilePage = require('../account/EditProfilePage')
    const ACCOUNT_HEADER = { xpath: "//h4[contains(@class, 'title')]" };
    const MY_PURCHASES_TAB = { xpath: "//a[@ng-reflect-router-link='purchases']"};
    const MY_WISHLIST_TAB = { xpath: "//a[@ng-reflect-router-link='wishlist']"};
    const MY_WALLET_TAB = { xpath: "//a[@ng-reflect-router-link='wallet']"};
    const EDIT_PROFILE_BUTTON = { xpath: "//a[@routerlink='/account/edit']"};
    const LOG_OFF_BUTTON = { xpath: "//a[@routerlink='/logout']"};
    const PROFILE_LABELS = { xpath: "//div[@class='profile-field']//label" }
    const PROFILE_DATA = { xpath: "//div[@class='profile-field']//span" }
    const PROFILE_FULL_NAME = { xpath: "//div[@class='profile-img']//h5" }
    const PROFILE_IMAGE = { xpath: "//div[@class='profile-img']//img" }

    class AccountPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async accountComponentIsDisplayed(){
            await this.isDisplayed(PROFILE_FULL_NAME,5000)
            await this.timeout(500);
        }

        async verifyDataAfterSignUp(firstName, lastName, email){
            await this.accountComponentIsDisplayed();
            await this.timeout(1000);
            let fullName = await this.getElementText(PROFILE_FULL_NAME);
            let emailLabel = await this.getElementTextFromAnArrayByIndex(PROFILE_LABELS,0);
            let phoneLabel = await this.getElementTextFromAnArrayByIndex(PROFILE_LABELS,1);
            let locationLabel = await this.getElementTextFromAnArrayByIndex(PROFILE_LABELS,2);
            let emailData = await this.getElementTextFromAnArrayByIndex(PROFILE_DATA,0);
            let phoneData = await this.getElementTextFromAnArrayByIndex(PROFILE_DATA,1);
            let locationData = await this.getElementTextFromAnArrayByIndex(PROFILE_DATA,2);
            let editProfileButton = await this.getElementText(EDIT_PROFILE_BUTTON);
            let logoff = await this.getElementText(LOG_OFF_BUTTON);
            let purchases = await this.getElementText(MY_PURCHASES_TAB);
            let wishlist = await this.getElementText(MY_WISHLIST_TAB);
            let wallet = await this.getElementText(MY_WALLET_TAB);
            assert.equal(fullName,firstName + ' ' + lastName);
            assert.equal(emailLabel,'Email Address');
            assert.equal(phoneLabel,"Phone Number");
            assert.equal(locationLabel,"Location");
            assert.equal(emailData,email);
            assert.equal(phoneData,'');
            assert.equal(locationData,'');
            assert.equal(editProfileButton,'Edit Profile');
            assert.equal(logoff,'Log off');
            assert.equal(purchases,'My Purchases');
            assert.equal(wallet,'My Wallet');
            assert.equal(wishlist,'My Wishlist');
            await this.click(EDIT_PROFILE_BUTTON);
            let edit = new EditProfilePage(this.driver)
            await edit.verifyDataOnEditAccountComponentAfterCreatingAccount(firstName, lastName, email);
            await edit.verifyLabelsOnEditForm();
        }

        async updateUserProfile(base){
            await this.accountComponentIsDisplayed();
            await this.click(EDIT_PROFILE_BUTTON);
            let edit = new EditProfilePage(this.driver);
            await edit.updateUserProfileWithValidData(base);
            await this.click(MY_WALLET_TAB)
            await this.timeout(500);
            let phoneData = await this.getElementTextFromAnArrayByIndex(PROFILE_DATA,1);
            let locationData = await this.getElementTextFromAnArrayByIndex(PROFILE_DATA,2);
            assert.equal(phoneData,base.toString() +'1234');
            assert.equal(locationData,base.toString() + 'Main Street');
            await this.click(EDIT_PROFILE_BUTTON);
            await edit.assertMadeChangesAreSavedCorrectly(base);
        }


    }
    module.exports = AccountPage;