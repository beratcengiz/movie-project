import Home from "./home"
import { ref } from "@vue/reactivity";
import { api, api_key } from "./axios.const";
const search = ref('');
const searchKeyword = ref('')
const result = ref('');
const isSearch = ref(false)
const { data, getFavoriteMovies } = Home();
const Search = () => {
    const getSearchMovies = async (keyword, count) => {
        var page = count;
        var language = 'tr-TR'
        await api.get(`/search/movie?query=${keyword}&include_adult=false&language=tr-TR&page=1`, {
            params: { api_key, page, language }
        }).then(response => {
            isSearch.value = true;
            if (count >= 2) {
                response.data.results.forEach(el => {
                    data.value.push(el);
                })
            } else {
                data.value = response.data.results
            }
        });
    }

    return { getSearchMovies, search, result, isSearch, searchKeyword }
}
export default Search;