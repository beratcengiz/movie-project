
import { api, api_key } from '../scripts/axios.const';
import {ref} from 'vue'
const data = ref([]);
const Detail = (route) => {
    data.value = []
    const detail = api.get(`/movie/${route.query.movie}`, {
        params: { api_key }
    });
    detail.then(element => {
        data.value.push(element.data)
    });
    return {data}
}

export default Detail;