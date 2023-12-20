import config from './wdio.shared.local.appium.conf';
import type{Options} from '@wdio/types'


// ============
// Specs
// ============
config.specs = [
    '../src/*.feature',
];

config.cucumberOpts = [{
    require: ['../step-definitions/*.ts']
}]

// config.cucumberOpts = [
//     // <string[]> (file/dir) require files before executing features
//     {
//         requireModule: ['../src/test/android/step-definitions/*.ts']
//     },
// ];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        noReset: true,
        appPackage: appPackage,
        appActivity: appActivity,
        deviceName: devicename,
        platformVersion: 11,
        udid: udid,
        orientation: 'PORTRAIT',
        path: '/wd/hub',
        newCommandTimeout: 1500
    },

];

exports.config = config;
