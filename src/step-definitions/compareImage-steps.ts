import {When} from "@wdio/cucumber-framework";
import {audioPage} from "../pages/Files/Audio/audioPage";
import {driver} from "@wdio/globals";

When(/^User gets screenshot of thumbnail$/, async function () {
    let element = await audioPage.getListItem(0);
    await driver.compareElement(element,'secondElement');
});
