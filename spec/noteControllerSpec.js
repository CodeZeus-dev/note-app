'use strict';

let noteDouble = double('Note', {getText: "Favourite drink: whisky"});
let noteListDouble = double('NoteList', {createNote: "Favourite drink: whisky", getNotesList: [noteDouble]});
let noteListViewerDouble = double('NoteListViewer', {convertListToHTML: '<ul id="notes-list"><li><div>Favourite drink: whisky</div></li></ul>'})
let emptyNoteController = new NoteController();
let noteController = new NoteController(noteListDouble, noteListViewerDouble);

let documentDouble = {
    getElementById: function() {
        return {
            innerHTML: '<ul id="notes-list"><li><div>Favourite drink: whisky</div></li></ul>'
        };
    }
}

it('creates a note list model instance upon initialisation', function() {
    expect(emptyNoteController.noteList).toBeInstanceOf(NoteList);
});

it('creates a note list viewer instance upon initialisation', function() {
    expect(emptyNoteController.noteListView).toBeInstanceOf(NoteListViewer);
});

it('returns the HTML content of the notes list', function() {
    expect(documentDouble.getElementById('app').innerHTML).toEqual(noteListViewerDouble.convertListToHTML());
});

