'use strict';

let noteDouble = double('Note', {getText: "Favourite drink: whisky"});
let noteListDouble = double('NoteList', {createNote: "Favourite drink: whisky", getNotesList: [noteDouble]});
let noteListViewerDouble = double('NoteListViewer', {convertListToHTML: '<ul id="notes-list"><li><div>Favourite drink: whisky</div></li></ul>'})
let emptyNoteController = new NoteController();
let noteController = new NoteController(noteListDouble, noteListViewerDouble);

// noteListDouble.getNotesList().map((note) => console.log(note.getText()));
// console.log(emptyNoteController.renderAppHtml())

it('creates a note list model instance upon initialisation', function() {
    expect(emptyNoteController.noteList).toBeInstanceOf(NoteList);
});

it('creates a note list viewer instance upon initialisation', function() {
    expect(emptyNoteController.noteListView).toBeInstanceOf(NoteListViewer);
});

it('returns the HTML content of the notes list', function() {
    expect(document.getElementById('app').innerHTML).toEqual('<ul id="notes-list"><li><div>Favourite drink: whi</div></li></ul>');
});

