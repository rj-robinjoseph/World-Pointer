import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://world-pointer.herokuapp.com/api/"
})