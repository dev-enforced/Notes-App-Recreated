import React from 'react';
import { RichTextEditor, ColorPalette, PriorityDropdown } from 'components';
import "./NoteInput.css";
import { useNotes } from 'context';
const NoteInput = () => {
    const { noteData, dispatchNoteData } = useNotes();
    return (
        <form className='note-input-container' onSubmit={(e)=>{
            e.preventDefault()
            console.log(noteData)
        }} style={{ backgroundColor: noteData.color }}>
            <input type="text" name="title" value={noteData.title} className='note-input p-3' placeholder='ENTER TITLE' onChange={(e) => { dispatchNoteData({ type: "UPDATE_TITLE", payload: e.target.value }) }} required />
            <RichTextEditor />
            <div className="gentle-flex flex-space-between p-4">
                <div className="gentle-flex-gap pos-relative">
                    <ColorPalette />
                    <PriorityDropdown />
                </div>
                <button type="submit" className='btn btn-primary'>ADD</button>
            </div>
        </form>
    )
}

export { NoteInput }