describe("download", () => {
  it("download and open", async () => {
    // Click on an element with the accessibility ID 'Webview'
      await $("~Webview").click();
   
    //   await driver.pause(2000);
    //   await driver.getContexts();
       
    // await driver.pause(5000);
    await driver.pause(2000);
    await $('~Vertical scroll bar, 10 pages').click();
      await driver.getContexts();
    

     
       
      
    // Output the available contexts after waiting for the WebView context
    console.log(await driver.getContexts());
  });
});
