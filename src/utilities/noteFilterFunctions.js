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
const prioritySort = (providedNotesList, givenFilterState) => {
  const { prioritySelected } = givenFilterState;
  if (prioritySelected === "High") {
    return [...providedNotesList].filter(
      (everyNote) => everyNote.priorityDetails === "High"
    );
  } else if (prioritySelected === "Medium") {
    return [...providedNotesList].filter(
      (everyNote) => everyNote.priorityDetails === "Medium"
    );
  } else if (prioritySelected === "Low") {
    return [...providedNotesList].filter(
      (everyNote) => everyNote.priorityDetails === "Low"
    );
  } else {
    return [...providedNotesList];
  }
};
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

export { cumulativeFilters, labelsSort, dateSort, prioritySort };
