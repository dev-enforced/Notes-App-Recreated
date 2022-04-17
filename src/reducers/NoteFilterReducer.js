const initialNoteFilterState = {
  sortBy: {
    oldToRecent: false,
    recentToOld: false,
  },
  selectedLabels: [],
  prioritySelected: "",
};

const noteFilterReducer = (givenFilterState, { type, payload }) => {
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
      return { ...initialNoteFilterState };
    case "HIGH_PRIORITY":
      return { ...givenFilterState, prioritySelected: "High" };
    case "MEDIUM_PRIORITY":
      return { ...givenFilterState, prioritySelected: "Medium" };
    case "LOW_PRIORITY":
      return { ...givenFilterState, prioritySelected: "Low" };
    default:
      return { ...givenFilterState };
  }
};

export { initialNoteFilterState, noteFilterReducer };
