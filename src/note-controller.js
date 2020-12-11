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

if (document.title === 'Note App - Vanilla JS') {
    let noteControl = new NoteController();
    noteControl.renderAppHtml();
} // this conditional permits the execution of lines 17, 18 only if on index.html; this is done to prevent the statements from running if on SpecRunner
