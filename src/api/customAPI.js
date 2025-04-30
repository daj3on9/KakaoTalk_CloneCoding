import axiosInstance from "./axiosInstance";

// GET
export const getAPI = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (err) {
    return null;
  }
};

// POST
export const postAPI = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (err) {
    return null;
  }
};

// PATCH
export const patchAPI = async (endpoint, data) => {
  try {
    const response = await axiosInstance.patch(endpoint, data);
    return response.data;
  } catch (err) {
    return null;
  }
};
