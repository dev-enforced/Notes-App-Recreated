import axios from "axios";
const transferServiceOfArchivedNoteToTrash = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/archives/trash/${givenNote._id}`,
      { note: { ...givenNote } },
      {
        headers: {
          authorization: tokenValue,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "ERROR OCCURED WHILE PERFORMING AN API CALL OF MOVING AN ARCHIVED NOTE TO TRASH",
      error
    );
  }
};
export { transferServiceOfArchivedNoteToTrash };
