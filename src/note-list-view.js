'use strict';

class NoteListViewer {
    constructor(noteList = new NoteList()) {
        this.noteList = noteList;
    }

    convertListToHTML() {
        return '<ul id="notes-list">' + this.#convertToListItems().join('') + '</ul>';
    }

    #convertToListItems() {
        return this.noteList.getNotesList().map(function(note) {
            return `<li><div>${note.getText()}</div></li>`
        });
    }
}