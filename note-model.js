function Note(text) {
    this.text = text;
}

var note1 = new Note("Hello world!")

Note.prototype.returnText = function(){
    return this.text;
};