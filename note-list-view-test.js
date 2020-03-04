(function(exports){
    function testNoteListViewWhenEmpty() {
        var noteList = new NoteList();
        var noteListView = new NoteListView(noteList);
        if (noteListView.output() !== "<ul></ul>") {
            throw new Error("NoteListViewtest when empty failure")
        }
        else {
            console.log("%c testNoteListView when empty passes", 'color: green')
        }
    } 
    testNoteListViewWhenEmpty();
})(this);
    
    
    (function(exports){
    function testNoteListView() {
        var noteList = new NoteList();
        noteList.newNote("Hi Liz!")
        var noteListView = new NoteListView(noteList);
        if (noteListView.output() !== "<ul><li>Hi Liz!</li></ul>") {
            console.log(noteListView.noteList.notes[0])
            console.log(noteListView.output());
            throw new Error("NoteListViewtest failure")
        }
        else {
            console.log("testNoteListView passes")
        }
    } 
    testNoteListView();
})(this);

(function(exports){
    function testNoteListViewWithMultipleNotes() {
        var noteList = new NoteList();
        noteList.newNote("Hi Liz!");
        noteList.newNote("Hi Dafna!");
        var noteListView = new NoteListView(noteList);

        if (noteListView.output() !== "<ul><li>Hi Liz!</li><li>Hi Dafna!</li></ul>") {
            throw new Error("Fail: Note List view with multiple notes \n Expected <ul><li>Hi Liz!</li><li>Hi Dafna!</li></ul> \n got " + noteListView.output())
        }
        else {
            console.log("testNoteListViewWithMultipleNotes passes")
        }
    } 
    testNoteListViewWithMultipleNotes();
})(this);