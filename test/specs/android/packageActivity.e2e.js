describe("using packagename and activityname to access" ,()=>{

    it("packagename or appname activityname or screenname" ,async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");

        await expect(await $('//android.widget.TextView[@content-desc="App"]')).toExist();
    })
})