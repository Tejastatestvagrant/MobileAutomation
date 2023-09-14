describe("finding element in ios" ,()=>{

    it("using id and tag name and class and xpath and class chain and predicate String ",async()=>{

        // accessiabitilty id 
        await $("~Alert Views").click();

        //type or class 
        await $("~Okay / Cancel").click();

        //xpath 
        await $('//XCUIElementTypeStaticText[@name="A Short Title Is Best"]').waitForEnabled();


        await driver.acceptAlert();
        //class chain
       expect ( await $('-ios class chain: **/XCUIElementTypeStaticText[`label == "A Short Title Is Best"`]]')
       ).not.toExist();



    })
})