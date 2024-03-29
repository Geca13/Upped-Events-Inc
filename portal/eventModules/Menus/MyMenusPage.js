    const BasePage = require('../../../BasePage');
    const { Key, Keys} = require("selenium-webdriver");
    const assert = require('assert')
    const SetImageModal = require('../../portalModals/SetImageModal');
    const MenuSchedulerPage = require('../Menus/MenuSchedulerPage');
    const TableComponent = require("../../portalComponents/TableComponent");
    const CREATE_NEW_MENU_LINK = { xpath: "//*[text()='Create New Menu']"}
    const MY_MENUS_NAV = { xpath: "//*[text()='My Menus ']"}
    const MENU_NAV = { xpath: "//*[text()='Menu ']"} // IN SHOPS MANAGEMENT
    const MENU_SCHEDULER_NAV = { xpath: "//*[text()='Menu Scheduler']"}
    const ADD_NEW_SECTION_BUTTON = { xpath: "//*[text()='Add New Section ']"}
    const MENU_SECTION = { className:'justify-content-center' }//list
    const MENU_ITEM_FROM_LIST = { xpath: "//div[contains(@class, 'items-listing')]//div[contains(@class, 'cdk-drag')]"} //list
    const MENU_ITEM_FROM_LIST_NAME = { xpath: "//div[@class='items-listing']//h6[@class='title']"} // list
    const MENU_ITEM_IN_SECTION = { xpath: "//div[contains(@class, 'menu-section')]//div[contains(@class, 'cdk-drag')]"} // list
    const MENU_ITEM_FROM_SECTION_NAME = { xpath: "//div[contains(@class, 'menu-section')]//h6[@class='title']"} // list
    const MENU_ITEM_FROM_SECTION_DESCRIPTION = { xpath: "//div[contains(@class, 'menu-section')]//p[contains(@class, 'description')]"} // list
    const MENU_ITEM_FROM_SECTION_PRICE = { xpath: "//div[contains(@class, 'menu-section')]//input[@type='number']"} // list
    const MENU_TITLE_INPUT = { xpath: "//input[@name='menuTitle']" };
    const EDIT_ICON = { className: 'fa-pencil'};
    const SAVE_MENU_NAME_ICON = { className: 'fa-check'};
    const SECTION_TITLE_INPUT = { xpath: "//input[@name='sectionName']" };
    const ADD_NEW_MENU_BUTTON = { xpath: "//button[text()='Add New Menu ']"}
    const ADD_NEW_MENU_ITEM_BUTTON = { xpath: "//*[text()='Add ']"}
    const ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON = { xpath: "//*[text()='Add New Item ']"}
    const MAIN_CATEGORIES_DROPDOWN = { className:'dropdown-menu-right'}
    const TICKET_OPTION = { xpath: "//*[text()='Ticket']"}
    const MERCHANDISE_OPTION = { xpath: "//*[text()='Merchandise']"}
    const FOOD_OPTION = { xpath: "//*[text()='Food']"}
    const BEVERAGE_OPTION = { xpath: "//*[text()='Beverage']"}
    const OTHER_OPTION = { xpath: "//*[text()='Other']"}
    const SERVICE_ACTIVITY_OPTION = { xpath: "//*[text()='Service/Activity']"}
    const NEW_ITEM_NAME_INPUT = { xpath: "//input[@formcontrolname='name']" };
    const NEW_ITEM_PRICE_INPUT = { xpath: "//input[@formcontrolname='price']" };
    const NEW_ITEM_INGREDIENTS_TEXTAREA = { xpath: "//textarea[@formcontrolname='itemIngredients']" };
    const NEW_ITEM_DESCRIPTION_TEXTAREA = { xpath: "//textarea[@formcontrolname='description']" };
    const NEW_ITEM_CATEGORY_DROPDOWN = { xpath: "//select-picker[@formcontrolname='category']" };
    const NEW_ITEM_SUBCATEGORY_DROPDOWN = { xpath: "//select-picker[@formcontrolname='subCategory']" };
    const NEW_ITEM_IMAGE_INPUT = { xpath: "//input[@type='file']" };
    const ADD_SAVE_ITEM_BUTTON = { xpath: "//*[text()='Add Item']"}
    const MENUS = { xpath: "//a[contains(@class, 'menuHref')]"}
    const MENU_ICON = { xpath: "//a[contains(@class, 'icon-dots-wrapper')]"}
    const EDIT_MENU_OPTION = { xpath: "//a[text()=' Edit ']"}
    const DUPLICATE_MENU_OPTION = { xpath: "//a[text()=' Duplicate ']"}
    const DELETE_MENU_OPTION = { xpath: "//a[text()=' Delete ']"}
    const NO_RECORD_MESSAGE = { xpath: "//h5[text()='No record available']"}
    const SECTION_DROPS = { xpath: "//div[contains(@class, 'container')]//div[@cdkdroplistconnectedto='list-2']"}


    const CATEGORY_SUBCATEGORY_DROPDOWNS = { tagName: 'select'}// list
    const BEER_CATEGORY = { xpath: "//*[text()='Beer']"}
    const WINE_CATEGORY = { xpath: "//*[text()='Wine']"}
    const COCKTAIL_CATEGORY = { xpath: "//*[text()='Cocktials & Liquor']"}
    const OTHER_ALC_CATEGORY = { xpath: "//*[text()='Other Alcohol']"}
    const NON_ALC_HOT_CATEGORY = { xpath: "//*[text()='Non-Alc: Hot Drink']"}
    const NON_ALC_COLD_CATEGORY = { xpath: "//*[text()='Non-Alc: Cold']"}
    const MAINS_FOOD_CATEGORY = { xpath: "//*[text()='Mains']"}
    const SNACKS_SIDES_CATEGORY = { xpath: "//*[text()='Snacks & Sides']"}
    const DESSERTS_CATEGORY = { xpath: "//*[text()='Desserts']"}
    const PACKAGED_FOOD_GIFT_CATEGORY = { xpath: "//*[text()='Packaged Foods/Gifts ']"}
    const OTHER_CATEGORY = { xpath: "//*[text()='Other']"}

    const RED_WINE_SUBCATEGORY = { xpath: "//*[text()='Red']"}
    const WHITE_WINE_SUBCATEGORY = { xpath: "//*[text()='White']"}
    const ROSE_WINE_SUBCATEGORY = { xpath: "//*[text()='Rosé']"}
    const SPARKLING_WINE_SUBCATEGORY = { xpath: "//*[text()='Sparkling']"}
    const STOUT_BEER_SUBCATEGORY = { xpath: "//*[text()='Stout']"}
    const IPA_BEER_SUBCATEGORY = { xpath: "//*[text()='IPA']"}
    const PILSNER_BEER_SUBCATEGORY = { xpath: "//*[text()='Pilsner']"}
    const AMBER_BEER_SUBCATEGORY = { xpath: "//*[text()='Amber']"}

    const WHISKEY_SUBCATEGORY = { xpath: "//*[text()='Whiskey']"}

    const MAINS_PASTA_SUBCATEGORY = { xpath: "//*[text()='Grains & Pasta']"}
    const MAINS_MEAT_SUBCATEGORY = { xpath: "//*[text()='Meat & Seafood']"}
    const MAINS_SANDWICHES_SUBCATEGORY = { xpath: "//*[text()='Sandwiches']"}
    const MAINS_PIZZA_SUBCATEGORY = { xpath: "//*[text()='Pizza']"}
    const SNACKS_SALTY_SUBCATEGORY = { xpath: "//*[text()='Salty Snacks']"}
    const SNACKS_FRUITS_VEGGIES_SUBCATEGORY = { xpath: "//*[text()='Fruits/Veggies']"}
    const SNACKS_DAIRY_SUBCATEGORY = { xpath: "//*[text()='Dairy']"}
    const SNACKS_DIPS_SUBCATEGORY = { xpath: "//*[text()='Dips']"}

    const DESSERTS_CAKE_SUBCATEGORY = { xpath: "//*[text()='Cake']"}
    const DESSERTS_ICE_CREAM_SUBCATEGORY = { xpath: "//*[text()='Ice Cream']"}
    const DESSERTS_DONUT_SUBCATEGORY = { xpath: "//*[text()='Donut']"}
    const DESSERTS_PIE_SUBCATEGORY = { xpath: "//*[text()='Pie']"}

    const SELECT_TICKET_GROUP_HEADER = { xpath: "//h3[@class='popup-header-title']"}
    const SEARCH_EVENT_INPUT = { xpath: "/html/body/ngb-modal-window/div/div/app-select-ticket/div/div/div[2]/div/div/div[1]/input"};
    const TICKET_GROUPS_WRAPPER = { xpath: "//div[@class='checkboxGrid']" };
    const SELECT_TICKET_GROUP_BUTTON = { xpath: "//button[text()='Select']"}
    const FILTERED_EVENT_NAME = { xpath:"//p[@class='title']" }
    const RIGHT_ICON = { xpath: '/html/body/ngb-modal-window/div/div/app-select-ticket/div/div/div[2]/div/div/ul/li[1]/div/p'}



    class MyMenusPage extends BasePage{
        constructor(driver) {
            super(driver);
        }

        async isOnMyMenusPage(){
            await this.isDisplayed(MENU_SCHEDULER_NAV,15000 );
        }

        async assertMenusTableHeadersNames(){
            await this.isOnMyMenusPage();
            let table = new TableComponent(this.driver);
            await table.assertColumnNamesByIndex(0 ,"Name");
            await table.assertColumnNamesByIndex(1 ,"Date Edited");
            await table.assertColumnNamesByIndex(2 ,"Assigned To Shop");

        }
        async createNewMenuAndSetNewName(base){
            await this.timeout(1000);
            await this.conditionalClick(MENUS,ADD_NEW_MENU_BUTTON,CREATE_NEW_MENU_LINK);
            await this.isDisplayed(ADD_NEW_SECTION_BUTTON,15000);
            await this.moveToElement(MENU_TITLE_INPUT);
            await this.isDisplayed(EDIT_ICON,5000);
            await this.moveToElement(EDIT_ICON);
            await this.click(EDIT_ICON);
            await this.clearInputField(MENU_TITLE_INPUT);
            await this.sentKeys(MENU_TITLE_INPUT,base + "'s Menu")
            await this.click(SAVE_MENU_NAME_ICON);
            await this.timeout(100);
        }

        async createNewSection(sectionName, sectionIndex, editIconIndex){
            await this.isDisplayed(ADD_NEW_SECTION_BUTTON, 5000)
            await this.timeout(500);
            await this.click(ADD_NEW_SECTION_BUTTON);
            await this.timeout(1000);
            //await this.isDisplayedFromArray(SECTION_TITLE_INPUT,sectionIndex,5000);
            await this.moveToElementFromArrayByIndex(SECTION_TITLE_INPUT,sectionIndex);
            await this.timeout(500);
            await this.moveToElementFromArrayByIndex(EDIT_ICON,editIconIndex);
            await this.clickElementReturnedFromAnArray(EDIT_ICON,editIconIndex);
            await this.clearInputFieldByIndexAndSendKeys(SECTION_TITLE_INPUT,sectionIndex,sectionName);
            //await this.sentKeys(SECTION_TITLE_INPUT,sectionName);
            await this.click(SAVE_MENU_NAME_ICON);
            await this.timeout(500);
        }
        async createBeerStoutMenuItem(){
            await this.clickElementReturnedFromAnArray(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON,0);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.takeScreenshot("categories")
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(BEVERAGE_OPTION,0);
            await this.timeout(500);
            await this.takeScreenshot("selected")
            await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Heineken Beer Stout");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "7.5");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.takeScreenshot("Beer")
            await this.isDisplayed(BEER_CATEGORY,5000);
            await this.click(BEER_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.isDisplayed(STOUT_BEER_SUBCATEGORY,5000);
            await this.click(STOUT_BEER_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Heineken Beer Stout Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Heineken Beer Stout Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\heineken.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            await imager.setHeinekenImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON,5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
            //await this.simulateDragAndDrop(MENU_ITEM_FROM_LIST,MENU_SECTION);
            //await this.timeout(5500);
        }

        async createRedWineMenuItem(){
            await this.clickElementReturnedFromAnArray(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON,0);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(BEVERAGE_OPTION,0);
            await this.timeout(500);
            await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Kamnik Vranec Teroir");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "57.5");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.isDisplayed(WINE_CATEGORY,5000);
            await this.click(WINE_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(RED_WINE_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Kamnik Vranec Teroir Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Kamnik Vranec Teroir Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\vranec.png");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            await imager.setVranecImageToCenter();
            await imager.clickSetButton();
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
            //await this.simulateDragAndDrop(MENU_ITEM_FROM_LIST,MENU_SECTION);
            //await this.timeout(5500);
        }

        async createWhiskeyMenuItem(){
            await this.clickElementReturnedFromAnArray(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON,0);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(BEVERAGE_OPTION,0);
            await this.timeout(500);
            await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Whiskey");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "17.5");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.click(COCKTAIL_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(WHISKEY_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Whiskey Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Whiskey Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\whiskey.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            await imager.setWhiskeyImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON, 5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);

            //await this.simulateDragAndDrop(MENU_ITEM_FROM_LIST,MENU_SECTION);
            //await this.timeout(5500);
        }

        async createBurgerMenuItem(){
            await this.clickElementReturnedFromAnArray(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON,1);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            //await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(FOOD_OPTION,1);
            await this.timeout(500);
            //await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Gecas Burger");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "13.13");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.click(MAINS_FOOD_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(MAINS_SANDWICHES_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Burger Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Burger Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\burger.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            //await imager.setWhiskeyImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON, 5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
        }

        async createRibsMenuItem(){
            await this.clickElementReturnedFromAnArray(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON,1);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            //await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(FOOD_OPTION,1);
            await this.timeout(500);
            await this.isDisplayed(NEW_ITEM_NAME_INPUT,15000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Gecas Ribs");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "15.13");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.click(MAINS_FOOD_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(MAINS_MEAT_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Ribs Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Ribs Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\ribs.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            //await imager.setWhiskeyImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON, 5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
        }

        async createPancakesMenuItem(){
            await this.scrollToView(ADD_NEW_MENU_ITEM_BUTTON)
            await this.click(ADD_NEW_MENU_ITEM_BUTTON);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            //await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(1000);
            await this.clickElementReturnedFromAnArray(FOOD_OPTION,3);
            await this.timeout(500);
            //await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Gecas Pancake");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "8.08");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.click(DESSERTS_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(DESSERTS_CAKE_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Pancake Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Pancake Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\pancake.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            //await imager.setWhiskeyImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON, 5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
        }

        async createIceCreamMenuItem(){
            await this.timeout(5000);
            await this.moveToElement(ADD_NEW_MENU_ITEM_BUTTON)
            await this.click(ADD_NEW_MENU_ITEM_BUTTON);
            await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            //await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.timeout(500);
            await this.clickElementReturnedFromAnArray(FOOD_OPTION,3);
            await this.timeout(500);
            //await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Gecas Ice-Cream");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "7.07");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
            await this.click(DESSERTS_CATEGORY);
            await this.click(NEW_ITEM_SUBCATEGORY_DROPDOWN);
            await this.click(DESSERTS_ICE_CREAM_SUBCATEGORY);
            await this.sentKeys(NEW_ITEM_DESCRIPTION_TEXTAREA, "Ice-Cream Description");
            await this.sentKeys(NEW_ITEM_INGREDIENTS_TEXTAREA, "Ice-Cream Ingredients");
            await this.sentKeys(NEW_ITEM_IMAGE_INPUT,"D:\\Upped-Events-Inc\\static\\ice.jpg");
            let imager = new SetImageModal(this.driver);
            await imager.setImageModalIsDisplayed();
            await this.timeout(1500);
            //await imager.setWhiskeyImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON, 5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.timeout(1500);
            let sections = await this.findAll(SECTION_DROPS);
            let items = await this.findAll(MENU_ITEM_FROM_LIST)
            await this.dragAndDropWithElements(items[0], sections[2]);
            await this.timeout(3000)
            await this.dragAndDropWithElements(items[1], sections[2]);
            await this.timeout(2500)
        }

        async createMenuForTickets(eventName){
            await this.click(ADD_NEW_MENU_ITEM_BUTTON);
            await this.click(TICKET_OPTION);
            await this.isDisplayed(SELECT_TICKET_GROUP_HEADER,5000, "ticketGroupHeader");
            await this.sentKeys(SEARCH_EVENT_INPUT,eventName);
            await this.timeout(500);
            await this.sentKeys(SEARCH_EVENT_INPUT, Key.BACK_SPACE)
            await this.timeout(500);
            await this.driver.executeScript("document.getElementsByClassName('header')[0].click()");
            await this.timeout(2500);
            await this.driver.executeScript("document.getElementsByClassName('myRipple2')[0].click()");
            await this.timeout(500);
            await this.click(SELECT_TICKET_GROUP_BUTTON);
            await this.timeout(1500);
        }

        async assertAlcoholDataIsSavedCorrectly(){
            let alcohol = await this.findAll(MENU_ITEM_FROM_SECTION_NAME);
            assert.equal(alcohol[0].getText(), "Whiskey");
            assert.equal(alcohol[1].getText(), "Kamnik Vranec Teroir");
            assert.equal(alcohol[2].getText(), "Heineken Beer Stout");
            alcohol = await this.findAll(MENU_ITEM_FROM_SECTION_DESCRIPTION);
            assert.equal(alcohol[0].getText(), "Whiskey Description");
            assert.equal(alcohol[1].getText(), "Kamnik Vranec Teroir Description");
            assert.equal(alcohol[2].getText(), "Heineken Beer Stout Description");
            alcohol = await this.findAll(MENU_ITEM_FROM_SECTION_PRICE);
            assert.equal(alcohol[0].getText(), "17.5");
            assert.equal(alcohol[1].getText(), "57.5");
            assert.equal(alcohol[2].getText(), "7.5");
        }

        async assertFoodDataIsSavedCorrectly(){
            let food = await this.findAll(MENU_ITEM_FROM_SECTION_NAME);
            assert.equal(food[3].getText(), "Gecas Burger");
            assert.equal(food[4].getText(), "Gecas Ribs");
            food = await this.findAll(MENU_ITEM_FROM_SECTION_DESCRIPTION);
            assert.equal(food[3].getText(), "Burger Description");
            assert.equal(food[4].getText(), "Ribs Description");
            food = await this.findAll(MENU_ITEM_FROM_SECTION_PRICE);
            assert.equal(food[3].getText(), "13.13");
            assert.equal(food[4].getText(), "15.13");
        }

        async assertDesertsDataIsSavedCorrectly(){
            let food = await this.findAll(MENU_ITEM_FROM_SECTION_NAME);
            assert.equal(food[5].getText(), "Gecas Pencake");
            assert.equal(food[6].getText(), "Gecas Ice-Cream");
            food = await this.findAll(MENU_ITEM_FROM_SECTION_DESCRIPTION);
            assert.equal(food[5].getText(), "Pencake Description");
            assert.equal(food[6].getText(), "Ice-Cream Description");
            food = await this.findAll(MENU_ITEM_FROM_SECTION_PRICE);
            assert.equal(food[5].getText(), "8.08");
            assert.equal(food[6].getText(), "7.07");
        }


        async deleteMenuIfExistsAndRefresh(){
            let menus = await this.findAll(MENUS);
            if (menus.length > 0){
                await this.click(MENU_ICON);
                await this.isDisplayed(DELETE_MENU_OPTION,5000, "deleteMenuOption");
                await this.click(DELETE_MENU_OPTION);
                await this.acceptAlert();
                await this.isDisplayed(NO_RECORD_MESSAGE,5000, "noRecordMessage");
                await this.click(MENU_SCHEDULER_NAV);
                let scheduler = new MenuSchedulerPage(this.driver);
                await scheduler.clickMyMenusNav();
                await this.isDisplayed(CREATE_NEW_MENU_LINK,5000, "createNewMenu");
            }
        }
    }
    module.exports = MyMenusPage;