import React from "react";
import { SideNavigation } from "components";
import { EmptyNotesArchives, FilledNotesArchives } from "pages";
import { useArchives } from "context";
import { useDocumentTitle } from "hooks";
import "./NotesArchives.css";

const NotesArchives = () => {
  const { archivedNotesList } = useArchives();
  useDocumentTitle("ARCHIVES | UNOTE");
  return (
    <section className="note-content-wrapper mt-2">
      <SideNavigation />
      <div className="flex-column gentle-flex-gap flex-align-center py-4">
        {archivedNotesList.length > 0 ? (
          <FilledNotesArchives displayList={archivedNotesList} />
        ) : (
          <EmptyNotesArchives />
        )}
      </div>
    </section>
  );
};
export { NotesArchives };
