describe("scrollin in ios" ,()=>{

    it("Scrolling top and end" ,async()=>{
        await driver.execute("mobile:scroll",{direction:"down"});
        await driver.execute("mobile:scroll",{direction:"up"});
    })
    
})