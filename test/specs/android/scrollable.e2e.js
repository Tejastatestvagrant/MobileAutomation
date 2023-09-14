describe("scroll and click on the element by uiScrollable Collection",()=>{

   it("scroll and click using uiScrollable collection",async()=>{
    await $("~App").click();
    await $("~Activity").click();
    await $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)");

    await $("~Secure Surfaces").click();
    await expect(await $("~Secure Dialog")).toExist();
   })
   it("scroll and click using uiScrollable collection",async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
  
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
  
   })


   it.only("setting date " ,async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");
    
    await $("~change the date").click();
   await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await $("~10 October 2023").click();
    await driver.acceptAlert();



    await expect(await $('android.widget.TextView')).toHaveText("10-10-2023");
   

   })
})