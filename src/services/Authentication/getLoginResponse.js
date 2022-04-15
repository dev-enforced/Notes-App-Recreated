import axios from "axios";
const getLoginResponse = async ({ email, password }) => {
  try {
    const loginResponse = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return loginResponse;
  } catch (loginError) {
    console.error("LOGIN RESPONE NOT AVAILABLE:", loginError);
  }
};
export { getLoginResponse };
