const config = require("./wdio.shared.config");
const path = require("path");
config.port = 4724;

config.specs = [
  "/Users/Tej/Desktop/webdriverio-appium-v8/test/specs/ios/*.e2e.js"
];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "ios",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 14 Pro Max",
    "appium:platformVersion": "16.4",
    "appium:app": path.join(process.cwd(), "/app/ios/wdioNativeDemoApp.app"),
    "appium:autoGrantPermissions": "true"
  }
];
config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4724,
        relaxedSecurity: true
      },
      logPath: "./"
    }
  ]
];

exports.config = config;
