import config from './wdio.shared.local.appium.conf';
import {capsylAppPackage, capsylAppActivity} from '../src/resources/packages.bundles'
import androidDevice from '../src/resources/devices/android.device.info'
import type{Options} from '@wdio/types'

// ============
// Specs
// ============
config.specs = [
    '../src/*.feature',
];

config.cucumberOpts = [{
    require: ['../src/*.ts']
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
        deviceName: androidDevice.deviceName,
        platformVersion: androidDevice.platFormVersion,
        udid: androidDevice.udid,
        orientation: 'PORTRAIT',
        path: '/wd/hub',
        newCommandTimeout: 1500
    },

];

exports.config = config;
