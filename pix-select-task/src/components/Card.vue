<template>
    <div class="container">
        <div class="row" v-if="success">
            <div class="col-md-4" v-for="data in data" :key="data">
                <div class="card mt-3">
                    <img :src="data.poster_path" class="card-img-top" alt="...">
                    <div class="descriptions">
                        <h1>{{ data.original_title }}</h1>
                        <button @click="goToDetail()">
                            <i class="fab fa-youtube"></i>
                            Play trailer on YouTube
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Hello from '../scripts/home.js'
import router from '../router/router'
const { getFavoriteMovies, data, success } = Hello();
getFavoriteMovies();
const goToDetail = () => {
    router.push('/detail');
}
</script>
<style scoped>
@import url('../styles/card.css');
</style>