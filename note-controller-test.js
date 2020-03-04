import { NoteList } from "./note-list-model";

(function() {
  function testNoteControllerInstantiation() {
    var noteController = new NoteController();
    if (!noteController instanceof NoteController) {
      throw new Error("testNoteControllerInstantiation fails")
    } else {
      console.log("%c testNoteControllerInstantiation passes", 'color: green')
    }
  }
  testNoteControllerInstantiation();
})()

(function() {
  function testNoteControllerExecution() {
    function NoteListViewDouble() {};
    
    var noteList = new NoteList()

    var noteController = new NoteController(noteList)

    NoteListViewDouble.prototype = {
      output: function() {}
    };
    
    var noteListViewDouble = new NoteListViewDouble();

    // noteList.newNote('Favourite drink: Guinness')
    noteController.noteListViewDouble;
  }
})
