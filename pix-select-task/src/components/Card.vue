<template>
   
    <div class="card mt-3">
        <img :src="props.data.poster_path" class="card-img-top" alt="...">
        <div class="descriptions">
            <h1>{{ props.data.original_title }}</h1>
            <button @click="goToDetail(props.data.id)">
                <i class="fab fa-youtube"></i>
                Detay Göster
            </button>
            <button @click="a(props.data)">
                <i class="fab fa-youtube"></i>
                Favorilere Ekle
            </button>
        </div>
    </div>
</template>
<script>
import router from '../router/router'
import myFavorites from '../scripts/favorites.js'
export default {
    props: ['data'],
    setup(props) {
        const {addData} = myFavorites();
        const a = (id) => {
            console.log('id',id)
            addData(id)
        }
        const goToDetail = (id) => {
            // router.push(`/detail/${id}`);
            router.push({ path: '/detail', query: { movie: id } })
        }
        return {
            goToDetail,props,a, addData
        }
    }
}

</script>
<style scoped>
@import url('../styles/card.css');
</style>