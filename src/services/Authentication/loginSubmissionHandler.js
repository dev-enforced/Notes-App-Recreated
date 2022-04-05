import { getLoginResponse } from "./";
const loginSubmissionHandler = async (e, loginDataGiven, authStateUpdateFunction, navigatorFunction) => {
    e.preventDefault();
    try {
        const { data, status } = await getLoginResponse(loginDataGiven);
        const { encodedToken: encodedTokenFromData } = data
        if (status === 200) {
            localStorage.setItem("AUTH-DETAILS", JSON.stringify({
                isLoggedIn: true,
                encodedToken: encodedTokenFromData
            }))
            authStateUpdateFunction(prev => ({
                ...prev, isLoggedIn: true,
                encodedToken: encodedTokenFromData
            }))
            navigatorFunction("/");
        }
    } catch (loginSubmissionError) {
        console.error("LOGIN SUBMISSION ERROR:", loginSubmissionError);
    }
}
export { loginSubmissionHandler };