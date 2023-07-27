import axios from "axios";
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
