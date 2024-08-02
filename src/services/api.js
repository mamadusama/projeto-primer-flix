import axios from "axios";

//url de api   https://api.themoviedb.org/3/movie/now_playing?api_key=57abefa7c3e745419b9561f5a0fef102&language=pt-PT&page=1




const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;