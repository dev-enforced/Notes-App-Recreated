import React from "react";
import { useTrash } from "context";
import { SideNavigation } from "components";
import { EmptyNotesTrash, FilledNotesTrash } from "pages";
import "./NotesTrash.css";
const NotesTrash = () => {
  const { trashNotesList } = useTrash();
  return (
    <section className="note-content-wrapper mt-2">
      <SideNavigation />
      <div className="flex-column gentle-flex-gap flex-align-center py-4">
        {trashNotesList.length > 0 ? (
          <FilledNotesTrash displayList={trashNotesList} />
        ) : (
          <EmptyNotesTrash />
        )}
      </div>
    </section>
  );
};
export { NotesTrash };
