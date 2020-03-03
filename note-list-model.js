function NoteList() {
    this.notes = [];
}

var noteList1 = new NoteList()

NoteList.prototype.returnAllNotes = function(){
    console.log(this.notes);
};

NoteList.prototype.newNote = function(content){
    var note = new Note(content)
    this.notes.push(note);
    console.log(this.notes);
};