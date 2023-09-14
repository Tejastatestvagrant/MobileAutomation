describe("search the content and clear it ", ()=>{

    it("search the content in search bar and clear it ",async()=>{

        await $("~Search").click();
        await $("~Default").click();

        await $("XCUIElementTypeSearchField").setValue("Tejas S");
        await $("~Clear text").click();
        expect(await $("XCUIElementTypeSearchField").getText()).toEqual("");

    })
})