'use strict';

class NoteController {
    constructor(noteList = new NoteList(), noteListView = new NoteListViewer(noteList)) {
        this.noteList = noteList;
        this.noteList.createNote("Favourite drink: whisky");
        this.noteListView = noteListView;
    }

    renderAppHtml() {
        document.getElementById('app').innerHTML = this.noteListView.convertListToHTML();
        return this.noteListView.convertListToHTML();
    }
}

let noteControl = new NoteController();
noteControl.renderAppHtml();
