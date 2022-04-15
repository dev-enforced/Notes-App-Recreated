import axios from "axios";
const receiveAllArchives = async (tokenValue) => {
  try {
    const response = await axios.get("/api/archives", {
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
