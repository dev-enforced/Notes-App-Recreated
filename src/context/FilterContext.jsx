import React, { createContext, useContext, useReducer } from "react";
import { useNotes } from "context";
import {
  dateSort,
  labelsSort,
  prioritySort,
  cumulativeFilters,
} from "utilities";
import { initialNoteFilterState, noteFilterReducer } from "reducers";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { notesList } = useNotes();

  const [currentFilterState, filterStateUpdate] = useReducer(
    noteFilterReducer,
    initialNoteFilterState
  );

  const finalFilteredList = cumulativeFilters(
    labelsSort,
    dateSort,
    prioritySort
  )(notesList, currentFilterState);
  return (
    <FilterContext.Provider
      value={{ currentFilterState, filterStateUpdate, finalFilteredList }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilters = () => useContext(FilterContext);
export { FilterProvider, useFilters };
