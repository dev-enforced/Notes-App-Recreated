import { NoteItem } from 'components';
import React from 'react';
import "./NoteDisplay.css";
const NoteDisplay = () => {
    return (
        <div className="gentle-grid-responsive py-8">
            <NoteItem/>
            <NoteItem/>
        </div>
    )
}

export { NoteDisplay };