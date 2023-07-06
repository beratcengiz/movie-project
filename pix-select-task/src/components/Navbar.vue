<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        <router-link to="/" class="mr-5" style="color:black;font-weight: bold;" >PIXSELECT</router-link>
        <div class="d-flex justify-content-center align-items-center">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <form class="form-inline my-2 my-lg-0">
                    <input  class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
                    <router-link to="/favorites" class="ml-3 badge badge-secondary p-2">Favorileri Göster</router-link>
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
import Card from './Card.vue'
const {search,searchData}= Search();
// const search = ref('');

// console.log('search',searchData)



</script>