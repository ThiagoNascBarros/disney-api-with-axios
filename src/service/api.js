import axios from "axios";

const apiDisney = axios.create({
    baseURL: "https://api.disneyapi.dev"
})

export default apiDisney