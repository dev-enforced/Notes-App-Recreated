import React from "react";
import "./NotesTrash.css";
const EmptyNotesTrash = () => {
    return (
        <div className="flex-column flex-center empty-trash-container">
            <img src="https://findicons.com/files/icons/765/xedia/128/recyclebin_full.png" alt="EMPTY TRASH SECTION" />
            <h4 className="fs-1-5 text-center">TRASH NOTES APPEAR HERE</h4>
        </div>
    )
}
export { EmptyNotesTrash }