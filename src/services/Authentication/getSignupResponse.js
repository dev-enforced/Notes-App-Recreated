import axios from "axios";
const getSignupResponse = async ({ firstName, lastName, email, password }) => {
  try {
    const signupResponse = await axios.post("/api/auth/signup", {
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
