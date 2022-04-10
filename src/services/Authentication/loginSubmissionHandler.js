import { getLoginResponse } from "./";
const loginSubmissionHandler = async (e, loginDataGiven, authStateUpdateFunction, navigatorFunction) => {
    e.preventDefault();
    try {
        const { data, status } = await getLoginResponse(loginDataGiven);
        const { encodedToken: encodedTokenFromData } = data
        if (status === 200) {
            localStorage.setItem("AUTH-DETAILS", JSON.stringify({
                isLoggedIn: true,
                authToken: encodedTokenFromData
            }))
            authStateUpdateFunction(prev => ({
                ...prev, isLoggedIn: true,
                authToken: encodedTokenFromData
            }))
            navigatorFunction("/noteshome");
        }
    } catch (loginSubmissionError) {
        console.error("LOGIN SUBMISSION ERROR:", loginSubmissionError);
    }
}
export { loginSubmissionHandler };