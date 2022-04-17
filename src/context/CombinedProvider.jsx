import React from "react";
import {
  AuthProvider,
  NotesProvider,
  ArchivesProvider,
  TrashProvider,
  FilterProvider,
} from "context";

const CombinedProvider = ({ children }) => {
  return (
    <AuthProvider>
      <NotesProvider>
        <FilterProvider>
          <ArchivesProvider>
            <TrashProvider>{children}</TrashProvider>
          </ArchivesProvider>
        </FilterProvider>
      </NotesProvider>
    </AuthProvider>
  );
};

export { CombinedProvider };
