'use strict';

class NoteListViewer {
    constructor(noteList = new NoteList()) {
        this.noteList = noteList;
    }

    convertListToHTML() {
        return '<ul id="notes-list">' + this._convertToListItems().join('') + '</ul>';
    }

    _convertToListItems() {
        return this.noteList.getNotesList().map(function(note) {
            if (note.getText().length > 20) {
                return `<li><div>${note.getText().slice(0, 20)}</div></li>`
            }
            return `<li><div>${note.getText()}</div></li>`
        });
    }
}