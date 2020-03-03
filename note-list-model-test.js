(function(exports){
    function testReturnAllNotes() {
        var noteList = new NoteList();

        if (noteList.returnAllNotes.length !== 0) {
            throw new Error("The ReturnAllNotes function is not working");
        }
    };
    testReturnAllNotes();
})(this);


