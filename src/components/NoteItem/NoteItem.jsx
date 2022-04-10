import React from 'react';
import parse from "html-react-parser";
import "./NoteItem.css";
import { Unpinned, ArchiveMoved, Trash, Edit } from "constants";
const NoteItem = ({ noteDetails }) => {
  const { title, color, editorContent, priorityDetails } = noteDetails
  return (
    <div className="card card-vertical" style={{ backgroundColor: color }}>
      <div className="card-header">
        <div className="card-badge card-badge-info">
          <span>{priorityDetails}</span>
        </div>
        <div className="card-dismiss">
          <Unpinned className="card-dismiss-icon" />
        </div>
      </div>
      <div>
        <h4>{title}</h4>
      </div>
      <div className="card-content">

        {parse(editorContent)}
      </div>

      <div className="card-actions">
        <button className="btn btn-icon btn-warning-hover">
          <Edit className="note-icon" />
        </button>
        <button className="btn btn-icon btn-primary-hover">
          <ArchiveMoved className="note-icon" />
        </button>
        <button className="btn btn-icon btn-primary-hover">
          <Trash className="note-icon" />
        </button>
      </div>
    </div>
  )
}

export { NoteItem }