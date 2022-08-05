import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_ARCHIVES_URL_LIST: { ARCHIVES_TRASH_URL },
} = apiUrlConstants;
const transferServiceOfArchivedNoteToTrash = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${ARCHIVES_TRASH_URL}/${givenNote._id}`,
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
