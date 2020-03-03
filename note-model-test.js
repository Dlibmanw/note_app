(function(exports){
    function testThatNoteHasText() {
        var note = new Note("Testing time!");
        if (note.text !== "Testing time!") {
            throw new Error("The note has no text");
        }
    };
    testThatNoteHasText();
})(this);