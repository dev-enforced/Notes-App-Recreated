import axios from "axios";
const receiveAllNotes = async (tokenValue) => {
    try {
        const response = await axios.get("/api/notes", {
            headers: {
                authorization: tokenValue
            }
        })
        return response;
    } catch (error) {
        console.error("Error occured while fetching notes API Call:", error);
    }
}

export { receiveAllNotes };