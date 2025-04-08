import axios from "axios";

const apiDisney = axios.create({
    baseURL: "/api", // Agora usa o proxy configurado
});

export default apiDisney;