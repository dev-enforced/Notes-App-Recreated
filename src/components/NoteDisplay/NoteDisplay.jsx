import { NoteItem } from 'components';
import { useNotes } from 'context';
import React from 'react';
import "./NoteDisplay.css";
const NoteDisplay = () => {
    const { notesList } = useNotes();
    return (
        <>
            <h4 className='text-center fw-700'>ALL NOTES</h4>
            <div className="gentle-grid-responsive py-8 m-4">
                {
                    notesList.map((everyNote) => {
                        return !everyNote.pinStatus && <NoteItem key={everyNote._id} noteDetails={everyNote} />
                    })
                }
            </div>
        </>

    )
}

export { NoteDisplay };