
import { api, api_key } from '../scripts/axios.const';
import {ref} from 'vue'
const data = ref([]);
const Detail = (route) => {
    var language = 'tr-TR'
    data.value = []
    const detail = api.get(`/movie/${route.query.movie}`, {
        params: { api_key, language }
    });
    detail.then(element => {
        console.log('detail',element.data)
        data.value.push(element.data)
    });
    return {data}
}

export default Detail;