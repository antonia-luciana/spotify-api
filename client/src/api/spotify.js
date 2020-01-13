import axios from "axios";

const KEY = "AIzaSyCF6-VwNtUo34WnGI3cWDjldGZfCZvzS-s";

export default axios.create({
  baseURL: "https://api.spotify.com"
});
