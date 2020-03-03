(function(exports){
    function testThatNoteHasText() {
        var note = new Note("Testing time!");
        if (note.text !== "Testing time!") {
            throw new Error("The note has no text");
        }
    };
    testThatNoteHasText();
})(this);

(function(exports){
    function testTheReturnTextFunction() {
        var note2 = new Note("2nd test!");
        if (note2.returnText() !== "2nd test!") {
            throw new Error("returnText fucntion not working");
        }
    };
    testTheReturnTextFunction();
})(this);