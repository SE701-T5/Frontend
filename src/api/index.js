import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/v1/"
      : "https://uni-forum.herokuapp.com/api/v1/",
});

export default api;
