import axios from "axios";
const addNewNoteService = async (givenNote, tokenValue) => {
    try {
        const response = await axios.post("/api/notes", { note: { ...givenNote } }, {
            headers: {
                authorization: tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("ERROR OCCURED WHILE DOING API CALL IN ADDING NEW NOTE:", error);
    }
}
export { addNewNoteService };