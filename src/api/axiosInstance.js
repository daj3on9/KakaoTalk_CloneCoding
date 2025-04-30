import axios from "axios";
import store from "../store";
import { startLoading, endLoading } from "../store/loadingSlice";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    store.dispatch(startLoading());
    const token = store.getState().token.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    store.dispatch(endLoading());
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    store.dispatch(endLoading());
    return res;
  },
  (err) => {
    store.dispatch(endLoading());
    console.log("🚨 인터셉터 오류 : ", err);

    if (err.response?.status === 401 || err.response?.status === 404) {
      alert(err.response.data.message || "🚨 요청 오류가 발생하였습니다. ");
    }

    return Promise.reject(err);
  }
);

export default instance;
