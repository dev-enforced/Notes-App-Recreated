import { NoteItem } from 'components';
import { useNotes } from 'context';
import React from 'react';
import "./NoteDisplay.css";
const NoteDisplay = () => {
    const { notesList } = useNotes();
    return (
        <div className="gentle-grid-responsive py-8 m-4 flex-wrap">
            {
                notesList.map((everyNote)=>{
                    return (<NoteItem key={everyNote._id} noteDetails={everyNote}/>)
                })
            }
        </div>
    )
}

export { NoteDisplay };