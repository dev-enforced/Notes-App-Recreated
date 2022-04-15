import React from "react";
import {
  AuthProvider,
  NotesProvider,
  ArchivesProvider,
  TrashProvider,
} from "context";

const CombinedProvider = ({ children }) => {
  return (
    <AuthProvider>
      <NotesProvider>
        <ArchivesProvider>
          <TrashProvider>{children}</TrashProvider>
        </ArchivesProvider>
      </NotesProvider>
    </AuthProvider>
  );
};

export { CombinedProvider };
