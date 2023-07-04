<template>
   
    <div class="card mt-3">
        <img :src="props.data.poster_path" class="card-img-top" alt="...">
        <div class="descriptions">
            <h1>{{ props.data.original_title }}</h1>
            <button @click="goToDetail(props.data.id)">
                <i class="fab fa-youtube"></i>
                Detay Göster
            </button>
        </div>
    </div>
</template>
<script>
import router from '../router/router'
export default {
    props: ['data'],
    setup(props) {
        const goToDetail = (id) => {
            // router.push(`/detail/${id}`);
            router.push({ path: '/detail', query: { movie: id } })
        }
        return {
            goToDetail,props
        }
    }
}

</script>
<style scoped>
@import url('../styles/card.css');
</style>