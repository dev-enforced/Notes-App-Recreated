import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
const ArchivesContext = createContext(null);
const useArchives = () => useContext(ArchivesContext);
const ArchivesProvider = ({ children }) => {
    return (
        <ArchivesContext.Provider>
            {children}
        </ArchivesContext.Provider>
    )
}
export { useArchives, ArchivesProvider }