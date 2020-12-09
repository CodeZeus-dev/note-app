'use strict';

class NoteController {
    constructor(noteList = new NoteList()) {
        this.noteList = noteList;
        this.noteList.createNote("Favourite drink: whiskey");
        this.noteListView = new NoteListViewer(this.noteList);
    }

    renderAppHtml() {
        document.getElementById('app').innerHTML = this.noteListView.convertListToHTML();
    }
}

let orange = new NoteController();
orange.renderAppHtml();
