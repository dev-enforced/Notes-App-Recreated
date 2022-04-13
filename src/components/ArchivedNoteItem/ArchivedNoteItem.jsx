import React from "react";
import parse from "html-react-parser";
import { Unpinned, Pinned, Unarchive, Trash } from "constants";
import "../NoteItem/NoteItem.css";
import { useArchives, useTrash } from "context";
const ArchivedNoteItem = ({ noteDetails }) => {
    const { title, color, editorContent, priorityDetails } = noteDetails;
    const { restoreArchivedNotes } = useArchives();
    const { addArchivedNoteToTrash } = useTrash();
    return (
        <div className="note-card flex-column p-4" style={{ backgroundColor: color }}>
            <div className="note-title-pin-container g-flex-row g-flex-space-between-align-center p-4">
                <p className="note-card-heading fw-600">
                    {title}
                </p>
                <div className="note-pin-container text-cursor-pointer g-flex g-flex-align-center">
                    {noteDetails.pinStatus ? <Pinned className="pin-icon fs-1-5" title="pinned-note" /> : <Unpinned className="pin-icon fs-1-5" title="unpinned-note" />}
                </div>
            </div>
            <div className="note-card-description">
                {parse(editorContent)}
            </div>
            {priorityDetails !== "" && <div className="note-card-description">
                <span className='priority-container py-1 px-2 fw-700'>{priorityDetails}</span>
            </div>}
            <div className="note-card-actions-container g-flex-row g-flex-center">
                <button className='g-flex-row g-flex-center p-3' onClick={() => {
                    restoreArchivedNotes(noteDetails);
                }}>
                    <Unarchive className="note-card-action-icon" title="Unarchive selected note" />
                </button>
                <button className='g-flex-row g-flex-center p-3' onClick={() => {
                    addArchivedNoteToTrash(noteDetails);
                }}>
                    <Trash className="note-card-action-icon" title="Move selected note to Trash" />
                </button>
            </div>
        </div>
    )
}
export { ArchivedNoteItem };