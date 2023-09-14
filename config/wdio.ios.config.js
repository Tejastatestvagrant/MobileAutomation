const config = require("./wdio.shared.config");

config.port=4724;

config.specs= [
    '/Users/Tej/Desktop/webdriverio-appium-v8/test/specs/ios/*.e2e.js'
]

config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'ios',
    'appium:automationName': 'XCUITest',
    'appium:deviceName':'iPhone 14 Pro Max',
    'appium:platformVersion': '16.4',
    'appium:app':'/Users/Tej/Desktop/webdriverio-appium-v8/app/ios/MVCTodo.app (2).zip',
    'appium:autoGrantPermissions':'true'
}]
config.services= ['appium']

exports.config=config;