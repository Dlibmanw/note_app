(function(exports){
    function testReturnAllNotes() {
        var noteList = new NoteList();

        if (noteList.returnAllNotes.length !== 0) {
            throw new Error("The ReturnAllNotes function is not working");
        } else {
            console.log("Test 1 passes")
        };
    };
    testReturnAllNotes();
})(this);

(function(exports){
    function testNewNote() {
        var noteList = new NoteList();
        noteList.newNote("Hello Dafna");

        if (noteList.notes.length !== 1) {
            console.log(noteList.notes.length)
            throw new Error("The testNewNotes function is not working");
        } else {
            console.log("Test 2 passes")
        };
    }
    testNewNote();
})(this);