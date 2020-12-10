'use strict';

let singleNoteView = new SingleNoteView();
let singleNoteViewWDouble = new SingleNoteView(noteDouble);

it('is instantiated with a note instance', function() {
    expect(singleNoteView.note).toBeInstanceOf(Note);
});

it('returns an HTML element of the note itself', function() {
    expect(singleNoteViewWDouble.noteHTML()).toEqual("<div>Favourite drink: whisky</div>");
});
