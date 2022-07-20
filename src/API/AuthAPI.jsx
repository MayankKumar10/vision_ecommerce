import axios from "axios";

const loginAPI = async (userDetails) => {
  return await axios.post("/api/auth/login", {
    email: userDetails.email,
    password: userDetails.password,
  });
};

const SignupAPI = async (userDetails) => {
  return await axios.post("/api/auth/signup", {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    password: userDetails.password,
  });
};

export {loginAPI, SignupAPI};
