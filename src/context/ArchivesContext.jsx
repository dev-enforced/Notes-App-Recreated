import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthentication } from "context";
import { receiveAllArchives } from "services";
const ArchivesContext = createContext(null);
const useArchives = () => useContext(ArchivesContext);
const ArchivesProvider = ({ children }) => {
    const [archivedNotesList, setArchivedNotesList] = useState([]);
    const { authState } = useAuthentication();
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
    return (
        <ArchivesContext.Provider value={{ archivedNotesList, setArchivedNotesList }}>
            {children}
        </ArchivesContext.Provider>
    )
}
export { useArchives, ArchivesProvider }