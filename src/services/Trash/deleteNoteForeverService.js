import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_TRASH_URL_LIST: { TRASH_DELETE_FOREVER_API },
} = apiUrlConstants;
const deleteNoteForeverService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.delete(
      `${TRASH_DELETE_FOREVER_API}/${givenNote._id}`,
      {
        headers: {
          authorization: tokenValue,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "API CALL RESULTED IN AN ERROR WHEN TRYING TO DELETE AN ITEM FROM TRASH PERMANENTLY"
    );
  }
};
export { deleteNoteForeverService };
