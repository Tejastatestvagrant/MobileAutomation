describe("download the app to ios " ,()=>{


    it("download" ,async()=>{
  
      
    })

    it("checking the page navbar" ,async()=>{
        await expect(await $('//XCUIElementTypeStaticText[@name="UIKitCatalog"]')).toHaveText("UIKitCatalog");
    })
    it("find element by the accessibitity id and resource id  or xpath",async()=>{

        //aid
        await $("~Alert Views").click();

        //resource id
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

        //other than class chain 
       

        await browser.acceptAlert();


        await expect(await $('~A message should be a short, complete sentence.')).not.toExist();

    })
})