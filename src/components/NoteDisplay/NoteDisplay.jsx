import { NoteItem } from "components";
import { useFilters } from "context";
import React from "react";
import "./NoteDisplay.css";
const NoteDisplay = () => {
  const {
    finalFilteredList,
    currentFilterState: { filtersApplied },
  } = useFilters();
  return (
    <>
      <h4 className="text-center fw-700">ALL NOTES</h4>
      {filtersApplied ? (
        <small>Some filters are applied. Check above</small>
      ) : null}
      <div className="gentle-grid-responsive py-8 m-4">
        {finalFilteredList.map((everyNote) => {
          return (
            !everyNote.pinStatus && (
              <NoteItem key={everyNote._id} noteDetails={everyNote} />
            )
          );
        })}
      </div>
    </>
  );
};

export { NoteDisplay };
