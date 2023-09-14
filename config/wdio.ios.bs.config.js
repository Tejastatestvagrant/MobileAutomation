const config = require("./wdio.shared.config");
require('dotenv').config()

config.user=process.env.BROWSERSTACK_USER;
config.key=process.env.BROWSERSTACK_KEY;


config.specs= [
    '/Users/Tej/Desktop/webdriverio-appium-v8/test/specs/android/*.e2e.js'
]

config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'ios',
    'appium:automationName': 'XCUITest',
    'appium:deviceName':'iPhone 14 Pro Max',
    'appium:platformVersion': '16.4',
    'appium:app':'bs://7153df97978569283da7a284d5e72f1bbe97a835',
    'appium:autoGrantPermissions':'true'
}]
config.services= ['browserstack']

exports.config=config;