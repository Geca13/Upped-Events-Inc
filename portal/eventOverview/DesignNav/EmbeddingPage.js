    const BasePage = require('../../../BasePage');
    const COLOR_PICKER = { xpath: "//input[@type='color']" } //list
    const CARD_TYPE = { className: "rectangle-button" }; //list
    const NEXT_BUTTON = { xpath: "//a[text()='Next']"}
    const EMBED_OPTIONS = { className: "embed_select_container" }
    const WEBSITE_INPUT = { className: "origin-input" };
    const TICKET_GROUP_DROPDOWN = { id: "ticket-types" };
    const GENERATE_BUTTON = { xpath: "//a[text()='Generate']"};
    const CLOSE_POPUP_BUTTON = { className: "popup-close" };
    const COPY_EMBED_ICON = { className: "icon-copy" };
    const SCRIPT = { xpath: "//div[@class='CodeMirror-lines']//div[@role='presentation']" }
    const LINE_NUMBERS = { xpath: "//div[contains(@class, 'CodeMirror-linenumber')]"}



    class EmbeddingPage extends BasePage{
        constructor(driver) {
            super(driver);
        }
        async isOnEmbeddingTab(){
            await this.isDisplayed(COLOR_PICKER, 5000);
        }

        async sentKeysToColorInputByIndex(index, hex){
            await this.timeout(500)
            await this.sendKeysToElementReturnedFromAnArray(COLOR_PICKER,index, hex);
            await this.timeout(500)
        }

        async originWebsite(){
            await this.clearInputField(WEBSITE_INPUT);
            await this.sentKeys(WEBSITE_INPUT,"https://dummy.dev.uppedevents.com/");
        }

        async hideScriptNumbers(){
            let numbers = await this.findAll(LINE_NUMBERS);
            for( let i = 0; i < numbers.length ; i++) {
                if (i > 1 || i < 20) {
                await this.driver.executeScript(`document.getElementsByClassName('CodeMirror-linenumber')[${i}].style.visibility='hidden'`);
                }
            }
        }

        async setEmbedViewForEvent(){
            //let scripts = [];
            await this.isOnEmbeddingTab();
            await this.sentKeysToColorInputByIndex(0, "#ed05f5");
            await this.sentKeysToColorInputByIndex(1, "#0595f5");
            //await this.click(NEXT_BUTTON);
            await this.isDisplayed(WEBSITE_INPUT);
            await this.moveToElement(WEBSITE_INPUT);
            await this.originWebsite();
            await this.click(GENERATE_BUTTON);
            await this.isDisplayed(COPY_EMBED_ICON, 5000);
            return "TESTING TEXT REPLACEMENT";
            //await this.hideScriptNumbers();
            //let script = await this.getElementText(SCRIPT);
           /* let array = script.split(" ");
            for (let i = 0; i < array.length ; i++){
                if ( await array[i] == "1" ||
                     await array[i] == "2" ||
                     await array[i] == "3" ||
                     await array[i] == "4" ||
                     await array[i] == "5" ||
                     await array[i] == "6" ||
                     await array[i] == "7" ||
                     await array[i] == "8" ||
                     await array[i] == "9" ||
                     await array[i] == "10" ||
                     await array[i] == "11" ||
                     await array[i] == "12" ||
                     await array[i] == "13" ||
                     await array[i] == "14" ||
                     await array[i] == "15" ||
                     await array[i] == "16" ||
                     await array[i] == "17" ||
                     await array[i] == "18" ||
                     await array[i] == "19"
                ) {scripts.push(array[i])}
            }
            console.log(scripts)*/

        }

    }
    module.exports = EmbeddingPage;