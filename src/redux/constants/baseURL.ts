import axios from "axios";

export function setBaseURL(baseURL = "https://connections-api.herokuapp.com") {
  axios.defaults.baseURL = baseURL;
}
