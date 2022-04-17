import { dateFormatter } from "constants";
const defaultNoteData = {
  title: "",
  editorContent: "",
  color: "",
  priorityDetails: "Low",
  pinStatus: false,
  labels: [],
  creationDetails: [...dateFormatter.formatToParts(new Date())],
};
const noteInputReducer = (givenState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_TITLE":
      return { ...givenState, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...givenState, editorContent: payload };
    case "UPDATE_COLOR":
      return { ...givenState, color: payload };
    case "UPDATE_PRIORITY":
      return { ...givenState, priorityDetails: payload };
    case "RESET_INPUT_DATA":
      return { ...defaultNoteData };
    case "UPDATE_EXISTING_DATA":
      return { ...payload };
    case "UPDATE_PIN_STATUS":
      return { ...givenState, pinStatus: !givenState.pinStatus };
    case "ADD_LABEL":
      return {
        ...givenState,
        labels: givenState.labels.includes(payload)
          ? [...givenState.labels]
          : [...givenState.labels, payload],
      };
    case "REMOVE_LABEL":
      return {
        ...givenState,
        labels: [
          ...givenState.labels.filter((everyLabel) => everyLabel !== payload),
        ],
      };
    default:
      return givenState;
  }
};
export { noteInputReducer, defaultNoteData };
