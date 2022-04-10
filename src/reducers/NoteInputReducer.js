const defaultNoteData = {
    title: "",
    editorContent: "",
    color: "",
    priorityDetails: "",
    pinStatus: false
}
const noteInputReducer = (givenState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_TITLE":
            return { ...givenState, title: payload }
        case "UPDATE_DESCRIPTION":
            return { ...givenState, editorContent: payload }
        case "UPDATE_COLOR":
            return { ...givenState, color: payload }
        case "UPDATE_PRIORITY":
            return { ...givenState, priorityDetails: payload }
        case "RESET_INPUT_DATA":
            return { ...defaultNoteData }
        case "UPDATE_PIN_STATUS":
            return { ...givenState, pinStatus: !givenState.pinStatus }
        default:
            return givenState
    }
}
export { noteInputReducer, defaultNoteData };