import { getSignupResponse } from "./";
const signupSubmissionHandler = async (
  e,
  signupDataGiven,
  authStateUpdateFunction,
  navigatorFunction
) => {
  e.preventDefault();
  try {
    const { data, status } = await getSignupResponse(signupDataGiven);
    const { encodedToken: encodedTokenFromData } = data;
    if (status === 201) {
      localStorage.setItem(
        "AUTH-DETAILS",
        JSON.stringify({
          isLoggedIn: true,
          authToken: encodedTokenFromData,
        })
      );
      authStateUpdateFunction((prev) => ({
        ...prev,
        isLoggedIn: true,
        authToken: encodedTokenFromData,
      }));
      navigatorFunction("/noteshome");
    }
  } catch (signupSubmissionError) {
    console.error("SIGNUP SUBMISSION ERROR:", signupSubmissionError);
  }
};
export { signupSubmissionHandler };
