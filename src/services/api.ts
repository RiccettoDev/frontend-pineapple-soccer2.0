import axios from "axios";

export const Api = axios.create({
  baseURL: "http://apiolympics.online/users"
})