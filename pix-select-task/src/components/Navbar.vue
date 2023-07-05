<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
            <a class="navbar-brand" href="#">PIXSELECT</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <form class="form-inline my-2 my-lg-0">
                    <input  class="form-control mr-sm-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Film Ara</button>
                    <router-link to="/favorites" class="ml-3 badge badge-primary p-2">Favorileri Göster</router-link>
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
import Hello from '../scripts/home.js'
import Card from './Card.vue'
const {search,searchData}= Hello();
// const search = ref('');

// console.log('search',searchData)



</script>