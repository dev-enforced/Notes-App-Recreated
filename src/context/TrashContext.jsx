import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
const TrashContext = createContext(null);
const useTrash = () => useContext(TrashContext);

const TrashProvider = ({ children }) => {
    return (
        <TrashContext.Provider>
            {children}
        </TrashContext.Provider>
    )
}
export { useTrash, TrashProvider };