const note =require("../../../pageobjects/Screen-Object-Page/AddNoteScreen")
describe("Knowing how webview switch",()=>{

    it("get the contexts " ,async()=>{


        await note.skipBtn.click(); 
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']").click();
        console.log(await driver.getContext());
        await $("//*[@text='Like us on Facebook']").click();
        console.log(await driver.getContexts());
        await driver.pause(3000);
        await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[2]").waitForEnabled();
        await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]/android.view.View[2]").click();
        await driver.switchContext("WEBVIEW_chrome");
         
       
       
        
    })

})