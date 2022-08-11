import { actionConstants } from "constants";
const initialNoteFilterState = {
  sortBy: {
    oldToRecent: false,
    recentToOld: false,
  },
  selectedLabels: [],
  prioritySelected: "",
  filtersApplied: false,
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
    case OLD_TO_RECENT:
      return {
        ...givenFilterState,
        sortBy: {
          oldToRecent: !givenFilterState.sortBy.oldToRecent,
          recentToOld: false,
        },
        filtersApplied: true,
      };
    case RECENT_TO_OLD:
      return {
        ...givenFilterState,
        sortBy: {
          oldToRecent: false,
          recentToOld: !givenFilterState.sortBy.recentToOld,
        },
        filtersApplied: true,
      };

    case ADD_LABEL:
      return {
        ...givenFilterState,
        filtersApplied: true,
        selectedLabels: givenFilterState.selectedLabels.includes(payload)
          ? [...givenFilterState.selectedLabels]
          : [...givenFilterState.selectedLabels, payload],
      };

    case REMOVE_LABEL:
      return {
        ...givenFilterState,
        filtersApplied:
          givenFilterState.selectedLabels.length > 0 ? true : false,
        selectedLabels: givenFilterState.selectedLabels.filter(
          (everyLabel) => everyLabel !== payload
        ),
      };
    case REMOVE_FILTERS:
      return { ...initialNoteFilterState };
    case HIGH_PRIORITY:
      return {
        ...givenFilterState,
        filtersApplied: true,
        prioritySelected: "High",
      };
    case MEDIUM_PRIORITY:
      return {
        ...givenFilterState,
        filtersApplied: true,
        prioritySelected: "Medium",
      };
    case LOW_PRIORITY:
      return {
        ...givenFilterState,
        filtersApplied: true,
        prioritySelected: "Low",
      };
    default:
      return { ...givenFilterState };
  }
};

export { initialNoteFilterState, noteFilterReducer };
