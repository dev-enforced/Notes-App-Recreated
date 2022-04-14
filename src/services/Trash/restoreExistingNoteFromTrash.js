import axios from "axios";
const restoreExistingNoteFromTrashService = async (givenNote, tokenValue) => {
    try {
        const response = await axios.post(`/api/trash/restore/${givenNote._id}`, { note: { ...givenNote } }, {
            headers: {
                authorization: tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("API CALL RESULTED IN AN ERROR WHEN TRYING TO RESTORE AN ITEM FROM TRASH");
    }
}
export { restoreExistingNoteFromTrashService };