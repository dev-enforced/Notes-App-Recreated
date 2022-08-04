import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_TRASH_URL_LIST: { TRASH_RESTORE_API },
} = apiUrlConstants;
const restoreExistingNoteFromTrashService = async (givenNote, tokenValue) => {
  try {
    const response = await axios.post(
      `${TRASH_RESTORE_API}/${givenNote._id}`,
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
      "API CALL RESULTED IN AN ERROR WHEN TRYING TO RESTORE AN ITEM FROM TRASH"
    );
  }
};
export { restoreExistingNoteFromTrashService };
