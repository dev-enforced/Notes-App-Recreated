import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { defaultNoteData, noteInputReducer } from "reducers";
import { addNewNoteService, receiveAllNotes } from "services";
import { useAuthentication } from "./AuthContext";
const NotesContext = createContext(null);
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
    const { authState } = useAuthentication();
    const [notesList, setNotesList] = useState([]);
    const [noteData, dispatchNoteData] = useReducer(noteInputReducer, defaultNoteData);

    useEffect(() => {
        if (authState.isLoggedIn) {
            (async () => {
                try {
                    const { data: { notes: notesFromResponse } } = await receiveAllNotes(authState.authToken);
                    setNotesList(notesFromResponse);
                } catch (error) {
                    console.error("ERROR WHILE SETTING NOTES FROM API CALL: ", error);
                }
            })()
        } else {
            setNotesList([])
        }
    }, [authState])

    const addNewNote = async (NoteProvided) => {
        try {
            const { data: { notes: notesFromResponse } } = await addNewNoteService(NoteProvided, authState.authToken);
            setNotesList(notesFromResponse);
        } catch (error) {
            console.error("ERROR WHILE SETTING NOTES FROM ADD NOTES API CALL:", error);
        }
    }
    return (
        <NotesContext.Provider value={{ addNewNote, noteData, dispatchNoteData, notesList, setNotesList }}>
            {children}
        </NotesContext.Provider>
    )
}

export { useNotes, NotesProvider }