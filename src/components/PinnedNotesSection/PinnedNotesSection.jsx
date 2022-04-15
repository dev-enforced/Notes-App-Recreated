import React from "react";
import { NoteItem } from "components";
import { useNotes } from "context";
import "./PinnedNotesSection.css";
const PinnedNotesSection = () => {
  const { notesList } = useNotes();
  const pinnedNotesList = notesList.filter((everyNote) => everyNote.pinStatus);
  if (pinnedNotesList.length !== 0) {
    return (
      <>
        <h4 className="text-center fw-700">PINNED NOTES</h4>
        <div className="gentle-grid-responsive py-8 m-4">
          {pinnedNotesList.map((everyNote) => {
            return <NoteItem key={everyNote._id} noteDetails={everyNote} />;
          })}
        </div>
      </>
    );
  }
};

export { PinnedNotesSection };
