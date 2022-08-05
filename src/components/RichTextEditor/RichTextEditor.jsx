import React from "react";
import ReactQuill from "react-quill";
import { useNotes } from "context";
import { actionConstants } from "constants";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";

const RichTextEditorSetup = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formatsProvided = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "link",
  "image",
  "video",
  "clean",
];

const RichTextEditor = () => {
  const { noteData, dispatchNoteData } = useNotes();
  const {
    INPUT_ACTIONS: { UPDATE_DESCRIPTION },
  } = actionConstants;
  return (
    <ReactQuill
      className="text-editor"
      value={noteData.editorContent}
      modules={RichTextEditorSetup}
      formats={formatsProvided}
      theme="snow"
      placeholder="* Add your note description."
      onChange={(e) => {
        dispatchNoteData({ type: UPDATE_DESCRIPTION, payload: e });
      }}
      required
    />
  );
};

export { RichTextEditor };
