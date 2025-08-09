import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});
