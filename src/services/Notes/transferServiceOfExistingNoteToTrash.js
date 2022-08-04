import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_API_URL_LIST: { NOTES_TRASH_URL },
} = apiUrlConstants;
const transferServiceOfExistingNoteToTrash = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${NOTES_TRASH_URL}/${givenNote._id}`,
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
      "API CALL ERROR OCCURED WHEN TRYING TO MOVE AN EXISTING NOTE TO ARCHIVE"
    );
  }
};
export { transferServiceOfExistingNoteToTrash };
