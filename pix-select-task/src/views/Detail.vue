<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12" v-for="data in data" :key="data">
                <div class="card mt-3" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius: 5%;">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <img style="height: 60vh ; border-radius: 5% 0 0 5%;" :src="ImagePATH+data.poster_path" class="card-img-top" alt="...">
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
import Detail from '../scripts/detail.js'
const route = useRoute();
const ImagePATH = import.meta.env.VITE_TMDB_PATH
const {data} = Detail(route);
</script>
