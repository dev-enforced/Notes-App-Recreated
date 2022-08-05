import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  NOTES_ARCHIVES_URL_LIST: { ARCHIVES_API },
} = apiUrlConstants;
const receiveAllArchives = async (tokenValue) => {
  try {
    const response = await axios.get(`${ARCHIVES_API}`, {
      headers: {
        authorization: tokenValue,
      },
    });
    return response;
  } catch (error) {
    console.error("ERROR OCCURED WHILE RECEIVING DATA FOR ARCHIVES", error);
  }
};
export { receiveAllArchives };
