import axios from "axios";
import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { useAuthentication } from "./AuthContext";
const NotesContext = createContext(null);
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
    const { authState } = useAuthentication();
    const [notesList, setNotesList] = useState([]);
    const defaultNoteData = {
        title: "",
        editorContent: "",
        color: "",
        priorityDetails: "",
        pinStatus: false
    }
    const noteInputReducer = (givenState, action) => {
        const { type, payload } = action;
        switch (type) {
            case "UPDATE_TITLE":
                return { ...givenState, title: payload }
            case "UPDATE_DESCRIPTION":
                return { ...givenState, editorContent: payload }
            case "UPDATE_COLOR":
                return { ...givenState, color: payload }
            case "UPDATE_PRIORITY":
                return { ...givenState, priorityDetails: payload }
            case "RESET_INPUT_DATA":
                return { ...defaultNoteData }
            case "UPDATE_PIN_STATUS":
                return { ...givenState, pinStatus: !givenState.pinStatus }
            default:
                return givenState
        }
    }
    const [noteData, dispatchNoteData] = useReducer(noteInputReducer, defaultNoteData);

    useEffect(() => {
        if (authState.isLoggedIn) {
            (async () => {
                try {
                    const response = await axios.get("/api/notes", {
                        headers: {
                            authorization: authState.authToken
                        }
                    })
                    setNotesList(response.data.notes);
                } catch (error) {
                    console.error("ERROR WHILE FETCHING THE CURRENT NOTES: ", error);
                }
            })()
        } else {
            setNotesList([])
        }
    }, [authState])
    const addNewNote = async (NoteProvided) => {
        const responseReceived = await axios.post("/api/notes", { note: { ...NoteProvided } }, {
            headers: {
                authorization: authState.authToken
            }
        });
        setNotesList(responseReceived.data.notes);
    }
    return (
        <NotesContext.Provider value={{ addNewNote, noteData, dispatchNoteData, notesList, setNotesList }}>
            {children}
        </NotesContext.Provider>
    )
}

export { useNotes, NotesProvider }