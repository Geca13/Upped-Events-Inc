    const BasePage = require('../../BasePage');
    const USER_INPUT = { id: "user_login" }
    const PASS_INPUT = { id: "user_pass" }
    const SUBMIT_INPUT = { id: "wp-submit" }
    const EMBED_MEMORIAL_OPTION = { xpath: "//a[text()='Embed Memorial']"}
    const EMBED_TESTING_DIRECT = { xpath: "//a[text()='Embed Testing Direct']"}
    const EDIT_WITH_ELEMENTOR = { xpath: "//*[text()='Edit with Elementor']"}
    const MIDDLE_OF_EDIT_BLOCK = { className: "ace_line_group" } //list index 7
    const UPDATE_BUTTON = { id: "elementor-panel-saver-button-publish"}
    const EMBED_BAR_TRY_ONE = { xpath: "/html/body/div[2]/div/div/article/div/div/div[1]/section/div[8]/div/div[5]/div[2]/i" } //list index 1
    const { Key } = require("selenium-webdriver");
    const CLASS = { xpath: "elementor-widget-empty-icon" }

    // can't find embed element to click

    class Wordpress extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async openWordpressPage(){
            await this.visit("https://www.uppedevents.com/wp-login.php?redirect_to=https%3A%2F%2Fwww.uppedevents.com%2Fwp-admin%2Fedit.php%3Fs%3Dembed%26post_status%3Dall%26post_type%3Dpage%26action%3D-1%26m%3D0%26seo_filter%26readability_filter%26paged%3D1%26action2%3D-1&reauth=1");
        }

        async loginToWordpress(){
            await this.sentKeys(USER_INPUT, "marjan");
            await this.sentKeys(PASS_INPUT,"T@ne1234");
            await this.click(SUBMIT_INPUT);
            await this.isDisplayed(EMBED_MEMORIAL_OPTION,60000);

            await this.visit("https://www.uppedevents.com/wp-admin/post.php?post=6712&action=elementor");


            /*await this.moveToElement(EMBED_TESTING_DIRECT);
            //await this.driver.sleep(5000);
            //await this.moveToElement(EDIT_WITH_ELEMENTOR);
            await this.isDisplayed(EDIT_WITH_ELEMENTOR,5000);
            await this.click(EDIT_WITH_ELEMENTOR)
            await this.driver.sleep(30000);*/
            await this.isDisplayed(UPDATE_BUTTON,60000);
            await this.driver.sleep(25000)
            await this.click(CLASS)
            await this.driver.sleep(5000);
            await this.clickElementReturnedFromAnArray(MIDDLE_OF_EDIT_BLOCK,7);
            await this.clickElementReturnedFromAnArray(MIDDLE_OF_EDIT_BLOCK,7);
            await this.clickElementReturnedFromAnArray(MIDDLE_OF_EDIT_BLOCK,7);
            await this.clickElementReturnedFromAnArray(MIDDLE_OF_EDIT_BLOCK,7);
            await this.sentKeys(MIDDLE_OF_EDIT_BLOCK, Key.BACK_SPACE);
            await this.driver.sleep(5000);



        }

    }
    module.exports = Wordpress;


