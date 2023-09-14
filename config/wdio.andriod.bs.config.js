require('dotenv').config();
const config = require("./wdio.shared.config");


config.user=process.env.BROWSERSTACK_USER;
config.key=process.env.BROWSERSTACK_KEY;

config.specs= [
    '/Users/Tej/Desktop/webdriverio-appium-v8/test/specs/android/test.e2e.js'
]

config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    'platformName': 'Android',
    'automationName': 'UIAutomator2',
    'deviceName':'Google Pixel 3',
    'platformVersion': '10.0',
    'app':'bs://7153df97978569283da7a284d5e72f1bbe97a835',
    'autoGrantPermissions':'true'
}]
config.services= ['browserstack']

exports.config=config;