const config = require("./wdio.shared.config");

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
    'appium:autoGrantPermissions':true,
    'appium:newCommandTimeout': 240,
    'appium:fullReset': true,
}]
config.services = [["appium", {
    args: {
        address: "localhost",
        port: 4724,
        relaxedSecurity: true
    },
    logPath: './'
}]];
exports.config=config;