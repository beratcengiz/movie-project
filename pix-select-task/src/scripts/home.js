import axios from 'axios'
import { ref, computed, watch } from "vue";

const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });
const api_key = import.meta.env.VITE_API_KEY;
const data = ref([]);
const success = ref(false);
const search = ref('')
const Hello = () => {
    const searchData = computed(() => {
        if (search.value !== '') {
            data.value = data.value.filter(post => {
                return post.title.toLowerCase().includes(search.value.toLowerCase())
            })
        } else {
            getFavoriteMovies()
        }
    });

    const getFavoriteMovies = async () => {
        await api.get("/movie/popular", {
            params: { api_key }
        }).then(response => {
            console.log(response)
            data.value = response.data.results
        });

    }
    return { getFavoriteMovies, data, success, search, searchData }
}

export default Hello;