import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_API_URL_LIST: { NOTES_ARCHIVES_URL },
} = apiUrlConstants;
const transferServiceOfExistingNoteToArchive = async (
  givenNote,
  tokenValue
) => {
  try {
    const response = await axios.post(
      `${NOTES_ARCHIVES_URL}/${givenNote._id}`,
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
      "API CALL Failed while transferring existing Note to Archive"
    );
  }
};
export { transferServiceOfExistingNoteToArchive };
