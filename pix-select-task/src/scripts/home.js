
import { ref, computed, watch } from "vue";
import { api, api_key } from './axios.const';
import axios from 'axios'
const data = ref([]);
const success = ref(false);
const Home = () => {
    const getFavoriteMovies = async (count) => {
        var page = count;
        var language = 'tr-TR'
        await api.get("/movie/popular", {
            params: { api_key,page,language }
        }).then(response => {
            if(count >= 2) {
                response.data.results.forEach(el => {
                    data.value.push(el);
                })
            } else {
                data.value = response.data.results
            }
            
        });

    }
    return { getFavoriteMovies, data, success }
}

export default Home;