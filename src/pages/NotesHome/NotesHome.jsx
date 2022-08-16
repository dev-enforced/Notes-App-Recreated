import React, { useState } from "react";
import {
  SideNavigation,
  NoteInput,
  NoteDisplay,
  PinnedNotesSection,
  FilterModal,
} from "components";
import { useDocumentTitle } from "hooks";
import "./NotesHome.css";
const NotesHome = () => {
  const [filterModalDisplay, setFilterModalDisplay] = useState(false);
  useDocumentTitle("HOME | UNOTE");
  return (
    <section className="note-content-wrapper mt-2">
      <SideNavigation />
      <div className="flex-column gentle-flex-gap flex-align-center py-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            setFilterModalDisplay(true);
          }}
        >
          FILTERS
        </button>
        {filterModalDisplay && (
          <FilterModal checkDisplayModal={setFilterModalDisplay} />
        )}
        <NoteInput />
        <PinnedNotesSection />
        <NoteDisplay />
      </div>
    </section>
  );
};
export { NotesHome };
