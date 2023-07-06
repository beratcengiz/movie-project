import axios from 'axios'
import { ref, computed, watch } from "vue";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });
const api_key = import.meta.env.VITE_API_KEY;
const data = ref([]);
const success = ref(false);

const Home = () => {
    

    const getFavoriteMovies = async () => {
        await api.get("/movie/popular", {
            params: { api_key }
        }).then(response => {
            console.log(response)
            data.value = response.data.results
        });

    }
    return { getFavoriteMovies, data, success }
}

export default Home;