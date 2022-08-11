import React from "react";
import { NoteItem } from "components";
import { useFilters } from "context";
import "./PinnedNotesSection.css";
const PinnedNotesSection = () => {
  const {
    finalFilteredList,
    currentFilterState: { filtersApplied },
  } = useFilters();
  const pinnedNotesList = finalFilteredList.filter(
    (everyNote) => everyNote.pinStatus
  );
  if (pinnedNotesList.length !== 0) {
    return (
      <>
        <h4 className="text-center fw-700">PINNED NOTES</h4>
        {filtersApplied ? (
          <small>Some filters are applied. Check above</small>
        ) : null}
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
