import axios, { AxiosError } from "axios";

export const API = axios.create({
  baseURL: "", 
  headers: {
    "Content-type": "application/json",
  },
  withCredentials:true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      config.headers["authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("요청 인터셉터 오류:", error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response, 
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error("인증 오류: 토큰이 유효하지 않습니다.");
      
    }

    if (status === 500) {
      console.error("서버 오류 발생");
    }

    return Promise.reject(error); 
  }
);