import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://world-pointer.herokuapp.com/",
})

export default axiosInstance;