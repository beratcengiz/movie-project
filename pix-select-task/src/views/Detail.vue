<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12" v-for="data in data" :key="data">
                <div class="card mt-5" style="background-color: #f8f9fa;border:none">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <Card :data="data"></Card>
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
import Card from '../components/Card.vue';
const route = useRoute();
const ImagePATH = import.meta.env.VITE_TMDB_PATH
const {data} = Detail(route);
</script>
