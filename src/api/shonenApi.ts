import axios from "axios";

const shonenApi=axios.create({
    baseURL:'https://api.jikan.moe/v4'
})
export default shonenApi;