import axios from "axios";

const API_URL = "http://localhost:5000/api/";
export const Fetch = (url, config = null) => {
  return axios.get(API_URL + url, config);
};
export const Post = (url, params = null, config = null) => {
  return axios.post(API_URL + url, params);
};
export const Delete = (url, config = null) => {
  return axios.delete(API_URL + url, config);
};
export const Put = (url, params = null, config = null) => {
  return axios.put(API_URL + url, params, config);
};
