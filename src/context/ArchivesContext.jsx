import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import { useNotes } from "context";
const ArchivesContext = createContext(null);
const useArchives = () => useContext(ArchivesContext);
const ArchivesProvider = ({ children }) => {
    const [archivedNotesList, setArchivedNotesList] = useState([]);
    const { setNotesList } = useNotes();
    
    return (
        <ArchivesContext.Provider value={{ archivedNotesList, setArchivedNotesList }}>
            {children}
        </ArchivesContext.Provider>
    )
}
export { useArchives, ArchivesProvider }