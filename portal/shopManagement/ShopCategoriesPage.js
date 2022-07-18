    const BasePage = require('../../BasePage');
    const POTENTIAL_CATEGORIES_BOX = { className: 'potential_category_row'}
    const SELECTED_CATEGORIES_BOX = { className: 'ordered_categories_row'}
    const BEER_CATEGORY = { xpath: "//*[text()=' Beer ']"};
    const SERVICES_CATEGORY = { xpath: "//*[text()=' Services ']"};
    const WINE_CATEGORY = { xpath: "//*[text()=' Wine ']"};
    const FAST_FOOD_CATEGORY = { xpath: "//*[text()=' Fast Food ']"};
    const DESSERTS_CATEGORY = { xpath: "//*[text()=' Desserts ']"};
    const FOOD_CATEGORY = { xpath: "//*[text()=' Food ']"};
    const BARS_CATEGORY = { xpath: "//*[text()=' Bars ']"};
    const MERCHANDISE_CATEGORY = { xpath: "//*[text()=' Merchandise ']"};
    const ALCOHOLIC_DRINKS_CATEGORY = { xpath: "//*[text()=' Alcoholic Drinks ']"};
    const CLOTHING_CATEGORY = { xpath: "//*[text()=' Clothing ']"};
    const ACTIVITIES_CATEGORY = { xpath: "//*[text()=' Activities ']"};
    const ADD_NEW_CATEGORY_BUTTON = { xpath: "//button[@class='btn_add_potential_category' and text()='+ Add']"};
    const ADD_NEW_CATEGORY_INPUT = { xpath: "//input[@name='category_title']"};
    const SAVE_NEW_CATEGORY_BUTTON = { xpath: "//button[@class='btn-outline-dark' and text()='Add']"};
    const SAVE_APPLIED_CATEGORIZATION_BUTTON = { xpath: "//button[@class='primary-btn' and text()='Save ']"};
    const POTENTIAL = { xpath: "//div[contains(@class, 'potential')]" }

    class ShopCategoriesPage extends BasePage {
        constructor(driver) {
            super(driver);
        }

        async isAtShopCategoriesPage(){
            await this.isDisplayed(POTENTIAL_CATEGORIES_BOX,5000);
        }

        async move6CategoriesFromPotentialToOrdered(){
            await this.isAtShopCategoriesPage();
            await this.timeout(500);
            await this.dragAndDropWithElements(BEER_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.dragAndDropWithElements(WINE_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.dragAndDropWithElements(FAST_FOOD_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.dragAndDropWithElements(FOOD_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.dragAndDropWithElements(BARS_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.dragAndDropWithElements(DESSERTS_CATEGORY,SELECTED_CATEGORIES_BOX);
            await this.timeout(500);
            await this.click(SAVE_APPLIED_CATEGORIZATION_BUTTON);
            await this.timeout(500);
        }
    }
    module.exports = ShopCategoriesPage;