import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_TRASH_URL_LIST: { TRASH_API },
} = apiUrlConstants;
const receiveAllTrash = async (tokenValue) => {
  try {
    const response = await axios.get(`${TRASH_API}`, {
      headers: {
        authorization: tokenValue,
      },
    });
    return response;
  } catch (error) {
    console.error(
      "ERROR OCCURED WHILE FETCHING ITEMS FROM TRASH SECTION",
      error
    );
  }
};
export { receiveAllTrash };
