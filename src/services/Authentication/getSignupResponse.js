import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  AUTHENTICATION: { SIGNUP_URL },
} = apiUrlConstants;
const getSignupResponse = async ({ firstName, lastName, email, password }) => {
  try {
    const signupResponse = await axios.post(`${SIGNUP_URL}`, {
      firstName,
      lastName,
      email,
      password,
    });
    return signupResponse;
  } catch (signupError) {
    console.error("SIGNUP RESPONE NOT AVAILABLE:", signupError);
  }
};
export { getSignupResponse };
