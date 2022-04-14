import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthentication, useNotes } from "context";
import { receiveAllArchives, transferServiceOfExistingNoteToArchive, restoreArchivedNoteService } from "services";
const ArchivesContext = createContext(null);
const useArchives = () => useContext(ArchivesContext);
const ArchivesProvider = ({ children }) => {
    const [archivedNotesList, setArchivedNotesList] = useState([]);
    const { authState } = useAuthentication();
    const { setNotesList } = useNotes();
    useEffect(() => {
        if (authState.isLoggedIn) {
            (async () => {
                try {
                    const { data: { archives: archivesFromResponse } } = await receiveAllArchives(authState.authToken);
                    setArchivedNotesList(archivesFromResponse);
                } catch (error) {
                    console.error("ERROR OCCURED WHILE SETTING UP ARCHIVES:", error);
                }
            })()
        } else {
            setArchivedNotesList([]);
        }
    }, [authState])

    const moveExistingNoteToArchive = async (NoteDetailsGiven) => {
        try {
            const { data: { notes: notesFromResponse, archives: archivesFromResponse } } = await transferServiceOfExistingNoteToArchive(NoteDetailsGiven, authState.authToken);
            setArchivedNotesList(archivesFromResponse)
            setNotesList(notesFromResponse);
        } catch (error) {
            console.error("ERROR OCCURED WHILE SETTING THE NOTES AND ARCHIVES WHEN MOVING ONE TO ARCHIVE", error);
        }
    }

    const restoreArchivedNotes = async (NoteDetailsGiven) => {
        try {
            const { data: { notes: notesFromResponse, archives: archivesFromResponse } } = await restoreArchivedNoteService(NoteDetailsGiven, authState.authToken);
            setNotesList(notesFromResponse);
            setArchivedNotesList(archivesFromResponse)
        } catch (error) {
            console.error("ERROR OCCURED WHILE SETTING THE NOTES AND ARCHIVES WHEN RESTORING A NOTE FROM ARCHIVE", error);
        }
    }
    return (
        <ArchivesContext.Provider value={{ archivedNotesList, setArchivedNotesList, moveExistingNoteToArchive, restoreArchivedNotes }}>
            {children}
        </ArchivesContext.Provider>
    )
}
export { useArchives, ArchivesProvider }