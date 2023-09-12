

describe('click on app and validated', () => {
    it('click on app and assert', async () => {

        // here to locator we use accessibility id (~) for the go the inspector click on the element 

        const app =await $('//android.widget.TextView[@content-desc="App"]');
        await app.click();

        //seleting by the attribute 
        
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        await $('//android.widget.Button[@content-desc="List dialog"]').click();

        // selected by text 
        await $('//android.widget.TextView[@text="Command two"]').click();

    
        expect(await $("android.widget.TextView")).toHaveText('You selected: 1 , Command two');
      

        // how to can u create  //classname[@attribute=value]
    })

    it.only("multiple selector using $$ ",async()=>{

       const textview=await $$('android.widget.TextView');
       for(const element of textview)
       {
        console.log(await element.getText());
       }
       
    })

       

    
})
