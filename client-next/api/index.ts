import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
