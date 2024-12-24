import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000", // URL ของ Backend
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
