import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 400) {
      alert("잘못된 요청입니다.");
    } else if (error.response.status === 401) {
      alert("권한이 없습니다.");
    } else {
      alert(error);
    }
    return Promise.reject(error);
  }
);
