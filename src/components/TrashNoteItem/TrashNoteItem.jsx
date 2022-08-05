import React from "react";
import parse from "html-react-parser";
import { Unpinned, Pinned, Restore, RemoveForever } from "constants";
import { useTrash } from "context";
import { dateExtractor, timeExtractor } from "utilities";
import "../NoteItem/NoteItem.css";

const TrashNoteItem = ({ noteDetails }) => {
  const {
    title,
    color,
    editorContent,
    priorityDetails,
    pinStatus,
    labels,
    creationDetails,
  } = noteDetails;
  const { restoreNoteFromTrash, removeNoteFromTrash } = useTrash();
  return (
    <div
      className="note-card flex-column p-4"
      style={{ backgroundColor: color }}
    >
      <div className="note-title-pin-container g-flex-row g-flex-space-between-align-center p-4">
        <p className="note-card-heading fw-600">{title}</p>
        <div className="note-pin-container text-cursor-pointer g-flex g-flex-align-center component-hide">
          {pinStatus ? (
            <Pinned className="pin-icon fs-1-5" />
          ) : (
            <Unpinned className="pin-icon fs-1-5" />
          )}
        </div>
      </div>
      <div className="note-card-description">{parse(editorContent)}</div>
      {priorityDetails !== "" && (
        <div className="note-card-description">
          <span className="priority-container py-1 px-2 fw-700">
            {priorityDetails}
          </span>
        </div>
      )}
      {labels.length > 0 && (
        <div className="note-card-description g-flex-row g-flex-wrap">
          {labels.map((everyLabel, index) => {
            return (
              <span
                key={index}
                className="priority-container px-4 py-2 m-3 fw-700"
              >
                {everyLabel}
              </span>
            );
          })}
        </div>
      )}
      <div className="note-card-description g-flex-row g-flex-space-between">
        <span>{creationDetails && dateExtractor(creationDetails)}</span>
        <span className="fw-600">
          {creationDetails && timeExtractor(creationDetails)}
        </span>
      </div>
      <div className="note-card-actions-container g-flex-row g-flex-center">
        <button
          className="g-flex-row g-flex-center p-3"
          onClick={() => {
            restoreNoteFromTrash(noteDetails);
          }}
        >
          <Restore className="note-card-action-icon" title="RESTORE NOTE" />
        </button>
        <button
          className="g-flex-row g-flex-center p-3"
          onClick={() => {
            removeNoteFromTrash(noteDetails);
          }}
        >
          <RemoveForever
            className="note-card-action-icon"
            title="REMOVE NOTE PERMANENTLY"
          />
        </button>
      </div>
    </div>
  );
};
export { TrashNoteItem };
