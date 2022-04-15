import axios from "axios";
const restoreArchivedNoteService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${givenNote._id}`,
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
      "API CALL RESULTED IN AN ERROR WHEN RESTORING AN ARCHIVED NOTE BACK TO ITS ORIGINAL STATE"
    );
  }
};
export { restoreArchivedNoteService };
