import {ref} from 'vue'
let data = ref([]);
let favoriteCount = ref(0)
const myFavorities = () => {
    const addFavorites = (parameter) => {
        data.value.push(parameter);
        favoriteCount.value++;
    }
    const removeFavorites = (parameter) => {
        favoriteCount.value--;
        data.value = data.value.filter(el => el.id != parameter.id)
    }
    return {addFavorites,data,favoriteCount,removeFavorites}
}
export default myFavorities;