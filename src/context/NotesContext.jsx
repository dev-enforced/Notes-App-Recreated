import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { defaultNoteData, noteInputReducer } from "reducers";
import {
  addNewNoteService,
  receiveAllNotes,
  updateExistingNoteService,
} from "services";
import { useAuthentication } from "./AuthContext";
const NotesContext = createContext(null);
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const { authState } = useAuthentication();
  const [notesList, setNotesList] = useState([]);
  const [noteLabels, setNoteLabels] = useState(["School", "Office"]);
  const [noteData, dispatchNoteData] = useReducer(
    noteInputReducer,
    defaultNoteData
  );
  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const {
            data: { notes: notesFromResponse },
          } = await receiveAllNotes(authState.authToken);
          setNotesList(notesFromResponse);
        } catch (error) {
          console.error("ERROR WHILE SETTING NOTES FROM API CALL: ", error);
        }
      })();
    } else {
      setNotesList([]);
    }
  }, [authState]);

  const addNewNote = async (NoteProvided) => {
    try {
      const {
        data: { notes: notesFromResponse },
      } = await addNewNoteService(NoteProvided, authState.authToken);
      setNotesList(notesFromResponse);
    } catch (error) {
      console.error(
        "ERROR WHILE SETTING NOTES FROM ADD NOTES API CALL:",
        error
      );
    }
  };
  const updateExistingNote = async (NoteProvided) => {
    try {
      const {
        data: { notes: notesFromResponse },
      } = await updateExistingNoteService(NoteProvided, authState.authToken);
      setNotesList(notesFromResponse);
    } catch (error) {
      console.error(
        "ERROR WHILE UPDATING EXISTING NOTES FROM UPDATE API CALL:",
        error
      );
    }
  };

  const updateNotePinStatus = async (NoteProvided) => {
    try {
      const {
        data: { notes: notesFromResponse },
      } = await updateExistingNoteService(
        { ...NoteProvided, pinStatus: !NoteProvided.pinStatus },
        authState.authToken
      );
      setNotesList(notesFromResponse);
    } catch (error) {
      console.error(
        "ERROR WHILE UPDATING EXISTING NOTES FROM UPDATE API CALL:",
        error
      );
    }
  };

  return (
    <NotesContext.Provider
      value={{
        updateNotePinStatus,
        addNewNote,
        updateExistingNote,
        noteData,
        dispatchNoteData,
        notesList,
        setNotesList,
        noteLabels,
        setNoteLabels,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes, NotesProvider };
