import axios from "axios";
const transferServiceOfExistingNoteToTrash = async (givenNote,tokenValue) => {
    try {
        const response=await axios.post(`/api/notes/trash/${givenNote._id}`,{note:{...givenNote}},{
            headers:{
                authorization:tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("API CALL ERROR OCCURED WHEN TRYING TO MOVE AN EXISTING NOTE TO ARCHIVE")
    }
}
export { transferServiceOfExistingNoteToTrash };