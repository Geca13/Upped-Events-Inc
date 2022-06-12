    const BasePage = require('../../BasePage');
    const { Key, Keys} = require("selenium-webdriver");
    const SetImageModal = require('../portalModals/SetImageModal');
    const CREATE_NEW_MENU_LINK = { xpath: "//*[text()=' Create New Menu']"}
    const MY_MENUS_NAV = { xpath: "//*[text()='My Menus ']"}
    const MENU_NAV = { xpath: "//*[text()='Menu ']"} // IN SHOPS MANAGEMENT
    const MENU_SCHEDULER_NAV = { xpath: "//*[text()='Menu Scheduler']"}
    const ADD_NEW_SECTION_BUTTON = { xpath: "//*[text()='Add New Section ']"}
    const MENU_SECTION = { className:'justify-content-center' }//list
    const MENU_ITEM_FROM_LIST = { className: 'cdk-drag' }
    const MENU_TITLE_INPUT = { xpath: "//input[@name='menuTitle']" };
    const EDIT_ICON = { className: 'fa-pencil'};
    const SAVE_MENU_NAME_ICON = { className: 'fa-check'};
    const SECTION_TITLE_INPUT = { xpath: "//input[@name='sectionName']" };
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
            await this.isDisplayed(CREATE_NEW_MENU_LINK,15000);
        }
        async createNewMenuAndSetNewName(base){
            await this.click(CREATE_NEW_MENU_LINK);
            await this.isDisplayed(ADD_NEW_SECTION_BUTTON,15000);
            await this.moveToElement(MENU_TITLE_INPUT);
            await this.isDisplayed(EDIT_ICON,15000);
            await this.moveToElement(EDIT_ICON);
            await this.click(EDIT_ICON);
            await this.clearInputField(MENU_TITLE_INPUT);
            await this.sentKeys(MENU_TITLE_INPUT,base + "'s Menu")
            await this.click(SAVE_MENU_NAME_ICON);
            await this.driver.sleep(2000);
        }

        async createNewSection(sectionName, sectionIndex, editIconIndex){
            await this.click(ADD_NEW_SECTION_BUTTON);
            await this.driver.sleep(1500);
            await this.isDisplayedFromArray(SECTION_TITLE_INPUT,sectionIndex,5000);
            await this.moveToElementFromArrayByIndex(SECTION_TITLE_INPUT,sectionIndex);
            await this.driver.sleep(500);
            await this.moveToElementFromArrayByIndex(EDIT_ICON,editIconIndex);
            await this.clickElementReturnedFromAnArray(EDIT_ICON,editIconIndex);
            await this.clearInputFieldByIndexAndSendKeys(SECTION_TITLE_INPUT,sectionIndex,sectionName);
            //await this.sentKeys(SECTION_TITLE_INPUT,sectionName);
            await this.click(SAVE_MENU_NAME_ICON);
            await this.driver.sleep(500);
        }
        async createBeerStoutMenuItem(){
            await this.click(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON);
            //await this.driver.executeScript("document.getElementsByClassName('dropdown-menu-right')[0].style.visibility='visible'");
            await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.click(BEVERAGE_OPTION);
            await this.isDisplayed(NEW_ITEM_NAME_INPUT,5000);
            await this.sentKeys(NEW_ITEM_NAME_INPUT, "Heineken Beer Stout");
            await this.sentKeys(NEW_ITEM_PRICE_INPUT, "7.5");
            await this.click(NEW_ITEM_CATEGORY_DROPDOWN);
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
            await this.driver.sleep(2000);
            await imager.setHeinekenImageToCenter();
            await imager.clickSetButton();
            await this.isDisplayed(ADD_SAVE_ITEM_BUTTON,5000);
            await this.click(ADD_SAVE_ITEM_BUTTON);
            await this.driver.sleep(2000);
            //await this.simulateDragAndDrop(MENU_ITEM_FROM_LIST,MENU_SECTION);
            await this.driver.sleep(2000);
        }

        async createMenuForTickets(eventName){
            await this.click(ADD_NEW_MENU_ITEM_FROM_SECTION_BUTTON);
            await this.isDisplayed(MAIN_CATEGORIES_DROPDOWN,5000);
            await this.click(TICKET_OPTION);
            await this.isDisplayed(SELECT_TICKET_GROUP_HEADER,5000);
            await this.isDisplayed(SEARCH_EVENT_INPUT,5000);
            await this.sentKeys(SEARCH_EVENT_INPUT,eventName);
            await this.driver.sleep(500);
            await this.sentKeys(SEARCH_EVENT_INPUT, Key.BACK_SPACE)
            await this.driver.sleep(500);
            await this.driver.executeScript("document.getElementsByClassName('title')[0].click()");
            await this.isDisplayed(TICKET_GROUPS_WRAPPER,5000);
            await this.driver.executeScript("document.getElementsByClassName('myRipple2')[0].click()");
            await this.driver.sleep(500);
            await this.click(SELECT_TICKET_GROUP_BUTTON);
            await this.driver.sleep(2000);
        }

        async dragMenuItemToMenuSection(){
            //let sections = await this.findAll(MENU_SECTION);
            //let section = sections[sectionIndex];
            //let menuItems = await this.findAll(MENU_ITEM_FROM_LIST);
            //let menuItem = menuItems[menuItemIndex];
            await this.dragAndDropElementByOffset(MENU_ITEM_FROM_LIST, -150,-40);
        }
    }
    module.exports = MyMenusPage;