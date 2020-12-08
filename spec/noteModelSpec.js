let note = new Note('Hello World!');

it('Creates a new note "Hello World!"', function() {
    expect(note.getText()).toEqual("Hello World!");
});
