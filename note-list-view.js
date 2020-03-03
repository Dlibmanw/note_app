(function(exports){
    function NoteListView(noteList) {
        this.noteList = noteList;
    }
    exports.NoteListView = NoteListView;

    NoteListView.prototype.output = function(){
        var string = ["<ul>"]; 
        var notes = this.noteList.notes
        for (var i = 0; i < notes.length; i++) {
            console.log("loop")
            var note = notes[i].returnText()
            
        string.push("<li>" + note + "</li>")
        }
        string.push("</ul>")
        return string.join("");
    };

})(this);