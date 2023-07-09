<template>
    <div class="container">
        <div class="row">
            <div class="d-flex flex-column w-100">
                <h3 class="text-white" style="margin-top:80px">Favorilerim</h3>
                <div style="border: 1px solid white;" class="w-100"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-4" v-for="data in data" :key="data">
                <Card :data="data" class="mt-5"></Card>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue';
import myFavorites from '../scripts/favorites.js'
const { data } = myFavorites();
</script>