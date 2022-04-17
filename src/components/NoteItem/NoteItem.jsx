import React from "react";
import parse from "html-react-parser";
import { useArchives, useNotes, useTrash } from "context";
import "./NoteItem.css";
import { Unpinned, Pinned, ArchiveMoved, Trash, Edit } from "constants";
import { dateExtractor, timeExtractor } from "utilities";
const NoteItem = ({ noteDetails }) => {
  const {
    title,
    color,
    editorContent,
    priorityDetails,
    pinStatus,
    labels,
    creationDetails,
  } = noteDetails;
  const { dispatchNoteData, updateNotePinStatus } = useNotes();
  const { moveExistingNoteToArchive } = useArchives();
  const { addExistingNoteToTrash } = useTrash();
  return (
    <div
      className="note-card flex-column p-4"
      style={{ backgroundColor: color }}
    >
      <div className="note-title-pin-container g-flex-row g-flex-space-between-align-center p-4">
        <p className="note-card-heading fw-600">{title}</p>
        <div
          className="note-pin-container text-cursor-pointer g-flex g-flex-align-center"
          onClick={() => {
            updateNotePinStatus(noteDetails);
          }}
        >
          {pinStatus ? (
            <Pinned className="pin-icon fs-1-5" title="Pinned Note" />
          ) : (
            <Unpinned className="pin-icon fs-1-5" title="Unpinned Note" />
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
      <div className="note-card-description g-flex-row g-flex-wrap">
        {labels.length > 0 &&
          labels.map((everyLabel, index) => {
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
            dispatchNoteData({
              type: "UPDATE_EXISTING_DATA",
              payload: noteDetails,
            });
          }}
        >
          <Edit className="note-card-action-icon" title="Edit Existing Note" />
        </button>
        <button
          className="g-flex-row g-flex-center p-3"
          onClick={() => {
            moveExistingNoteToArchive(noteDetails);
          }}
        >
          <ArchiveMoved
            className="note-card-action-icon"
            title="Move Existing Note To Archive"
          />
        </button>
        <button
          className="g-flex-row g-flex-center p-3"
          onClick={() => {
            addExistingNoteToTrash(noteDetails);
          }}
        >
          <Trash
            className="note-card-action-icon"
            title="Move Existing Note To Trash"
          />
        </button>
      </div>
    </div>
  );
};

export { NoteItem };
