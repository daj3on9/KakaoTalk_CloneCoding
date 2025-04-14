import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// GET
export const getAPI = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("GET METHOD ERROR:", error);
    return null;
  }
};

// POST
export const postAPI = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      alert(error.response.data.message);
    }
    console.error("POST METHOD ERROR: ", error);
    return null;
  }
};

// Auth GET
export const authGetAPI = async (endpoint) => {
  try {
    const token = "1234"; // 더미값
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("GET METHOD WITH AUTH ERROR: ", error);
    return null;
  }
};

// Auth POST
export const authPostAPI = async (endpoint, data) => {
  try {
    const token = "1234"; // 더미값
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("POST METHOD WITH AUTH ERROR: ", error);
    return null;
  }
};

// Auth PATCH
export const patchAPI = async (endpoint, data) => {
  try {
    const token = "1234";
    const response = await axios.patch(`${BASE_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("PATCH METHOD ERROR: ", error);
    return null;
  }
};
