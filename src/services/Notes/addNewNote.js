import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_API_URL_LIST: { NOTES_API },
} = apiUrlConstants;
const addNewNoteService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${NOTES_API}`,
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
      "ERROR OCCURED WHILE DOING API CALL IN ADDING NEW NOTE:",
      error
    );
  }
};
export { addNewNoteService };
