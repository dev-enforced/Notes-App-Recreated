import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_API_URL_LIST: { NOTES_API },
} = apiUrlConstants;
const updateExistingNoteService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${NOTES_API}/${givenNote._id}`,
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
      "ERROR OCCURED WHILE DOING API CALL IN UPDATING EXISTING NOTE:",
      error
    );
  }
};
export { updateExistingNoteService };
