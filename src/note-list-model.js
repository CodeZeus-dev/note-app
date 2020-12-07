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
}
