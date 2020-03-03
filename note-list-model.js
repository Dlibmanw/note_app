(function(exports){
    function NoteList() {
    this.notes = [];
    }

    exports.NoteList = NoteList;

    NoteList.prototype.returnAllNotes = function(){
        return this.notes;
    };

    NoteList.prototype.newNote = function(content){
        var note = new Note(content);
        this.notes.push(note);
    };
})(this);
