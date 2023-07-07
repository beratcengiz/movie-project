<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        
        <div class="d-flex justify-content-between align-items-center">
            <router-link to="/" class="mr-5" style="color:black;font-weight: bold;" >PIXSELECT</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <form class="form-inline my-2 my-lg-0">
                    <input  class="form-control mr-sm-2" v-model="search" type="search" placeholder="Film Ara" aria-label="Search">
                    <!-- <router-link to="/favorites" class="ml-3 badge badge-secondary p-2">Favorileri Göster</router-link> -->
                    <button type="button" class="btn btn-sm btn-success" @click="goFavoritePage()">
                    Favoriler <span class="badge badge-light">{{ favoriteCount }}</span>
                    <span class="sr-only">unread messages</span>
                    </button>
                    {{ searchData }}
                    <!-- <div v-for="data in searchData">
                        <Card :data = "data"></Card>
                    </div> -->
                </form>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import {ref, computed} from 'vue'
import Search from '../scripts/search.js'
import myFavorities from '../scripts/favorites.js'
import router from '../router/router.js'
const {search,searchData}= Search();
const {favoriteCount} = myFavorities();
const goFavoritePage = () => {
    if(favoriteCount.value != 0) {
        router.push({ path: '/favorites'})
    }
}
console.log(favoriteCount)
// const search = ref('');

// console.log('search',searchData)



</script>