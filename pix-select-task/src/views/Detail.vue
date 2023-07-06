<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12" v-for="data in data" :key="data">
                <!-- <div class="card mt-3" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius: 5%;">
                    <div class="card-header" style="background-color: none;">
                        <div class="card-body d-flex">
                            <div class="col-md-6 col-sm-12">
                                <img style="height: 70vh ;" :src="data.poster_path" class="card-img-top" alt="...">
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <h2>{{ data.original_title }}</h2>
                                <p>Çıkış tarihi - {{ data.release_date }}</p>
                                <p>Oy kullanan kişi sayısı - {{ data.vote_count }}</p>
                                <p>Oy ortalaması - {{ data.vote_average }}</p>
                                <p>Kısa açıklama - {{ data.tagline }}</p>
                                <p>İmdb id - {{ data.imdb_id }}</p>
                                <p>Anasayfa - {{ data.homepage }}</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="card mt-3" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius: 5%;">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <img style="height: 70vh ; border-radius: 5% 0 0 5%;" :src="data.poster_path" class="card-img-top" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body ml-4">
                                <h2>{{ data.original_title }}</h2>
                                <div class="mb-4" style="border-bottom: 2px solid grey;"></div>
                                <p>Çıkış tarihi - {{ data.release_date }}</p>
                                <p>Oy kullanan kişi sayısı - {{ data.vote_count }}</p>
                                <p>Oy ortalaması - {{ data.vote_average }}</p>
                                <p>Kısa açıklama - {{ data.tagline }}</p>
                                <p>İmdb id - {{ data.imdb_id }}</p>
                                <p>Anasayfa - {{ data.homepage }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import Card from '../components/Card.vue';
import { ref, onBeforeMount } from 'vue';
const data = ref([])
const route = useRoute();
const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });
const api_key = "7e7a96d5caadd42df9c1a0bb1693cf87";
onBeforeMount(() => {

    console.log('router', route.query.movie);
    console.log('selam')
    const detail = api.get(`/movie/${route.query.movie}`, {
        params: { api_key }
    });
    detail.then(element => {
        console.log('element', element)
        var jsonObject = {
            id: element.data.id,
            poster_path: `https://image.tmdb.org/t/p/original/${element.data.poster_path}`,
            original_title: element.data.original_title,
            vote_average: element.data.vote_average,
            tagline: element.data.tagline,
            imdb_id: element.data.imdb_id,
            homepage: element.data.homepage,
            vote_count: element.data.vote_count,
            release_date: element.data.release_date
        };
        data.value.push(jsonObject)
        console.log('a', data.value)
    })
})





</script>
