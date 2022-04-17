import React, { useState } from "react";
import {
  RichTextEditor,
  ColorPalette,
  PriorityDropdown,
  LabelSection,
} from "components";
import "./NoteInput.css";
import { useNotes } from "context";
const NoteInput = () => {
  const {
    updateExistingNote,
    noteData,
    dispatchNoteData,
    addNewNote,
    notesList,
  } = useNotes();
  const [activeDropdown, setActiveDropdown] = useState({
    colorDropdown: false,
    priorityDropdown: false,
    labelDropdown: false,
  });
  const noteFormSubmissionOperator = (e) => {
    e.preventDefault();
    const checkProductExistence = notesList.some(
      (everyProduct) => everyProduct._id === noteData._id
    );
    if (checkProductExistence) {
      updateExistingNote(noteData);
    } else {
      addNewNote({
        ...noteData,
        creationDetails: new Date(),
      });
    }
    dispatchNoteData({ type: "RESET_INPUT_DATA" });
    setActiveDropdown({
      colorDropdown: false,
      priorityDropdown: false,
      labelDropdown: false,
    });
  };

  return (
    <form
      className="note-input-container"
      onSubmit={(e) => noteFormSubmissionOperator(e)}
      style={{ backgroundColor: noteData.color }}
    >
      <input
        type="text"
        name="title"
        value={noteData.title}
        className="note-input p-3"
        placeholder="ENTER TITLE"
        onChange={(e) => {
          dispatchNoteData({ type: "UPDATE_TITLE", payload: e.target.value });
        }}
        required
      />
      <RichTextEditor />
      <div className="text-center">{noteData.priorityDetails}</div>
      <div>
        {noteData.labels.length > 0 &&
          noteData.labels.map((everyLabel, index) => {
            return (
              <span key={index} className="px-4">
                {everyLabel}{" "}
              </span>
            );
          })}
      </div>
      <div className="gentle-flex flex-space-between p-4">
        <div className="gentle-flex-gap pos-relative">
          <ColorPalette
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <LabelSection
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <PriorityDropdown
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${
            noteData.title.trim() === "" ||
            noteData.editorContent === "" ||
            noteData.editorContent === "<p><br></p>"
              ? "btn-disabled"
              : ""
          }`}
        >
          {notesList.some((everyProduct) => everyProduct._id === noteData._id)
            ? "UPDATE"
            : "ADD"}
        </button>
        {notesList.some(
          (everyProduct) => everyProduct._id === noteData._id
        ) && (
          <button
            className="btn btn-error"
            onClick={(e) => {
              e.preventDefault();
              dispatchNoteData({ type: "RESET_INPUT_DATA" });
            }}
          >
            CANCEL
          </button>
        )}
      </div>
    </form>
  );
};

export { NoteInput };
