import React from "react";
import "./NotesTrash.css";
const FilledNotesTrash = ({ displayList }) => {
    return (
        <>
            <h4 className='text-center fw-700'>TRASH NOTES</h4>
            <div className="gentle-grid-responsive py-8 m-4">
                {/* {
                    displayList.map((everyNote) => {
                        return !everyNote.pinStatus && <NoteItem key={everyNote._id} noteDetails={everyNote} />
                    })
                } */}
            </div>
        </>
    )
}
export { FilledNotesTrash };