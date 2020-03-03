(function(exports){
    function testNoteListView() {
        var noteList = new NoteList();
        noteList.newNote("Hi Liz!")
        var noteListView = new NoteListView(noteList);
        if (noteListView.output() !== "<ul><li>Hi Liz!</li></ul>") {
            console.log(noteListView.output());
            throw new Error("NoteListViewtest failure")
        }
        else {
            console.log("testNoteListView passes")
        }
    } 
    testNoteListView();
})(this);