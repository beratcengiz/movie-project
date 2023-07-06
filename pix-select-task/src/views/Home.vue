<template>
    <div>
        <div class="container">
            <div class="row">
                <div v-if="result == 'sonuc'">
                    sonuç yok
                </div>
                <div class="col-md-4 col-sm-6 col-lg-3" v-for="data in data" :key="data" v-else>
                    <Card :data="data"></Card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue'
import Home from '../scripts/home.js'
import {onMounted} from 'vue';

const {data,getFavoriteMovies,result}= Home();
onMounted(async () => {
  await getFavoriteMovies();

})

</script>