import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `http://localhost:${import.meta.env.BACKEND_PORT}`,
    withCredentials: true,
})

export default axiosInstance;