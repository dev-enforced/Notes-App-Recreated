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
      return [...providedNotesList].sort(
        (firstNote, secondNote) =>
          new Date(firstNote.creationDetails).getTime() -
          new Date(secondNote.creationDetails).getTime()
      );
    } else if (recentToOld) {
      return [...providedNotesList].sort(
        (firstNote, secondNote) =>
          new Date(secondNote.creationDetails).getTime() -
          new Date(firstNote.creationDetails).getTime()
      );
    } else {
      return [...providedNotesList];
    }
  };
  const labelsSort = (providedNotesList, givenFilterState) => {
    const { selectedLabels } = givenFilterState;
    if (selectedLabels.length !== 0) {
      const newList = providedNotesList.filter((everyNote) => {
        const { labels } = everyNote;
        const generatedResult = labels.map((everyNoteLabel) =>
          selectedLabels.includes(everyNoteLabel) ? true : false
        );
        return generatedResult.includes(true);
      });
      return newList;
    } else {
      return [...providedNotesList];
    }
  };
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
            recentToOld: !givenFilterState.sortBy.recentToOld,
          },
        };

      case "ADD_LABEL":
        return {
          ...givenFilterState,
          selectedLabels: givenFilterState.selectedLabels.includes(payload)
            ? [...givenFilterState.selectedLabels]
            : [...givenFilterState.selectedLabels, payload],
        };

      case "REMOVE_LABEL":
        return {
          ...givenFilterState,
          selectedLabels: givenFilterState.selectedLabels.filter(
            (everyLabel) => everyLabel !== payload
          ),
        };
      case "REMOVE_FILTERS":
        return { ...initialFilterState };
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
