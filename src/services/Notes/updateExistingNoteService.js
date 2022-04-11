import axios from "axios";
const updateExistingNoteService = async (givenNote, tokenValue) => {
    try {
        const response = await axios.post(`/api/notes/${givenNote._id}`, { note: { ...givenNote } }, {
            headers: {
                authorization: tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("ERROR OCCURED WHILE DOING API CALL IN UPDATING EXISTING NOTE:", error)
    }
}
export { updateExistingNoteService };