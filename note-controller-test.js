(function() {
  function testNoteController() {
    
  }
})



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