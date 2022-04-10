import React from 'react';
import parse from "html-react-parser";
import { useNotes } from 'context';
import "./NoteItem.css";
import { Unpinned, ArchiveMoved, Trash, Edit } from "constants";
const NoteItem = ({ noteDetails }) => {
  const { title, color, editorContent, priorityDetails } = noteDetails;
  const { dispatchNoteData } = useNotes();
  return (
    <div className="note-card flex-column p-4" style={{ backgroundColor: color }}>
      <div className="note-title-pin-container g-flex-row g-flex-space-between-align-center p-4">
        <p className="note-card-heading fw-600">
          {title}
        </p>
        <div className="note-pin-container text-cursor-pointer g-flex g-flex-align-center">
          <Unpinned className="pin-icon fs-1-5" />
        </div>
      </div>
      <div className="note-card-description">
        {parse(editorContent)}
      </div>
      <div className="note-card-description">
        <span className='priority-container py-1 px-2 fw-700'>{priorityDetails}</span>
      </div>
      <div className="note-card-actions-container g-flex-row g-flex-center">
        <button className='g-flex-row g-flex-center p-3' onClick={() => {
          dispatchNoteData({ type: "UPDATE_EXISTING_DATA", payload: noteDetails });
        }}>
          <Edit className="note-card-action-icon" />
        </button>
        <button className='g-flex-row g-flex-center p-3'>
          <ArchiveMoved className="note-card-action-icon" />
        </button>
        <button className='g-flex-row g-flex-center p-3'>
          <Trash className="note-card-action-icon" />
        </button>
      </div>
    </div>
  )
}

export { NoteItem }