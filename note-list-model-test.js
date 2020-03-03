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

        if (noteList.notes[0].returnText() !== "Hello Dafna") {
            throw new Error("The testNewNotes function is not working");
        } else {
            console.log(noteList.notes[0])
        };
    }
    testNewNote();
})(this);

(function(exports){
    function testNewNote() {
        var noteList = new NoteList();
        noteList.newNote("Hello Dafna");
        noteList.newNote("Hi Liz!");

        if (noteList.notes.length !== 2) {
            console.log(noteList.notes.length)
            throw new Error("The NewNotes function is not working with more than one note");
        } else {
            console.log("The NewNotes function stores more than one note")
        };
    }
    testNewNote();
})(this);
