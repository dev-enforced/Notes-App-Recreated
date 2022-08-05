import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_API_URL_LIST: { NOTES_API },
} = apiUrlConstants;
const receiveAllNotes = async (tokenValue) => {
  try {
    const response = await axios.get(`${NOTES_API}`, {
      headers: {
        authorization: tokenValue,
      },
    });
    return response;
  } catch (error) {
    console.error("Error occured while fetching notes API Call:", error);
  }
};

export { receiveAllNotes };
