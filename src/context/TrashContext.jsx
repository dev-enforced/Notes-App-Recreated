import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthentication, useNotes, useArchives } from "context";
import { receiveAllTrash, transferServiceOfArchivedNoteToTrash } from "services";
import { transferServiceOfExistingNoteToTrash } from "services/Notes";
const TrashContext = createContext(null);
const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
    const [trashNotesList, setTrashNotesList] = useState([]);
    const { authState } = useAuthentication();
    const { setNotesList } = useNotes();
    const { setArchivedNotesList } = useArchives()
    useEffect(() => {
        if (authState.isLoggedIn) {
            (async () => {
                try {
                    const { data: { trash: trashFromResponse } } = await receiveAllTrash(authState.authToken);
                    setTrashNotesList(trashFromResponse);
                } catch (error) {
                    console.error("ERROR OCCURED WHILE SETTING UP TRASH:", error);
                }
            })()
        } else {
            setTrashNotesList([])
        }
    }, [authState])
    const addExistingNoteToTrash = async (NoteProvided) => {
        try {
            const { data: { notes: notesFromResponse, trash: trashFromResponse } } = await transferServiceOfExistingNoteToTrash(NoteProvided, authState.authToken);
            setTrashNotesList(trashFromResponse);
            setNotesList(notesFromResponse);
        } catch (error) {
            console.error("ERROR OCCURED WHILE SETTING UP ITEMS WHEN MOVING FROM NOTES TO TRASH", error);
        }
    }

    const addArchivedNoteToTrash = async (NoteProvided) => {
        try {
            const { data: { trash: trashFromResponse, archives: archivesFromResponse } } = await transferServiceOfArchivedNoteToTrash(NoteProvided, authState.authToken);
            setArchivedNotesList(archivesFromResponse);
            setTrashNotesList(trashFromResponse);
        } catch (error) {
            console.error("ERROR OCCURED WHILE SETTING UP ITEMS WHEN MOVING FROM ARCHIVES TO TRASH");
        }
    }
    return (
        <TrashContext.Provider value={{ trashNotesList, setTrashNotesList, addExistingNoteToTrash, addArchivedNoteToTrash }}>
            {children}
        </TrashContext.Provider>
    )
}
export { useTrash, TrashProvider };