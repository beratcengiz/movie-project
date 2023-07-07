<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="data in data" :key="data">
                <Card :data = "data"></Card>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue';
import myFavorites from '../scripts/favorites.js'
const {data} = myFavorites();
</script>