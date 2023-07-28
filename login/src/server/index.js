import axios from "axios";
axios.defaults.withCredentials = true;
export const server = "http://localhost:8080";

// ADD A PRODUCT DETAILS
export const actLogin = async (phone, password) => {
  console.log("actLogin: ", phone + "password: " + password);

  const body = {
    phone: phone,
    password: password,
  };

  try {
    const response = await axios.post(`${server}/v1/auth/login`, body);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//  GET USER INFO
export const actGetUserInfo = async () => {
  try {
    const response = await axios.get(`${server}/v1/auth/getUserInfo`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
