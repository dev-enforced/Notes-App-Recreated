import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthentication, useNotes, useArchives } from "context";
import {
  receiveAllTrash,
  transferServiceOfArchivedNoteToTrash,
  transferServiceOfExistingNoteToTrash,
  deleteNoteForeverService,
  restoreExistingNoteFromTrashService,
} from "services";
const TrashContext = createContext(null);
const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
  const [trashNotesList, setTrashNotesList] = useState([]);
  const { authState } = useAuthentication();
  const { setNotesList } = useNotes();
  const { setArchivedNotesList } = useArchives();
  useEffect(() => {
    if (authState.isLoggedIn) {
      (async () => {
        try {
          const {
            data: { trash: trashFromResponse },
          } = await receiveAllTrash(authState.authToken);
          setTrashNotesList(trashFromResponse);
        } catch (error) {
          console.error("ERROR OCCURED WHILE SETTING UP TRASH:", error);
        }
      })();
    } else {
      setTrashNotesList([]);
    }
  }, [authState]);
  const addExistingNoteToTrash = async (NoteProvided) => {
    try {
      const {
        data: { notes: notesFromResponse, trash: trashFromResponse },
      } = await transferServiceOfExistingNoteToTrash(
        NoteProvided,
        authState.authToken
      );
      setTrashNotesList(trashFromResponse);
      setNotesList(notesFromResponse);
      toast.success("Note moved to trash");
    } catch (error) {
      console.error(
        "ERROR OCCURED WHILE SETTING UP ITEMS WHEN MOVING FROM NOTES TO TRASH",
        error
      );
    }
  };

  const addArchivedNoteToTrash = async (NoteProvided) => {
    try {
      const {
        data: { trash: trashFromResponse, archives: archivesFromResponse },
      } = await transferServiceOfArchivedNoteToTrash(
        NoteProvided,
        authState.authToken
      );
      setArchivedNotesList(archivesFromResponse);
      setTrashNotesList(trashFromResponse);
      toast.success("Note moved to trash");
    } catch (error) {
      console.error(
        "ERROR OCCURED WHILE SETTING UP ITEMS WHEN MOVING FROM ARCHIVES TO TRASH"
      );
    }
  };

  const restoreNoteFromTrash = async (NoteProvided) => {
    try {
      const {
        data: { notes: notesFromResponse, trash: trashFromResponse },
      } = await restoreExistingNoteFromTrashService(
        NoteProvided,
        authState.authToken
      );
      setNotesList(notesFromResponse);
      setTrashNotesList(trashFromResponse);
      toast.success("Note restored from trash");
    } catch (error) {
      console.error(
        "ERROR OCCURED WHILE SETTING UP TRASH AND NOTES SECTION AT THE TIME OF RESTORING A NOTE",
        error
      );
    }
  };

  const removeNoteFromTrash = async (NoteProvided) => {
    try {
      const {
        data: { trash: trashFromResponse },
      } = await deleteNoteForeverService(NoteProvided, authState.authToken);
      setTrashNotesList(trashFromResponse);
      toast.success("Note removed forever")
    } catch (error) {
      console.error(
        "ERROR OCCURED WHILE SETTING UP TRASH SECTION WHEN REMOVING A NOTE FOREVER",
        error
      );
    }
  };
  return (
    <TrashContext.Provider
      value={{
        trashNotesList,
        setTrashNotesList,
        addExistingNoteToTrash,
        addArchivedNoteToTrash,
        restoreNoteFromTrash,
        removeNoteFromTrash,
      }}
    >
      {children}
    </TrashContext.Provider>
  );
};
export { useTrash, TrashProvider };
