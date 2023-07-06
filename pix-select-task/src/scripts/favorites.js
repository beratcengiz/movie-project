import {ref} from 'vue'
import Home from './home'
let data = ref([])
const myFavorities = () => {
    const addData = (parameter) => {
        data.value.push(parameter);
        console.log('data',data.value)
    }
    return {addData,data}
}
export default myFavorities;