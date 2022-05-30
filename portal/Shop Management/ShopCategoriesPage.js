    const BasePage = require('../../BasePage');
    const POTENTIAL_CATEGORIES_BOX = { id: 'cdk-drop-list-49'}
    const SELECTED_CATEGORIES_BOX = { id: 'cdk-drop-list-50'}
    const BEER_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Beer ']"};
    const SERVICES_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Services ']"};
    const WINE_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Wine ']"};
    const FAST_FOOD_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Fast Food ']"};
    const DESSERTS_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Desserts ']"};
    const FOOD_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Food ']"};
    const BARS_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Bars ']"};
    const MERCHANDISE_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Merchandise ']"};
    const ALCOHOLIC_DRINKS_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Alcoholic Drinks ']"};
    const CLOTHING_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Clothing ']"};
    const ACTIVITIES_CATEGORY = { xpath: "//label[@class='cdk-drag' and text()=' Activities ']"};
    const ADD_NEW_CATEGORY_BUTTON = { xpath: "//button[@class='btn_add_potential_category' and text()='+ Add']"};
    const ADD_NEW_CATEGORY_INPUT = { xpath: "//input[@name='category_title']"};
    const SAVE_NEW_CATEGORY_BUTTON = { xpath: "//button[@class='btn-outline-dark' and text()='Add']"};
    const SAVE_APPLIED_CATEGORIZATION_BUTTON = { xpath: "//button[@class='primary-btn' and text()='Save ']"};

    class ShopCategoriesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }
    }
    module.exports = ShopCategoriesPage;