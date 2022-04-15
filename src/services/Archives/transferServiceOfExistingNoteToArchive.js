import axios from "axios";
const transferServiceOfExistingNoteToArchive = async (
  givenNote,
  tokenValue
) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${givenNote._id}`,
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
