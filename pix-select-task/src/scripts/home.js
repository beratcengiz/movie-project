
import { ref, computed, watch } from "vue";
import { api, api_key } from './axios.const';

const data = ref([]);
const success = ref(false);

const Home = () => {
    

    const getFavoriteMovies = async () => {
        await api.get("/movie/popular", {
            params: { api_key }
        }).then(response => {
            data.value = response.data.results
        });

    }
    return { getFavoriteMovies, data, success }
}

export default Home;