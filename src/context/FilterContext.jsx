import React, { createContext, useContext, useReducer } from "react";
import { useNotes } from "context";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { notesList } = useNotes();
  const initialFilterState = {
    sortBy: {
      oldToRecent: false,
      recentToOld: false,
    },
    selectedLabels: [],
  };

  const dateSort = (providedNotesList, givenFilterState) => {
    const {
      sortBy: { oldToRecent, recentToOld },
    } = givenFilterState;
    if (oldToRecent) {
    } else if (recentToOld) {
    } else {
    }
  };
  const labelsSort = (providedNotesList, givenFilterState) => {};
  const filterReducer = (givenFilterState, { type, payload }) => {
    switch (type) {
      case "OLD_TO_RECENT":
        return {
          ...givenFilterState,
          sortBy: {
            oldToRecent: !givenFilterState.sortBy.oldToRecent,
            recentToOld: false,
          },
        };
      case "RECENT_TO_OLD":
        return {
          ...givenFilterState,
          sortBy: {
            oldToRecent: false,
            recentToOld: !givenFilterState.sortBy.oldToRecent,
          },
        };
      default:
        return { ...givenFilterState };
    }
  };

  const [currentFilterState, filterStateUpdate] = useReducer(
    filterReducer,
    initialFilterState
  );
  const cumulativeFilters = (...filtersApplied) => {
    return (providedNotesList, filterStateGiven) => {
      const generatedFilteredList = filtersApplied.reduce(
        (resultGenerated, currentFilter) =>
          currentFilter(resultGenerated, filterStateGiven),
        [...providedNotesList]
      );
      return generatedFilteredList;
    };
  };

  const finalFilteredList = cumulativeFilters(labelsSort, dateSort)(
    notesList,
    currentFilterState
  );
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
