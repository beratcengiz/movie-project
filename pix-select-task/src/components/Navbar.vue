<template>
    <div class="navbar navbar-expand-lg navbar-light  d-flex justify-content-center w-100" style="position: fixed;z-index: 15;background-color: rgb(18,18,18);">
        
        <div class="d-flex justify-content-between align-items-center">
            <router-link to="/" class="mr-5 text-white" style="color:white;font-weight: bold;" >
                <img src="../assets/pixselect_logo.ddb89323.png" style="width: 125px;" alt="">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <input  class="form-control mr-sm-2" @input="onChange($event)"   placeholder="Film Ara"  v-if="route.path == '/'">
                    <!-- <router-link to="/favorites" class="ml-3 badge badge-secondary p-2">Favorileri Göster</router-link> -->
                    <button type="button" class="btn btn-sm text-white d-flex" @click="goFavoritePage()">
                    Favoriler <span class="badge badge-warning ml-2 p-1">{{ favoriteCount }}</span>
                    <span class="sr-only">unread messages</span>
                    </button>
                    <!-- <div v-for="data in searchData">
                        <Card :data = "data"></Card>
                    </div> -->
            </div>
        </div>
    </div>
    
</template>
<script setup>
import {ref, computed} from 'vue'
import Search from '../scripts/search.js'
import myFavorities from '../scripts/favorites.js'
import router from '../router/router.js'
import { useRoute } from 'vue-router';
import Home from '../scripts/home';
const {getFavoriteMovies} = Home();
const {search, searchKeyword, getSearchMovies}= Search();
const onChange = (event) => {
    const dataValue = event.target.value
    if(dataValue.length >= 3) {
        searchKeyword.value = dataValue
        getSearchMovies(event.target.value,1)
    }
    else{
        getFavoriteMovies(1)
    }
}
const {favoriteCount} = myFavorities();
const goFavoritePage = () => {
    if(favoriteCount.value != 0) {
        router.push({ path: '/favorites'})
    }
}
const route = useRoute();
console.log('route',route.path)
console.log(favoriteCount)
</script>