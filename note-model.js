(function(exports){
    function Note(text) {
        this.text = text;
    }

    exports.Note = Note;

    Note.prototype.returnText = function(){
        return this.text;
    }
})(this);