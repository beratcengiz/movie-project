<template>
    <div class="card mt-3">

        <img :src="ImagePATH + props.data?.poster_path" class="card-img-top" alt="...">
        <div class="descriptions">
            <h3>{{ props.data?.original_title }}</h3>
            <div class="mt-3">
                <h6>İmdb : {{ props.data?.vote_average }}</h6>
                <h6>Çıkış Tarihi : {{ props.data?.release_date }}</h6>
            </div>
            <div class="d-flex  mt-2 " style="bottom:20px;position: absolute;">
                <button @click="goToDetail(props.data.id)">
                    <i class="fab fa-youtube"></i>
                    Detay Göster
                </button>
                <button @click="a(props.data)" class="ml-2">
                    <i class="fab fa-youtube"></i>
                    Favorilere Ekle
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router/router'
import myFavorites from '../scripts/favorites.js'
export default {
    props: ['data'],
    setup(props) {
        const ImagePATH = import.meta.env.VITE_TMDB_PATH
        const { addData } = myFavorites();
        const a = (id) => {
            console.log('id', id)
            addData(id)
        }
        const goToDetail = (id) => {
            // router.push(`/detail/${id}`);
            router.push({ path: '/detail', query: { movie: id } })
        }
        return {
            goToDetail, props, a, addData, ImagePATH
        }
    }
}

</script>
<style scoped>
@import url('../styles/card.css');
</style>