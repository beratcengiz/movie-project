<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-between w-100" style="margin-top:80px">
                    <h3 class="text-white">Popüler Filmler</h3>
                    <h6 class="text-white">{{ data.length }} sonuç gösteriliyor</h6>
                </div>
                <div style="border: 1px solid white;" class="w-100"></div>
            </div>
            <div class="row">
                <div v-if="result == 'sonuc'" class="d-flex justify-content-center align-items-center w-100"
                    style="margin-top:10%;">
                    <h4 class="text-secondary">Herhangi Bir Sonuç Bulunamadı</h4>
                </div>
                <div class="col-md-4 col-sm-6 col-lg-3 col-xl-3 mt-5" v-for="(data, index) in data" :key="data" v-else>
                    <Card :data="data"></Card>
                </div>
            </div>
            {{ favoriteCount }}
            <div class="row" v-if="data.length > 19">
                <div class="col-md-12">
                    <div class=" bg-dark text-white w-100 mt-3 mb-3 d-flex justify-content-center"
                        style="border:1px solid white;cursor:pointer" @click="getCount()">Daha Fazla Göster</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue'
import Home from '../scripts/home.js'
import Search from '../scripts/search';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import myFavorities from '../scripts/favorites.js'
const { favoriteCount } = myFavorities();
const { search, getSearchMovies, isSearch, searchKeyword } = Search();
var count = ref(1);
const { data, getFavoriteMovies } = Home()
const getCount = () => {
    count.value++;
    if (searchKeyword.value) {
        getSearchMovies(searchKeyword.value, count.value)
    } else {
        getFavoriteMovies(count.value)
    }
}
getFavoriteMovies(count)
</script>