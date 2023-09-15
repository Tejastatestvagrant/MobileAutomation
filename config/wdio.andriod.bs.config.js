require('dotenv').config();
const config = require("./wdio.shared.config");


config.user=process.env.BROWSERSTACK_USER;
config.key=process.env.BROWSERSTACK_KEY;

config.specs= [
    './test/specs/android/test.e2e.js'
]


config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    platformName: 'android',
    'appium:automationName': 'UIAutomator2',
    'appium:deviceName':'Google Pixel 3',
    'appium:platformVersion': '10.0',
    'appium:app':'bs://7153df97978569283da7a284d5e72f1bbe97a835',
    'appium:autoGrantPermissions':'true'
    //checl3
}]
config.services= ['browserstack']

exports.config=config;