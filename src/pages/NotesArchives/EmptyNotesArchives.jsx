import React from "react";
import { ArchiveMoved } from "constants";
import "./NotesArchives.css";
const EmptyNotesArchives = () => {
  return (
    <div className="flex-column flex-center empty-archives-container">
      <ArchiveMoved size={40} />
      <h4 className="fs-1-5 text-center">ARCHIVED NOTES APPEAR HERE</h4>
    </div>
  );
};
export { EmptyNotesArchives };
