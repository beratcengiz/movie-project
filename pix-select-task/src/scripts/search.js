import Home from "./home"
import { computed, ref } from "@vue/reactivity";
const search = ref('');
const result = ref('')
const Search = () => {
    const { data, getFavoriteMovies } = Home();
    const searchData = computed(() => {
        if (search.value !== '') {
            data.value = data.value.filter(post => {
                return post.title.toLowerCase().includes(search.value.toLowerCase())
            });
            if (data.value.length == 0) {
                result.value = 'sonuc'
            } else {

            }
        } else {
            getFavoriteMovies();
            result.value = ''
        }
    });
    return { searchData, search, result }
}
export default Search;