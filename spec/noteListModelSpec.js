let firstNote = {
    getText: function() { return "Hello World!" }
};
let secondNote = {
    getText: function() { return "Hi! I'm AdamusBG" }
};

let noteList = new NoteList();

it('Returns an empty array of notes', expect(noteList.getNotesList()).toEqualArray([]))

noteList.addNote(firstNote);
noteList.addNote(secondNote);

it('Returns an array containing "Hello World!"',
    expect(noteList.getNotesList()[0].getText()).toEqual("Hello World!")
);

it('Returns an array containing "Hi! I\'m AdamusBG"',
    expect(noteList.getNotesList()[1].getText()).toEqual("Hi! I'm AdamusBG")
);
