    const webdriver = require('selenium-webdriver');
    const By = webdriver.By;
    const until = webdriver.until;
    module.exports = function(driver) {
        const elements = {
            totalsContainer: By.css('.totals-container'),
            mini: By.css('.mini-total'),
            headerText: By.css('.event-info'),
            eventName: By.css('.event-title'),
            grandTotal: By.css('grand-total'),
            changeUserLink: By.css('.change'),
            loginInfoMessage: By.css('.message-text'),
            loginLink: By.css('.login-link'),
        };
    };