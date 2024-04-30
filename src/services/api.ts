import axios from "axios";

export const Api = axios.create({
  baseURL: "http://91.108.126.64:3333/users"
})