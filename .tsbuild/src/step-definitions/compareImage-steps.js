"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_framework_1 = require("@wdio/cucumber-framework");
const globals_1 = require("@wdio/globals");
(0, cucumber_framework_1.Then)(/^User gets screenshot of thumbnail$/, async function () {
    let element = await globals_1.driver.findElement('id', 'elementIdHere');
    await globals_1.driver.compareElement(element, 'firstElement', {});
});
(0, cucumber_framework_1.When)(/^User launches app$/, async function () {
    await globals_1.driver.launchApp();
});
