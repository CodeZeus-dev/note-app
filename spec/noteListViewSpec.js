'use strict';

let noteClone = double('Note', {getText: "Hello World! I'm Constantine!"});
let anotherNoteClone = double('Note', {getText: "Hi! I'm AdamusBG"});

let noteListClone = double('NoteList', {getNotesList: [noteClone]});
let multipleListClone = double('NoteList', {getNotesList: [noteClone, anotherNoteClone]});

let emptyListViewer = new NoteListViewer();
let noteListViewer = new NoteListViewer(noteListClone);
let multipleListViewer = new NoteListViewer(multipleListClone);

it('Returns a NoteList instance upon initialisation', function() {
    expect(emptyListViewer.noteList).toBeInstanceOf(NoteList);
});

it('Returns a string of HTML containing an empty unordered list', function() {
    expect(emptyListViewer.convertListToHTML()).toEqual('<ul id="notes-list"></ul>');
});

it('Returns a string of HTML containing the notes list', function() {
    expect(multipleListViewer.convertListToHTML()).toEqual(
        "<ul id=\"notes-list\"><li><div>Hello World! I'm Con</div></li><li><div>Hi! I'm AdamusBG</div></li></ul>"
    );
});

it('Returns the first 20 characters of the note if larger than 20 chars long', function() {
    expect(noteListViewer.convertListToHTML()).toEqual("<ul id=\"notes-list\"><li><div>Hello World! I'm Con</div></li></ul>");
});
