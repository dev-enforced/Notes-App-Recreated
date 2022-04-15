import axios from "axios";
const receiveAllTrash = async (tokenValue) => {
  try {
    const response = await axios.get("/api/trash", {
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
