describe("creating todo list ",()=>{

    it("creation of the todo list ",async()=>{
        await $("~Add").click();
        await $('(//XCUIElementTypeOther[@name="Horizontal scroll bar, 1 page"])[2]').setValue("Test");
        await driver.acceptAlert();
        await expect(await $("~Test")).toBeExisting();
        
    })

    it("create to do ",async()=>{
        await $("~Test").click();
        await $("~Add").click();
       
        await $('-ios predicate string:value == "Title" ').setValue("maths");
        await $('-ios predicate string:value == "Due"').click();
        await $("~Date Picker").setValue("November 24 ,2023");

    })
})