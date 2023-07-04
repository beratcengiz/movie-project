import axios from 'axios'
import { ref, onMounted } from "vue";
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });
const api_key = "7e7a96d5caadd42df9c1a0bb1693cf87";
const data = ref([]);
const success = ref(false)
const Hello = () => {
    const getFavoriteMovies = () => {
        var getData = new Promise((resolve,reject) => {
            const getUpcoming = api.get("/movie/popular", {
                params: { api_key }
            });
            getUpcoming.then(response => {
                // data.value = response.data.results
                console.log('response',response);
                var myData = [];
                response.data.results.forEach(element => {
                    const jsonObject = {
                        id : element.id,
                        poster_path: `https://image.tmdb.org/t/p/original//${element.poster_path}`,
                        original_title : element.original_title
                    };
                    data.value.push(jsonObject);
                });
            });
            resolve(data.value)
        })
        getData.then(res => {
            console.log('res',res.data);
                success.value = true;
        })
    }
    return {getFavoriteMovies,data,success}
}

export default Hello;