import React from "react";
import { AuthProvider, NotesProvider } from "context";

const CombinedProvider = ({ children }) => {
    return (
        <AuthProvider>
            <NotesProvider>
                {children}
            </NotesProvider>
        </AuthProvider>
    )
}

export { CombinedProvider };