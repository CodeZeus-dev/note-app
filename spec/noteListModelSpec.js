let firstNote = {
    getText: function() { return "Hello World!" }
};
let secondNote = {
    getText: function() { return "Hi! I'm AdamusBG" }
};

let noteList = new NoteList();

it('Returns an empty array of notes', function() {
    expect(noteList.getNotesList()).toEqualArray([]);
});

noteList.addNote(firstNote);
noteList.addNote(secondNote);

it('Returns an array containing "Hello World!"', function() {
    expect(noteList.getNotesList()[0].getText()).toEqual("Hello World!");
});

it('Returns an array containing "Hi! I\'m AdamusBG"', function() {
    expect(noteList.getNotesList()[1].getText()).toEqual("Hi! I'm AdamusBG");
});

it('creates and stores a new note', function() {
    newNote = noteList.createNote("Note created within the NoteList class");
    expect(noteList.notesArray).toContain(newNote);
});
