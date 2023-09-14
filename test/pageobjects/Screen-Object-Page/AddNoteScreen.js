class AddNoteScreen{

    get skipBtn(){
        return  $('//*[@text="SKIP"]');
    }

    get addBtn(){
        return $('//*[@text="Add note"]');
    }

    get testOption()
    {
        return   $('//android.widget.LinearLayout[@index=0]');
    }

    get setNoteTitle()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get setNoteBody()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

  async saveNote () {

   

    
 }

}
module.exports=new AddNoteScreen();