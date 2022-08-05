import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_ARCHIVES_URL_LIST: { ARCHIVES_RESTORE_API },
} = apiUrlConstants;
const restoreArchivedNoteService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${ARCHIVES_RESTORE_API}/${givenNote._id}`,
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
