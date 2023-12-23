import axios from "axios";

const heroesApi=axios.create({
    baseURL:'https://www.superheroapi.com/api.php/5951652661611246'
})
export default heroesApi;