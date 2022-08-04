import { actionConstants } from "constants";
const initialNoteFilterState = {
  sortBy: {
    oldToRecent: false,
    recentToOld: false,
  },
  selectedLabels: [],
  prioritySelected: "",
};

const {
  FILTERS: {
    SORT_BY: { OLD_TO_RECENT, RECENT_TO_OLD },
    LABELS: { ADD_LABEL, REMOVE_LABEL },
    PRIORITY_ALLOTMENTS: { HIGH_PRIORITY, MEDIUM_PRIORITY, LOW_PRIORITY },
    REMOVE_FILTERS,
  },
} = actionConstants;

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
