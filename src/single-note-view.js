'use strict';

class SingleNoteView {

    constructor(note = new Note()) {
        this.note = note;
    }

    noteHTML() {
        return `<div>${this.note.getText()}</div>`;
    }

}