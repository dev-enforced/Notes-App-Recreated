import axios from "axios";
const deleteNoteForeverService = async (givenNote, tokenValue) => {
    try {
        const response = await axios.delete(`/api/trash/delete/${givenNote._id}`, {
            headers: {
                authorization: tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("API CALL RESULTED IN AN ERROR WHEN TRYING TO DELETE AN ITEM FROM TRASH PERMANENTLY");
    }
}
export { deleteNoteForeverService };