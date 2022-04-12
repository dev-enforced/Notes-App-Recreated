import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuthentication } from "context";
import { receiveAllTrash } from "services";
const TrashContext = createContext(null);
const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
    const [trashNotesList, setTrashNotesList] = useState([]);
    const { authState } = useAuthentication();
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
    return (
        <TrashContext.Provider value={{ trashNotesList, setTrashNotesList }}>
            {children}
        </TrashContext.Provider>
    )
}
export { useTrash, TrashProvider };