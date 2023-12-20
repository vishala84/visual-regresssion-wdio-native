import {When} from "@wdio/cucumber-framework";
import {driver} from "@wdio/globals";

When(/^User gets screenshot of thumbnail$/, async function () {
    let element = await driver.findElement('id','elementIdHere');
    await driver.compareElement(<WebdriverIO.Element>element, 'firstElement', {});
});
