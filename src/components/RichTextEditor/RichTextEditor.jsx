import { useNotes } from 'context';
import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";

const RichTextEditorSetup = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ]
}

const RichTextEditor = () => {
    const { noteData, dispatchNoteData } = useNotes();
    return (
        <ReactQuill className='text-editor'
            value={noteData.editorContent} modules={RichTextEditorSetup}
            theme="snow"
            placeholder="Give your note description..."
            onChange={(e) => { dispatchNoteData({ type: "UPDATE_DESCRIPTION", payload: e }) }}
            required />
    )
}

export { RichTextEditor };