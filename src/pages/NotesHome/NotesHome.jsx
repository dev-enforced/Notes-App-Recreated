import React from "react";
import { SideNavigation, NoteInput, NoteDisplay } from "components";
import "./NotesHome.css";
const NotesHome = () => {
    return (
        <section className="note-content-wrapper mt-2">
            <SideNavigation />
            <div className="flex-column gentle-flex-gap flex-align-center py-4">
                <NoteInput />
                <NoteDisplay />
            </div>
        </section>
    )
}
export { NotesHome };