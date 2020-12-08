class NoteList {
    constructor() {
        this.notesArray = [];
    }

    addNote(note) {
        this.notesArray.push(note);
    }

    getNotesList() {
        return this.notesArray;
    }

    createNote(text) {
        this.addNote(new Note(text));
        return this.notesArray[this.notesArray.length - 1];
    }
}
