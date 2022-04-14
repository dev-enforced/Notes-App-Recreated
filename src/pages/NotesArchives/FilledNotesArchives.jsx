import { ArchivedNoteItem } from "components";
import React from "react";
import "./NotesArchives.css";

const FilledNotesArchives = ({ displayList }) => {
    return (
        <>
            <h4 className='text-center fw-700'>ARCHIVED NOTES</h4>
            <div className="gentle-grid-responsive py-8 m-4">
                {
                    displayList.map((everyNote) => {
                        return <ArchivedNoteItem key={everyNote._id} noteDetails={everyNote} />
                    })
                }
            </div>
        </>
    )
}
export { FilledNotesArchives }