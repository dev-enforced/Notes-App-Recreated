import axios from "axios";
import { apiUrlConstants } from "constants";
const {
  AUTHENTICATION: { LOGIN_URL },
} = apiUrlConstants;
const getLoginResponse = async ({ email, password }) => {
  try {
    const loginResponse = await axios.post(`${LOGIN_URL}`, {
      email,
      password,
    });
    return loginResponse;
  } catch (loginError) {
    console.error("LOGIN RESPONE NOT AVAILABLE:", loginError);
  }
};
export { getLoginResponse };
