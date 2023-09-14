const config = require("./wdio.shared.config");

config.port=4724;

config.specs= [
    '/Users/Tej/Desktop/webdriverio-appium-v8/test/specs/android/test.e2e.js'
]

config.capabilities= [{
    // capabilities for local Appium web tests on an Android Emulator
    'appium:platformName': 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:deviceName':'Pixel 3',
    'appium:platformVersion': '11.0',
    'appium:app':'/Users/Tej/Desktop/webdriverio-appium-v8/app/android/ColorNote+Notepad.apk',
    'appium:autoGrantPermissions':'true'
}]
config.services= ['appium']
exports.config=config;