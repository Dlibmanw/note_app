(function(exports){
        function NoteController(notelist) {
                this.notelist = notelist;
                this.noteListView = new NoteListView(noteList)
        }

        var noteList = new NoteList()
        noteList.newNote('Favourite drink: Guinness')
        var noteController = new NoteController(noteList)

        var elem = document.getElementById('app')
        console.log(elem)
        elem.innerHTML = noteController.noteListView.output()
})(this);
