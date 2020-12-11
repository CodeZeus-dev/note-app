let note = new Note('Hello World!', 0);

it('assigns a unique id a newly instantiated note object', function() {
    expect(note.getID()).toEqual(0);
})

it('Creates a new note "Hello World!"', function() {
    expect(note.getText()).toEqual("Hello World!");
});
