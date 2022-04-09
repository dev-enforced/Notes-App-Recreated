import React from 'react';
import { RichTextEditor, ColorPalette, PriorityDropdown } from 'components';
import "./NoteInput.css";
const NoteInput = () => {
    return (
        <div className='note-input-container'>
            <input type="text" className='note-input p-3' placeholder='ENTER TITLE' />
            <RichTextEditor />
            <div className="gentle-flex flex-space-between p-4">
                <div className="gentle-flex-gap pos-relative">
                    <ColorPalette />
                    <PriorityDropdown />
                </div>
                <button className='btn btn-primary'>ADD</button>
            </div>
        </div>
    )
}

export { NoteInput }