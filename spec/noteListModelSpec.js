let firstNote = {
    getText: function() { return "Hello World! I'm Constantine!" },
    getID: function() { return 0 }
};
let secondNote = {
    getText: function() { return "Hi! I'm AdamusBG" },
    getID: function() { return 1 }
};

let noteList = new NoteList();

it('Returns an empty array of notes', function() {
    expect(noteList.getNotesList()).toEqualArray([]);
});

noteList.addNote(firstNote);
noteList.addNote(secondNote);

it('Returns an array containing "Hello World! I\'m Constantine!"', function() {
    expect(noteList.getNotesList()[0].getText()).toEqual("Hello World! I'm Constantine!");
});

it('Returns an array containing "Hi! I\'m AdamusBG"', function() {
    expect(noteList.getNotesList()[1].getText()).toEqual("Hi! I'm AdamusBG");
});

it('creates and stores a new note', function() {
    newNote = noteList.createNote("Note created within the NoteList class");
    expect(noteList.notesArray).toContain(newNote);
});

it('creates and stores a new note with an id based on the note\'s position in the notesArray', function() {
    expect(newNote.getID()).toEqual(2);
})
