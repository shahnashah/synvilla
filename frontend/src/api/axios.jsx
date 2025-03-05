import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `${import.meta.env.BACKEND_PORT}`,
    withCredentials: true,
})

export default axiosInstance;