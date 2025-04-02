import axios from "axios";

const apiDisney = axios.create({
    baseURL: "https://api.disneyapi.dev/character/"
})

export default apiDisney